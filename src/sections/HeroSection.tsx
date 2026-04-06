import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { HeroCopy } from "@/content/site-copy";

type HeroSectionProps = {
  copy: HeroCopy;
  trustBadgeText: string;
};

export function HeroSection({ copy, trustBadgeText }: HeroSectionProps) {
  return (
    <section className="pe-hero-fullscreen pe-brand-panel">
      {/* Background image — animates in from blurred/scaled */}
      <div className="pe-hero-bg" aria-hidden="true" />

      {/* Gradient overlay */}
      <div className="pe-hero-overlay" aria-hidden="true" />

      {/* Centered content stack — staggered entrance */}
      <div className="pe-hero-content">

        <p className="pe-eyebrow pe-kicker pe-hero-el pe-hero-el--1" style={{ margin: 0 }}>
          {copy.eyebrow}
        </p>

        <h1
          className="pe-display pe-hero-el pe-hero-el--2"
          data-testid="hero-title"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", margin: 0, maxWidth: "1000px", width: "100%", lineHeight: 1.1 }}
        >
          {copy.title}
        </h1>

        <p
          className="pe-hero-el pe-hero-el--3"
          style={{
            margin: 0,
            maxWidth: "42rem",
            color: "rgba(255, 255, 255, 0.95)",
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            lineHeight: 1.7,
          }}
        >
          {copy.description}
        </p>

        <div className="pe-cta-row pe-hero-el pe-hero-el--5" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
          <a
            className="pe-btn-primary pe-btn-primary-gold"
            href="#propietarios"
            data-testid="hero-primary-cta"
            style={{ minHeight: "52px" }}
          >
            {copy.primaryCta}
          </a>
          <a
            className="pe-btn-secondary"
            href="#mallorca-focus"
            data-testid="hero-secondary-cta"
            style={{ minHeight: "52px" }}
          >
            {copy.secondaryCta}
          </a>
        </div>

        <div className="pe-hero-el pe-hero-el--6">
          <ExpTrustBadge text={trustBadgeText} />
        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#credibilidad" className="pe-hero-scroll-hint" aria-label="Continuar" data-testid="hero-scroll-hint">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
