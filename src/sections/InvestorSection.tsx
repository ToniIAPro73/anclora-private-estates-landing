import type { InvestorCopy } from "@/content/site-copy";

const INVESTOR_IMAGE = "/brand/investor-mallorca.jpg";

type InvestorSectionProps = {
  copy: InvestorCopy;
};

export function InvestorSection({ copy }: InvestorSectionProps) {
  return (
    <section id="inversores" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-grid-feature pe-investor-intro">
          <div className="pe-section-heading">
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
            <p className="pe-section-copy" style={{ margin: 0, maxWidth: "36rem" }}>
              {copy.intro}
            </p>
          </div>

          <aside className="pe-investor-aside pe-investor-aside--image">
            <img className="pe-investor-aside__image" src={INVESTOR_IMAGE} alt="Terraza premium con piscina y vistas al mar en Mallorca" />
            <div className="pe-investor-aside__overlay" />
            <div className="pe-investor-aside__copy">
              <p className="pe-investor-aside__quote">{copy.asideQuote}</p>
            </div>
          </aside>
        </div>

        <div className="pe-grid-3">
          {copy.profiles.map((profile, index) => (
            <article key={profile.title} className="pe-card pe-offset-card pe-card-hover-gold pe-investor-card" data-testid={`investor-card-${index + 1}`}>
              <span className="pe-investor-card__index">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="pe-card-gold-title pe-investor-card__title">{profile.title}</h3>
              <p style={{ color: "var(--pe-text-soft)", lineHeight: 1.8, margin: 0 }}>{profile.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
