# Dark-Only I18n And Visual Refinement Design

## Context

`anclora-private-estates-landing` already has a working ultra premium landing foundation aligned with the Anclora canonical dark direction. The next iteration changes both behavior and presentation:

- the landing will stop supporting light mode and become dark-only
- the theme toggle in the header will be replaced by a premium language switcher
- the full landing must ship in `es`, `en`, and `de`
- every language version must be internally consistent, with no mixed-language copy
- the visual density must be improved with a more elegant media-led treatment so the page does not feel excessively text-heavy

This refinement must stay faithful to the canonical dark system from the vault and to the ultra premium application contract.

## Goals

- lock the experience to a single dark presentation
- replace the theme toggle with an elegant premium `ES / EN / DE` language control
- render the entire landing from a single language-aware source of truth
- remove all hardcoded mixed-language fragments from the UI
- add visual richness consistent with the canonical dark reference without making the page decorative or noisy
- refine key premium accents:
  - bottom CTA with revised button palette including gold
  - investor card titles in gold
  - investor card hover elevation plus subtle gold shadow
  - Mallorca Focus area titles in gold

## Non-Goals

- adding French in this iteration
- introducing a full CMS or external translation platform
- porting the large `react-i18next` stack from `anclora-private-estates`
- changing the overall section architecture of the landing
- adding a gallery, carousel, or property catalog

## Recommended Approach

Use a lightweight local i18n layer with typed content objects inside the landing repo.

Why this approach:

- the landing is single-page and content-driven
- the copy surface is finite and easy to control in-repo
- it avoids extra runtime complexity while guaranteeing consistent language switching
- it is faster to audit for mixed-language regressions

## Architecture

### 1. Theme model

The app will no longer manage a `dark | light` state.

- `document.documentElement.dataset.theme` will be forced to `dark`
- the theme toggle will be removed from the navbar
- dark tokens remain the only active design mode

This simplifies the app shell and reduces visual drift from the canonical dark reference.

### 2. Language model

Introduce a local language state:

- supported languages: `es`, `en`, `de`
- default language: `es`
- persisted in `localStorage`
- mirrored to `document.documentElement.lang`

The language state will live at app level and be passed down to the navbar and sections through props or a shared content accessor.

### 3. Content source of truth

Create a single structured content module, for example:

- `src/content/site-copy.ts`

It will export a typed object keyed by language:

- `es`
- `en`
- `de`

Each language entry will contain all visible copy needed by the page:

- navbar labels
- hero eyebrow, title, copy, chips, CTA labels, preview card copy
- credibility section content
- Mallorca Focus labels and area clusters
- investor section title and cards
- seller intake section text and form labels
- Data Lab section content
- contact section content
- final CTA content
- footer labels and links

Every visible user-facing string must come from this source. No mixed inline literals should remain in JSX.

### 4. Header language switcher

Replace the theme toggle with a premium segmented language control inspired by `anclora-private-estates`, but adapted to this landing.

Design characteristics:

- compact segmented control inside the existing header right cluster
- labels `ES`, `EN`, `DE`
- active segment visually emphasized
- dark glass-compatible styling
- hover and focus treatment aligned with premium controls, not app-like pills

Behavior:

- clicking a language updates the page immediately
- active language persists across reloads
- control remains visible in desktop and mobile layouts

### 5. Visual refinement

The page currently relies heavily on text blocks and tonal cards. This iteration adds more visual relief while staying canonical.

Planned refinements:

- keep the page dark-only and editorial
- introduce a more image-led or media-led treatment in the hero, aligned with the canonical dark reference
- ensure at least one additional section carries stronger visual hierarchy beyond text-only slabs
- maintain restraint: no loud gradients, no stock-banner look, no decorative clutter

The hero should feel closer to a premium editorial landing:

- stronger right-side visual composition
- more atmospheric depth
- less “text next to card”, more “curated lead section”

If a real image asset is not yet available, use a visually rich premium composition that still feels deliberate and branded rather than empty placeholder chrome.

### 6. Section-specific styling refinements

#### Final CTA

Update the bottom CTA buttons so the pair no longer repeats the same palette as the rest of the page.

- one button should introduce a gold-led accent
- the pair should feel more ceremonial and conclusive
- contrast and accessibility must remain strong on dark background

#### Investors

Refine investor cards:

- card titles rendered in gold
- hover effect adds:
  - lift/elevation
  - subtle gold under-shadow or glow beneath the elevated card

This should feel premium and tactile, not flashy.

#### Mallorca Focus

Render the four area titles in gold:

- Palma & Hillside Core
- Calvià Coastal Premium
- Southwest Lifestyle & Capital Preservation
- Heritage & Serra Character

Body copy stays readable and restrained; only the area titles receive this emphasis.

## Component Changes

### App shell

`App.tsx`

- remove theme state
- add language state
- load preferred language from `localStorage`
- set `document.documentElement.dataset.theme = 'dark'`
- set `document.documentElement.lang` to the active language
- pass language data or resolved copy into child sections

### Navbar

`PENavbar.tsx`

- remove `theme` and `onToggleTheme`
- add `language` and `onLanguageChange`
- keep logo and primary CTA
- render language switcher instead of theme button

### Sections

All sections will stop embedding visible strings directly and instead consume language-specific copy. This includes form labels and microcopy.

### Brand and visual assets

The existing official logo in the header remains.

If a new visual asset is introduced for the hero or another section, it should live under `public/assets/hero/` or another appropriate existing public asset folder.

## Data Flow

1. app initializes with `es`
2. app checks `localStorage` for a persisted language
3. app resolves `copy = siteCopy[language]`
4. navbar and sections render from that `copy`
5. user changes language through segmented control
6. app updates state, persists language, updates `document.documentElement.lang`
7. full page rerenders from the selected language object

This guarantees single-language rendering at all times.

## Testing

Add or update tests to cover:

- dark-only app shell:
  - no theme toggle rendered
  - root theme stays `dark`
- language control presence:
  - `ES`, `EN`, `DE` rendered in header
  - `ES` active by default
- language switching:
  - a representative heading changes in each language
  - a representative button label changes in each language
  - form labels change in each language
- language consistency:
  - no known Spanish render contains leftover English labels such as `Private Preview`, `Method`, `Contact details`, or `Audience`

Manual verification:

- desktop visual review in browser
- mobile visual review in browser
- no console errors
- no layout collapse in navbar, hero, split sections, or CTA footer

## Risks

### Incomplete language migration

Risk:
One or more strings remain hardcoded in JSX, reintroducing mixed-language UI.

Mitigation:
Move every visible string to the central copy object and add explicit regression assertions for representative labels.

### Header crowding on mobile

Risk:
The segmented language control plus CTA can overcrowd the premium navbar.

Mitigation:
Adjust spacing and responsive wrapping rules specifically for mobile header behavior.

### Overuse of gold

Risk:
Gold accents can make the landing feel louder than the canonical dark reference.

Mitigation:
Use gold only for key titles, the CTA accent, and hover shadow cues; keep body and structural surfaces restrained.

### Visual asset mismatch

Risk:
An added image or visual block could feel stock-like or disconnected from the rest of the system.

Mitigation:
Prefer one strong, art-directed composition over multiple weak visuals; keep the treatment atmospheric and editorial.

## Acceptance Criteria

- the landing renders exclusively in dark mode
- the theme toggle is removed
- the header includes a premium `ES / EN / DE` language switcher
- Spanish is the default language
- the entire landing is available in `es`, `en`, and `de`
- no language version mixes strings from another language
- the hero is visually richer and less text-heavy
- the bottom CTA uses a refined button palette including gold
- investor card titles are gold and cards gain gold-accented hover elevation
- Mallorca Focus area titles are gold
- automated tests pass
- production build passes
- desktop and mobile browser verification pass without console errors

## Implementation Scope

This is a single contained refinement pass. It should be executed as:

1. test updates for dark-only plus language switching
2. app shell refactor to dark-only plus language state
3. central copy extraction for all sections
4. navbar language switcher
5. visual refinements for hero, investors, Mallorca Focus, and final CTA
6. browser verification in desktop and mobile
