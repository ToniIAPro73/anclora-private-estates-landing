import { useEffect, useState } from "react";
import { PEFooter } from "@/components/layout/PEFooter";
import { PENavbar } from "@/components/layout/PENavbar";
import { ContactSection } from "@/sections/ContactSection";
import { CredibilitySection } from "@/sections/CredibilitySection";
import { DataLabSignalsSection } from "@/sections/DataLabSignalsSection";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { HeroSection } from "@/sections/HeroSection";
import { InvestorSection } from "@/sections/InvestorSection";
import { MallorcaFocusSection } from "@/sections/MallorcaFocusSection";
import { SellerIntakeSection } from "@/sections/SellerIntakeSection";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = "es";
  }, [theme]);

  return (
    <>
      <PENavbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      <main>
        <HeroSection />
        <CredibilitySection />
        <MallorcaFocusSection />
        <InvestorSection />
        <SellerIntakeSection />
        <DataLabSignalsSection />
        <ContactSection />
        <FinalCTASection />
      </main>

      <PEFooter />
    </>
  );
}
