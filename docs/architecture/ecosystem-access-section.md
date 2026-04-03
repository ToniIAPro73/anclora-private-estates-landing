### `src/sections/EcosystemAccessSection.tsx`

```tsx
type EcosystemCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
  tone?: "light" | "deep";
};

type EcosystemAccessSectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  cards?: EcosystemCard[];
};

export function EcosystemAccessSection({
  eyebrow = "Selective ecosystem access",
  title = "Dos capas de valor más allá de la intermediación tradicional.",
  body = "Anclora Private Estates forma parte de un ecosistema más amplio diseñado para aportar inteligencia territorial, continuidad relacional y acceso selectivo a recursos que no deberían presentarse como un catálogo abierto ni como un backoffice expuesto al público.",
  cards = [
    {
      eyebrow: "Anclora Data Lab",
      title: "Inteligencia territorial selectiva.",
      body: "Señales, lecturas de mercado y criterio analítico para quienes necesitan más contexto del que ofrece una web inmobiliaria convencional.",
      cta: {
        label: "Solicitar acceso a Data Lab",
        href: "#contacto",
      },
      tone: "light",
    },
    {
      eyebrow: "Anclora Synergi",
      title: "Red curada de partners y colaboración premium.",
      body: "Un entorno pensado para activar perfiles especializados cuando la operación requiere continuidad, coordinación y confianza jurídica, patrimonial o técnica.",
      cta: {
        label: "Explorar colaboración",
        href: "#contacto",
      },
      tone: "deep",
    },
  ],
}: EcosystemAccessSectionProps) {
  return (
    <section className="bg-[var(--pe-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--pe-text-muted)]">
              {eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[var(--pe-text)] md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--pe-text-soft)]">
              {body}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className={[
                "rounded-[2rem] p-8 shadow-[var(--pe-shadow-soft)] md:p-9",
                card.tone === "deep"
                  ? "bg-[var(--pe-deep-surface)] text-[var(--pe-deep-text)]"
                  : "bg-[var(--pe-surface-low)] text-[var(--pe-text)]",
              ].join(" ")}
            >
              <p
                className={[
                  "text-[11px] font-semibold uppercase tracking-[0.22em]",
                  card.tone === "deep"
                    ? "text-[var(--pe-deep-muted)]"
                    : "text-[var(--pe-text-muted)]",
                ].join(" ")}
              >
                {card.eyebrow}
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em]">
                {card.title}
              </h3>

              <p
                className={[
                  "mt-5 text-sm leading-7",
                  card.tone === "deep"
                    ? "text-[var(--pe-deep-muted)]"
                    : "text-[var(--pe-text-soft)]",
                ].join(" ")}
              >
                {card.body}
              </p>

              <div className="mt-8">
                <a
                  href={card.cta.href}
                  className={[
                    "inline-flex min-h-[48px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px]",
                    card.tone === "deep"
                      ? "bg-white text-[var(--pe-brand)] hover:opacity-95"
                      : "bg-[var(--pe-brand)] text-white hover:opacity-95",
                  ].join(" ")}
                >
                  {card.cta.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```
