import { useState, useEffect, useRef } from "react";
import type { LanguageCode, SellerFormCopy } from "@/content/site-copy";
import { 
  buildLeadIntakePayload, 
  submitLeadIntake, 
  type LeadIntent 
} from "@/lib/lead-intake";
import { useTurnstile } from "@/hooks/useTurnstile";

type SellerIntakeFormProps = {
  copy: SellerFormCopy;
};

type SellerFormMessages = {
  privacyLabel: string;
  successTitle: string;
  successBody: string;
  genericError: string;
  validationError: string;
  captchaError: string;
};

const sellerFormMessagesByLanguage: Record<LanguageCode, SellerFormMessages> = {
  es: {
    privacyLabel: "He leído y acepto la política de privacidad.",
    successTitle: "Solicitud recibida",
    successBody: "Revisaremos tu activo y te responderemos en un plazo de dos días hábiles.",
    genericError: "No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.",
    validationError: "Por favor, completa todos los campos obligatorios.",
    captchaError: "Por favor completa la verificación de seguridad.",
  },
  en: {
    privacyLabel: "I have read and accept the privacy policy.",
    successTitle: "Request received",
    successBody: "We will review your asset and get back to you within two working days.",
    genericError: "We could not send your request. Please try again in a few minutes.",
    validationError: "Please complete all required fields.",
    captchaError: "Please complete the security verification.",
  },
  de: {
    privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
    successTitle: "Anfrage erhalten",
    successBody: "Wir prüfen Ihren Vermögenswert und melden uns innerhalb von zwei Werktagen.",
    genericError: "Wir konnten Ihre Anfrage nicht senden. Bitte versuchen Sie es in einigen Minuten erneut.",
    validationError: "Bitte füllen Sie alle erforderlichen Felder aus.",
    captchaError: "Bitte schließen Sie die Sicherheitsüberprüfung ab.",
  },
  fr: {
    privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
    successTitle: "Demande reçue",
    successBody: "Nous examinerons votre actif et vous répondrons sous deux jours ouvrés.",
    genericError: "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer dans quelques minutes.",
    validationError: "Veuillez compléter tous les champs obligatoires.",
    captchaError: "Veuillez compléter la vérification de sécurité.",
  },
};

function resolveCurrentLanguage(): LanguageCode {
  if (typeof document === "undefined") return "es";
  const documentLanguage = document.documentElement.lang as LanguageCode;
  if (documentLanguage === "en" || documentLanguage === "de" || documentLanguage === "fr") {
    return documentLanguage;
  }

  return "es";
}

export function SellerIntakeForm({ copy }: SellerIntakeFormProps) {
  // Intent Selection
  const [intent, setIntent] = useState<LeadIntent>("sell");
  const intentSelectRef = useRef<HTMLSelectElement>(null);
  
  // Common Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  
  // Focus behavior for hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#clientes" || window.location.hash === "#propietarios") {
        intentSelectRef.current?.focus();
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Captcha
  const { captchaToken, captchaStatus, captchaContainerRef, resetCaptcha, siteKey } = useTurnstile(
    import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined
  );

  // Intent-Specific Fields
  // Seller
  const [zone, setZone] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [commercialization, setCommercialization] = useState("");
  
  // Valuation
  const [valuationAddress, setValuationAddress] = useState("");
  const [valuationPropertyType, setValuationPropertyType] = useState("");
  
  // Buyer
  const [targetZone, setTargetZone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [buyTiming, setBuyTiming] = useState("");
  
  // Investor
  const [investmentTicket, setInvestmentTicket] = useState("");
  const [investmentGoal, setInvestmentGoal] = useState("");

  // Status
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const language = resolveCurrentLanguage();
  const messages = sellerFormMessagesByLanguage[language];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    // Final validation check
    if (!intent || !name || !email || !message || !privacyAccepted) {
      setError(messages.validationError);
      return;
    }

    // Only block if captcha is definitely ready but token is missing.
    if (captchaStatus === "ready" && !captchaToken) {
      setError(messages.captchaError);
      return;
    }

    setSubmitting(true);

    try {
      // Collect qualifiers based on intent
      const qualifiers: Record<string, string | undefined> = {};
      
      if (intent === "sell") {
        qualifiers.zone = zone;
        qualifiers.property_type = propertyType;
        qualifiers.commercialization = commercialization;
      } else if (intent === "valuation") {
        qualifiers.valuation_address = valuationAddress;
        qualifiers.valuation_property_type = valuationPropertyType;
      } else if (intent === "buy") {
        qualifiers.target_zone = targetZone;
        qualifiers.budget_range = budgetRange;
        qualifiers.buy_timing = buyTiming;
      } else if (intent === "invest") {
        qualifiers.investment_ticket = investmentTicket;
        qualifiers.investment_goal = investmentGoal;
      }

      const payload = buildLeadIntakePayload({
        intent,
        language,
        name,
        email,
        phone,
        message,
        privacyAccepted,
        qualifiers,
        captchaToken: captchaToken ?? undefined,
        orgId: import.meta.env.VITE_NEXUS_ORG_ID as string | undefined,
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      });

      await submitLeadIntake({
        payload,
        webhookUrl: import.meta.env.VITE_N8N_LEAD_INTAKE_WEBHOOK_URL as string | undefined,
        nexusBaseUrl: import.meta.env.VITE_ANCLORA_NEXUS_BASE_URL as string | undefined,
      });

      setSuccess(true);
      // Reset form
      setName(""); setEmail(""); setPhone(""); setMessage("");
      setPrivacyAccepted(false);
      resetCaptcha();
      setZone(""); setPropertyType(""); setCommercialization("");
      setValuationAddress(""); setValuationPropertyType("");
      setTargetZone(""); setBudgetRange(""); setBuyTiming("");
      setInvestmentTicket(""); setInvestmentGoal("");
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
      {/* Intent Selector */}
      <label className="pe-form-field" style={{ marginBottom: "2rem" }}>
        <span className="pe-eyebrow">{copy.intentLabel}</span>
        <select
          ref={intentSelectRef}
          className="pe-select"
          name="intent"
          value={intent}
          onChange={(e) => {
            setIntent(e.target.value as LeadIntent);
            resetCaptcha(); // Reset captcha when intent changes to avoid confusion or staleness
          }}
          data-testid="lead-intent-select"
          required
        >
          {copy.intentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

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

        {/* Dynamic Fields - Seller */}
        {intent === "sell" && (
          <>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.zone}</span>
              <input
                className="pe-input"
                name="zone"
                required
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
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.propertyTypeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
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
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.commercializationOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </>
        )}

        {/* Dynamic Fields - Valuation */}
        {intent === "valuation" && (
          <>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.address}</span>
              <input
                className="pe-input"
                name="valuationAddress"
                required
                value={valuationAddress}
                onChange={(e) => setValuationAddress(e.target.value)}
                placeholder={copy.placeholders.address}
              />
            </label>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.propertyType}</span>
              <select
                className="pe-select"
                name="valuationPropertyType"
                value={valuationPropertyType}
                onChange={(e) => setValuationPropertyType(e.target.value)}
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.propertyTypeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </>
        )}

        {/* Dynamic Fields - Buyer */}
        {intent === "buy" && (
          <>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.zone}</span>
              <input
                className="pe-input"
                name="targetZone"
                required
                value={targetZone}
                onChange={(e) => setTargetZone(e.target.value)}
                placeholder={copy.placeholders.zone}
              />
            </label>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.budget}</span>
              <select
                className="pe-select"
                name="budgetRange"
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.budgetOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.timing}</span>
              <select
                className="pe-select"
                name="buyTiming"
                value={buyTiming}
                onChange={(e) => setBuyTiming(e.target.value)}
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.timingOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </>
        )}

        {/* Dynamic Fields - Investor */}
        {intent === "invest" && (
          <>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.ticket}</span>
              <select
                className="pe-select"
                name="investmentTicket"
                value={investmentTicket}
                onChange={(e) => setInvestmentTicket(e.target.value)}
                required
              >
                <option value="" disabled>{copy.selectPlaceholder}</option>
                {copy.ticketOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="pe-form-field">
              <span className="pe-eyebrow">{copy.goal}</span>
              <input
                className="pe-input"
                name="investmentGoal"
                required
                value={investmentGoal}
                onChange={(e) => setInvestmentGoal(e.target.value)}
                placeholder={copy.placeholders.goal}
              />
            </label>
          </>
        )}
      </div>

      <label className="pe-form-field" style={{ marginTop: "1rem" }}>
        <span className="pe-eyebrow">{copy.message}</span>
        <textarea
          className="pe-textarea"
          name="message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={copy.placeholders.message}
          data-testid="seller-message-input"
        />
      </label>

      {siteKey && (
        <div 
          ref={captchaContainerRef} 
          style={{ 
            margin: "1.5rem 0", 
            minHeight: (captchaStatus === "ready" || captchaStatus === "loading") ? "65px" : "0",
            display: "flex",
            justifyContent: "flex-start" 
          }} 
          data-testid="seller-captcha" 
        />
      )}

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
