### `src/sections/FinalCTASection.tsx`

```tsx
import { ExpTrustBadge } from "@/components/brand/ExpTrustBadge";

type FinalCTASectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function FinalCTASection({
  eyebrow = "Private conversation",
  title = "El siguiente paso no es ver más ruido. Es abrir la conversación adecuada.",
  body = "Palma y el suroeste de Mallorca exigen criterio territorial, confidencialidad y una ejecución comercial más precisa. Si estás valorando vender, comprar o explorar una oportunidad patrimonial, podemos estudiar tu caso de forma privada.",
  primaryCta = {
    label: "Solicitar evaluación confidencial",
    href: "#propietarios",
  },
  secondaryCta = {
    label: "Abrir conversación privada",
    href: "#contacto",
  },
}: FinalCTASectionProps) {
  return (
    <section className="bg-[var(--pe-deep-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="rounded-[2.5rem] bg-[var(--pe-deep-surface)] px-8 py-12 shadow-[var(--pe-shadow-strong)] md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--pe-deep-muted)]">
              {eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-[1] tracking-[-0.03em] text-[var(--pe-deep-text)] md:text-5xl lg:text-6xl">
              {title}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--pe-deep-muted)] md:text-lg">
              {body}
            </p>

            <div className="mt-8">
              <ExpTrustBadge
                mode="footer"
                className="text-[var(--pe-deep-muted)]"
                text="Respaldo internacional y confianza operativa a través de eXp Realty."
              />
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={primaryCta.href}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[var(--pe-brand)] transition hover:translate-y-[-1px] hover:opacity-95"
              >
                {primaryCta.label}
              </a>

              <a
                href={secondaryCta.href}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/6 px-7 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-white/10"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```
