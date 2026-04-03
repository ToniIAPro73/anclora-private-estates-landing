import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import { SellerIntakeForm } from "@/components/forms/SellerIntakeForm";

export function SellerIntakeSection() {
  return (
    <section id="propietarios" className="pe-section">
      <div className="pe-container pe-split-grid" style={{ gap: "2rem" }}>
        <div>
          <p className="pe-eyebrow">Propietarios</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            Captación selectiva para activos que necesitan más que exposición masiva.
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>
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
