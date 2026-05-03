---
name: landing-ui-contracts-alignment
description: Audit and align landing UI contracts against Anclora canonical sources.
---

# Skill — Landing UI Contracts Alignment

## Required reading

1. `sdd/core/constitution-canonical.md`
2. `sdd/core/product-spec-v0.md`
3. `sdd/core/spec.md`
4. `sdd/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-index.md`
5. `sdd/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-spec-v1.md`
6. `.agent/rules/feature-landing-ui-contracts-alignment.md`

## Method

1. Locate existing UI contract documents.
2. Compare them against Bóveda Anclora and `anclora-design-system`.
3. Classify each contract:
   - `canonical`
   - `needs-update`
   - `legacy`
   - `deprecated`
4. Document evidence and pending actions.
5. Stop before functional implementation.

## Stop conditions

- Any required canonical source is unavailable.
- A change would affect `src/`, API, backend, n8n, Nexus, secrets, or deployment.
- A contract cannot be classified with sufficient evidence.

## Output

- Contract inventory.
- Classification table.
- Risks and pending decisions.
- Gate final recommendation.
