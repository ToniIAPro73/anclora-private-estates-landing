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

  const renderText = (str: string) => {
    const parts = str.split(/(eXp Group Spain)/g);
    return parts.map((part, i) =>
      part === "eXp Group Spain" ? (
        <span key={i} style={{ color: "var(--pe-gold)", fontWeight: 600 }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        borderRadius: "999px",
        padding: mode === "inline" ? "0.65rem 0.9rem" : "0.85rem 1rem",
        background,
        color: "var(--pe-text)",
        maxWidth: mode === "inline" ? "34rem" : "100%",
      }}
    >
      <span style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>{renderText(text)}</span>
    </div>
  );
}
