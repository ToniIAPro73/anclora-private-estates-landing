import type { HowWeWorkCopy } from "@/content/site-copy";

type HowWeWorkSectionProps = {
  copy: HowWeWorkCopy;
};

export function HowWeWorkSection({ copy }: HowWeWorkSectionProps) {
  return (
    <section id="como-trabajamos" className="pe-section">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div style={{ textAlign: "center" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: "0 0 0.8rem" }}>{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ margin: "0 auto", maxWidth: "36ch" }}>{copy.title}</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {copy.steps.map((step) => (
            <article
              key={step.number}
              className="pe-card pe-offset-card pe-card-hover-gold pe-pillar-card"
              data-testid={`how-we-work-step-${step.number}`}
            >
              <span className="pe-pillar-card__index">{step.number}</span>
              <h3 className="pe-card-gold-title" style={{ margin: "0.5rem 0 0.75rem" }}>{step.title}</h3>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8, margin: 0 }}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
