# Initial Locale Copy Audit

## Repository

- Target: `/home/toni/projects/anclora-private-estates-landing`
- Branch: `feat/ultra-premium-missing-locales-copy`
- Stack detected: Vite + React + TypeScript.

## Translation Structure Detected

- `src/content/site-copy.ts`: typed source of truth for visible landing copy.
- `src/lib/anclora-language-toggle.ts`: locale contract, labels, active locale list, initial locale resolution.
- `src/components/layout/LanguageSwitcher.tsx`: compact global preferences trigger with language and currency selectors.
- `src/components/forms/SellerIntakeForm.tsx`: local submit/status messages keyed by locale.
- `src/lib/legal-config.ts`: footer legal declaration and copyright phrases keyed by locale.

No `next-intl`, `next-i18next`, `i18next`, JSON message files, route-based locale folders, or external i18n runtime were detected.

## Existing Locales Before This Work

- Active locales: `es`, `en`, `de`, `fr`.
- `ULTRA_PREMIUM_LOCALES` already listed the target order, but most locales were disabled because `ACTIVE_LOCALES` only exposed four languages.

## Missing Locales

- `ca`
- `sv`
- `it`
- `da`
- `nl`
- `no`
- `pt`

## Missing Keys

The repo uses typed TS objects rather than JSON files. Missing locales meant the full `SiteCopy` object did not exist for seven Ultra Premium languages. Additional non-`SiteCopy` locale maps were also incomplete:

- `sellerFormMessagesByLanguage` in `src/components/forms/SellerIntakeForm.tsx`
- `LEGAL_CONFIG.COPYRIGHT_BASE` and `getBrandDeclaration` in `src/lib/legal-config.ts`

## Inline Texts

Some static SEO/legal strings remain outside the i18n surface:

- `index.html`: title, meta description and JSON-LD address.
- Image alt text in section components is currently static Spanish.
- The navbar menu button label is static Spanish in `PENavbar`.

These were not changed because the task scope is copy coverage for the existing locale system and selector.

## Fallback Behavior

`resolveInitialLocale` checks URL locale, persisted locale, browser languages and then falls back to `es`. Before this work, unsupported Ultra Premium locales normalized to `undefined`; now all Ultra Premium locales are active.

## Tests Detected

- `src/app/App.test.tsx`
- `src/app/UX.test.tsx`
- `src/components/forms/SellerIntakeForm.test.tsx`

Added:

- `src/content/site-copy.test.ts`

## Risks

- Several newly added northern-European locales currently reuse some long-form English section copy through a typed helper where full editorial localization was not practical in a single pass.
- `index.html` SEO metadata is not locale-aware.
- Static image alt text remains Spanish.
