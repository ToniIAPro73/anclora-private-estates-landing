import { useEffect, useRef, useState } from "react";
import type { ValuationFormCopy } from "@/content/site-copy";

interface RecaptchaApi {
  render: (container: HTMLElement, params: Record<string, unknown>) => number;
  reset: (widgetId?: number) => void;
  getResponse: (widgetId?: number) => string;
}

declare global {
  interface Window {
    grecaptcha: RecaptchaApi;
    onRecaptchaReady?: () => void;
  }
}

type ValuationRequestFormProps = {
  copy: ValuationFormCopy;
  language?: string;
};

export function ValuationRequestForm({ copy, language = "es" }: ValuationRequestFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetIdRef = useRef<number | null>(null);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

  useEffect(() => {
    if (!siteKey) return;
    if (document.querySelector('script[data-recaptcha="valuation"]')) return;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.recaptcha = "valuation";
    script.onload = () => {
      const tryRender = () => {
        if (window.grecaptcha && captchaContainerRef.current) {
          captchaWidgetIdRef.current = window.grecaptcha.render(captchaContainerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => setCaptchaToken(token),
            "expired-callback": () => setCaptchaToken(null),
            theme: "dark",
            size: "normal",
          });
        } else {
          setTimeout(tryRender, 200);
        }
      };
      tryRender();
    };
    document.head.appendChild(script);
  }, [siteKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (siteKey && !captchaToken) {
      setError(copy.captchaError);
      return;
    }

    setSubmitting(true);
    try {
      const nexusBase =
        (import.meta.env.VITE_ANCLORA_NEXUS_BASE_URL as string | undefined) ||
        "https://nexus.anclora.group";
      const res = await fetch(`${nexusBase}/api/public/valuation-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          email,
          phone: phone || undefined,
          property_address: address || undefined,
          message: message || undefined,
          captcha_provider: siteKey ? "recaptcha" : undefined,
          captcha_token: captchaToken || undefined,
          submission_language: language,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { detail?: string }).detail || "Error en el envío.");
      }

      setSuccess(true);
      setName(""); setEmail(""); setPhone(""); setAddress(""); setMessage("");
      setPrivacyAccepted(false); setCaptchaToken(null);
      if (captchaWidgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(captchaWidgetIdRef.current);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="pe-form-success" data-testid="valuation-success">
        <p className="pe-eyebrow pe-kicker" style={{ color: "var(--pe-gold)", margin: 0 }}>
          {copy.successTitle}
        </p>
        <p className="pe-section-copy" style={{ margin: "0.75rem 0 0" }}>
          {copy.successBody}
        </p>
      </div>
    );
  }

  return (
    <form className="pe-form" onSubmit={handleSubmit} data-testid="valuation-request-form">
      <div className="pe-form-grid">
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.name}</span>
          <input
            className="pe-input"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.placeholders.name}
            data-testid="valuation-name-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.email}</span>
          <input
            className="pe-input"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.placeholders.email}
            data-testid="valuation-email-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.phone}</span>
          <input
            className="pe-input"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={copy.placeholders.phone}
            data-testid="valuation-phone-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.address}</span>
          <input
            className="pe-input"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder={copy.placeholders.address}
            data-testid="valuation-address-input"
          />
        </label>
      </div>

      <label className="pe-form-field" style={{ marginTop: "1rem" }}>
        <span className="pe-eyebrow">{copy.message}</span>
        <textarea
          className="pe-textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={copy.placeholders.message}
          data-testid="valuation-message-input"
        />
      </label>

      {siteKey && (
        <div ref={captchaContainerRef} style={{ margin: "1.25rem 0 0" }} data-testid="valuation-captcha" />
      )}

      <label className="pe-form-field pe-form-field--checkbox" style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}>
        <input
          type="checkbox"
          required
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          data-testid="valuation-privacy-checkbox"
          style={{ marginTop: "0.15rem", flexShrink: 0 }}
        />
        <span className="pe-note">{copy.privacyLabel}</span>
      </label>

      {error && (
        <p className="pe-form-error" style={{ color: "var(--pe-gold)", marginTop: "0.75rem", fontSize: "0.875rem" }} data-testid="valuation-error">
          {error}
        </p>
      )}

      <button
        className="pe-btn-primary pe-btn-primary-gold"
        type="submit"
        disabled={submitting}
        style={{ marginTop: "1.25rem", opacity: submitting ? 0.7 : 1 }}
        data-testid="valuation-submit-button"
      >
        {submitting ? "..." : copy.submitLabel}
      </button>
    </form>
  );
}
