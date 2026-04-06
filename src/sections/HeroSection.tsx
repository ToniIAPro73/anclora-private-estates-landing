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

        <p className="pe-eyebrow pe-kicker pe-hero-el pe-hero-el--1" style={{ margin: 0, color: "var(--pe-gold)", opacity: 1, letterSpacing: "0.18em" }}>
          {copy.eyebrow}
        </p>

        <h1
          className="pe-display pe-hero-el pe-hero-el--2"
          data-testid="hero-title"
          style={{ fontSize: "clamp(2rem, 3.8vw, 3.5rem)", margin: 0, maxWidth: "none", lineHeight: 1.1 }}
        >
          {copy.title}
        </h1>

        <p
          className="pe-hero-el pe-hero-el--3"
          style={{
            margin: 0,
            maxWidth: "40rem",
            color: "rgba(247, 244, 238, 0.95)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
            lineHeight: 1.7,
          }}
        >
          {copy.description}
        </p>

        <div className="pe-chip-row pe-hero-el pe-hero-el--4" style={{ justifyContent: "center" }}>
          {copy.chips.map((chip) => (
            <span key={chip} className="pe-chip">{chip}</span>
          ))}
        </div>

        <div className="pe-cta-row pe-hero-el pe-hero-el--5" style={{ justifyContent: "center" }}>
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

      {/* Scroll indicator — Private Estates style */}
      <button
        className="pe-hero-down"
        data-testid="hero-scroll-hint"
        onClick={() => document.querySelector('#credibilidad')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Continuar"
      >
        <span>Descubrir</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>
  );
}
