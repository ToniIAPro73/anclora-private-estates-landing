# SPEC — Landing UI Contracts Alignment v1

## 0. Meta

- Feature ID: `ANCLORA-LUC-001`
- Feature slug: `landing-ui-contracts-alignment`
- Version: `1.0`
- Status: `Specification`
- Priority: `High`
- Owner: `Anclora Group`

## 1. Objetivo

Auditar los contratos UI existentes de Anclora Private Estates Landing y alinearlos con las fuentes canónicas actuales.

## 2. Alcance

### Incluye

- Localizar contratos UI existentes.
- Detectar contratos legacy.
- Comparar criterios con Bóveda Anclora y `anclora-design-system`.
- Documentar estado final por contrato.
- Preparar una base fiable para futuras features UI.

### No incluye

- Cambiar componentes visuales.
- Cambiar estilos en producción.
- Conectar formularios con n8n/Nexus.
- Modificar APIs, backend o base de datos.

## 3. Contratos afectados

Pendiente de inventario.

## 4. Cambios técnicos

### Frontend

No previstos en esta fase. Solo auditoría documental.

### Backend / APIs externas

No aplica.

### Datos / privacidad

No aplica.

## 5. Variables de entorno

No aplica.

## 6. Seguridad

No leer ni exponer secretos, `.env`, tokens o credenciales.

## 7. Criterios de aceptación

- Inventario de contratos UI localizado.
- Cada contrato clasificado como `canonical`, `needs-update`, `legacy` o `deprecated`.
- Contratos legacy marcados explícitamente como no normativos.
- No se introduce ningún cambio funcional.
- No se realiza commit ni push sin aprobación explícita.

## 8. Riesgos

- Tomar como normativos documentos legacy.
- Mezclar criterios visuales antiguos con la Bóveda Anclora.
- Duplicar contratos que deberían vivir en `anclora-design-system`.

---

## 9. Inventario inicial de contratos UI

Resultado de búsqueda en ubicaciones canónicas:

- `sdd/contracts/`
- `*/_legacy/*`
- `*/_audit/*`

Estado detectado:

- No se han encontrado contratos UI existentes dentro de la estructura SDD/canónica del repo.
- No se considera contrato UI el documento `docs/superpowers/specs/2026-04-03-dark-only-i18n-and-visual-refinement-design.md`, porque no pertenece a la estructura SDD de features, contratos, legacy ni audit.

Decisión:

- No hay contratos UI legacy que promover, actualizar o deprecar en este repo en el estado actual.
- La feature queda como alineación documental preventiva antes de conectar `connect-landing-to-nexus-intake`.
