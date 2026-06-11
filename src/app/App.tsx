import { useEffect, useState } from "react";
import { siteCopyByLanguage } from "@/content/site-copy";
import type { LanguageCode } from "@/content/site-copy";
import { resolveInitialLocale } from "@/lib/anclora-language-toggle";
import { LegalPagePE } from "@/components/legal/LegalPagePE";
import { PEFooter } from "@/components/layout/PEFooter";
import { PENavbar } from "@/components/layout/PENavbar";
import { ContactSection } from "@/sections/ContactSection";
import { CredibilitySection } from "@/sections/CredibilitySection";
import { EditorialHubSection } from "@/sections/EditorialHubSection";
import { FAQSection } from "@/sections/FAQSection";
import { HolidayRentalSection } from "@/sections/HolidayRentalSection";
import { HowWeWorkSection } from "@/sections/HowWeWorkSection";
import { DataLabSignalsSection } from "@/sections/DataLabSignalsSection";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { HeroSection } from "@/sections/HeroSection";
import { InvestorSection } from "@/sections/InvestorSection";
import { MallorcaFocusSection } from "@/sections/MallorcaFocusSection";
import { PartnersSynergiSection } from "@/sections/PartnersSynergiSection";
import { AfterContactSection } from "@/sections/AfterContactSection";
import { SellerIntakeSection } from "@/sections/SellerIntakeSection";
import { SocialSidebar } from "@/components/layout/SocialSidebar";
import { FloatingControls } from "@/components/layout/FloatingControls";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { editorialHubCopy } from "@/content/editorial/hub-copy";
import { trackEvent } from "@/hooks/useAnalytics";
import { useBehaviorSignals } from "@/hooks/useBehaviorSignals";

const STORAGE_KEY = "ape:language";

const legalPath = typeof window !== 'undefined' ? window.location.pathname.replace(/^\/+/, '') : '';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return resolveInitialLocale({
      urlLocale: searchParams.get("lang") ?? searchParams.get("locale"),
      persistedLocale: window.localStorage.getItem(STORAGE_KEY),
      browserLocales: Array.from(window.navigator.languages ?? [window.navigator.language]),
    });
  });
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const copy = siteCopyByLanguage[language];
  const { getSignals, recordCtaClick } = useBehaviorSignals();

  const handleLanguageChange = (lang: LanguageCode) => {
    trackEvent("language_change", { locale: lang });
    setLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    const setMeta = (selector: string, content: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    };

    document.title = copy.seo.title;
    setMeta('meta[name="description"]', copy.seo.description);
    setMeta('meta[property="og:title"]', copy.seo.ogTitle);
    setMeta('meta[property="og:description"]', copy.seo.ogDescription);
    setMeta('meta[name="twitter:title"]', copy.seo.ogTitle);
    setMeta('meta[name="twitter:description"]', copy.seo.ogDescription);

    const schemaNode = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (schemaNode) {
      const schema = JSON.parse(schemaNode.textContent || "{}");
      schema.description = copy.seo.schemaDescription;
      schema.serviceType = copy.seo.serviceType;
      schemaNode.textContent = JSON.stringify(schema);
    }
  }, [copy]);

  if (legalPath === 'privacy' || legalPath === 'terms' || legalPath === 'legal') {
    return <LegalPagePE kind={legalPath} language={language} />;
  }

  return (
    <>
      <PENavbar copy={copy.navbar} language={language} onLanguageChange={handleLanguageChange} />

      <main>
        <HeroSection copy={copy.hero} trustBadgeText={copy.trustBadgeText} onCtaClick={recordCtaClick} />
        <CredibilitySection copy={copy.credibility} />
        <HowWeWorkSection copy={copy.howWeWork} />
        <MallorcaFocusSection copy={copy.mallorcaFocus} mediaAlt={copy.mediaAlt} />
        <HolidayRentalSection copy={copy.holidayRental} />
        <InvestorSection copy={copy.investors} mediaAlt={copy.mediaAlt} />
        <AfterContactSection copy={copy.afterContact} />
        <SellerIntakeSection copy={copy.sellerIntake} getSignals={getSignals} />
        <FAQSection copy={copy.faq} />
        <PartnersSynergiSection copy={copy.partners} language={language} />
        <DataLabSignalsSection copy={copy.dataLab} language={language} />
        <EditorialHubSection hub={editorialHubCopy} />
        <ContactSection copy={copy.contact} />
        <FinalCTASection copy={copy.finalCta} mediaAlt={copy.mediaAlt} onCtaClick={recordCtaClick} />
      </main>

      <PEFooter
        copy={copy.footer}
        trustBadgeText={copy.trustBadgeText}
        language={language}
      />

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
