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
      <div className="pe-container">

        {/* Section header */}
        <div className="pe-section-heading" style={{ marginBottom: "2.5rem", maxWidth: "52rem", margin: "0 auto 2.5rem" }}>
          <p className="pe-eyebrow pe-kicker" style={{ textAlign: "center" }}>{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ textAlign: "center", marginTop: "0.75rem" }}>{copy.title}</h2>
          <p className="pe-section-copy" style={{ textAlign: "center", margin: "1rem auto 0", maxWidth: "38rem" }}>
            {copy.body}
          </p>
        </div>

        {/* Feature pillars */}
        <div className="pe-access-pillars">
          {copy.features.map((feature) => (
            <div key={feature} className="pe-access-pillar">
              <span className="pe-access-pillar__dot" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Centered form card */}
        <div className="pe-access-card pe-card" data-testid="partners-form-card">
          {success ? (
            <div className="pe-access-card__success" data-testid="partners-success">
              <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>{copy.form.successTitle}</p>
              <p className="pe-section-copy" style={{ margin: "0.75rem 0 0" }}>{copy.form.successBody}</p>
            </div>
          ) : (
            <form className="pe-form" onSubmit={handleSubmit} data-testid="partners-admission-form">
              <div className="pe-form-grid">
                <label className="pe-form-field">
                  <span className="pe-eyebrow">{copy.form.name}</span>
                  <input
                    className="pe-input pe-input--interactive"
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
                    className="pe-input pe-input--interactive"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={copy.form.placeholders.email}
                    data-testid="partners-email-input"
                  />
                </label>
              </div>

              <label className="pe-form-field" style={{ marginTop: "1.25rem" }}>
                <span className="pe-eyebrow">{copy.form.serviceCategory}</span>
                <select
                  className="pe-select pe-input--interactive"
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

              <label className="pe-form-field" style={{ marginTop: "1.25rem" }}>
                <span className="pe-eyebrow">{copy.form.serviceSummary}</span>
                <textarea
                  className="pe-textarea pe-input--interactive"
                  required
                  minLength={20}
                  value={serviceSummary}
                  onChange={(e) => setServiceSummary(e.target.value)}
                  placeholder={copy.form.placeholders.serviceSummary}
                  data-testid="partners-summary-textarea"
                  style={{ minHeight: "130px" }}
                />
              </label>

              <label className="pe-form-field pe-privacy-row" style={{ marginTop: "1.5rem" }}>
                <input
                  type="checkbox"
                  required
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  data-testid="partners-privacy-checkbox"
                  className="pe-checkbox"
                />
                <span className="pe-note">{copy.form.privacyLabel}</span>
              </label>

              {error && (
                <p className="pe-form-error" data-testid="partners-error">{error}</p>
              )}

              <button
                className="pe-btn-primary pe-btn-primary-gold pe-btn-full"
                type="submit"
                disabled={submitting}
                style={{ opacity: submitting ? 0.7 : 1 }}
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
