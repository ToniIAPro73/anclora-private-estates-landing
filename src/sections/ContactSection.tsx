import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

export function ContactSection() {
  return (
    <section id="contacto" className="pe-section">
      <div className="pe-container pe-split-grid" style={{ gap: "2rem" }}>
        <div>
          <p className="pe-eyebrow">Contacto</p>
          <h2 className="pe-section-title" style={{ marginTop: "1rem" }}>
            Abramos una conversación privada.
          </h2>
          <p className="pe-section-copy" style={{ marginTop: "1.25rem" }}>
            Si estás valorando vender, invertir o explorar una oportunidad patrimonial en Palma o el suroeste de Mallorca, podemos estudiar tu caso con criterio, confidencialidad y enfoque premium.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="card" />
          </div>
        </div>
        <div className="pe-card" style={{ padding: "1.75rem" }}>
          <p className="pe-eyebrow">Contact details</p>
          <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
            <div>
              <div className="pe-eyebrow">Email</div>
              <a href="mailto:contacto@anclora.com" style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem" }}>
                contacto@anclora.com
              </a>
            </div>
            <div>
              <div className="pe-eyebrow">Teléfono</div>
              <a href="tel:+34000000000" style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.8rem" }}>
                +34 000 000 000
              </a>
            </div>
            <div>
              <div className="pe-eyebrow">Ubicación</div>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8 }}>Palma de Mallorca · Islas Baleares</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
