# Changelog — Anclora Private Estates Landing

Registro de cambios documentales, técnicos y de producto asociados a features SDD.

---

## [Unreleased]

### Added

- Feature `ANCLORA-LUC-001 — Landing UI Contracts Alignment` en estado `Specification`.
- Documentación SDD, prompts, rule y skill para auditar contratos UI legacy frente a Bóveda Anclora y `anclora-design-system`.
- Estructura SDD base:
  - `sdd/_templates`
  - `sdd/core`
  - `sdd/contracts`
  - `sdd/features`
- Registro centralizado de features en `sdd/features/FEATURES.md`.
- Ruta canónica de prompts de agentes en `.agent/prompts/features/`.

### Changed

- Normalizada la documentación SDD de `landing-hero-optimization` bajo convención `feature-<slug>-*.md`.
- Migrados los prompts de `landing-hero-optimization` desde `.antigravity/prompts/features/` a `.agent/prompts/features/`.

### Removed

- Eliminada `.antigravity` como carpeta canónica de prompts.

---

## [1.0.0] — Landing Hero Optimization

### Added

- Feature `ANCLORA-LUC-001 — Landing UI Contracts Alignment` en estado `Specification`.
- Documentación SDD, prompts, rule y skill para auditar contratos UI legacy frente a Bóveda Anclora y `anclora-design-system`.
- Feature `ANCLORA-LHO-001 — Landing Hero Optimization`.
- Optimización del hero principal orientado a captación de propietarios HNWI.
- CTA con scroll suave hacia `seller-intake`.
- Meta tags, canonical y Schema JSON-LD `RealEstateAgent`.
- Documentación SDD y prompts de agente asociados.

### Validation

- Estado funcional: implementada.
- Resultado: OK.
