export function FinalCTASection() {
  return (
    <section className="pe-section" style={{ background: "var(--pe-deep-bg)" }}>
      <div className="pe-container">
        <div className="pe-card-deep" style={{ padding: "3rem" }}>
          <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)" }}>
            Private conversation
          </p>
          <h2 style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.6rem, 6vw, 5rem)", margin: "1rem 0 0" }}>
            El siguiente paso no es ver más ruido. Es abrir la conversación adecuada.
          </h2>
          <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.9, maxWidth: "48rem", marginTop: "1.25rem" }}>
            Palma y el suroeste de Mallorca exigen criterio territorial, confidencialidad y una ejecución comercial más precisa. Si estás valorando vender, comprar o explorar una oportunidad patrimonial, podemos estudiar tu caso de forma privada.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a className="pe-btn-primary" href="#propietarios">
              Iniciar evaluación privada
            </a>
            <a className="pe-btn-secondary" href="#contacto">
              Abrir conversación privada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
