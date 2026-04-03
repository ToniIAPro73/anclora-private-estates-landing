export function CredibilitySection() {
  const pillars = [
    "Agente independiente con respaldo de eXp Group Spain.",
    "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
    "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
  ];

  return (
    <section className="pe-section" style={{ background: "var(--pe-surface-soft)" }}>
      <div className="pe-container">
        <p className="pe-eyebrow">Credibilidad</p>
        <h2 style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "1rem 0 0" }}>
          Por qué confiar en una propuesta premium que no necesita aparentar volumen.
        </h2>
        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", marginTop: "2rem" }}>
          {pillars.map((pillar) => (
            <article key={pillar} className="pe-card" style={{ padding: "1.5rem" }}>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.85 }}>{pillar}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
