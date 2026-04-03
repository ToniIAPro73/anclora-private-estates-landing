import type { InvestorCopy } from "@/content/site-copy";

type InvestorSectionProps = {
  copy: InvestorCopy;
};

export function InvestorSection({ copy }: InvestorSectionProps) {
  return (
    <section id="inversores" className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
        </div>
        <div className="pe-grid-3" style={{ marginTop: "2rem" }}>
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
