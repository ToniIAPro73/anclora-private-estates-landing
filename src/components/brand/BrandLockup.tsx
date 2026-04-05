type BrandLockupProps = {
  variant?: "mark" | "full" | "full-exp";
};

export function BrandLockup({ variant = "full" }: BrandLockupProps) {
  if (variant === "mark") {
    return <span style={{ fontFamily: "var(--pe-font-display)", fontStyle: "italic" }}>A</span>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/brand/logo-anclora-private-estates-exp.png"
        alt={variant === "full-exp" ? "Anclora Private Estates by eXp Group Spain" : "Anclora Private Estates"}
        style={{
          display: "block",
          width: "auto",
          height: variant === "full-exp" ? "clamp(2.9rem, 4.5vw, 3.8rem)" : "2.6rem",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}
