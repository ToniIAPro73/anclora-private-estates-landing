# SPEC — Landing SDD Contracts Baseline v1

## 0. Meta

- Feature ID: `ANCLORA-LUC-002`
- Feature slug: `landing-sdd-contracts-baseline`
- Version: `1.0`
- Status: `Specification`
- Priority: `High`
- Owner: `Anclora Group`

## 1. Objetivo

Definir qué contratos deben existir en `sdd/contracts/` para gobernar la landing pública de Anclora Private Estates.

## 2. Clasificación contractual

Esta landing pertenece al grupo contractual `Ultra Premium`.

- Producto: `Anclora Private Estates Landing`
- Ecosistema: `Anclora Group`
- Tipo: `Ultra Premium`
- Superficie: landing pública de captación editorial
- Tema objetivo: `dark-only`
- Idiomas objetivo: `es`, `en`, `de`
- Acento principal: oro / gold

## 3. Alcance

Incluye:

- revisar contratos aplicables desde Bóveda Anclora;
- revisar piezas ejecutables relevantes desde `anclora-design-system`;
- definir baseline mínimo de contratos locales;
- documentar trazabilidad de cada contrato.

No incluye:

- modificar `src/`;
- conectar formularios con Nexus;
- migrar documentación desde `docs/`;
- copiar contratos de forma masiva.

## 4. Contratos candidatos

Aplicables inicialmente:

- branding baseline;
- ultra premium landing/app baseline;
- UI motion;
- localization;
- design system consumption.

Pendientes de decisión:

- modal contract;
- form contract;
- SEO/content contract;
- data/privacy contract.

## 5. Criterios de aceptación

- La landing queda clasificada como `Ultra Premium`.
- Cada contrato local tiene fuente, estado y motivo.
- `sdd/contracts/` queda poblado solo con baseline mínimo.
- No hay cambios funcionales.
- No hay commit ni push sin aprobación explícita.


## 6. Resultado de implementación

La feature queda implementada a nivel documental mediante `sdd/contracts/`.

Se han incorporado 10 archivos:

- 7 contratos copiados desde Bóveda Anclora.
- 1 contrato local derivado de consumo del design system.
- 1 índice de baseline contractual.
- 1 registro de contratos diferidos.

No se han autorizado cambios funcionales.
