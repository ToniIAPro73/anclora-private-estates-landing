type BrandLockupProps = {
  variant?: "mark" | "full" | "full-exp";
};

export function BrandLockup({ variant = "full" }: BrandLockupProps) {
  if (variant === "mark") {
    return <span style={{ fontFamily: "var(--pe-font-display)", fontStyle: "italic" }}>A</span>;
  }

  return (
    <div className="pe-stack" style={{ gap: "0.2rem" }}>
      <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.55rem", fontStyle: "italic", letterSpacing: "-0.03em" }}>
        Anclora Private Estates
      </div>
      {variant === "full-exp" ? (
        <div className="pe-eyebrow" style={{ marginTop: 0, color: "var(--pe-text-muted)" }}>
          by eXp Group Spain
        </div>
      ) : null}
    </div>
  );
}
