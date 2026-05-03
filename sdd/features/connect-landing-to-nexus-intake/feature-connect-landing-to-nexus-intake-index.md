# ANCLORA-LNI-001 — Landing Nexus Intake Connection

## Estado

- Feature ID: `ANCLORA-LNI-001`
- Slug: `connect-landing-to-nexus-intake`
- Version: `1.0`
- Status: `Specification`
- Priority: `Critical`

## Objetivo

Conectar los formularios de la landing con el sistema de intake público basado en n8n Unified Lead Intake y Anclora Nexus.

## Alcance inicial

- Auditar formularios existentes.
- Definir contrato de payload.
- Crear integración segura y configurable.
- Conectar al menos `SellerIntakeForm`.
- No romper integraciones existentes de valoración, Data Lab o Synergi.
- Mantener trazabilidad SDD y ejecución por agentes.

## Formularios detectados

- `src/components/forms/SellerIntakeForm.tsx`
- `src/components/forms/ValuationRequestForm.tsx`
- `src/sections/DataLabSignalsSection.tsx`
- `src/sections/PartnersSynergiSection.tsx`

## Contratos aplicables

- `sdd/contracts/CONTRACTS_BASELINE_INDEX.md`
- `sdd/contracts/DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`
- `sdd/contracts/ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md`
- `sdd/contracts/LOCALIZATION_CONTRACT.md`
- `sdd/contracts/UI_MOTION_CONTRACT.md`
- `sdd/contracts/DEFERRED_CONTRACTS.md`

## Documentos

- `feature-connect-landing-to-nexus-intake-index.md`
- `feature-connect-landing-to-nexus-intake-shared-context.md`
- `feature-connect-landing-to-nexus-intake-spec-v1.md`
- `feature-connect-landing-to-nexus-intake-test-plan-v1.md`
- `feature-connect-landing-to-nexus-intake-gate-final.md`
