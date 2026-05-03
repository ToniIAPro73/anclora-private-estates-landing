# RUN FEATURE — landing-sdd-contracts-baseline

Execute this feature in repo `anclora-private-estates-landing`.

## Branch

Use only branch:

`docs/execute-landing-sdd-contracts-baseline`

Do not commit to `main`.

Before writing anything, verify:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout -B docs/execute-landing-sdd-contracts-baseline origin/docs/execute-landing-sdd-contracts-baseline
git branch --show-current
git status --short
```

## Mandatory execution order

Execute these prompt files in order:

1. `.agent/prompts/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-shared-context.md`
2. `.agent/prompts/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-master-parallel.md`
3. `.agent/prompts/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-agent-a-contract-inventory.md`
4. `.agent/prompts/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-agent-b-design-system-mapping.md`
5. `.agent/prompts/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-agent-d-qa.md`
6. `sdd/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-gate-final.md`

Do not skip Agent A.
Do not skip Agent B.
Do not skip Agent D / QA.

## Mandatory sources

Read and apply:

- `sdd/contracts/CONTRACTS_BASELINE_INDEX.md`
- `sdd/contracts/DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`
- `sdd/contracts/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`
- `sdd/contracts/ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md`
- `sdd/contracts/ANCLORA_BRANDING_MASTER_CONTRACT.md`
- `sdd/contracts/ANCLORA_BRANDING_COLOR_TOKENS.md`
- `sdd/contracts/ANCLORA_BRANDING_TYPOGRAPHY.md`
- `sdd/contracts/LOCALIZATION_CONTRACT.md`
- `sdd/contracts/UI_MOTION_CONTRACT.md`
- `sdd/contracts/DEFERRED_CONTRACTS.md`

Also apply the canonical source relation already defined by this feature:

- Bóveda Anclora = normative source.
- `anclora-design-system` = executable source.
- Local `docs/` from this landing repo is not normative.

## Required reports

Create:

- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-01-shared-context-execution-report.md`
- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-02-master-parallel-execution-report.md`
- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-03-agent-a-contract-inventory-execution-report.md`
- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-04-agent-b-design-system-mapping-execution-report.md`
- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-05-agent-d-qa-execution-report.md`
- `sdd/features/landing-sdd-contracts-baseline/executions/feature-landing-sdd-contracts-baseline-06-gate-final-execution-report.md`

## If gate-final is OK

Then update:

- `sdd/features/landing-sdd-contracts-baseline/feature-landing-sdd-contracts-baseline-gate-final.md`
- `sdd/features/FEATURES.md`
- `sdd/core/CHANGELOG.md`

Then verify no forbidden files changed, commit and push the branch.

## If gate-final is KO

Do not update final registries.
Do not commit.
Do not push.
Report issues.

## Forbidden changes

Do not modify:

- `src/`
- `api/`
- `public/`
- env files
- build/deploy files

Do not use local `docs/` as normative source.

`MODAL_CONTRACT.md` remains deferred unless explicitly justified.

## Final response

Report:

- branch used
- prompts executed
- generated reports
- gate-final result
- files changed
- functional files changed, if any
- commit hash and push result if OK
- issues if KO
