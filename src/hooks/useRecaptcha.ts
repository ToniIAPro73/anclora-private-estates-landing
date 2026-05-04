import { useEffect, useRef, useState } from "react";

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
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!siteKey) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let isMounted = true;
    
    // Check if script is already loaded
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Initial render logic will happen in the tryRender loop below
      };
      document.head.appendChild(script);
    }

    const tryRender = () => {
      if (!isMounted) return;

      if (window.grecaptcha && captchaContainerRef.current && captchaWidgetIdRef.current === null) {
        captchaWidgetIdRef.current = window.grecaptcha.render(captchaContainerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => setCaptchaToken(token),
          "expired-callback": () => setCaptchaToken(null),
          theme: "dark",
          size: "normal",
        });
      } else if (captchaWidgetIdRef.current === null) {
        timeoutId = setTimeout(tryRender, 200);
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
    if (captchaWidgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(captchaWidgetIdRef.current);
    }
  };

  return {
    captchaToken,
    captchaContainerRef,
    resetCaptcha,
    siteKey,
  };
}
