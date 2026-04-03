import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

export function HeroSection() {
  return (
    <section className="pe-section pe-brand-panel">
      <div className="pe-container pe-hero-grid" style={{ gap: "3rem", alignItems: "center" }}>
        <div className="pe-stack" style={{ gap: "1.5rem", paddingRight: "1rem" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: 0 }}>
            Palma · Suroeste de Mallorca · Capital premium
          </p>
          <h1 className="pe-display" style={{ fontSize: "clamp(3.8rem, 8vw, 7.2rem)", margin: 0, maxWidth: "12ch" }}>
            Anclora Private Estates para Palma y el suroeste de Mallorca.
          </h1>

          <div className="pe-pull-quote">
            <p className="pe-section-copy" style={{ margin: 0, fontSize: "1.15rem", maxWidth: "24rem" }}>
              Anclora Private Estates está diseñada para propietarios, compradores e inversores nacionales e internacionales que valoran criterio, microzona, confidencialidad y el respaldo operativo de eXp Group Spain.
            </p>
            <div className="pe-stack" style={{ gap: "0.8rem", paddingTop: "0.35rem" }}>
              <div className="pe-chip-row">
                <span className="pe-chip">Lectura territorial</span>
                <span className="pe-chip">Confidencialidad</span>
                <span className="pe-chip">Capital internacional</span>
              </div>
              <p className="pe-note" style={{ margin: 0, maxWidth: "26rem" }}>
                Una puerta pública premium que combina narrativa editorial, inteligencia de microzona y ejecución comercial más precisa que la agencia residencial estándar.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a className="pe-btn-primary" href="#propietarios">
              Abrir evaluación privada
            </a>
            <a className="pe-btn-secondary" href="#mallorca-focus">
              Explorar foco territorial
            </a>
          </div>

          <ExpTrustBadge />
        </div>

        <div className="pe-card-deep" style={{ minHeight: "38rem", padding: "2.1rem", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, color-mix(in srgb, var(--pe-gold) 18%, transparent), transparent 28%), linear-gradient(180deg, color-mix(in srgb, var(--pe-brand) 18%, transparent), transparent 58%)",
            }}
          />
          <div style={{ position: "relative", display: "grid", gap: "1.5rem", minHeight: "100%" }}>
            <div className="pe-stack" style={{ gap: "0.75rem" }}>
              <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                Private Preview
              </p>
              <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.2rem, 4vw, 3.3rem)", lineHeight: 0.98, maxWidth: "12ch" }}>
                Palma, Son Vida, Portals, Bendinat y microzonas donde el relato correcto cambia el valor percibido del activo.
              </div>
            </div>

            <div className="pe-dual-panel" style={{ gap: "1rem", marginTop: "auto" }}>
              <div
                style={{
                  background: "color-mix(in srgb, var(--pe-deep-surface) 72%, white 8%)",
                  borderRadius: "1.6rem",
                  padding: "1.35rem",
                }}
              >
                <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)", margin: 0 }}>
                  Method
                </p>
                <p style={{ color: "var(--pe-deep-text)", lineHeight: 1.75, margin: "0.65rem 0 0" }}>
                  No competimos por volumen. Competimos por lectura de mercado, acceso selectivo y arquitectura comercial afinada para operaciones premium.
                </p>
              </div>

              <div style={{ display: "grid", gap: "0.75rem", alignContent: "start" }}>
                <div style={{ color: "var(--pe-gold)", fontFamily: "var(--pe-font-display)", fontSize: "2.3rem" }}>01</div>
                <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.75, margin: 0 }}>
                  El posicionamiento correcto del activo empieza antes del portal, y muchas veces antes incluso de la venta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
