import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { HeroCopy } from "@/content/site-copy";

type HeroSectionProps = {
  copy: HeroCopy;
  trustBadgeText: string;
};

export function HeroSection({ copy, trustBadgeText }: HeroSectionProps) {
  return (
    <section className="pe-section pe-brand-panel">
      <div className="pe-container pe-hero-grid" style={{ gap: "3rem", alignItems: "center" }}>
        <div className="pe-stack" style={{ gap: "1.5rem", paddingRight: "1rem" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>
            {copy.eyebrow}
          </p>
          <h1 className="pe-display" style={{ fontSize: "clamp(3.8rem, 8vw, 7.2rem)", margin: 0, maxWidth: "12ch" }}>
            {copy.title}
          </h1>

          <div className="pe-pull-quote">
            <p className="pe-section-copy" style={{ margin: 0, fontSize: "1.15rem", maxWidth: "24rem" }}>
              {copy.description}
            </p>
            <div className="pe-stack" style={{ gap: "0.8rem", paddingTop: "0.35rem" }}>
              <div className="pe-chip-row">
                {copy.chips.map((chip) => (
                  <span key={chip} className="pe-chip">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="pe-note" style={{ margin: 0, maxWidth: "26rem" }}>
                {copy.note}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a className="pe-btn-primary pe-btn-primary-gold" href="#propietarios">
              {copy.primaryCta}
            </a>
            <a className="pe-btn-secondary" href="#mallorca-focus">
              {copy.secondaryCta}
            </a>
          </div>

          <ExpTrustBadge text={trustBadgeText} />
        </div>

        <div className="pe-hero-visual pe-card-deep" style={{ minHeight: "38rem", padding: "2.1rem", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, color-mix(in srgb, var(--pe-gold) 18%, transparent), transparent 28%), linear-gradient(180deg, color-mix(in srgb, var(--pe-brand) 18%, transparent), transparent 58%)",
            }}
          />
          <div style={{ position: "relative", display: "grid", gap: "1.5rem", minHeight: "100%" }}>
            <div className="pe-stack" style={{ gap: "0.75rem" }}>
              <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                {copy.media.eyebrow}
              </p>
              <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.2rem, 4vw, 3.3rem)", lineHeight: 0.98, maxWidth: "12ch" }}>
                {copy.media.title}
              </div>
            </div>

            <div className="pe-hero-art" aria-hidden="true">
              <div className="pe-hero-art__window">
                <div className="pe-hero-art__sky" />
                <div className="pe-hero-art__silhouette" />
                <div className="pe-hero-art__glow pe-hero-art__glow--gold" />
                <div className="pe-hero-art__glow pe-hero-art__glow--teal" />
              </div>
              <div className="pe-hero-art__card pe-hero-art__card--top">
                <span className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                  {copy.media.methodEyebrow}
                </span>
                <span style={{ color: "var(--pe-deep-text)", lineHeight: 1.6 }}>{copy.media.method}</span>
              </div>
              <div className="pe-hero-art__card pe-hero-art__card--bottom">
                <span style={{ color: "var(--pe-gold)", fontFamily: "var(--pe-font-display)", fontSize: "2rem" }}>
                  {copy.media.statValue}
                </span>
                <span style={{ color: "var(--pe-deep-muted)", lineHeight: 1.7 }}>{copy.media.statCopy}</span>
              </div>
            </div>

            <div className="pe-dual-panel" style={{ gap: "1rem", marginTop: "auto" }}>
              <div
                style={{
                  background: "color-mix(in srgb, var(--pe-deep-surface) 72%, white 8%)",
                  borderRadius: "1.6rem",
                  padding: "1.35rem",
                }}
              >
                <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                  {copy.media.methodEyebrow}
                </p>
                <p style={{ color: "var(--pe-deep-text)", lineHeight: 1.75, margin: "0.65rem 0 0" }}>
                  {copy.media.method}
                </p>
              </div>

              <div style={{ display: "grid", gap: "0.75rem", alignContent: "start" }}>
                <div style={{ color: "var(--pe-gold)", fontFamily: "var(--pe-font-display)", fontSize: "2.3rem" }}>
                  {copy.media.statValue}
                </div>
                <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.75, margin: 0 }}>
                  {copy.media.statCopy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
