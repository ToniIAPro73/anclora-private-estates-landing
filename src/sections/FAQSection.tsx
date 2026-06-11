import { useState } from "react";
import type { FAQSectionCopy } from "@/content/site-copy";
import { trackEvent } from "@/hooks/useAnalytics";

type FAQSectionProps = {
  copy: FAQSectionCopy;
};

export function FAQSection({ copy }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pe-section pe-section-soft">
      <div className="pe-container pe-stack" style={{ gap: "2.5rem" }}>
        <div style={{ textAlign: "center" }}>
          <p className="pe-eyebrow pe-kicker" style={{ margin: "0 0 0.8rem" }}>{copy.eyebrow}</p>
          <h2 className="pe-section-title" style={{ margin: "0 auto", maxWidth: "36ch" }}>{copy.title}</h2>
        </div>

        <div className="pe-stack" style={{ gap: "0.75rem", maxWidth: "52rem", margin: "0 auto", width: "100%" }}>
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={index}
                className="pe-card pe-offset-card"
                style={{ padding: 0, overflow: "hidden" }}
                data-testid={`faq-item-${index + 1}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => {
                    if (!isOpen) trackEvent("faq_open", { question_index: index });
                    setOpenIndex(isOpen ? null : index);
                  }}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--pe-font-serif)",
                      fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)",
                      color: "var(--pe-text)",
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--pe-gold)",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      display: "inline-block",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      borderTop: "1px solid var(--pe-border-subtle, rgba(212,175,55,0.15))",
                      paddingTop: "1rem",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--pe-text-soft)",
                        lineHeight: 1.85,
                        margin: 0,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
