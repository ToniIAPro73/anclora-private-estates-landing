<!-- markdownlint-disable MD001 MD013 MD033 MD041 MD060 -->

<div align="center">

<img src="./public/brand/anclora-private-estates-landing.png" alt="Anclora Private Estates Landing" width="132" />

# Anclora Private Estates Landing

### Public capture landing page for Anclora Private Estates

Public dark-only landing page, sharing full identity with `anclora-private-estates`, geared toward high-value lead capture.

[Español](./README.md) · [Català](./README.ca.md) · [Deutsch](./README.de.md) · **English** · [Svenska](./README.sv.md) · [Français](./README.fr.md) · [Italiano](./README.it.md) · [Dansk](./README.da.md) · [Nederlands](./README.nl.md) · [Norsk](./README.no.md) · [Português](./README.pt.md)

<br />

![Anclora](https://img.shields.io/badge/Anclora-ecosystem-111827)
![Category](https://img.shields.io/badge/category-Ultra%20Premium-D4AF37)
![Languages](https://img.shields.io/badge/product%20languages-11-047857)

</div>

---

> [!IMPORTANT]
> Reduced public repository. It describes the product and its conceptual architecture; it does not expose operational logic, secrets, or real data.

## What it is

Anclora Private Estates Landing is the public capture landing page for the Private Estates brand. It operates exclusively in dark mode (no theme toggle, a deliberate decision) with an 11-language switcher, reinforcing the luxury brand's visual signature.

## Category in the ecosystem

| Field | Value |
|---|---|
| Category | Ultra Premium (public landing) |
| Brand accent | `#D4AF37` |
| Typography | Cardo + Inter + Fraunces |
| Canonical repository | `anclora-private-estates-landing` |

## Key features

- Dark-only landing with full Private Estates identity
- 11-language switcher (no theme toggle, by design)
- High-value lead capture

## Technology stack

| Area | Technology |
|---|---|
| Frontend | React, TypeScript |
| Styling | Tailwind CSS |
| Testing | Vitest |

## Local setup

```bash
npm install
npm run dev
```

## Supported languages

The production product supports 11 languages: Español (default), Català, Deutsch, English, Svenska, Français, Italiano, Dansk, Nederlands, Norsk, Português (`ULTRA_PREMIUM_LOCALES`, `src/lib/anclora-language-toggle.ts`). This documentation is maintained in all 11 product languages.

## Documentation and governance

- Brand and governance contracts: [`docs/standards/`](./docs/standards/)
- Anclora Vault (source of truth): `contracts/` and `docs/governance/`

---

<div align="center">

### Anclora Group

</div>
