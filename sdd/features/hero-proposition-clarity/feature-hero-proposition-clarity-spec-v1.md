# SPEC — hero-proposition-clarity v1

## 0. Meta

- Feature ID: hero-proposition-clarity
- Feature slug: hero-proposition-clarity
- Version: v1
- Status: draft
- Priority: P1
- Owner: Codex

## 1. Objective

Make the landing hero more commercially explicit for premium property owners.
The current hero feels premium, but it does not state the core offer quickly
enough. This feature rewrites the hero title and supporting copy so visitors
understand, in the first viewport, that Anclora Private Estates helps owners
sell or evaluate premium assets in Mallorca with discretion, territorial
judgment and qualified access.

## 2. Scope

### Includes

- Update the hero headline and description copy.
- Preserve the existing visual layout and CTA behavior.
- Keep the copy source centralized in `src/content/site-copy.ts`.
- Keep all active locales with a coherent translated hero proposition.
- Add regression tests for the new Spanish, English and German hero copy.

### Excludes

- CTA label changes.
- Schema, canonical or metadata changes.
- New sections.
- Holiday rental vertical implementation.
- Backend or lead intake changes.

## 3. Affected Contracts

- Ultra Premium app copy must stay sober, direct and non-mass-market.
- Localization must preserve intent across active locales.
- Public copy changes require a Hermes Copy Curator gate before merge.

## 4. Technical Changes

### Frontend

- Update `siteCopyByLanguage.*.hero.title`.
- Update `siteCopyByLanguage.*.hero.description`.
- Reuse the current `HeroSection` rendering and line-break handling.

### Backend / External APIs

- No backend or external API changes.

### Data / Privacy

- No new data collection.
- No changes to forms, consent or lead payloads.

## 5. Environment Variables

- No new environment variables.

## 6. Security

- No new security surface.
- No additional third-party calls.

## 7. Acceptance Criteria

- Spanish hero title directly mentions propietarios and venta privada.
- Spanish hero description mentions valoración, venta and comprador cualificado.
- English and German hero titles preserve the same commercial intent.
- Existing navigation, forms and section rendering tests keep passing.
- `npm test` and `npm run build` pass.

## 8. Risks

- Over-optimizing the headline for clarity could reduce premium tone.
- Localized copy could become literal rather than natural.
- Hermes review remains required before merge because public copy changed.
