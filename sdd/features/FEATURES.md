# FEATURES — Anclora Private Estates Landing

Registro centralizado de features del repo `anclora-private-estates-landing`.

---

## Done

### ANCLORA-LUC-002 — Landing SDD Contracts Baseline

- Slug: `landing-sdd-contracts-baseline`
- Version: `1.0`
- Status: `Done`
- Priority: `High`

Objetivo: definir el baseline mínimo de contratos SDD aplicables a la landing Ultra Premium de Anclora Private Estates, usando Bóveda Anclora y `anclora-design-system` como fuentes.

Resultado: baseline contractual aceptado con 10 documentos en `sdd/contracts/`, `MODAL_CONTRACT.md` diferido y gate final en estado OK.

Documentación:

- `sdd/features/landing-sdd-contracts-baseline/`
- `sdd/contracts/`
- `.agent/prompts/features/landing-sdd-contracts-baseline/`

### ANCLORA-LUC-001 — Landing UI Contracts Alignment

- Slug: `landing-ui-contracts-alignment`
- Version: `1.0`
- Status: `Done`
- Priority: `High`

Objetivo: auditar contratos UI legacy frente a Bóveda Anclora y `anclora-design-system`, antes de declararlos normativos para la landing.

Resultado: inventario contractual alineado, excepción `es/en/de` de la landing pública aceptada y gate final en estado OK.

Documentación:

- `sdd/features/landing-ui-contracts-alignment/`
- `.agent/prompts/features/landing-ui-contracts-alignment/`

### ANCLORA-LHO-001 — Landing Hero Optimization

- Slug: `landing-hero-optimization`
- Version: `1.0`
- Status: `Done`
- Priority: `High`

Objetivo: optimizar el hero principal, CTA de propietarios y SEO on-page de la landing.

Resultado: implementada y validada con resultado OK.

Documentación:

- `sdd/features/landing-hero-optimization/feature-landing-hero-optimization-index.md`
- `.agent/prompts/features/landing-hero-optimization/`

---

## In Progress

## Planned

### ANCLORA-LNI-001 — Landing Nexus Intake Connection

- Slug: `connect-landing-to-nexus-intake`
- Version: `1.0`
- Status: `Done`
- Priority: `Critical`

Objetivo: conectar formularios de la landing con el webhook público de n8n Unified Lead Intake y Anclora Nexus.

Resultado: `SellerIntakeForm` conectado a Nexus mediante payload normalizado y endpoint configurable. Validada con tests específicos y build OK. Deuda técnica en `App.test.tsx` aceptada mediante resolución humana.

Documentación:

- `sdd/features/connect-landing-to-nexus-intake/`
- `src/lib/lead-intake.ts`
- `.agent/prompts/features/connect-landing-to-nexus-intake/`
