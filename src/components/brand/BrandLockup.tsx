type BrandLockupProps = {
  variant?: "mark" | "full" | "full-exp";
};

export function BrandLockup({ variant = "full" }: BrandLockupProps) {
  if (variant === "mark") {
    return <span style={{ fontFamily: "var(--pe-font-display)", fontStyle: "italic" }}>A</span>;
  }

  return (
    <div>
      <div style={{ fontFamily: "var(--pe-font-display)", fontSize: "1.5rem", fontStyle: "italic" }}>
        Anclora Private Estates
      </div>
      {variant === "full-exp" ? (
        <div className="pe-eyebrow" style={{ marginTop: "0.35rem" }}>
          by eXp Group Spain
        </div>
      ) : null}
    </div>
  );
}
