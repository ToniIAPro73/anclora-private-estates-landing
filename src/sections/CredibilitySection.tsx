export function CredibilitySection() {
  const pillars = [
    "Agente independiente con respaldo de eXp Group Spain.",
    "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
    "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
  ];

  return (
    <section className="pe-section pe-section-soft">
      <div className="pe-container">
        <div className="pe-section-heading">
          <p className="pe-eyebrow">Credibilidad</p>
          <h2 className="pe-section-title">Por qué confiar en una propuesta premium que no necesita aparentar volumen.</h2>
        </div>
        <div className="pe-grid-3" style={{ marginTop: "2rem" }}>
          {pillars.map((pillar) => (
            <article key={pillar} className="pe-card pe-offset-card" style={{ padding: "1.5rem" }}>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.85 }}>{pillar}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
