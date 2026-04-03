import { BrandLockup } from "@/components/brand/BrandLockup";
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

export function PEFooter() {
  return (
    <footer className="pe-section" style={{ background: "var(--pe-bg)" }}>
      <div className="pe-container" style={{ borderTop: "1px solid var(--pe-line-soft)", paddingTop: "2.5rem" }}>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.4fr)",
          }}
        >
          <div>
            <BrandLockup />
            <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8, maxWidth: "36rem" }}>
              Firma inmobiliaria premium orientada a Palma y el suroeste de Mallorca, con criterio territorial, acceso selectivo y una ejecución comercial más precisa.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <ExpTrustBadge mode="footer" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1.5rem" }}>
            <FooterColumn title="Contacto" links={[["Abrir conversación privada", "#contacto"], ["Solicitar evaluación", "#propietarios"]]} />
            <FooterColumn title="Mallorca" links={[["Palma & Son Vida", "#mallorca-focus"], ["Portals & Bendinat", "#mallorca-focus"]]} />
            <FooterColumn title="Acceso selectivo" links={[["Data Lab", "#data-lab"], ["Partners", "#contacto"]]} />
            <FooterColumn title="Legal" links={[["Privacidad", "#contacto"], ["Aviso legal", "#contacto"]]} />
          </div>
        </div>
        <p style={{ marginTop: "2rem", color: "var(--pe-text-muted)", fontSize: "0.8rem" }}>
          © 2026 Anclora Private Estates. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <div className="pe-eyebrow">{title}</div>
      <ul style={{ margin: "1rem 0 0", padding: 0, listStyle: "none", display: "grid", gap: "0.7rem" }}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{ color: "var(--pe-text-soft)", fontSize: "0.92rem" }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
