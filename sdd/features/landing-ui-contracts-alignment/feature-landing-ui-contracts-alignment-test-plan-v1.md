# Test Plan — Landing UI Contracts Alignment v1

## Validaciones documentales

- Confirmar que existe inventario de contratos UI.
- Confirmar que cada contrato tiene estado asignado.
- Confirmar que los contratos legacy no quedan como normativos.
- Confirmar referencias a Bóveda Anclora y `anclora-design-system`.

## Validaciones técnicas

- Confirmar que no hay cambios en `src/`.
- Confirmar que no hay cambios en variables de entorno.
- Confirmar que no hay cambios en APIs, backend o integración n8n.

## Comando recomendado

    git diff --stat
