export function DataLabSignalsSection() {
  return (
    <section id="data-lab" className="pe-section" style={{ background: "var(--pe-surface-soft)" }}>
      <div className="pe-container">
        <p className="pe-eyebrow">Anclora Data Lab</p>
        <h2 style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "1rem 0 0" }}>
          Señales territoriales para leer mejor el mercado premium.
        </h2>
        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "minmax(0, 1.02fr) minmax(0, 0.98fr)", marginTop: "2rem" }}>
          <article className="pe-card-deep" style={{ padding: "1.75rem" }}>
            <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)" }}>
              Signal 01
            </p>
            <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "2rem", marginTop: "0.75rem" }}>
              La escasez de producto prime bien posicionado favorece decisiones más selectivas y menos reactivas.
            </h3>
            <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.8 }}>
              En Palma y el suroeste, la combinación de oferta limitada, demanda internacional persistente y sensibilidad creciente al producto turnkey refuerza el valor de los activos bien preparados y bien narrados.
            </p>
          </article>
          <div style={{ display: "grid", gap: "1rem" }}>
            <article className="pe-card" style={{ padding: "1.5rem" }}>
              <p className="pe-eyebrow">Signal 02</p>
              <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem", marginTop: "0.75rem" }}>
                La microzona importa más que la etiqueta general del municipio.
              </h3>
            </article>
            <article className="pe-card" style={{ padding: "1.5rem" }}>
              <p className="pe-eyebrow">Signal 03</p>
              <h3 style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem", marginTop: "0.75rem" }}>
                La preparación del activo condiciona la velocidad y la calidad de la operación.
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
