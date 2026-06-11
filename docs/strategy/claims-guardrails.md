# Claims Guardrails — Anclora Private Estates Landing

## Purpose

This document defines what Anclora Private Estates may and may not claim publicly in landing page copy, marketing materials, and any AI-assisted content generation. It is the authoritative reference for copywriters, AI agents, and reviewers.

## Audit Status

**Audited:** 2026-06-11 against all 11 locales and all UI components.

---

## P0 — Prohibited Claims

These claims must never appear in public-facing copy without documented evidence per instance:

| Category | Prohibited pattern | Reason |
|---|---|---|
| Performance guarantees | "Garantizamos X% de rentabilidad", "We guarantee returns" | Legally binding, unverifiable |
| Volume/market-share | "Líderes del mercado", "Market leaders" | Unverifiable without audit |
| AI scoring / automated valuations | "Nuestra IA puntúa tu activo", "AI-powered valuation score" | Scoring implicitly conveys precision not validated in production |
| Speed claims | "Vendemos en X días" | Depends on asset; creates false expectation |
| Exclusive access claims | "Acceso exclusivo a todos los compradores de Mallorca" | Overstates network scope |

## P1 — Permitted Claims (Verified)

These are present in the UI and considered accurate and defensible:

- **eXp Group Spain backing**: verifiable through public records.
- **25+ years in technology**: founder biography; internally verified.
- **"Acceso a compradores cualificados de +40 países"**: refers to eXp Group's documented global network, not a proprietary claim.
- **Off-market approach**: accurately describes the operational method.
- **SES.HOSPEDAJES documentation support via SyncXML**: describes a technical capability; technologyNote explicitly states this does not replace legal review.

## P2 — AI Guardrails

### Current state (2026-06-11)

No AI-generated scoring, no automated valuation figures, and no AI recommendation labels appear in the public-facing landing page. The word "scoring" appears only in internal code comments (analytics hooks) and is not exposed to users.

### Rules going forward

1. **Do not publish AI-generated scores or ranks as facts.** Phrases like "the AI rates your property at 8.2/10" are prohibited without documented calibration and disclosure.
2. **AI-assisted copy generation** (this document, for example) must be reviewed by a human before publishing. Accuracy of statistics, credentials, and legal claims is the human reviewer's responsibility.
3. **SyncXML technology notes** must always include the prudence caveat ("no sustituye la revisión legal ni el criterio del profesional" or equivalent) in all locales.

## P3 — Regulatory Context

- Holiday rental in Mallorca is subject to the Llei 8/2012 de Turisme de les Illes Balears and subsequent amendments.
- Licence availability, moratoriums, and zoning rules change at the municipal level.
- Any rental-related copy must avoid implying that Anclora can obtain licences or guarantee rental viability.
- The `prudenceNote` field in `HolidayRentalCopy` exists precisely for this purpose — it must be present in all locales that display the holiday rental section.

## P4 — Revision Cadence

This document should be reviewed:
- Before any major copy update or feature launch
- When a new claim category is introduced (e.g., investor returns, market data)
- After any regulatory change in the Balearic Islands real estate market
