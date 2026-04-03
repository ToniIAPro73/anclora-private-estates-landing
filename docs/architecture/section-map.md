### `src/App.tsx`

```tsx
import { PENavbar } from "@/components/layout/PENavbar";
import { PEFooter } from "@/components/layout/PEFooter";
import { HeroSection } from "@/sections/HeroSection";
import { CredibilitySection } from "@/sections/CredibilitySection";
import { MallorcaFocusSection } from "@/sections/MallorcaFocusSection";
import { InvestorSection } from "@/sections/InvestorSection";
import { SellerIntakeSection } from "@/sections/SellerIntakeSection";
import { DataLabSignalsSection } from "@/sections/DataLabSignalsSection";
import { EcosystemAccessSection } from "@/sections/EcosystemAccessSection";
import { FAQSection } from "@/sections/FAQSection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function App() {
  return (
    <>
      <PENavbar />

      <main>
        <HeroSection />
        <CredibilitySection />
        <MallorcaFocusSection />
        <InvestorSection />
        <SellerIntakeSection />
        <DataLabSignalsSection />
        <EcosystemAccessSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <PEFooter />
    </>
  );
}
```
