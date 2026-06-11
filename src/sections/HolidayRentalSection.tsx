import type { HolidayRentalCopy } from "@/content/site-copy";

type HolidayRentalSectionProps = {
  copy: HolidayRentalCopy;
};

export function HolidayRentalSection({ copy }: HolidayRentalSectionProps) {
  function scrollToContact(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.history.pushState(null, "", "#clientes");
    const target = document.querySelector(".pe-owner-shell");
    const navbar = document.querySelector(".pe-navbar");
    if (!target) return;
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop - navbarHeight - 24, behavior: "smooth" });
  }

  return (
    <section id="alquiler-vacacional" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-section-heading" style={{ maxWidth: "48rem" }}>
          <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
          <p className="pe-section-copy" style={{ margin: "1rem 0 0" }}>{copy.body}</p>
        </div>

        {(copy.forWhom || copy.whatWeReview) && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {copy.forWhom && copy.forWhomLabel && (
              <div className="pe-card pe-pillar-card">
                <h3
                  className="pe-card-gold-title"
                  style={{ margin: "0 0 1rem", fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {copy.forWhomLabel}
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {copy.forWhom.map((item) => (
                    <li
                      key={item}
                      style={{ color: "var(--pe-text-soft)", lineHeight: 1.75, paddingLeft: "1.25rem", position: "relative" }}
                    >
                      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: "0.15em", color: "var(--pe-gold)", fontSize: "0.75rem" }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {copy.whatWeReview && copy.whatWeReviewLabel && (
              <div className="pe-card pe-pillar-card">
                <h3
                  className="pe-card-gold-title"
                  style={{ margin: "0 0 1rem", fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  {copy.whatWeReviewLabel}
                </h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {copy.whatWeReview.map((item) => (
                    <li
                      key={item}
                      style={{ color: "var(--pe-text-soft)", lineHeight: 1.75, paddingLeft: "1.25rem", position: "relative" }}
                    >
                      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: "0.15em", color: "var(--pe-gold)", fontSize: "0.75rem" }}>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <aside className="pe-stack" style={{ gap: "1rem" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {copy.benefits.map((benefit) => (
              <li
                key={benefit}
                style={{ color: "var(--pe-text-soft)", lineHeight: 1.75, paddingLeft: "1.25rem", position: "relative" }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: 0, top: "0.15em", color: "var(--pe-gold)", fontSize: "0.75rem" }}
                >
                  ◆
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <p
            style={{
              color: "var(--pe-text-muted)",
              fontSize: "0.85rem",
              fontStyle: "italic",
              lineHeight: 1.7,
              margin: "0.5rem 0 0",
              borderLeft: "2px solid var(--pe-gold-muted, #8b7536)",
              paddingLeft: "0.875rem",
            }}
          >
            {copy.technologyNote}
          </p>
        </aside>

        {copy.prudenceNote && (
          <p
            style={{
              color: "var(--pe-text-muted)",
              fontSize: "0.8rem",
              lineHeight: 1.7,
              padding: "0.875rem 1rem",
              border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "4px",
              margin: 0,
            }}
          >
            {copy.prudenceNote}
          </p>
        )}

        <div className="pe-cta-row">
          <a
            href="#clientes"
            className="pe-btn-primary pe-btn-primary-gold"
            onClick={scrollToContact}
          >
            {copy.primaryCta}
          </a>
          <a href="#contacto" className="pe-btn-secondary pe-btn-secondary-ghost">{copy.secondaryCta}</a>
        </div>
      </div>
    </section>
  );
}
