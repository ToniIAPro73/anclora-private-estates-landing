import { BrandLockup } from "@/components/brand/BrandLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { NavbarCopy, LanguageCode } from "@/content/site-copy";

type PENavbarProps = {
  copy: NavbarCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

export function PENavbar({ copy, language, onLanguageChange }: PENavbarProps) {
  return (
    <header className="pe-navbar" data-testid="site-navbar">
      <nav aria-label={copy.navAriaLabel} className="pe-container pe-glass pe-nav-shell">
        <div className="pe-nav-inner">
          <BrandLockup variant="full-exp" />

          <div className="pe-nav-links" data-testid="navbar-links">
            {copy.links.map((link) => (
              <a key={link.href} href={link.href} className="pe-nav-link">
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pe-nav-actions">
            <LanguageSwitcher copy={copy.languageSwitcher} language={language} onLanguageChange={onLanguageChange} />
            <a className="pe-btn-primary" href="#propietarios" style={{ minHeight: "46px" }} data-testid="navbar-primary-cta">
              {copy.ctaLabel}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
