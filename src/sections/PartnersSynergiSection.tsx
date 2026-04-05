import { useState } from "react";
import type { PartnersSectionCopy } from "@/content/site-copy";
import type { LanguageCode } from "@/content/site-copy";

type PartnersSynergiSectionProps = {
  copy: PartnersSectionCopy;
  language?: LanguageCode;
};

export function PartnersSynergiSection({ copy, language = "es" }: PartnersSynergiSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceSummary, setServiceSummary] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const PARTNER_IMAGE =
    "https://customer-assets.emergentagent.com/job_luxury-landing-hub/artifacts/0dk4cme3_Investor_v2.png";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const nexusBase =
        (import.meta.env.VITE_ANCLORA_NEXUS_BASE_URL as string | undefined) ||
        "https://nexus.anclora.group";
      const res = await fetch(`${nexusBase}/api/public/partner-admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          email,
          service_category: serviceCategory,
          service_summary: serviceSummary,
          privacy_accepted: privacyAccepted,
          submission_language: language,
          submission_source: "private_estates_landing",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error((body as { detail?: string }).detail || "Error en el envío.");
      }
      setSuccess(true);
      setName(""); setEmail(""); setServiceCategory(""); setServiceSummary("");
      setPrivacyAccepted(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="partners" className="pe-section">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-grid-feature pe-investor-intro">
          <div className="pe-section-heading">
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
            <p className="pe-section-copy" style={{ margin: 0, maxWidth: "36rem" }}>
              {copy.body}
            </p>
            <ul className="pe-owner-checklist" style={{ marginTop: "1.5rem" }}>
              {copy.features.map((feature) => (
                <li key={feature} style={{ marginBottom: "0.5rem" }}>{feature}</li>
              ))}
            </ul>
          </div>

          <aside className="pe-investor-aside pe-investor-aside--image">
            <img
              className="pe-investor-aside__image"
              src={PARTNER_IMAGE}
              alt="Anclora Synergi partner network"
            />
            <div className="pe-investor-aside__overlay" />
          </aside>
        </div>

        <div className="pe-card pe-offset-card" style={{ maxWidth: "640px" }} data-testid="partners-form-card">
          {success ? (
            <div data-testid="partners-success">
              <p className="pe-eyebrow pe-kicker" style={{ color: "var(--pe-gold)", margin: 0 }}>
                {copy.form.successTitle}
              </p>
              <p className="pe-section-copy" style={{ margin: "0.75rem 0 0" }}>
                {copy.form.successBody}
              </p>
            </div>
          ) : (
            <form className="pe-form" onSubmit={handleSubmit} data-testid="partners-admission-form">
              <div className="pe-form-grid">
                <label className="pe-form-field">
                  <span className="pe-eyebrow">{copy.form.name}</span>
                  <input
                    className="pe-input"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={copy.form.placeholders.name}
                    data-testid="partners-name-input"
                  />
                </label>
                <label className="pe-form-field">
                  <span className="pe-eyebrow">{copy.form.email}</span>
                  <input
                    className="pe-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={copy.form.placeholders.email}
                    data-testid="partners-email-input"
                  />
                </label>
              </div>

              <label className="pe-form-field" style={{ marginTop: "1rem" }}>
                <span className="pe-eyebrow">{copy.form.serviceCategory}</span>
                <select
                  className="pe-select"
                  required
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  data-testid="partners-category-select"
                >
                  <option value="" disabled>{copy.form.selectPlaceholder}</option>
                  {copy.form.serviceCategoryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </label>

              <label className="pe-form-field" style={{ marginTop: "1rem" }}>
                <span className="pe-eyebrow">{copy.form.serviceSummary}</span>
                <textarea
                  className="pe-textarea"
                  required
                  minLength={20}
                  value={serviceSummary}
                  onChange={(e) => setServiceSummary(e.target.value)}
                  placeholder={copy.form.placeholders.serviceSummary}
                  data-testid="partners-summary-textarea"
                />
              </label>

              <label
                className="pe-form-field pe-form-field--checkbox"
                style={{ marginTop: "1rem", display: "flex", gap: "0.75rem", alignItems: "flex-start", cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  required
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  data-testid="partners-privacy-checkbox"
                  style={{ marginTop: "0.15rem", flexShrink: 0 }}
                />
                <span className="pe-note">{copy.form.privacyLabel}</span>
              </label>

              {error && (
                <p style={{ color: "var(--pe-gold)", marginTop: "0.75rem", fontSize: "0.875rem" }} data-testid="partners-error">
                  {error}
                </p>
              )}

              <button
                className="pe-btn-primary pe-btn-primary-gold"
                type="submit"
                disabled={submitting}
                style={{ marginTop: "1.25rem", opacity: submitting ? 0.7 : 1 }}
                data-testid="partners-submit-button"
              >
                {submitting ? "..." : copy.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
