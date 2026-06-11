import { getCookieConsent } from "@/lib/cookie-consent";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Event catalog — add new events here as the product grows
export type AnalyticsEvent =
  | "cta_click"
  | "form_submit"
  | "language_change"
  | "section_view"
  | "faq_open";

export type AnalyticsProperties = Record<string, string | number | boolean>;

const RING_BUFFER_KEY = "ape:analytics_log";
const RING_BUFFER_MAX = 50;

export function trackEvent(event: AnalyticsEvent, properties?: AnalyticsProperties): void {
  // 1. Check consent — no-op if analytics not granted
  const consent = getCookieConsent();
  if (!consent.analytics) return;

  const entry: Record<string, unknown> = {
    event,
    ...properties,
    timestamp: new Date().toISOString(),
  };

  // 2. Push to window.dataLayer (GTM-compatible)
  try {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push(entry);
    }
  } catch { /* */ }

  // 3. Append to localStorage ring buffer (keep last 50)
  try {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem(RING_BUFFER_KEY);
      const buffer: Record<string, unknown>[] = raw ? (JSON.parse(raw) as Record<string, unknown>[]) : [];
      buffer.push(entry);
      localStorage.setItem(RING_BUFFER_KEY, JSON.stringify(buffer.slice(-RING_BUFFER_MAX)));
    }
  } catch { /* */ }
}
