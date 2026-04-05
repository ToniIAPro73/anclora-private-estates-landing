import type { CredibilityCopy } from "@/content/site-copy";

type CredibilitySectionProps = {
  copy: CredibilityCopy;
};

export function CredibilitySection({ copy }: CredibilitySectionProps) {
  return (
    <section className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.4rem" }}>
        <div className="pe-section-heading pe-section-heading--split">
          <div>
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>
          <p className="pe-section-copy pe-section-copy--narrow" style={{ margin: 0 }}>
            {copy.intro}
          </p>
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
