---
name: landing-sdd-contracts-baseline
description: Define the minimum SDD contracts baseline for the Anclora Private Estates Ultra Premium landing.
---

# Skill — Landing SDD Contracts Baseline

## Required reading

1. `sdd/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-index.md`
2. `sdd/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-shared-context.md`
3. `sdd/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-spec-v1.md`
4. `.agent/rules/feature-landing-sdd-contracts-baseline.md`
5. Bóveda Anclora contracts, when available locally.
6. `anclora-design-system`, when available locally.

## Method

1. Confirm the landing classification as `Ultra Premium`.
2. Identify applicable contracts from Bóveda Anclora.
3. Identify executable support in `anclora-design-system`.
4. Select only the minimum contracts required for this landing.
5. Document source, state and reason for each local contract.
6. Stop before functional implementation.

## Stop conditions

- A required canonical source is unavailable.
- The work would modify `src/`, APIs, env, deployment or integrations.
- A contract cannot be justified as applicable to this landing.
- The work would copy the Bóveda wholesale.

## Output

- Candidate contract list.
- Applicable contract baseline.
- Deferred/discarded contract list.
- Gate recommendation.
