import type { EditorialHub, EditorialArticle, EditorialCategory } from "@/content/editorial/types";

type EditorialHubSectionProps = {
  hub: EditorialHub;
};

const CATEGORY_LABELS: Record<EditorialCategory, string> = {
  "market-signals": "Señales de mercado",
  "investment-guide": "Guía de inversión",
  "zone-profile": "Perfil de zona",
  "seller-guide": "Guía del vendedor",
};

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
}

function ArticleCard({ article }: { article: EditorialArticle }) {
  return (
    <article
      className="pe-card pe-offset-card pe-card-hover-gold"
      data-testid={`editorial-card-${article.id}`}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", height: "100%" }}>
        <p
          className="pe-eyebrow pe-kicker"
          style={{ margin: 0 }}
          aria-label={`Categoría: ${CATEGORY_LABELS[article.category]}`}
        >
          {CATEGORY_LABELS[article.category]}
        </p>

        <h3
          style={{
            color: "var(--pe-text-primary, #f0ede6)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontFamily: "var(--pe-font-serif)",
            lineHeight: 1.45,
            margin: 0,
          }}
        >
          {article.title}
        </h3>

        <p
          className="pe-section-copy"
          style={{ margin: 0, flex: 1, color: "var(--pe-text-soft)" }}
        >
          {article.excerpt}
        </p>

        <footer
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "0.75rem",
            borderTop: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          <span
            style={{
              color: "var(--pe-text-muted)",
              fontSize: "0.75rem",
              fontFamily: "var(--pe-font-sans)",
              letterSpacing: "0.06em",
            }}
          >
            {article.readingTimeMin} min de lectura
          </span>
          <span
            style={{
              color: "var(--pe-text-muted)",
              fontSize: "0.75rem",
              fontFamily: "var(--pe-font-sans)",
            }}
          >
            {formatDate(article.publishedAt)}
          </span>
        </footer>
      </div>
    </article>
  );
}

export function EditorialHubSection({ hub }: EditorialHubSectionProps) {
  return (
    <section id="editorial" className="pe-section">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div style={{ textAlign: "center" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: "0 0 0.6rem" }}>
            {hub.eyebrow}
          </p>
          <h2
            className="pe-section-title"
            style={{ margin: "0 auto", maxWidth: "32ch" }}
          >
            {hub.title}
          </h2>
          <p
            className="pe-section-copy"
            style={{ margin: "1rem auto 0", maxWidth: "56ch", color: "var(--pe-text-soft)" }}
          >
            {hub.intro}
          </p>
        </div>

        <div className="pe-grid-3" data-testid="editorial-grid">
          {hub.articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            className="pe-btn-secondary"
            aria-label={hub.ctaLabel}
            data-testid="editorial-cta"
          >
            {hub.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
