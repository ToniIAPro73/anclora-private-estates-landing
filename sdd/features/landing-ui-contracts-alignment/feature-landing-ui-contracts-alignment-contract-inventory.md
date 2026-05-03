# Contract Inventory — Landing UI Contracts Alignment

## Estado

Inventario documental de contratos UI dentro de la estructura SDD/canónica.

## Fuente canónica dual aplicada

- Bóveda Anclora: `C:\Users\antonio.ballesterosa\Desktop\Proyectos\Boveda-Anclora`
- `anclora-design-system`: `https://github.com/ToniIAPro73/anclora-design-system.git`

## Ubicaciones revisadas

- `sdd/contracts/`
- `sdd/contracts/_legacy/`
- `sdd/contracts/_audit/`

## Resultado

Se han encontrado contratos UI y de gobernanza UI activos en `sdd/contracts/`.

No se han encontrado archivos en `sdd/contracts/_legacy/` ni en `sdd/contracts/_audit/`.

## Exclusiones explícitas

La carpeta `docs/` queda fuera de este inventario normativo.

Motivo:

- puede contener documentación histórica, estratégica o técnica;
- todavía no ha sido validada contra la Bóveda Anclora;
- todavía no ha sido validada contra `anclora-design-system`;
- no debe usarse como fuente normativa hasta una feature específica de normalización documental.

## Clasificación actual

| Archivo | Relevancia frontend/diseno | Estado | Evidencia y accion |
| --- | --- | --- | --- |
| `sdd/contracts/CONTRACTS_BASELINE_INDEX.md` | Indice de baseline UI | `canonical` | Declara baseline activo y remite a Boveda como autoridad. Se mantiene como trazabilidad, no como contrato de detalle. |
| `sdd/contracts/DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md` | Consumo de tokens, themes, foundations, components y patterns | `canonical` | Fija a `anclora-design-system` como fuente ejecutable y prohbe recrear una gramatica visual local completa. |
| `sdd/contracts/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md` | Clasificacion de producto, idiomas y excepciones de tema | `canonical` | Documenta la landing publica como `Ultra premium`, `es/en/de` y `dark-only`. |
| `sdd/contracts/ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md` | Reglas UX/UI de grupo ultra premium | `needs-update` | Sigue indicando `es/en/de/fr` para `anclora-private-estates`; para esta landing publica debe leerse con la excepcion documentada en `ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md` y `LOCALIZATION_CONTRACT.md`. Conviene anotar esa excepcion mas cerca del contrato o en su trazabilidad local. |
| `sdd/contracts/ANCLORA_BRANDING_MASTER_CONTRACT.md` | Autoridad de identidad visual y clasificacion de branding | `canonical` | Mantiene la clasificacion `Ultra Premium` y la escalera visual oficial. |
| `sdd/contracts/ANCLORA_BRANDING_COLOR_TOKENS.md` | Tokens de color y firma oro/fondos profundos | `canonical` | Define tokens compartidos `Ultra Premium` y el acento oro requerido para Private Estates. |
| `sdd/contracts/ANCLORA_BRANDING_TYPOGRAPHY.md` | Stack tipografico editorial | `canonical` | Define `Cardo`, `Inter` y `Fraunces` para la landing ultra premium. |
| `sdd/contracts/LOCALIZATION_CONTRACT.md` | Cobertura i18n visible y reglas de layout | `canonical` | Fija `es/en/de` para la landing publica y aplaza `fr`. |
| `sdd/contracts/UI_MOTION_CONTRACT.md` | Motion de cards, buttons y frames | `canonical` | Governa hover/focus/reduced-motion y exige alineacion con `anclora-design-system`. |
| `sdd/contracts/DEFERRED_CONTRACTS.md` | Contratos no aplicables o aplazados | `canonical` | Mantiene `MODAL_CONTRACT.md` diferido salvo justificacion funcional. |

## Decisión

- No hay contratos UI `legacy` ni `deprecated` dentro de las ubicaciones canónicas revisadas.
- El baseline vigente en `sdd/contracts/` sí aporta contratos UI canónicos utilizables para futuras features.
- La principal incertidumbre detectada fue la convivencia entre:
  - `ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md`, que conserva la cobertura general `es/en/de/fr` para `anclora-private-estates`;
  - y la excepcion activa de la landing publica, que opera en `es/en/de` y `dark-only`.

## Resolucion humana aplicada

- Revision humana final: `OK`.
- La excepcion `es/en/de` para la landing publica queda aceptada.
- `fr` queda diferido y no bloquea esta feature.

La feature queda como alineacion documental previa a futuras integraciones, especialmente `connect-landing-to-nexus-intake`, sin promover contenido de `docs/` como fuente normativa.
