# Changelog — Anclora Private Estates Landing

Registro de cambios documentales, técnicos y de producto asociados a features SDD.

---

## [Unreleased]

### Added

- Feature `ANCLORA-LNI-001 — Landing Nexus Intake Connection` en estado `Done`.
- Conexión de `SellerIntakeForm` con el webhook público de n8n Unified Lead Intake / Anclora Nexus.
- Cliente de integración en `src/lib/lead-intake.ts` con payload normalizado y resolución de endpoint dinámica.
- Tests específicos para `SellerIntakeForm` verificando envíos exitosos y gestión de errores del backend.
- Documentación de variables de entorno en `.env.example`.
- Reportes de ejecución (01-08) incluyendo resolución humana oficial para deuda técnica.

### Changed

- Normalizada la documentación SDD de `landing-hero-optimization` bajo convención `feature-<slug>-*.md`.
- Migrados los prompts de `landing-hero-optimization` desde `.antigravity/prompts/features/` a `.agent/prompts/features/`.
- `ANCLORA-LUC-001 — Landing UI Contracts Alignment` pasa de `Specification` a `Done`.
- Actualizado el inventario contractual de `landing-ui-contracts-alignment` para reflejar contratos canónicos activos en `sdd/contracts/` y la excepción aceptada `es/en/de` de la landing pública.
- `ANCLORA-LUC-002 — Landing SDD Contracts Baseline` pasa de `Specification` a `Done`.
- Registrado el cierre documental del baseline contractual con 10 documentos en `sdd/contracts/`, `MODAL_CONTRACT.md` diferido y sin cambios funcionales.

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
