import { useState } from "react";
import type { LanguageCode, SellerFormCopy } from "@/content/site-copy";
import { buildSellerLeadIntakePayload, submitSellerLeadIntake } from "@/lib/lead-intake";

type SellerIntakeFormProps = {
  copy: SellerFormCopy;
};

type SellerFormMessages = {
  privacyLabel: string;
  successTitle: string;
  successBody: string;
  genericError: string;
};

const sellerFormMessagesByLanguage: Record<LanguageCode, SellerFormMessages> = {
  es: {
    privacyLabel: "He leído y acepto la política de privacidad.",
    successTitle: "Solicitud recibida",
    successBody: "Revisaremos tu activo y te responderemos en un plazo de dos días hábiles.",
    genericError: "No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.",
  },
  en: {
    privacyLabel: "I have read and accept the privacy policy.",
    successTitle: "Request received",
    successBody: "We will review your asset and get back to you within two working days.",
    genericError: "We could not send your request. Please try again in a few minutes.",
  },
  de: {
    privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
    successTitle: "Anfrage erhalten",
    successBody: "Wir prüfen Ihren Vermögenswert und melden uns innerhalb von zwei Werktagen.",
    genericError: "Wir konnten Ihre Anfrage nicht senden. Bitte versuchen Sie es in einigen Minuten erneut.",
  },
  fr: {
    privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
    successTitle: "Demande reçue",
    successBody: "Nous examinerons votre actif et vous répondrons sous deux jours ouvrables.",
    genericError: "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer dans quelques minutes.",
  },
};

function resolveCurrentLanguage(): LanguageCode {
  const documentLanguage = document.documentElement.lang;
  if (documentLanguage === "en" || documentLanguage === "de" || documentLanguage === "fr") {
    return documentLanguage;
  }

  return "es";
}

export function SellerIntakeForm({ copy }: SellerIntakeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [commercialization, setCommercialization] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const language = resolveCurrentLanguage();
  const messages = sellerFormMessagesByLanguage[language];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const payload = buildSellerLeadIntakePayload({
        language,
        name,
        email,
        phone,
        zone,
        propertyType,
        commercialization,
        message,
        pageUrl: window.location.href,
      });

      await submitSellerLeadIntake({
        payload,
        webhookUrl: import.meta.env.VITE_N8N_LEAD_INTAKE_WEBHOOK_URL as string | undefined,
        nexusBaseUrl: import.meta.env.VITE_ANCLORA_NEXUS_BASE_URL as string | undefined,
      });

      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setZone("");
      setPropertyType("");
      setCommercialization("");
      setMessage("");
      setPrivacyAccepted(false);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : messages.genericError);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="pe-form-success" data-testid="seller-success">
        <p className="pe-eyebrow pe-kicker" style={{ color: "var(--pe-gold)", margin: 0 }}>
          {messages.successTitle}
        </p>
        <p className="pe-section-copy" style={{ margin: "0.75rem 0 0" }}>
          {messages.successBody}
        </p>
      </div>
    );
  }

  return (
    <form className="pe-form" onSubmit={handleSubmit} data-testid="seller-intake-form">
      <div className="pe-form-grid">
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.name}</span>
          <input
            className="pe-input"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={copy.placeholders.name}
            data-testid="seller-name-input"
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
            onChange={(event) => setEmail(event.target.value)}
            placeholder={copy.placeholders.email}
            data-testid="seller-email-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.phone}</span>
          <input
            className="pe-input"
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder={copy.placeholders.phone}
            data-testid="seller-phone-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.zone}</span>
          <input
            className="pe-input"
            name="zone"
            value={zone}
            onChange={(event) => setZone(event.target.value)}
            placeholder={copy.placeholders.zone}
            data-testid="seller-zone-input"
          />
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.propertyType}</span>
          <select
            className="pe-select"
            name="propertyType"
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
            data-testid="seller-property-type-select"
          >
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="pe-form-field">
          <span className="pe-eyebrow">{copy.commercialization}</span>
          <select
            className="pe-select"
            name="commercialization"
            value={commercialization}
            onChange={(event) => setCommercialization(event.target.value)}
            data-testid="seller-commercialization-select"
          >
            <option value="" disabled>
              {copy.selectPlaceholder}
            </option>
            {copy.commercializationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="pe-form-field">
        <span className="pe-eyebrow">{copy.message}</span>
        <textarea
          className="pe-textarea"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={copy.placeholders.message}
          data-testid="seller-message-input"
        />
      </label>

      <label className="pe-form-field pe-privacy-row" style={{ marginTop: "1.5rem" }}>
        <input
          type="checkbox"
          required
          checked={privacyAccepted}
          onChange={(event) => setPrivacyAccepted(event.target.checked)}
          data-testid="seller-privacy-checkbox"
          className="pe-checkbox"
        />
        <span className="pe-note">{messages.privacyLabel}</span>
      </label>

      {error ? (
        <p className="pe-form-error" data-testid="seller-error">
          {error}
        </p>
      ) : null}

      <button
        className="pe-btn-primary pe-btn-primary-gold pe-btn-full"
        type="submit"
        disabled={submitting}
        style={{ opacity: submitting ? 0.7 : 1 }}
        data-testid="seller-submit-button"
      >
        {submitting ? "..." : copy.submitLabel}
      </button>
    </form>
  );
}
