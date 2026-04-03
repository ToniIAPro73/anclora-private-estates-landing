### `src/sections/DataLabSignalsSection.tsx`

```tsx
type DataSignal = {
  eyebrow: string;
  title: string;
  body: string;
};

type DataLabSignalsSectionProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primarySignal?: DataSignal;
  secondarySignals?: DataSignal[];
};

export function DataLabSignalsSection({
  eyebrow = "Anclora Data Lab",
  title = "Señales territoriales para leer mejor el mercado premium.",
  body = "No publicamos ruido. Traducimos contexto territorial, oferta, demanda y timing en señales más útiles para propietarios, compradores e inversores que necesitan criterio antes de ejecutar.",
  primarySignal = {
    eyebrow: "Signal 01",
    title:
      "La escasez de producto prime bien posicionado sigue favoreciendo decisiones más selectivas y menos reactivas.",
    body:
      "En Palma y el suroeste, la combinación de oferta limitada, demanda internacional persistente y sensibilidad creciente al producto turnkey está reforzando el valor de los activos bien preparados, bien narrados y bien situados.",
  },
  secondarySignals = [
    {
      eyebrow: "Signal 02",
      title:
        "La microzona importa más que la etiqueta general del municipio.",
      body:
        "No todas las áreas costeras ni todas las zonas próximas a Palma responden igual. El comportamiento del comprador, la liquidez y la prima percibida varían según acceso, privacidad, vistas, servicios y narrativa residencial.",
    },
    {
      eyebrow: "Signal 03",
      title:
        "La preparación del activo condiciona cada vez más la velocidad y la calidad de la operación.",
      body:
        "En el segmento premium, la presentación, el encaje territorial y la coherencia comercial pesan más que la mera exposición. La diferencia no está solo en salir al mercado, sino en cómo y cuándo hacerlo.",
    },
  ],
}: DataLabSignalsSectionProps) {
  return (
    <section id="data-lab" className="bg-[var(--pe-surface-soft)]">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] bg-[var(--pe-brand)] p-8 text-white shadow-[var(--pe-shadow-medium)] md:p-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              {primarySignal.eyebrow}
            </p>

            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em]">
              {primarySignal.title}
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/82">
              {primarySignal.body}
            </p>

            <div className="mt-8">
              <a
                href="#contacto"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--pe-brand)] transition hover:translate-y-[-1px] hover:opacity-95"
              >
                Solicitar acceso selectivo
              </a>
            </div>
          </article>

          <div className="grid gap-6">
            {secondarySignals.map((signal) => (
              <article
                key={signal.title}
                className="rounded-[2rem] bg-[var(--pe-surface-low)] p-7 shadow-[var(--pe-shadow-soft)] md:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pe-text-muted)]">
                  {signal.eyebrow}
                </p>

                <h3 className="mt-4 font-serif text-2xl leading-tight text-[var(--pe-text)]">
                  {signal.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--pe-text-soft)]">
                  {signal.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```
