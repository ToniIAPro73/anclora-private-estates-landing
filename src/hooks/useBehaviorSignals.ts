import { useEffect, useRef, useCallback } from "react";

export type BehaviorSignals = {
  time_on_page_s: number;        // seconds from mount to getSignals() call
  scroll_depth_pct: number;      // 0–100, max scroll % reached
  pre_submit_cta_clicks: number; // CTA button clicks recorded via recordCtaClick()
};

/**
 * Passively collects behavioral signals for lead scoring enrichment.
 * All mutable state lives in refs — zero re-renders.
 */
export function useBehaviorSignals() {
  const mountTimeRef = useRef<number>(Date.now());
  const maxScrollPctRef = useRef<number>(0);
  const ctaClickCountRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight <= 0) return;

      const pct = Math.round((scrollTop / scrollHeight) * 100);
      if (pct > maxScrollPctRef.current) {
        maxScrollPctRef.current = pct;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSignals = useCallback((): BehaviorSignals => {
    const elapsed = (Date.now() - mountTimeRef.current) / 1000;
    return {
      time_on_page_s: Math.round(elapsed * 10) / 10,
      scroll_depth_pct: maxScrollPctRef.current,
      pre_submit_cta_clicks: ctaClickCountRef.current,
    };
  }, []);

  const recordCtaClick = useCallback((): void => {
    ctaClickCountRef.current += 1;
  }, []);

  return { getSignals, recordCtaClick };
}
