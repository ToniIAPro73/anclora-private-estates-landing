import type { CredibilityCopy } from "@/content/site-copy";

type CredibilitySectionProps = {
  copy: CredibilityCopy;
};

export function CredibilitySection({ copy }: CredibilitySectionProps) {
  return (
    <section id="credibilidad" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2rem" }}>
        <div style={{ textAlign: "center" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: "0 0 0.8rem" }}>{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ margin: "0 auto", maxWidth: "28ch" }}>{copy.title}</h2>
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

        {copy.credentialBadges && copy.credentialBadges.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              paddingTop: "0.5rem",
            }}
          >
            {copy.credentialBadges.map((badge) => (
              <div
                key={badge.text}
                style={{
                  border: "1px solid var(--pe-gold-muted, rgba(212,175,55,0.35))",
                  borderRadius: "4px",
                  padding: "0.6rem 1.1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                  minWidth: "11rem",
                }}
                data-testid="credential-badge"
              >
                <span
                  style={{
                    color: "var(--pe-gold)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--pe-font-sans)",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {badge.text}
                </span>
                <span
                  style={{
                    color: "var(--pe-text-muted)",
                    fontSize: "0.78rem",
                    lineHeight: 1.4,
                  }}
                >
                  {badge.detail}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
