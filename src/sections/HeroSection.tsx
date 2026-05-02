import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { HeroCopy } from "@/content/site-copy";

type HeroSectionProps = {
  copy: HeroCopy;
  trustBadgeText: string;
};

export function HeroSection({ copy, trustBadgeText }: HeroSectionProps) {
  const descriptionLines = copy.description.split("\n");

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
          style={{
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
            margin: 0,
            maxWidth: "60rem",
            lineHeight: 1.1,
            background: "linear-gradient(100deg, #ffffff 25%, var(--pe-gold) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {copy.title}
        </h1>

        <p
          className="pe-hero-el pe-hero-el--3"
          style={{
            margin: 0,
            maxWidth: "48rem",
            color: "rgba(247, 244, 238, 0.95)",
            fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
            lineHeight: 1.8,
          }}
        >
          {descriptionLines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < descriptionLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>

        {/* CTAs pushed to bottom via marginTop: auto */}
        <div className="pe-cta-row pe-hero-el pe-hero-el--5" style={{ justifyContent: "center", marginTop: "auto" }}>
          <button
            className="pe-btn-primary pe-btn-primary-gold"
            data-testid="hero-primary-cta"
            type="button"
            onClick={() => document.getElementById("seller-intake")?.scrollIntoView({ behavior: "smooth" })}
            style={{ minHeight: "56px", paddingInline: "2rem" }}
          >
            {copy.primaryCta}
          </button>
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
