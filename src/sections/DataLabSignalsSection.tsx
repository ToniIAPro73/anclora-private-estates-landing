import { useState } from "react";
import type { DataLabCopy, LanguageCode } from "@/content/site-copy";

type DataLabSignalsSectionProps = {
  copy: DataLabCopy;
  language?: LanguageCode;
};

export function DataLabSignalsSection({ copy, language = "es" }: DataLabSignalsSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intendedUse, setIntendedUse] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWhitelistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const nexusBase =
        (import.meta.env.VITE_ANCLORA_NEXUS_BASE_URL as string | undefined) ||
        "https://nexus.anclora.group";
      const res = await fetch(`${nexusBase}/api/public/data-lab-access-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: name,
          email,
          profile_type: "investor",
          requested_scope: "strategic_overview",
          intended_use: intendedUse,
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
      setName(""); setEmail(""); setIntendedUse(""); setPrivacyAccepted(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="data-lab" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-section-heading pe-section-heading--split">
          <div>
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>
          <p className="pe-section-copy pe-section-copy--narrow" style={{ margin: 0 }}>
            {copy.intro}
          </p>
        </div>

        <div className="pe-grid-feature pe-datalab-grid">
          <article className="pe-card pe-offset-card pe-card-hover-gold pe-datalab-lead pe-datalab-card--interactive" data-testid="datalab-lead-card">
            <div className="pe-datalab-lead__ornament" aria-hidden="true" />
            <p className="pe-eyebrow pe-datalab-card__eyebrow">{copy.lead.eyebrow}</p>
            <h3 className="pe-datalab-lead__title">{copy.lead.title}</h3>
            {copy.lead.body ? <p className="pe-datalab-lead__body">{copy.lead.body}</p> : null}
          </article>

          <div className="pe-stack" style={{ gap: "1rem" }}>
            {copy.signals.map((signal, index) => (
              <article key={signal.eyebrow} className="pe-card pe-offset-card pe-card-hover-gold pe-datalab-card pe-datalab-card--interactive" data-testid={`datalab-card-${index + 1}`}>
                <p className="pe-eyebrow pe-datalab-card__eyebrow" style={{ marginBottom: "0.75rem" }}>
                  {signal.eyebrow}
                </p>
                <h3 className="pe-datalab-card__title">{signal.title}</h3>
                {signal.body ? <p className="pe-section-copy pe-datalab-card__body" style={{ margin: 0 }}>{signal.body}</p> : null}
              </article>
            ))}
          </div>
        </div>

        {/* Whitelist CTA */}
        <div className="pe-access-card pe-card" data-testid="datalab-whitelist-card">
          <div className="pe-access-card__header">
            <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>{copy.whitelist.eyebrow}</p>
            <h3 className="pe-section-title" style={{ marginTop: "0.75rem", fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
              {copy.whitelist.title}
            </h3>
            <p className="pe-section-copy" style={{ marginTop: "1rem" }}>
              {copy.whitelist.body}
            </p>
          </div>
          {success ? (
            <div className="pe-access-card__success" data-testid="datalab-whitelist-success">
              <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>{copy.whitelist.form.successTitle}</p>
              <p className="pe-section-copy" style={{ margin: "0.75rem 0 0" }}>{copy.whitelist.form.successBody}</p>
            </div>
          ) : (
            <form className="pe-form" onSubmit={handleWhitelistSubmit} data-testid="datalab-whitelist-form" style={{ marginTop: "1.75rem" }}>
              <div className="pe-form-grid">
                <label className="pe-form-field">
                  <span className="pe-eyebrow">{copy.whitelist.form.name}</span>
                  <input
                    className="pe-input pe-input--interactive"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={copy.whitelist.form.placeholders.name}
                    data-testid="datalab-name-input"
                  />
                </label>
                <label className="pe-form-field">
                  <span className="pe-eyebrow">{copy.whitelist.form.email}</span>
                  <input
                    className="pe-input pe-input--interactive"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={copy.whitelist.form.placeholders.email}
                    data-testid="datalab-email-input"
                  />
                </label>
              </div>

              <label className="pe-form-field" style={{ marginTop: "1.25rem" }}>
                <span className="pe-eyebrow">{copy.whitelist.form.intendedUse}</span>
                <textarea
                  className="pe-textarea pe-input--interactive"
                  required
                  minLength={20}
                  value={intendedUse}
                  onChange={(e) => setIntendedUse(e.target.value)}
                  placeholder={copy.whitelist.form.placeholders.intendedUse}
                  data-testid="datalab-intended-use-input"
                  style={{ minHeight: "130px" }}
                />
              </label>

              <label className="pe-form-field pe-privacy-row" style={{ marginTop: "1.5rem" }}>
                <input
                  type="checkbox"
                  required
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  data-testid="datalab-privacy-checkbox"
                  className="pe-checkbox"
                />
                <span className="pe-note">{copy.whitelist.form.privacyLabel}</span>
              </label>

              {error && (
                <p className="pe-form-error" data-testid="datalab-error">{error}</p>
              )}

              <button
                className="pe-btn-primary pe-btn-primary-gold pe-btn-full"
                type="submit"
                disabled={submitting}
                style={{ opacity: submitting ? 0.7 : 1 }}
                data-testid="datalab-whitelist-submit"
              >
                {submitting ? "..." : copy.whitelist.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
