import type { DataLabCopy } from "@/content/site-copy";

type DataLabSignalsSectionProps = {
  copy: DataLabCopy;
};

export function DataLabSignalsSection({ copy }: DataLabSignalsSectionProps) {
  return (
    <section id="data-lab" className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
        </div>
        <div className="pe-grid-feature" style={{ marginTop: "2rem" }}>
          <article className="pe-card-deep" style={{ padding: "1.75rem" }}>
            <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)" }}>
              {copy.lead.eyebrow}
            </p>
            <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "2rem", marginTop: "0.75rem" }}>
              {copy.lead.title}
            </h3>
            {copy.lead.body ? (
              <p
                style={{
                  color: "var(--pe-deep-muted)",
                  lineHeight: 1.85,
                  fontFamily: "var(--pe-font-accent)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                }}
              >
                {copy.lead.body}
              </p>
            ) : null}
          </article>
          <div style={{ display: "grid", gap: "1rem" }}>
            {copy.signals.map((signal) => (
              <article key={signal.eyebrow} className="pe-card pe-offset-card" style={{ padding: "1.5rem" }}>
                <p className="pe-eyebrow" style={{ color: "var(--pe-gold)" }}>{signal.eyebrow}</p>
                <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem", marginTop: "0.75rem", marginBottom: 0 }}>
                  {signal.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
