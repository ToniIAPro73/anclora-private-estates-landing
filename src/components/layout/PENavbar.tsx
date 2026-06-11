import { useState, useEffect } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { NavbarCopy, LanguageCode } from "@/content/site-copy";

type PENavbarProps = {
  copy: NavbarCopy;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
};

// Left column hrefs (core services, page flow order)
const LEFT_HREFS = [
  "#credibilidad",
  "#como-trabajamos",
  "#mallorca-focus",
  "#alquiler-vacacional",
  "#inversores",
  "#clientes",
];

// Right column groups (platform, then info)
const RIGHT_GROUP_A = ["#data-lab", "#editorial", "#partners"];
const RIGHT_GROUP_B = ["#faq", "#contacto"];

function scrollToClientSection(href: string) {
  window.history.pushState(null, "", href);
  const target = document.querySelector(".pe-owner-shell");
  const navbar = document.querySelector(".pe-navbar");
  if (!target) return;
  const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: targetTop - navbarHeight - 24, behavior: "smooth" });
}

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

type NavLink = { href: string; label: string };

function DrawerLink({ link, onClose }: { link: NavLink; onClose: () => void }) {
  return (
    <a
      href={link.href}
      className="pe-nav-drawer__link"
      onClick={(e) => {
        onClose();
        if (link.href !== "#clientes") return;
        e.preventDefault();
        scrollToClientSection(link.href);
      }}
    >
      {link.label}
    </a>
  );
}

export function PENavbar({ copy, language, onLanguageChange }: PENavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("pe-menu-open");
    } else {
      document.body.classList.remove("pe-menu-open");
    }
    return () => document.body.classList.remove("pe-menu-open");
  }, [menuOpen]);

  const leftLinks = copy.links.filter((l) => LEFT_HREFS.includes(l.href));
  const rightGroupA = copy.links.filter((l) => RIGHT_GROUP_A.includes(l.href));
  const rightGroupB = copy.links.filter((l) => RIGHT_GROUP_B.includes(l.href));

  return (
    <>
      <header className="pe-navbar" data-testid="site-navbar">
        <nav aria-label={copy.navAriaLabel} className="pe-nav-bar">
          <div className="pe-nav-inner pe-nav-inner--centered">

            <button
              className="pe-menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel}
              onClick={() => setMenuOpen((v) => !v)}
              data-testid="navbar-menu-toggle"
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            <div className="pe-nav-logo">
              <a href="#" className="pe-nav-logo__link" aria-label={copy.homeAriaLabel}>
                <BrandLockup variant="full-exp" alt={copy.logoAlt} />
              </a>
            </div>

            <div className="pe-nav-actions">
              <LanguageSwitcher
                copy={copy.languageSwitcher}
                language={language}
                onLanguageChange={onLanguageChange}
              />
              <a
                className="pe-btn-primary pe-btn-primary-gold pe-nav-cta"
                href="#clientes"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToClientSection("#clientes");
                }}
                style={{ minHeight: "44px" }}
                data-testid="navbar-primary-cta"
              >
                {copy.ctaLabel}
              </a>
            </div>

          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="pe-nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {menuOpen && (
        <aside
          className="pe-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label={copy.menuDialogLabel}
          data-testid="navbar-links"
        >
          {/* Premium drawer header */}
          <div className="pe-nav-drawer__header">
            <span className="pe-nav-drawer__header-ornament" aria-hidden="true" />
          </div>

          {/* 2-column navigation grid */}
          <div className="pe-nav-drawer__columns">
            {/* Left column — core/services */}
            <div className="pe-nav-drawer__col">
              {leftLinks.map((link) => (
                <DrawerLink key={link.href} link={link} onClose={() => setMenuOpen(false)} />
              ))}
            </div>

            {/* Right column — platform + info */}
            <div className="pe-nav-drawer__col pe-nav-drawer__col--right">
              <div className="pe-nav-drawer__group">
                {rightGroupA.map((link) => (
                  <DrawerLink key={link.href} link={link} onClose={() => setMenuOpen(false)} />
                ))}
              </div>
              <div className="pe-nav-drawer__group-sep" aria-hidden="true" />
              <div className="pe-nav-drawer__group">
                {rightGroupB.map((link) => (
                  <DrawerLink key={link.href} link={link} onClose={() => setMenuOpen(false)} />
                ))}
              </div>
            </div>
          </div>

        </aside>
      )}
    </>
  );
}
