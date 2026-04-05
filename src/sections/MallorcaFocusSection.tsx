import type { MallorcaFocusCopy } from "@/content/site-copy";

const MALLORCA_FOCUS_IMAGE =
  "https://customer-assets.emergentagent.com/job_luxury-landing-hub/artifacts/bllgrtju_Mallorca_focus_v5.png";

type MallorcaFocusSectionProps = {
  copy: MallorcaFocusCopy;
};

export function MallorcaFocusSection({ copy }: MallorcaFocusSectionProps) {
  return (
    <section id="mallorca-focus" className="pe-section pe-section-territory">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>

        {/* Two-column intro: text left, image right */}
        <div className="pe-grid-feature pe-investor-intro">
          <div className="pe-section-heading">
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>

          <aside className="pe-investor-aside pe-investor-aside--image">
            <img
              className="pe-investor-aside__image"
              src={MALLORCA_FOCUS_IMAGE}
              alt="Costa de Mallorca con aguas turquesa y embarcación en cala privada"
            />
            <div className="pe-investor-aside__overlay" />
            <div className="pe-investor-aside__copy">
              <p className="pe-investor-aside__quote" style={{ fontStyle: "italic" }}>
                {copy.intro}
              </p>
            </div>
          </aside>
        </div>

        {/* Cluster cards */}
        <div className="pe-stack" style={{ gap: "1.5rem" }}>
          {copy.clusters.map((cluster) => (
            <article
              key={cluster.id}
              className="pe-card pe-offset-card pe-card-hover-gold pe-microzone-card pe-microzone-card--editorial pe-microzone-card--interactive"
              data-testid={`mallorca-cluster-${cluster.id}`}
            >
              <div className="pe-microzone-card__meta">
                <p className="pe-eyebrow pe-microzone-card__eyebrow">{cluster.eyebrow}</p>
                <h3 className="pe-microzone-card__title">{cluster.title}</h3>
                <div className="pe-microzone-card__areas">
                  <strong>{copy.areasLabel}</strong>
                  <span>{cluster.areas.join(" · ")}</span>
                </div>
              </div>

              <div className="pe-stack" style={{ gap: "1rem" }}>
                <p className="pe-microzone-card__body">{cluster.body}</p>
                <div className="pe-microzone-card__audience">
                  <span>{cluster.audienceLabel}</span>
                  <p style={{ margin: 0 }}>{cluster.audience}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
