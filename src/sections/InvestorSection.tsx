import { investorProfiles } from "@/content/investor-profiles";

export function InvestorSection() {
  return (
    <section id="inversores" className="pe-section" style={{ background: "var(--pe-surface-soft)" }}>
      <div className="pe-container">
        <p className="pe-eyebrow">Inversores</p>
        <h2 style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "1rem 0 0" }}>
          Inversores nacionales e internacionales que necesitan menos ruido y más criterio.
        </h2>
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: "2rem" }}>
          {investorProfiles.map((profile) => (
            <article key={profile.title} className="pe-card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.9rem", marginTop: 0 }}>{profile.title}</h3>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8 }}>{profile.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
