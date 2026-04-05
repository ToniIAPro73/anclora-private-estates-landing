import { ValuationRequestForm } from "@/components/forms/ValuationRequestForm";
import type { ValuationSectionCopy } from "@/content/site-copy";
import type { LanguageCode } from "@/content/site-copy";

type ValuationRequestSectionProps = {
  copy: ValuationSectionCopy;
  language?: LanguageCode;
};

export function ValuationRequestSection({ copy, language = "es" }: ValuationRequestSectionProps) {
  return (
    <section id="valoracion" className="pe-section pe-section-soft">
      <div className="pe-container pe-dual-panel pe-owner-shell">
        <div className="pe-owner-copy">
          <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            {copy.title}
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>
            {copy.body}
          </p>
          <div className="pe-owner-checklist" data-testid="valuation-checklist">
            <span className="pe-eyebrow pe-kicker">{copy.checklistLabel}</span>
            <ul>
              {copy.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pe-card pe-owner-form-card" data-testid="valuation-form-card">
          <ValuationRequestForm copy={copy.form} language={language} />
        </div>
      </div>
    </section>
  );
}
