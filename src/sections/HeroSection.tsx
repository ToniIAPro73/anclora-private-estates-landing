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
          <h1
            className="pe-display pe-shimmer-gold"
            style={{ fontSize: "clamp(3.8rem, 8vw, 7.2rem)", margin: 0, maxWidth: "12ch" }}
          >
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

        <div
          className="pe-hero-visual"
          style={{
            minHeight: "38rem",
            borderRadius: "var(--pe-radius-xl)",
            overflow: "hidden",
            position: "relative",
            boxShadow: "var(--pe-shadow-gold)",
          }}
        >
          {/* Premium photo — luxury villa, Mallorca southwest */}
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=900&q=85&auto=format&fit=crop"
            alt="Villa de lujo en Mallorca"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
            }}
          />
          {/* Dark editorial overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(7,37,47,0.38) 0%, rgba(7,37,47,0.72) 70%, rgba(7,37,47,0.92) 100%)",
            }}
          />
          {/* Gold accent orbs */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 80% 10%, rgba(212,175,55,0.22), transparent 28%), radial-gradient(circle at 18% 80%, rgba(58,160,144,0.16), transparent 30%)",
            }}
          />
          {/* Content overlay */}
          <div style={{ position: "relative", display: "grid", gap: "1.5rem", minHeight: "38rem", padding: "2.1rem", alignContent: "space-between" }}>
            <div className="pe-stack" style={{ gap: "0.75rem" }}>
              <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                {copy.media.eyebrow}
              </p>
              <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.2rem, 4vw, 3.3rem)", lineHeight: 0.98, maxWidth: "12ch", color: "var(--pe-deep-text)" }}>
                {copy.media.title}
              </div>
            </div>

            <div style={{ display: "grid", gap: "1rem" }}>
              {/* Method card */}
              <div className="pe-hero-art__card pe-hero-art__card--top" style={{ position: "relative", maxWidth: "100%" }}>
                <span className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                  {copy.media.methodEyebrow}
                </span>
                <span style={{ color: "var(--pe-deep-text)", lineHeight: 1.6 }}>{copy.media.method}</span>
              </div>
              {/* Stat card */}
              <div className="pe-hero-art__card" style={{ position: "relative", display: "grid", gap: "0.4rem" }}>
                <span
                  style={{
                    color: "var(--pe-gold)",
                    fontFamily: "var(--pe-font-accent)",
                    fontStyle: "italic",
                    fontSize: "2.4rem",
                    lineHeight: 1,
                  }}
                >
                  {copy.media.statValue}
                </span>
                <span style={{ color: "var(--pe-deep-muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>{copy.media.statCopy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
