import { useState, useEffect } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { NavbarCopy, LanguageCode } from "@/content/site-copy";

type PENavbarProps = {
  copy: NavbarCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

function HamburgerIcon() {
  return (
    <svg width="30" height="20" viewBox="0 0 30 20" aria-hidden="true" fill="none">
      <rect width="30" height="2.5" rx="1.25" fill="currentColor" />
      <rect y="8.75" width="30" height="2.5" rx="1.25" fill="currentColor" />
      <rect y="17.5" width="30" height="2.5" rx="1.25" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none">
      <line x1="2" y1="2" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="20" y1="2" x2="2" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function PENavbar({ copy, language, onLanguageChange }: PENavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Blur page content when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("pe-menu-open");
    } else {
      document.body.classList.remove("pe-menu-open");
    }
    return () => document.body.classList.remove("pe-menu-open");
  }, [menuOpen]);

  return (
    <>
      <header className="pe-navbar" data-testid="site-navbar">
        <nav aria-label={copy.navAriaLabel} className="pe-nav-bar">
          <div className="pe-nav-inner pe-nav-inner--centered">

            {/* Left: hamburger icon only */}
            <button
              className="pe-menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((v) => !v)}
              data-testid="navbar-menu-toggle"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* Center: logo */}
            <div className="pe-nav-logo">
              <a href="#" className="pe-nav-logo__link" aria-label="Anclora Private Estates — Inicio">
                <BrandLockup variant="full-exp" />
              </a>
            </div>

            {/* Desktop Links */}
            <div className="pe-nav-links" style={{ display: "flex", gap: "2rem" }}>
              {copy.links.map((link) => (
                <a key={link.href} href={link.href} className="pe-nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right: language switcher + CTA */}
            <div className="pe-nav-actions">
              <LanguageSwitcher
                copy={copy.languageSwitcher}
                language={language}
                onLanguageChange={onLanguageChange}
              />
              <a
                className="pe-btn-primary pe-btn-primary-gold pe-nav-cta"
                href="#valoracion"
                style={{ minHeight: "44px" }}
                data-testid="navbar-primary-cta"
              >
                {copy.ctaLabel}
              </a>
            </div>

          </div>
        </nav>
      </header>

      {/* Backdrop — blurs/dims page, click to close */}
      {menuOpen && (
        <div
          className="pe-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel — left side, 25vw */}
      {menuOpen && (
        <aside
          className="pe-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          data-testid="navbar-links"
        >
          <nav className="pe-nav-drawer__nav">
            {copy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pe-nav-drawer__link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
}
