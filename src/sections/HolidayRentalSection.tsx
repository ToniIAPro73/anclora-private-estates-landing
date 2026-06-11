import type { HolidayRentalCopy } from "@/content/site-copy";

type HolidayRentalSectionProps = {
  copy: HolidayRentalCopy;
};

export function HolidayRentalSection({ copy }: HolidayRentalSectionProps) {
  return (
    <section id="alquiler-vacacional" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-grid-feature">
          <div className="pe-section-heading">
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
            <p className="pe-section-copy" style={{ margin: "1rem 0 0", maxWidth: "38rem" }}>{copy.body}</p>
          </div>

          <aside className="pe-stack" style={{ gap: "1rem" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {copy.benefits.map((benefit) => (
                <li
                  key={benefit}
                  style={{
                    color: "var(--pe-text-soft)",
                    lineHeight: 1.75,
                    paddingLeft: "1.25rem",
                    position: "relative",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.15em",
                      color: "var(--pe-gold)",
                      fontSize: "0.75rem",
                    }}
                  >
                    ◆
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <p
              style={{
                color: "var(--pe-text-muted)",
                fontSize: "0.85rem",
                fontStyle: "italic",
                lineHeight: 1.7,
                margin: "0.5rem 0 0",
                borderLeft: "2px solid var(--pe-gold-muted, #8b7536)",
                paddingLeft: "0.875rem",
              }}
            >
              {copy.technologyNote}
            </p>
          </aside>
        </div>

        <div className="pe-cta-row">
          <a href="#clientes" className="pe-btn-primary pe-btn-primary-gold">{copy.primaryCta}</a>
          <a href="#contacto" className="pe-btn-secondary pe-btn-secondary-ghost">{copy.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
}
