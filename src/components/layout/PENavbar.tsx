import { useState } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { NavbarCopy, LanguageCode } from "@/content/site-copy";

type PENavbarProps = {
  copy: NavbarCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function PENavbar({ copy, language, onLanguageChange }: PENavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pe-navbar" data-testid="site-navbar">
      <nav aria-label={copy.navAriaLabel} className="pe-container pe-glass pe-nav-shell">
        <div className="pe-nav-inner pe-nav-inner--centered">
          {/* Left: hamburger menu toggle */}
          <button
            className="pe-menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
            data-testid="navbar-menu-toggle"
          >
            <span className="pe-menu-toggle__icon" aria-hidden="true">
              {menuOpen ? "✕" : "≡"}
            </span>
            <span className="pe-menu-toggle__label">MENU</span>
          </button>

          {/* Center: logo */}
          <div className="pe-nav-logo">
            <BrandLockup variant="full-exp" />
          </div>

          {/* Right: language switcher + CTA */}
          <div className="pe-nav-actions">
            <LanguageSwitcher copy={copy.languageSwitcher} language={language} onLanguageChange={onLanguageChange} />
            <a
              className="pe-btn-primary pe-btn-primary-gold pe-nav-cta"
              href="#valoracion"
              style={{ minHeight: "46px" }}
              data-testid="navbar-primary-cta"
            >
              {copy.ctaLabel}
            </a>
          </div>
        </div>

        {/* Expandable nav menu */}
        {menuOpen && (
          <div className="pe-nav-menu" data-testid="navbar-links" role="menu">
            {copy.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pe-nav-link pe-nav-menu__link"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
