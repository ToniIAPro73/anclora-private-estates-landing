export type CookieConsentPrefs = { analytics: boolean; marketing: boolean };

export function getCookieConsent(): CookieConsentPrefs {
  const defaults = { analytics: false, marketing: false };
  if (typeof window === "undefined") return defaults;
  try {
    const saved = JSON.parse(localStorage.getItem("cookie-consent") ?? "");
    if (typeof saved?.analytics === "boolean") {
      return { analytics: !!saved.analytics, marketing: !!saved.marketing };
    }
  } catch { /* */ }
  return defaults;
}
