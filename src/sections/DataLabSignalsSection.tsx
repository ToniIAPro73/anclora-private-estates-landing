import type { DataLabCopy } from "@/content/site-copy";

type DataLabSignalsSectionProps = {
  copy: DataLabCopy;
};

export function DataLabSignalsSection({ copy }: DataLabSignalsSectionProps) {
  return (
    <section id="data-lab" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div className="pe-section-heading pe-section-heading--split">
          <div>
            <p className="pe-eyebrow pe-kicker">{copy.eyebrow}</p>
            <h2 className="pe-section-title">{copy.title}</h2>
          </div>
          <p className="pe-section-copy pe-section-copy--narrow" style={{ margin: 0 }}>
            {copy.intro}
          </p>
        </div>

        <div className="pe-grid-feature pe-datalab-grid">
          <article className="pe-card pe-offset-card pe-card-hover-gold pe-datalab-lead pe-datalab-card--interactive" data-testid="datalab-lead-card">
            <div className="pe-datalab-lead__ornament" aria-hidden="true" />
            <p className="pe-eyebrow pe-datalab-card__eyebrow">{copy.lead.eyebrow}</p>
            <h3 className="pe-datalab-lead__title">{copy.lead.title}</h3>
            {copy.lead.body ? <p className="pe-datalab-lead__body">{copy.lead.body}</p> : null}
          </article>

          <div className="pe-stack" style={{ gap: "1rem" }}>
            {copy.signals.map((signal, index) => (
              <article key={signal.eyebrow} className="pe-card pe-offset-card pe-card-hover-gold pe-datalab-card pe-datalab-card--interactive" data-testid={`datalab-card-${index + 1}`}>
                <p className="pe-eyebrow pe-datalab-card__eyebrow" style={{ marginBottom: "0.75rem" }}>
                  {signal.eyebrow}
                </p>
                <h3 className="pe-datalab-card__title">{signal.title}</h3>
                {signal.body ? <p className="pe-section-copy pe-datalab-card__body" style={{ margin: 0 }}>{signal.body}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
