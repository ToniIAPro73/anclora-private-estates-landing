import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

export function HeroSection() {
  return (
    <section className="pe-section">
      <div
        className="pe-container"
        style={{
          display: "grid",
          gap: "3rem",
          alignItems: "center",
          gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 0.92fr)",
        }}
      >
        <div>
          <p className="pe-eyebrow" style={{ color: "var(--pe-gold)" }}>
            Palma · Suroeste de Mallorca · Capital premium
          </p>
          <h1 className="pe-display" style={{ fontSize: "clamp(3.4rem, 8vw, 6.4rem)", margin: "1rem 0 0" }}>
            Anclora Private Estates para Palma y el suroeste de Mallorca.
          </h1>
          <p style={{ color: "var(--pe-text-soft)", fontSize: "1.15rem", lineHeight: 1.9, maxWidth: "42rem", marginTop: "1.5rem" }}>
            Anclora Private Estates está diseñada para propietarios, compradores e inversores nacionales e internacionales que valoran criterio, microzona, confidencialidad y el respaldo operativo de eXp Group Spain.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a className="pe-btn-primary" href="#propietarios">
              Abrir evaluación privada
            </a>
            <a className="pe-btn-secondary" href="#mallorca-focus">
              Explorar foco territorial
            </a>
          </div>
          <div style={{ marginTop: "1.25rem" }}>
            <ExpTrustBadge />
          </div>
        </div>

        <div className="pe-card-deep" style={{ minHeight: "34rem", padding: "2rem", position: "relative", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, color-mix(in srgb, var(--pe-gold) 18%, transparent), transparent 30%), linear-gradient(180deg, color-mix(in srgb, var(--pe-brand) 16%, transparent), transparent 60%)",
            }}
          />
          <div style={{ position: "relative", display: "grid", gap: "1rem" }}>
            <p className="pe-eyebrow" style={{ color: "var(--pe-deep-muted)" }}>
              Private Preview
            </p>
            <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "2rem", lineHeight: 1.05 }}>
              Palma, Son Vida, Portals, Bendinat, Andratx y microzonas donde el relato correcto cambia el valor percibido del activo.
            </div>
            <p style={{ color: "var(--pe-deep-muted)", lineHeight: 1.9 }}>
              No competimos por volumen. Competimos por lectura de mercado, acceso selectivo y una arquitectura comercial más afinada para operaciones premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
