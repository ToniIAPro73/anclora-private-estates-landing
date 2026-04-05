import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { ContactCopy } from "@/content/site-copy";

type ContactSectionProps = {
  copy: ContactCopy;
};

export function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section id="contacto" className="pe-section">
      <div className="pe-container pe-dual-panel pe-contact-shell">
        <div className="pe-contact-copy">
          <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            {copy.title}
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>{copy.body}</p>
          <p className="pe-contact-note">{copy.responseNote}</p>
          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="card" text={copy.trustBadgeText} />
          </div>
        </div>

        <div className="pe-card pe-contact-card" data-testid="contact-card">
          <p className="pe-eyebrow">{copy.detailsTitle}</p>
          <div style={{ display: "grid", gap: "1.15rem", marginTop: "1rem" }}>
            {copy.details.map((detail) => (
              <div key={detail.label} className="pe-contact-detail">
                <div className="pe-eyebrow">{detail.label}</div>
                {detail.href ? (
                  <a href={detail.href} className="pe-contact-detail__link">
                    {detail.value}
                  </a>
                ) : (
                  <p className="pe-contact-detail__text">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
