import type { MallorcaFocusCopy } from "@/content/site-copy";

type MallorcaFocusSectionProps = {
  copy: MallorcaFocusCopy;
};

export function MallorcaFocusSection({ copy }: MallorcaFocusSectionProps) {
  return (
    <section id="mallorca-focus" className="pe-section">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
        </div>
        <div style={{ display: "grid", gap: "1.5rem", marginTop: "2rem" }}>
          {copy.clusters.map((cluster, index) => (
            <article
              key={cluster.id}
              className={`${index === 0 ? "pe-card-deep" : "pe-card"} pe-microzone-card`}
              style={{ padding: "1.75rem", gap: "1rem" }}
            >
              <div>
                <p className="pe-eyebrow" style={{ color: index === 0 ? "var(--pe-deep-muted)" : "var(--pe-text-muted)" }}>
                  {cluster.eyebrow}
                </p>
                <h3
                  className="pe-card-gold-title"
                  style={{ fontFamily: "var(--pe-font-display)", fontSize: "2rem", margin: "0.75rem 0 0" }}
                >
                  {cluster.title}
                </h3>
              </div>
              <div>
                <p style={{ color: index === 0 ? "var(--pe-deep-muted)" : "var(--pe-text-soft)", lineHeight: 1.85 }}>
                  {cluster.body}
                </p>
                <p style={{ marginTop: "1rem", color: index === 0 ? "var(--pe-deep-text)" : "var(--pe-text)" }}>
                  <strong>{copy.areasLabel}:</strong> {cluster.areas.join(" · ")}
                </p>
                <p style={{ marginTop: "0.75rem", color: index === 0 ? "var(--pe-deep-muted)" : "var(--pe-text-soft)" }}>
                  <strong>{cluster.audienceLabel}:</strong> {cluster.audience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
