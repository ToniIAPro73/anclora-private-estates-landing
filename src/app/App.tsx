import { useEffect, useState } from "react";
import { siteCopyByLanguage } from "@/content/site-copy";
import type { LanguageCode } from "@/content/site-copy";
import { PEFooter } from "@/components/layout/PEFooter";
import { PENavbar } from "@/components/layout/PENavbar";
import { ContactSection } from "@/sections/ContactSection";
import { CredibilitySection } from "@/sections/CredibilitySection";
import { DataLabSignalsSection } from "@/sections/DataLabSignalsSection";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { HeroSection } from "@/sections/HeroSection";
import { InvestorSection } from "@/sections/InvestorSection";
import { MallorcaFocusSection } from "@/sections/MallorcaFocusSection";
import { PartnersSynergiSection } from "@/sections/PartnersSynergiSection";
import { SellerIntakeSection } from "@/sections/SellerIntakeSection";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { FloatingControls } from "@/components/layout/FloatingControls";
import { CookieBanner } from "@/components/layout/CookieBanner";

const STORAGE_KEY = "ape:language";

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "de" || stored === "fr" ? stored : "es";
  });
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const copy = siteCopyByLanguage[language];

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  return (
    <>
      <PENavbar copy={copy.navbar} language={language} onLanguageChange={setLanguage} />

      <main>
        <HeroSection copy={copy.hero} trustBadgeText={copy.trustBadgeText} />
        <CredibilitySection copy={copy.credibility} />
        <MallorcaFocusSection copy={copy.mallorcaFocus} />
        <InvestorSection copy={copy.investors} />
        <SellerIntakeSection copy={copy.sellerIntake} />
        <PartnersSynergiSection copy={copy.partners} language={language} />
        <DataLabSignalsSection copy={copy.dataLab} language={language} />
        <ContactSection copy={copy.contact} />
        <FinalCTASection copy={copy.finalCta} />
      </main>

      <PEFooter copy={copy.footer} trustBadgeText={copy.trustBadgeText} />

      {/* Global Components */}
      <SocialSidebar copy={copy.social} />
      <FloatingControls 
        onOpenCookieModal={() => setIsCookieModalOpen(true)}
        scrollCopy={copy.scroll}
        contactLabel={copy.contactFloatingLabel}
      />
      <CookieBanner 
        isOpen={isCookieModalOpen} 
        onClose={() => setIsCookieModalOpen(false)} 
        copy={copy.cookies}
      />
    </>
  );
}
