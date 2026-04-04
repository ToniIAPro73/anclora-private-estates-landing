import type { FinalCtaCopy } from "@/content/site-copy";

const FINAL_CTA_IMAGE =
  "https://customer-assets.emergentagent.com/job_luxury-landing-hub/artifacts/lo9adrm5_CTA_v1.png";

type FinalCTASectionProps = {
  copy: FinalCtaCopy;
};

export function FinalCTASection({ copy }: FinalCTASectionProps) {
  return (
    <section className="pe-section pe-final-cta-section">
      <div className="pe-final-cta-background" aria-hidden="true">
        <img className="pe-final-cta-background__image" src={FINAL_CTA_IMAGE} alt="Villa de lujo en Mallorca como fondo de cierre comercial" />
        <div className="pe-final-cta-background__image-overlay" />
        <div className="pe-final-cta-background__glow pe-final-cta-background__glow--gold" />
        <div className="pe-final-cta-background__glow pe-final-cta-background__glow--teal" />
        <div className="pe-final-cta-background__grid" />
      </div>

      <div className="pe-container" style={{ position: "relative" }}>
        <div className="pe-final-cta-card" data-testid="final-cta-card">
          <div className="pe-stack" style={{ gap: "1rem" }}>
            <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>
              {copy.eyebrow}
            </p>
            <h2 className="pe-final-cta-title">{copy.title}</h2>
            <p className="pe-final-cta-body">{copy.body}</p>
          </div>

          <div className="pe-cta-row" style={{ marginTop: "2rem" }}>
            <a className="pe-btn-primary pe-btn-primary-gold" href="#propietarios" data-testid="final-cta-primary">
              {copy.primaryCta}
            </a>
            <a className="pe-btn-secondary pe-btn-secondary-ghost" href="#contacto" data-testid="final-cta-secondary">
              {copy.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
