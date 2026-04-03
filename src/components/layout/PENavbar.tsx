import { BrandLockup } from "@/components/brand/BrandLockup";

type PENavbarProps = {
  language: "es" | "en" | "de";
  onLanguageChange: (language: "es" | "en" | "de") => void;
};

export function PENavbar({ language, onLanguageChange }: PENavbarProps) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, padding: "1rem 0 0" }}>
      <nav aria-label="Principal" className="pe-container pe-glass" style={{ borderRadius: "999px", padding: "0.9rem 1.1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <BrandLockup variant="full-exp" />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.1rem",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--pe-text-soft)",
            }}
          >
            <a href="#mallorca-focus">Mallorca</a>
            <a href="#inversores">Inversores</a>
            <a href="#propietarios">Propietarios</a>
            <a href="#data-lab">Data Lab</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", justifySelf: "end" }}>
            <button type="button" onClick={() => onLanguageChange("es")} aria-pressed={language === "es"} className="pe-btn-secondary" style={{ minHeight: "46px", paddingInline: "1rem" }}>
              Idioma Español
            </button>
            <button type="button" onClick={() => onLanguageChange("en")} aria-pressed={language === "en"} className="pe-btn-secondary" style={{ minHeight: "46px", paddingInline: "1rem" }}>
              Idioma Inglés
            </button>
            <button type="button" onClick={() => onLanguageChange("de")} aria-pressed={language === "de"} className="pe-btn-secondary" style={{ minHeight: "46px", paddingInline: "1rem" }}>
              Idioma Alemán
            </button>
            <a className="pe-btn-primary" href="#propietarios" style={{ minHeight: "46px" }}>
              Solicitar evaluación confidencial
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
