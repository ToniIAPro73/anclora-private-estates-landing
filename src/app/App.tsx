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

const STORAGE_KEY = "ape:language";

export default function App() {
  const [language, setLanguage] = useState<"es" | "en" | "de">(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "de" ? stored : "es";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <>
      <PENavbar language={language} onLanguageChange={setLanguage} />

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
