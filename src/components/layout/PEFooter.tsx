import { BrandLockup } from "@/components/brand/BrandLockup";
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { FooterCopy, LanguageCode } from "@/content/site-copy";
import { LEGAL_CONFIG } from "@/lib/legal-config";

type PEFooterProps = {
  copy: FooterCopy;
  trustBadgeText: string;
  language?: LanguageCode;
};

export function PEFooter({ copy, trustBadgeText, language = "es" }: PEFooterProps) {
  const brandDeclaration = LEGAL_CONFIG.getBrandDeclaration("Anclora Private Estates", language);

  return (
    <footer id="footer" className="pe-section pe-footer-shell">
      <div className="pe-container pe-footer-inner">
        <div className="pe-footer-brand">
          <BrandLockup />
          <p className="pe-footer-summary">{copy.summary}</p>
          <div style={{ marginTop: "1rem" }}>
            <ExpTrustBadge mode="footer" text={trustBadgeText} />
          </div>
        </div>

        <div className="pe-footer-columns" data-testid="footer-columns">
          {copy.columns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>
      </div>
      <div className="pe-container">
        <p className="pe-footer-copyright">{copy.copyright}</p>
        <p className="pe-footer-legal-declaration" style={{ 
          fontSize: "0.75rem", 
          opacity: 0.6, 
          marginTop: "0.5rem",
          maxWidth: "600px" 
        }}>
          {brandDeclaration}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <div className="pe-eyebrow">{title}</div>
      <ul className="pe-footer-links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
