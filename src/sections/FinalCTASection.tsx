import type { FinalCtaCopy } from "@/content/site-copy";

type FinalCTASectionProps = {
  copy: FinalCtaCopy;
};

export function FinalCTASection({ copy }: FinalCTASectionProps) {
  return (
    <section
      className="pe-section"
      style={{ position: "relative", overflow: "hidden", background: "var(--pe-deep-bg)" }}
    >
      {/* Full-bleed luxury photo background */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&q=80&auto=format&fit=crop"
        alt="Villa de lujo — Private Estates"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 50%",
          opacity: 0.22,
        }}
      />
      {/* Deep editorial overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(7,37,47,0.92) 0%, rgba(13,27,26,0.88) 100%)",
        }}
      />
      {/* Gold accent glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 85% 15%, rgba(212,175,55,0.14), transparent 36%), radial-gradient(circle at 10% 85%, rgba(58,160,144,0.10), transparent 32%)",
        }}
      />
      <div className="pe-container" style={{ position: "relative" }}>
        <div
          style={{
            padding: "3rem",
            borderRadius: "var(--pe-radius-xl)",
            border: "1px solid var(--pe-line-soft)",
            background: "rgba(7, 37, 47, 0.52)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "var(--pe-shadow-gold)",
          }}
        >
          <p className="pe-eyebrow" style={{ color: "var(--pe-gold)" }}>
            {copy.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: "var(--pe-font-display)",
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              margin: "1rem 0 0",
              color: "var(--pe-deep-text)",
              letterSpacing: "-0.03em",
              lineHeight: 0.98,
            }}
          >
            {copy.title}
          </h2>
          <p
            style={{
              color: "var(--pe-deep-muted)",
              lineHeight: 1.9,
              maxWidth: "48rem",
              marginTop: "1.25rem",
              fontFamily: "var(--pe-font-accent)",
              fontStyle: "italic",
              fontSize: "1.1rem",
            }}
          >
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
