import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { HeroCopy } from "@/content/site-copy";

const HERO_IMAGE =
  "https://customer-assets.emergentagent.com/job_luxury-landing-hub/artifacts/x5r4drpo_Hero_v2.png";

type HeroSectionProps = {
  copy: HeroCopy;
  trustBadgeText: string;
};

export function HeroSection({ copy, trustBadgeText }: HeroSectionProps) {
  return (
    <section className="pe-hero-section pe-brand-panel">
      <div className="pe-container pe-hero-grid pe-hero-shell">
        <div className="pe-stack pe-hero-copy" style={{ gap: "1.5rem" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>
            {copy.eyebrow}
          </p>

          <h1
            className="pe-display"
            data-testid="hero-title"
            style={{ fontSize: "clamp(3.3rem, 9vw, 7.2rem)", margin: 0, maxWidth: "11ch" }}
          >
            {copy.title}
          </h1>

          <div className="pe-pull-quote">
            <p className="pe-section-copy" style={{ margin: 0, fontSize: "clamp(1.02rem, 1.8vw, 1.18rem)", maxWidth: "29rem" }}>
              {copy.description}
            </p>
            <div className="pe-stack" style={{ gap: "0.9rem", paddingTop: "0.2rem" }}>
              <div className="pe-chip-row">
                {copy.chips.map((chip) => (
                  <span key={chip} className="pe-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="pe-note" style={{ margin: 0, maxWidth: "28rem" }}>
                {copy.note}
              </p>
            </div>
          </div>

          <div className="pe-cta-row">
            <a className="pe-btn-primary pe-btn-primary-gold" href="#propietarios" data-testid="hero-primary-cta">
              {copy.primaryCta}
            </a>
            <a className="pe-btn-secondary" href="#mallorca-focus" data-testid="hero-secondary-cta">
              {copy.secondaryCta}
            </a>
          </div>

          <ExpTrustBadge text={trustBadgeText} />
        </div>

        <div className="pe-hero-visual pe-photo-window" data-testid="hero-editorial-visual">
          <img className="pe-photo-window__image pe-photo-window__image--hero" src={HERO_IMAGE} alt="Villa contemporánea en Mallorca con piscina e vistas al mar" />
          <div className="pe-photo-window__overlay pe-photo-window__overlay--hero" />
          <div className="pe-photo-window__ambient" aria-hidden="true" />

          <div className="pe-photo-window__content">
            <div className="pe-stack" style={{ gap: "0.75rem", maxWidth: "18rem" }}>
              <p className="pe-eyebrow pe-kicker" style={{ margin: 0, color: "var(--pe-gold)" }}>
                {copy.media.eyebrow}
              </p>
              <div className="pe-photo-window__headline">{copy.media.title}</div>
            </div>

            <div className="pe-photo-window__cards">
              <article className="pe-photo-window__card pe-photo-window__card--offset">
                <p className="pe-eyebrow pe-kicker" style={{ margin: 0, color: "var(--pe-gold)" }}>
                  {copy.media.methodEyebrow}
                </p>
                <p style={{ margin: 0, color: "var(--pe-deep-text)", lineHeight: 1.7 }}>{copy.media.method}</p>
              </article>
              <article className="pe-photo-window__card pe-photo-window__card--stat">
                <span className="pe-photo-window__stat">{copy.media.statValue}</span>
                <p style={{ margin: 0, color: "rgba(247,244,238,0.76)", lineHeight: 1.7 }}>{copy.media.statCopy}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
