# Test Plan — Landing SDD Contracts Baseline v1

## Validaciones documentales

- Confirmar que cada contrato local tiene fuente y estado.
- Confirmar que cada contrato local aplica realmente a la landing.
- Confirmar que la landing queda clasificada como `Ultra Premium`.
- Confirmar que no se ha copiado documentación no normativa.
- Confirmar que `docs/` local sigue excluida como fuente normativa.

## Validaciones técnicas

- Confirmar que no hay cambios en `src/`.
- Confirmar que no hay cambios en `api/`.
- Confirmar que no hay cambios en variables de entorno.
- Confirmar que no hay cambios de build/deploy.

## Comando recomendado

    git status --short
    git diff --stat


## Validaciones de implementación contractual

- Confirmar que `sdd/contracts/` contiene 10 archivos Markdown.
- Confirmar que existe `CONTRACTS_BASELINE_INDEX.md`.
- Confirmar que existe `DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`.
- Confirmar que existe `DEFERRED_CONTRACTS.md`.
- Confirmar que `MODAL_CONTRACT.md` no forma parte del baseline activo.
- Confirmar que no hay cambios funcionales.
