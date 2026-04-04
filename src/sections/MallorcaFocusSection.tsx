import type { MallorcaFocusCopy } from "@/content/site-copy";

type MallorcaFocusSectionProps = {
  copy: MallorcaFocusCopy;
};

export function MallorcaFocusSection({ copy }: MallorcaFocusSectionProps) {
  return (
    <section id="mallorca-focus" className="pe-section">
      {/* Scenic photo banner — Mallorca coastline */}
      <div
        style={{
          width: "100%",
          height: "clamp(14rem, 28vw, 22rem)",
          position: "relative",
          overflow: "hidden",
          marginBottom: "3rem",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&q=80&auto=format&fit=crop"
          alt="Costa premium del suroeste de Mallorca"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(7,37,47,0.84) 0%, rgba(7,37,47,0.40) 50%, rgba(7,37,47,0.84) 100%), linear-gradient(180deg, rgba(7,37,47,0.24) 0%, rgba(7,37,47,0.70) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(1.5rem, 5vw, 5rem)",
          }}
        >
          <div>
            <p className="pe-eyebrow" style={{ color: "var(--pe-gold)", margin: "0 0 0.75rem" }}>{copy.eyebrow}</p>
            <h2
              style={{
                fontFamily: "var(--pe-font-display)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--pe-deep-text)",
                margin: 0,
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
                maxWidth: "22ch",
              }}
            >
              {copy.title}
            </h2>
          </div>
        </div>
      </div>

      <div className="pe-container">
        <div style={{ display: "grid", gap: "1.5rem" }}>
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
