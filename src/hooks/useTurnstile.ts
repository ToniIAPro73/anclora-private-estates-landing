import { useEffect, useRef, useState } from "react";

export type CaptchaStatus = "disabled" | "loading" | "ready" | "failed";

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
  theme?: "light" | "dark" | "auto";
  size?: "normal" | "flexible" | "compact";
  appearance?: "always" | "execute" | "interaction-only";
}

interface TurnstileApi {
  render: (container: string | HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
  getResponse: (widgetId?: string) => string;
}

declare global {
  interface Window {
    turnstile: TurnstileApi;
  }
}

/**
 * Hook for Cloudflare Turnstile integration.
 * Matches API shape of useRecaptcha for easy migration.
 */
export function useTurnstile(siteKey?: string) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<CaptchaStatus>(siteKey ? "loading" : "disabled");
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const renderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!siteKey) {
      setStatus("disabled");
      return;
    }

    setStatus("loading");
    let isMounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 30; // ~6 seconds

    // Load Turnstile script if not present
    if (typeof document !== "undefined" && !document.querySelector('script[src*="turnstile/v0/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const tryRender = () => {
      if (!isMounted) return;

      const hasTurnstile = typeof window !== "undefined" && typeof window.turnstile !== "undefined";
      const hasRenderFn = hasTurnstile && typeof window.turnstile.render === "function";

      if (hasRenderFn && captchaContainerRef.current && widgetIdRef.current === null) {
        try {
          // Set a timeout to fail gracefully if token never arrives (avoid deadlock)
          renderTimeoutRef.current = setTimeout(() => {
            if (isMounted && status === "loading") {
              console.warn("Turnstile token timeout. Moving to failed status for graceful submission.");
              setStatus("failed");
            }
          }, 8000); // 8 seconds is plenty for non-interactive check

          widgetIdRef.current = window.turnstile.render(captchaContainerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              if (isMounted) {
                if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
                setCaptchaToken(token);
                setStatus("ready");
              }
            },
            "expired-callback": () => {
              if (isMounted) {
                setCaptchaToken(null);
                // On expiration, move to failed to ensure form is not permanently blocked
                setStatus("failed");
              }
            },
            "error-callback": () => {
              if (isMounted) {
                if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
                setStatus("failed");
              }
            },
            theme: "dark",
            appearance: "always",
            size: "flexible",
          });
          // Note: status stays "loading" here until callback fires
        } catch (err) {
          console.error("Turnstile render error:", err);
          setStatus("failed");
        }
      } else if (widgetIdRef.current === null && retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(tryRender, 200);
      } else if (widgetIdRef.current === null) {
        console.warn("Turnstile failed to initialize: render function unavailable after timeout.");
        setStatus("failed");
      }
    };

    tryRender();

    return () => {
      isMounted = false;
      if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
      if (widgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // ignore
        }
      }
    };
  }, [siteKey]);

  const resetCaptcha = () => {
    if (renderTimeoutRef.current) clearTimeout(renderTimeoutRef.current);
    setCaptchaToken(null);
    try {
      if (widgetIdRef.current !== null && typeof window !== "undefined" && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch (err) {
      console.warn("Turnstile reset failed:", err);
    }
  };

  return {
    captchaToken,
    captchaStatus: status,
    captchaContainerRef,
    resetCaptcha,
    siteKey,
  };
}
