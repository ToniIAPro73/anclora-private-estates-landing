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
  ca: {
    privacyLabel: "He llegit i accepto la política de privacitat.",
    successTitle: "Sol·licitud rebuda",
    successBody: "Revisarem el teu actiu i et respondrem en un termini de dos dies hàbils.",
    genericError: "No hem pogut enviar la sol·licitud. Torna-ho a provar d'aquí a uns minuts.",
    validationError: "Completa tots els camps obligatoris.",
    captchaError: "Completa la verificació de seguretat.",
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
  sv: {
    privacyLabel: "Jag har läst och accepterar integritetspolicyn.",
    successTitle: "Förfrågan mottagen",
    successBody: "Vi granskar din tillgång och återkommer inom två arbetsdagar.",
    genericError: "Vi kunde inte skicka din förfrågan. Försök igen om några minuter.",
    validationError: "Fyll i alla obligatoriska fält.",
    captchaError: "Slutför säkerhetsverifieringen.",
  },
  fr: {
    privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
    successTitle: "Demande reçue",
    successBody: "Nous examinerons votre actif et vous répondrons sous deux jours ouvrés.",
    genericError: "Nous n'avons pas pu envoyer votre demande. Veuillez réessayer dans quelques minutes.",
    validationError: "Veuillez compléter tous les champs obligatoires.",
    captchaError: "Veuillez compléter la vérification de sécurité.",
  },
  it: {
    privacyLabel: "Ho letto e accetto l'informativa sulla privacy.",
    successTitle: "Richiesta ricevuta",
    successBody: "Esamineremo il tuo asset e ti risponderemo entro due giorni lavorativi.",
    genericError: "Non siamo riusciti a inviare la richiesta. Riprova tra qualche minuto.",
    validationError: "Completa tutti i campi obbligatori.",
    captchaError: "Completa la verifica di sicurezza.",
  },
  da: {
    privacyLabel: "Jeg har læst og accepterer privatlivspolitikken.",
    successTitle: "Anmodning modtaget",
    successBody: "Vi gennemgår dit aktiv og vender tilbage inden for to hverdage.",
    genericError: "Vi kunne ikke sende din anmodning. Prøv igen om et par minutter.",
    validationError: "Udfyld alle obligatoriske felter.",
    captchaError: "Gennemfør sikkerhedsbekræftelsen.",
  },
  nl: {
    privacyLabel: "Ik heb het privacybeleid gelezen en accepteer het.",
    successTitle: "Aanvraag ontvangen",
    successBody: "We beoordelen uw object en nemen binnen twee werkdagen contact op.",
    genericError: "We konden uw aanvraag niet verzenden. Probeer het over enkele minuten opnieuw.",
    validationError: "Vul alle verplichte velden in.",
    captchaError: "Voltooi de veiligheidsverificatie.",
  },
  no: {
    privacyLabel: "Jeg har lest og godtar personvernerklæringen.",
    successTitle: "Forespørsel mottatt",
    successBody: "Vi vurderer eiendelen din og svarer innen to virkedager.",
    genericError: "Vi kunne ikke sende forespørselen. Prøv igjen om noen minutter.",
    validationError: "Fyll ut alle obligatoriske felt.",
    captchaError: "Fullfør sikkerhetsverifiseringen.",
  },
  pt: {
    privacyLabel: "Li e aceito a política de privacidade.",
    successTitle: "Pedido recebido",
    successBody: "Analisaremos o seu activo e responderemos no prazo de dois dias úteis.",
    genericError: "Não foi possível enviar o pedido. Tente novamente dentro de alguns minutos.",
    validationError: "Preencha todos os campos obrigatórios.",
    captchaError: "Conclua a verificação de segurança.",
  },
};

function resolveCurrentLanguage(): LanguageCode {
  if (typeof document === "undefined") return "es";
  const documentLanguage = document.documentElement.lang as LanguageCode;
  if (documentLanguage in sellerFormMessagesByLanguage) {
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
