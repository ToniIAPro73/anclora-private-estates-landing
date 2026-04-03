### `src/sections/FAQSection.tsx`

```tsx
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  items?: FAQItem[];
};

export function FAQSection({
  eyebrow = "Preguntas frecuentes",
  title = "Respuestas breves para objeciones importantes.",
  items = [
    {
      question:
        "¿Qué hace diferente a Anclora Private Estates de una agencia tradicional?",
      answer:
        "Combinamos posicionamiento premium, lectura territorial, criterio comercial y respaldo internacional de eXp Realty. La diferencia no está solo en mostrar propiedades, sino en cómo se interpreta el activo, el momento y el acceso adecuado.",
    },
    {
      question:
        "¿En qué zonas se concentra principalmente vuestro foco?",
      answer:
        "Trabajamos especialmente Palma y el suroeste de Mallorca, incluyendo Son Vida, Cala Major, San Agustín, Cas Català, Illetas, Portals, Bendinat, Costa d'en Blanes, Punta Negra, Puerto de Andratx, Andratx, Esporles y Valldemossa.",
    },
    {
      question:
        "¿Qué aporta Anclora Data Lab al comprador o inversor premium?",
      answer:
        "Aporta lectura territorial, señales de mercado y contexto más útil para decidir mejor. No sustituye el criterio humano, pero reduce ruido, mejora el timing y ayuda a diferenciar entre una oportunidad visible y una oportunidad realmente bien posicionada.",
    },
    {
      question:
        "¿Qué supone para el cliente vuestro vínculo con eXp Realty?",
      answer:
        "Supone un respaldo internacional que refuerza confianza, alcance y capacidad operativa. La marca protagonista sigue siendo Anclora Private Estates, pero eXp Realty aporta un marco sólido para acompañar operaciones con mayor seguridad y proyección.",
    },
  ],
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[var(--pe-surface-soft)]">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--pe-text-muted)]">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] text-[var(--pe-text)] md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="rounded-[2rem] bg-[var(--pe-bg)] p-6 shadow-[var(--pe-shadow-soft)] md:p-7"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="font-serif text-2xl leading-tight text-[var(--pe-text)]">
                    {item.question}
                  </span>

                  <span className="mt-1 text-xl text-[var(--pe-text-muted)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--pe-text-soft)]">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```
