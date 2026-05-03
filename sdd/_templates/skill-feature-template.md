---
name: <feature-slug>
description: Implementa o valida la feature <feature-slug> siguiendo SDD.
---

# Skill — <feature-slug>

## Lecturas obligatorias

1. `sdd/core/constitution-canonical.md`
2. `sdd/core/product-spec-v0.md`
3. `sdd/core/spec.md`
4. `sdd/features/<feature-slug>/feature-<feature-slug>-index.md`
5. `sdd/features/<feature-slug>/feature-<feature-slug>-spec-v1.md`
6. `.agent/rules/feature-<feature-slug>.md`

## Método

1. Leer SDD completo.
2. Identificar alcance.
3. Implementar solo lo autorizado.
4. Ejecutar pruebas.
5. Actualizar QA report y gate si aplica.

## Stop conditions

- No tocar secretos.
- No ampliar alcance sin documentarlo.
- No modificar contratos globales salvo feature específica.
