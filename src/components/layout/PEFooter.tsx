import { BrandLockup } from "@/components/brand/BrandLockup";
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";
import type { FooterCopy } from "@/content/site-copy";

type PEFooterProps = {
  copy: FooterCopy;
  trustBadgeText: string;
};

export function PEFooter({ copy, trustBadgeText }: PEFooterProps) {
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
