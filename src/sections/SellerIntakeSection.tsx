import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import { SellerIntakeForm } from "@/components/forms/SellerIntakeForm";
import type { SellerIntakeCopy } from "@/content/site-copy";

type SellerIntakeSectionProps = {
  copy: SellerIntakeCopy;
};

export function SellerIntakeSection({ copy }: SellerIntakeSectionProps) {
  return (
    <section id="propietarios" className="pe-section">
      <div className="pe-container pe-dual-panel pe-owner-shell">
        <div className="pe-owner-copy">
          <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            {copy.title}
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>
            {copy.body}
          </p>

          <div className="pe-owner-checklist" data-testid="owner-checklist">
            <span className="pe-eyebrow pe-kicker">{copy.checklistLabel}</span>
            <ul>
              {copy.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="card" text={copy.trustBadgeText} />
          </div>
        </div>

        <div className="pe-card pe-owner-form-card" data-testid="seller-form-card">
          <SellerIntakeForm copy={copy.form} />
        </div>
      </div>
    </section>
  );
}
