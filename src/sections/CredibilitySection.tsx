import type { CredibilityCopy } from "@/content/site-copy";

type CredibilitySectionProps = {
  copy: CredibilityCopy;
};

export function CredibilitySection({ copy }: CredibilitySectionProps) {
  return (
    <section className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.4rem" }}>
        <div style={{ textAlign: "center" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: "0 0 0.6rem" }}>{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ margin: "0 auto" }}>{copy.title}</h2>
        </div>

        <div className="pe-grid-3">
          {copy.pillars.map((pillar, index) => (
            <article
              key={pillar}
              className="pe-card pe-offset-card pe-card-hover-gold pe-pillar-card"
              data-testid={`credibility-card-${index + 1}`}
            >
              <span className="pe-pillar-card__index">{String(index + 1).padStart(2, "0")}</span>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.85, margin: 0 }}>{pillar}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
