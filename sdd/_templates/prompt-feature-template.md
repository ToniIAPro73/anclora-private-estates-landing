# PROMPT — <feature-slug> v1

## Contexto

Lee primero:

- `.agent/prompts/features/<feature-slug>/feature-<feature-slug>-shared-context.md`
- `sdd/features/<feature-slug>/feature-<feature-slug>-index.md`
- `.agent/rules/feature-<feature-slug>.md`

## Tarea

Implementar o validar el bloque asignado de la feature.

## Reglas

- No salir del alcance.
- No tocar secretos.
- No hardcodear URLs temporales.
- Entregar lista de archivos modificados.
- Detenerse al terminar el bloque.

## Salida esperada

- Resumen.
- Archivos modificados.
- Pruebas ejecutadas.
- Riesgos o pendientes.
