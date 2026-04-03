type ExpTrustBadgeProps = {
  mode?: "inline" | "card" | "footer";
  text?: string;
};

export function ExpTrustBadge({
  mode = "inline",
  text = "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
}: ExpTrustBadgeProps) {
  const background =
    mode === "footer"
      ? "color-mix(in srgb, var(--pe-surface-high) 50%, transparent)"
      : "color-mix(in srgb, var(--pe-surface-high) 78%, transparent)";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        borderRadius: "999px",
        padding: mode === "inline" ? "0.65rem 0.9rem" : "0.85rem 1rem",
        background,
        color: "var(--pe-text-soft)",
        maxWidth: mode === "inline" ? "34rem" : "100%",
      }}
    >
      <span className="pe-eyebrow" style={{ color: "var(--pe-gold)", paddingTop: "0.15rem" }}>
        eXp
      </span>
      <span style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>{text}</span>
    </div>
  );
}
