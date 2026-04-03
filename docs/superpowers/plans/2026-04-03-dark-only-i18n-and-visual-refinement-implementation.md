# Dark-Only I18n And Visual Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the landing to dark-only mode, add a premium `ES / EN / DE` language switcher with complete translated copy, and refine the visual system so the page feels more media-led and less text-heavy while staying faithful to the canonical dark direction.

**Architecture:** Keep the app as a lightweight Vite + React single-page landing, but replace theme state with language state and centralize all visible copy in a typed `site-copy` module. Refine the hero, investor cards, Mallorca Focus, and final CTA through the existing component structure so the design improves without changing the section architecture.

**Tech Stack:** React 19, TypeScript, Vite, Vitest, Testing Library, localStorage, CSS tokens/helpers, Playwright CLI for browser verification

---

## File Map

**Create:**
- `src/content/site-copy.ts` — typed source of truth for `es`, `en`, `de`
- `src/components/layout/LanguageSwitcher.tsx` — premium segmented language control for the header
- `public/assets/hero/hero-atelier-dark.svg` — dark editorial hero visual if no real photo asset is introduced

**Modify:**
- `src/app/App.tsx` — remove theme state, add language state, persist language, force dark theme
- `src/app/App.test.tsx` — replace theme toggle tests with dark-only and language-switch tests
- `src/components/layout/PENavbar.tsx` — remove theme toggle, add language switcher
- `src/sections/HeroSection.tsx` — consume translated content and introduce richer visual composition
- `src/sections/CredibilitySection.tsx` — consume translated content
- `src/sections/MallorcaFocusSection.tsx` — consume translated content, gold titles for area names
- `src/sections/InvestorSection.tsx` — consume translated content, gold titles, gold hover shadow
- `src/sections/SellerIntakeSection.tsx` — consume translated content
- `src/components/forms/SellerIntakeForm.tsx` — consume translated labels, placeholders, button text
- `src/sections/DataLabSignalsSection.tsx` — consume translated content
- `src/sections/ContactSection.tsx` — consume translated content
- `src/sections/FinalCTASection.tsx` — consume translated content, revise CTA palette with gold
- `src/components/layout/PEFooter.tsx` — consume translated content
- `src/styles/private-estates-tokens.css` — lock dark tokens and add gold accent variables if needed
- `src/styles/private-estates-helpers.css` — add language switcher styling, investor hover effect, CTA variant, Mallorca gold titles
- `src/styles/index.css` — dark-only root behavior if required

**Test/Verify:**
- `src/app/App.test.tsx`
- browser verification against local dev server in desktop and mobile

### Task 1: Replace Theme Behavior With Dark-Only App Shell

**Files:**
- Modify: `src/app/App.tsx`
- Modify: `src/app/App.test.tsx`
- Test: `src/app/App.test.tsx`

- [ ] **Step 1: Write the failing test for dark-only shell and language switcher presence**

```tsx
test("renders a dark-only shell with premium language switcher and no theme toggle", () => {
  render(<App />);

  const root = document.documentElement;
  expect(root.dataset.theme).toBe("dark");

  expect(
    screen.queryByRole("button", { name: /cambiar a light|cambiar a dark|tema light|tema dark/i }),
  ).not.toBeInTheDocument();

  expect(screen.getByRole("button", { name: /idioma español|español/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /idioma inglés|english/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /idioma alemán|deutsch/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test to verify it fails for the right reason**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- FAIL because the old theme toggle is still rendered
- FAIL because no language switcher exists yet

- [ ] **Step 3: Implement minimal dark-only app shell**

```tsx
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
      {/* sections receive language or resolved copy in later tasks */}
    </>
  );
}
```

- [ ] **Step 4: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- still FAIL because the premium language switcher is not implemented yet
- PASS for the dark-only theme expectation once `App.tsx` is updated

- [ ] **Step 5: Commit**

```bash
git add src/app/App.tsx src/app/App.test.tsx
git commit -m "refactor: make landing dark only"
```

### Task 2: Build The Premium Language Switcher

**Files:**
- Create: `src/components/layout/LanguageSwitcher.tsx`
- Modify: `src/components/layout/PENavbar.tsx`
- Modify: `src/styles/private-estates-helpers.css`
- Test: `src/app/App.test.tsx`

- [ ] **Step 1: Write the failing interaction test for language switching**

```tsx
test("switches between es, en, and de from the header language switcher", async () => {
  const user = userEvent.setup();
  render(<App />);

  expect(screen.getByRole("heading", { level: 1, name: /mallorca/i })).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /idioma inglés|english/i }));
  expect(screen.getByRole("button", { name: /idioma inglés|english/i })).toHaveAttribute("aria-pressed", "true");

  await user.click(screen.getByRole("button", { name: /idioma alemán|deutsch/i }));
  expect(screen.getByRole("button", { name: /idioma alemán|deutsch/i })).toHaveAttribute("aria-pressed", "true");
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- FAIL because the language switcher component and state wiring are incomplete

- [ ] **Step 3: Implement the segmented control component and navbar wiring**

```tsx
type LanguageCode = "es" | "en" | "de";

const languages: Array<{ code: LanguageCode; label: string; ariaLabel: string }> = [
  { code: "es", label: "ES", ariaLabel: "Idioma español" },
  { code: "en", label: "EN", ariaLabel: "Idioma inglés" },
  { code: "de", label: "DE", ariaLabel: "Idioma alemán" },
];

export function LanguageSwitcher({
  language,
  onLanguageChange,
}: {
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}) {
  return (
    <div className="pe-lang-switcher" role="group" aria-label="Selector de idioma">
      {languages.map((entry) => (
        <button
          key={entry.code}
          type="button"
          className={`pe-lang-btn ${language === entry.code ? "is-active" : ""}`}
          aria-label={entry.ariaLabel}
          aria-pressed={language === entry.code}
          onClick={() => onLanguageChange(entry.code)}
        >
          {entry.label}
        </button>
      ))}
    </div>
  );
}
```

```tsx
export function PENavbar({ language, onLanguageChange }: PENavbarProps) {
  return (
    <header>
      <nav>
        <BrandLockup variant="full-exp" />
        <div>{/* nav links */}</div>
        <div>
          <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          <a className="pe-btn-primary" href="#propietarios">…</a>
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 4: Add premium dark segmented-control styling**

```css
.pe-lang-switcher {
  display: inline-flex;
  align-items: center;
  padding: 0.28rem;
  border-radius: var(--pe-radius-pill);
  background: color-mix(in srgb, var(--pe-deep-surface) 76%, transparent);
  box-shadow: inset 0 0 0 1px rgba(233, 195, 73, 0.08);
}

.pe-lang-btn {
  min-height: 2.35rem;
  min-width: 2.75rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--pe-text-soft);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.pe-lang-btn.is-active {
  background: linear-gradient(135deg, rgba(233, 195, 73, 0.22), rgba(149, 209, 206, 0.16));
  color: var(--pe-deep-text);
}
```

- [ ] **Step 5: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- FAIL only because the page content is still not language-aware

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/LanguageSwitcher.tsx src/components/layout/PENavbar.tsx src/styles/private-estates-helpers.css src/app/App.test.tsx
git commit -m "feat: add premium language switcher"
```

### Task 3: Centralize All Landing Copy Into A Typed Site-Copy Module

**Files:**
- Create: `src/content/site-copy.ts`
- Modify: `src/app/App.tsx`
- Modify: all section and footer components listed in File Map
- Test: `src/app/App.test.tsx`

- [ ] **Step 1: Write the failing content regression test**

```tsx
test("renders Spanish by default without mixed English copy", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 2, name: /inversores nacionales/i })).toBeInTheDocument();
  expect(screen.queryByText(/private preview/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/method/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/contact details/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/audience/i)).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- FAIL because several English strings are still rendered in Spanish mode

- [ ] **Step 3: Create the typed content source**

```ts
export type LanguageCode = "es" | "en" | "de";

export type SiteCopy = {
  navbar: {
    mallorca: string;
    investors: string;
    owners: string;
    dataLab: string;
    contact: string;
    primaryCta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    chips: [string, string, string];
    note: string;
    primaryCta: string;
    secondaryCta: string;
    badge: string;
    previewEyebrow: string;
    previewTitle: string;
    methodEyebrow: string;
    methodBody: string;
    previewNote: string;
  };
  // credibility, mallorcaFocus, investors, sellerIntake, dataLab, contact, finalCta, footer...
};

export const siteCopy: Record<LanguageCode, SiteCopy> = {
  es: { /* full Spanish copy */ },
  en: { /* full English copy */ },
  de: { /* full German copy */ },
};
```

- [ ] **Step 4: Thread resolved copy through the app and sections**

```tsx
const copy = siteCopy[language];

<PENavbar language={language} onLanguageChange={setLanguage} copy={copy.navbar} />
<HeroSection copy={copy.hero} />
<CredibilitySection copy={copy.credibility} />
<MallorcaFocusSection copy={copy.mallorcaFocus} />
<InvestorSection copy={copy.investors} />
<SellerIntakeSection copy={copy.sellerIntake} />
<DataLabSignalsSection copy={copy.dataLab} />
<ContactSection copy={copy.contact} />
<FinalCTASection copy={copy.finalCta} />
<PEFooter copy={copy.footer} />
```

- [ ] **Step 5: Replace all inline strings in each section**

Representative pattern:

```tsx
export function ContactSection({ copy }: { copy: SiteCopy["contact"] }) {
  return (
    <section id="contacto" className="pe-section">
      <div className="pe-container pe-split-grid">
        <div>
          <p className="pe-eyebrow">{copy.eyebrow}</p>
          <h2 className="pe-section-title">{copy.title}</h2>
          <p className="pe-section-copy">{copy.body}</p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS for default Spanish consistency
- remaining failures should now be only on language switching expectations if copy labels are not fully aligned yet

- [ ] **Step 7: Commit**

```bash
git add src/content/site-copy.ts src/app/App.tsx src/sections src/components/forms/SellerIntakeForm.tsx src/components/layout/PEFooter.tsx src/app/App.test.tsx
git commit -m "feat: centralize translated landing copy"
```

### Task 4: Finish Full Language Switching Coverage For ES EN DE

**Files:**
- Modify: `src/app/App.test.tsx`
- Modify: `src/content/site-copy.ts`
- Modify: components that still hardcode labels or ids
- Test: `src/app/App.test.tsx`

- [ ] **Step 1: Expand the failing test to assert real copy changes**

```tsx
test("renders fully translated copy in English and German", async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole("button", { name: /idioma inglés|english/i }));
  expect(screen.getByRole("heading", { level: 2, name: /investors who need less noise/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/property type/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /request confidential valuation/i })).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: /idioma alemán|deutsch/i }));
  expect(screen.getByRole("heading", { level: 2, name: /investoren/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/immobilientyp/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /vertrauliche bewertung anfragen/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- FAIL because some sections, labels, or CTA strings are still not fully localized

- [ ] **Step 3: Complete missing translations and label wiring**

```ts
sellerIntake: {
  eyebrow: "Owners",
  title: "Selective acquisition for assets that need more than mass exposure.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    propertyTypeLabel: "Property type",
    // ...
  }
}
```

```tsx
<label>
  <span className="pe-eyebrow">{copy.form.propertyTypeLabel}</span>
  <select aria-label={copy.form.propertyTypeLabel}>…</select>
</label>
```

- [ ] **Step 4: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS for ES, EN, and DE switching coverage

- [ ] **Step 5: Commit**

```bash
git add src/app/App.test.tsx src/content/site-copy.ts src/components/forms/SellerIntakeForm.tsx src/components/layout/PENavbar.tsx src/sections src/components/layout/PEFooter.tsx
git commit -m "test: verify full landing language switching"
```

### Task 5: Add Canonical Dark Visual Relief And Hero Media Treatment

**Files:**
- Create: `public/assets/hero/hero-atelier-dark.svg`
- Modify: `src/sections/HeroSection.tsx`
- Modify: `src/styles/private-estates-tokens.css`
- Modify: `src/styles/private-estates-helpers.css`

- [ ] **Step 1: Write a narrow test to keep the hero structure stable**

```tsx
test("keeps the hero primary actions and preview content accessible after visual refinement", () => {
  render(<App />);

  expect(screen.getByRole("link", { name: /abrir evaluación privada|request private valuation|private bewertung/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explorar foco territorial|explore territorial focus|territorialen fokus/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test to verify it currently passes before visual refactor**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS, confirming the refinement can proceed without changing the semantic contract

- [ ] **Step 3: Add the hero visual asset**

Create:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" fill="none">
  <rect width="1200" height="900" rx="40" fill="#09111b"/>
  <path d="M760 110C936 146 1082 280 1112 454C1144 638 1022 812 822 858C618 905 393 806 306 617C220 431 300 214 496 144C575 116 671 102 760 110Z" fill="url(#goldFade)" opacity=".34"/>
  <path d="M168 694C250 518 406 392 608 312C736 262 844 220 952 130" stroke="#d8b15c" stroke-opacity=".36" stroke-width="2.5"/>
  <circle cx="820" cy="244" r="120" fill="#19302e"/>
  <circle cx="924" cy="336" r="54" fill="#d8b15c" fill-opacity=".38"/>
  <defs>
    <linearGradient id="goldFade" x1="324" y1="160" x2="988" y2="760" gradientUnits="userSpaceOnUse">
      <stop stop-color="#d8b15c"/>
      <stop offset="1" stop-color="#1f4f4b"/>
    </linearGradient>
  </defs>
</svg>
```

- [ ] **Step 4: Refine the hero layout around the visual**

```tsx
<div className="pe-card-deep pe-hero-visual-shell">
  <img
    src="/assets/hero/hero-atelier-dark.svg"
    alt={copy.previewImageAlt}
    className="pe-hero-visual"
  />
  <div className="pe-hero-visual-copy">…</div>
</div>
```

- [ ] **Step 5: Add supporting styles**

```css
.pe-hero-visual-shell {
  min-height: 40rem;
  padding: 1.6rem;
}

.pe-hero-visual {
  width: 100%;
  border-radius: 1.6rem;
  object-fit: cover;
  min-height: 22rem;
}
```

- [ ] **Step 6: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS, confirming the hero still exposes its required actions after visual refinement

- [ ] **Step 7: Commit**

```bash
git add public/assets/hero/hero-atelier-dark.svg src/sections/HeroSection.tsx src/styles/private-estates-tokens.css src/styles/private-estates-helpers.css src/app/App.test.tsx
git commit -m "feat: add canonical dark hero visual treatment"
```

### Task 6: Apply Gold Accents To Investors, Mallorca Focus, And Final CTA

**Files:**
- Modify: `src/sections/InvestorSection.tsx`
- Modify: `src/sections/MallorcaFocusSection.tsx`
- Modify: `src/sections/FinalCTASection.tsx`
- Modify: `src/styles/private-estates-helpers.css`

- [ ] **Step 1: Write the failing visual-regression semantics test**

```tsx
test("keeps investors, mallorca focus, and final cta headings present after premium accent refinement", () => {
  render(<App />);

  expect(screen.getByRole("heading", { level: 2, name: /inversores|investors|investoren/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /mallorca|microzonas|mikrozonen/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /el siguiente paso|the next step|der nächste schritt/i })).toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test to verify current behavior**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS before styling changes

- [ ] **Step 3: Make investor card titles gold and add hover gold shadow**

```tsx
<article className="pe-card pe-offset-card pe-investor-card">
  <h3 className="pe-investor-title">{profile.title}</h3>
</article>
```

```css
.pe-investor-title {
  color: var(--pe-gold);
}

.pe-investor-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 16px 44px rgba(0, 0, 0, 0.22),
    0 18px 28px rgba(233, 195, 73, 0.18);
}
```

- [ ] **Step 4: Make Mallorca Focus area titles gold**

```tsx
<p className="pe-eyebrow pe-mallorca-cluster-title">{cluster.eyebrow}</p>
```

```css
.pe-mallorca-cluster-title {
  color: var(--pe-gold);
}
```

- [ ] **Step 5: Update final CTA button palette**

```tsx
<a className="pe-btn-gold" href="#propietarios">{copy.primaryCta}</a>
<a className="pe-btn-secondary-quiet" href="#contacto">{copy.secondaryCta}</a>
```

```css
.pe-btn-gold {
  background: linear-gradient(135deg, #d8b15c, #f0d79c);
  color: #0b1520;
}
```

- [ ] **Step 6: Run the focused test again**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS, confirming the refinements did not break the section structure

- [ ] **Step 7: Commit**

```bash
git add src/sections/InvestorSection.tsx src/sections/MallorcaFocusSection.tsx src/sections/FinalCTASection.tsx src/styles/private-estates-helpers.css src/app/App.test.tsx
git commit -m "style: add premium gold accents to key sections"
```

### Task 7: Verify End-To-End And Clean Up

**Files:**
- Verify only

- [ ] **Step 1: Run the full targeted test suite**

Run:

```bash
npm test -- src/app/App.test.tsx
```

Expected:
- PASS with dark-only and ES/EN/DE coverage

- [ ] **Step 2: Run the production build**

Run:

```bash
npm run build
```

Expected:
- PASS with no TypeScript or Vite errors

- [ ] **Step 3: Run local browser verification in desktop**

Run:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

Then verify:
- desktop header shows `ES / EN / DE`
- no theme toggle exists
- hero visual is present
- investor cards hover correctly
- CTA bottom palette is refined

- [ ] **Step 4: Run local browser verification in mobile**

Verify at mobile width:
- navbar still works
- language switcher remains usable
- split sections stack correctly
- no text overlap or clipped controls

- [ ] **Step 5: Confirm console is clean**

Expected:
- no runtime console errors

- [ ] **Step 6: Final commit if verification changes were needed**

```bash
git add .
git commit -m "chore: finalize dark-only i18n refinement verification"
```

## Self-Review

### Spec coverage

- dark-only mode: covered by Tasks 1 and 7
- premium `ES / EN / DE` switcher: covered by Task 2
- full `es`, `en`, `de` translated landing: covered by Tasks 3 and 4
- no mixed-language UI: covered by Tasks 3 and 4
- richer hero/media treatment: covered by Task 5
- CTA gold palette: covered by Task 6
- investor gold titles and gold hover shadow: covered by Task 6
- Mallorca Focus gold titles: covered by Task 6
- browser verification desktop/mobile: covered by Task 7

### Placeholder scan

No `TBD`, `TODO`, or deferred implementation markers remain in the task steps.

### Type consistency

- `LanguageCode` is defined once as `es | en | de`
- `siteCopy` is the single content source of truth referenced by later tasks
- `language` and `onLanguageChange` are the navbar interface used consistently across tasks
