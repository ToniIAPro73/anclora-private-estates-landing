import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import { SellerIntakeForm } from "@/components/forms/SellerIntakeForm";

export function SellerIntakeSection() {
  return (
    <section id="propietarios" className="pe-section">
      <div className="pe-container" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)" }}>
        <div>
          <p className="pe-eyebrow">Propietarios</p>
          <h2 style={{ fontFamily: "var(--pe-font-display)", fontSize: "clamp(2.4rem, 5vw, 4rem)", margin: "1rem 0 0" }}>
            Captación selectiva para activos que necesitan más que exposición masiva.
          </h2>
          <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.9, marginTop: "1.25rem" }}>
            Si estás valorando vender en Palma o el suroeste de Mallorca, podemos estudiar tu activo desde la microzona, la narrativa comercial y el timing correcto, con un enfoque premium y confidencial.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="card" />
          </div>
        </div>
        <div className="pe-card" style={{ padding: "1.5rem" }}>
          <SellerIntakeForm />
        </div>
      </div>
    </section>
  );
}
