import { investorProfiles } from "@/content/investor-profiles";

export function InvestorSection() {
  return (
    <section id="inversores" className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">Inversores</p>
          <h2 className="pe-section-title">Inversores nacionales e internacionales que necesitan menos ruido y más criterio.</h2>
        </div>
        <div className="pe-grid-3" style={{ marginTop: "2rem" }}>
          {investorProfiles.map((profile) => (
            <article key={profile.title} className="pe-card pe-offset-card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.9rem", marginTop: 0 }}>{profile.title}</h3>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8 }}>{profile.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
