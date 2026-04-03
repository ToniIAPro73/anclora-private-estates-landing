import type { FinalCtaCopy } from "@/content/site-copy";

type FinalCTASectionProps = {
  copy: FinalCtaCopy;
};

export function FinalCTASection({ copy }: FinalCTASectionProps) {
  return (
    <section className="pe-section" style={{ background: "var(--pe-deep-bg)" }}>
      <div className="pe-container">
        <div className="pe-card-deep" style={{ padding: "3rem" }}>
          <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)" }}>
            {copy.eyebrow}
          </p>
          <h2
            style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.6rem, 6vw, 5rem)", margin: "1rem 0 0" }}
          >
            {copy.title}
          </h2>
          <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.9, maxWidth: "48rem", marginTop: "1.25rem" }}>
            {copy.body}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a className="pe-btn-primary pe-btn-primary-gold" href="#propietarios">
              {copy.primaryCta}
            </a>
            <a className="pe-btn-secondary pe-btn-secondary-ghost" href="#contacto">
              {copy.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
