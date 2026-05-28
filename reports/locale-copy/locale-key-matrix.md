# Locale Key Matrix

Legend: `OK`, `MISSING`, `INLINE`, `NEEDS_REVIEW`, `PENDING_TRANSLATION`

| key/path | es | ca | de | en | sv | fr | it | da | nl | no | pt | notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `src/content/site-copy.ts` root `SiteCopy` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | All locales compile against `Record<LanguageCode, SiteCopy>`. |
| `navbar.links` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Seven links aligned across locales. |
| `navbar.languageSwitcher` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Trigger/panel copy present for all active locales. |
| `hero` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | New locales have localized hero, CTAs and microcopy. |
| `credibility` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | SV/IT/DA/NL/NO/PT reuse English long-form structure via helper. |
| `mallorcaFocus` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | CA localized fully; several locales reuse English long-form structure. |
| `investors` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | Core object exists for all locales; deeper editorial review recommended for helper-based locales. |
| `sellerIntake` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | Form status messages covered separately for every locale. |
| `valuation` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | Not rendered on current home but retained in copy surface. |
| `partners` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | All keys present. |
| `dataLab` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | All keys present. |
| `contact` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Contact title/floating labels localized for all locales. |
| `finalCta` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Core title localized for all locales. |
| `footer` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Legal declaration map also extended. |
| `cookies` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | CA localized; helper locales inherit English cookie copy. |
| `scroll` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | Helper locales inherit English labels unless overridden. |
| `social` | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | Floating social label localized. |
| `trustBadgeText` | OK | OK | OK | OK | NEEDS_REVIEW | OK | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | NEEDS_REVIEW | Helper locales inherit English. |
| `SellerIntakeForm` status messages | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | All locale status/error messages present. |
| `LEGAL_CONFIG` declaration/copyright | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | OK | All locale legal declarations present. |
| `index.html` SEO strings | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | Static document-level metadata remains Spanish/English mix. |
| Image `alt` text in components | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | INLINE | Static Spanish alt text remains outside `site-copy`. |
