# Visual Review

## Environment

- URL: `http://127.0.0.1:5173/`
- Dev server: `npm run dev -- --host 127.0.0.1`
- Browser automation: Playwright CLI skill
- Screenshots:
  - `reports/locale-copy/visual-review-desktop.png`
  - `reports/locale-copy/visual-review-mobile.png`

## Locales Reviewed

- `en`: initial persisted browser state.
- `ca`: selected through the Global Preferences language selector.
- Selector list reviewed visually: ES, CA, DE, EN, SV, FR, IT, DA, NL, NO, PT.

## Findings

- Header, hero CTAs, language selector panel and main sections render without obvious overlap on desktop and mobile screenshots.
- The selector opens as a compact Global Preferences panel and lists all Ultra Premium locales in the governed order.
- No Theme Toggle was visible.
- Catalan copy rendered in hero, credibility, Mallorca Focus, investors, forms, contact and final CTA after selection.
- Some static strings remain outside the copy system and are visible across locales: menu label, hero scroll hint, image alt text and document metadata.

## Console / Network Notes

The browser reported external-resource issues in local development:

- `ERR_CERT_AUTHORITY_INVALID` for a remote image hosted through `cdn.jsdelivr.net`.
- `ERR_CERT_AUTHORITY_INVALID` for Cloudflare Turnstile script.

These are environment/external-resource issues in the local browser context, not TypeScript/build failures.

## Text Length / Layout

- Catalan hero CTA and selector labels fit the current header and hero controls.
- Mobile screenshot did not show horizontal overflow.
- The language panel remains usable on a narrow viewport, though full-panel polish should be rechecked after deeper copy review for the helper-based locales.
