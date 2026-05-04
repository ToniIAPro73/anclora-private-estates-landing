import { useEffect, useRef, useState } from "react";

export type CaptchaStatus = "disabled" | "loading" | "ready" | "failed";

interface RecaptchaApi {
  render: (container: HTMLElement, params: Record<string, unknown>) => number;
  reset: (widgetId?: number) => void;
  getResponse: (widgetId?: number) => string;
}

declare global {
  interface Window {
    grecaptcha: RecaptchaApi;
  }
}

export function useRecaptcha(siteKey?: string) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<CaptchaStatus>(siteKey ? "loading" : "disabled");
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    // If no siteKey, we are disabled
    if (!siteKey) {
      setStatus("disabled");
      return;
    }

    setStatus("loading");
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let isMounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 30; // ~6 seconds
    
    // Check if script is already loaded
    if (typeof document !== "undefined" && !document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const tryRender = () => {
      if (!isMounted) return;

      const hasGrecaptcha = typeof window !== "undefined" && typeof window.grecaptcha !== "undefined";
      const hasRenderFn = hasGrecaptcha && typeof window.grecaptcha.render === "function";

      if (hasRenderFn && captchaContainerRef.current && captchaWidgetIdRef.current === null) {
        try {
          captchaWidgetIdRef.current = window.grecaptcha.render(captchaContainerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => setCaptchaToken(token),
            "expired-callback": () => setCaptchaToken(null),
            theme: "dark",
            size: "normal",
          });
          setStatus("ready");
        } catch (err) {
          console.error("reCAPTCHA render error:", err);
          setStatus("failed");
        }
      } else if (captchaWidgetIdRef.current === null && retryCount < MAX_RETRIES) {
        retryCount++;
        timeoutId = setTimeout(tryRender, 200);
      } else if (captchaWidgetIdRef.current === null) {
        console.warn("reCAPTCHA failed to initialize: render function unavailable after timeout.");
        setStatus("failed");
      }
    };
    
    tryRender();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [siteKey]);

  const resetCaptcha = () => {
    setCaptchaToken(null);
    try {
      if (captchaWidgetIdRef.current !== null && 
          typeof window !== "undefined" && 
          window.grecaptcha && 
          typeof window.grecaptcha.reset === "function") {
        window.grecaptcha.reset(captchaWidgetIdRef.current);
      }
    } catch (err) {
      console.warn("reCAPTCHA reset failed:", err);
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
