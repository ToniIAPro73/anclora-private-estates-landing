import type { CredibilityCopy } from "@/content/site-copy";

type CredibilitySectionProps = {
  copy: CredibilityCopy;
};

export function CredibilitySection({ copy }: CredibilitySectionProps) {
  return (
    <section className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
        </div>
        <div className="pe-grid-3" style={{ marginTop: "2rem" }}>
          {copy.pillars.map((pillar, index) => (
            <article key={pillar} className="pe-card pe-offset-card pe-card-hover-gold" style={{ padding: "1.75rem" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--pe-font-accent)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                  color: "var(--pe-gold)",
                  lineHeight: 1,
                  marginBottom: "0.85rem",
                  opacity: 0.7,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.85, margin: 0 }}>{pillar}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
