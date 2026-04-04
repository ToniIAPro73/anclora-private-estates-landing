import type { InvestorCopy } from "@/content/site-copy";

type InvestorSectionProps = {
  copy: InvestorCopy;
};

export function InvestorSection({ copy }: InvestorSectionProps) {
  return (
    <section id="inversores" className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-grid-feature" style={{ marginBottom: "2.5rem", gap: "2rem", alignItems: "center" }}>
          {/* Section heading */}
          <div className="pe-section-heading">
            <p className="pe-eyebrow">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>
          {/* Accent photo — luxury pool terrace */}
          <div
            style={{
              borderRadius: "var(--pe-radius-xl)",
              overflow: "hidden",
              height: "clamp(12rem, 22vw, 18rem)",
              position: "relative",
              boxShadow: "var(--pe-shadow-gold)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&h=600&q=80&auto=format&fit=crop"
              alt="Propiedad premium en Mallorca"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(7,37,47,0.30) 0%, rgba(7,37,47,0.12) 60%, rgba(212,175,55,0.08) 100%)",
              }}
            />
          </div>
        </div>
        <div className="pe-grid-3">
          {copy.profiles.map((profile) => (
            <article key={profile.title} className="pe-card pe-offset-card pe-card-hover-gold" style={{ padding: "1.5rem" }}>
              <h3 className="pe-card-gold-title" style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.9rem", marginTop: 0 }}>
                {profile.title}
              </h3>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8 }}>{profile.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
