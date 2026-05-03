# RUN FEATURE — landing-ui-contracts-alignment

Execute this feature in repo `anclora-private-estates-landing`.

## Branch

Use only branch:

`docs/execute-landing-ui-contracts-alignment`

Do not commit to `main`.

Before writing anything, verify:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout -B docs/execute-landing-ui-contracts-alignment origin/docs/execute-landing-ui-contracts-alignment
git branch --show-current
git status --short
```

## Mandatory execution order

Execute these prompt files in order:

1. `.agent/prompts/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-shared-context.md`
2. `.agent/prompts/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-master-parallel.md`
3. `.agent/prompts/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-agent-c-frontend.md`
4. `.agent/prompts/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-agent-d-qa.md`
5. `sdd/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-gate-final.md`

Do not skip Agent C.
Do not skip Agent D / QA.

## Mandatory contracts

Read and apply:

- `sdd/contracts/CONTRACTS_BASELINE_INDEX.md`
- `sdd/contracts/DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`
- `sdd/contracts/ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md`
- `sdd/contracts/ANCLORA_BRANDING_MASTER_CONTRACT.md`
- `sdd/contracts/ANCLORA_BRANDING_COLOR_TOKENS.md`
- `sdd/contracts/ANCLORA_BRANDING_TYPOGRAPHY.md`
- `sdd/contracts/LOCALIZATION_CONTRACT.md`
- `sdd/contracts/UI_MOTION_CONTRACT.md`
- `sdd/contracts/DEFERRED_CONTRACTS.md`

## Required reports

Create:

- `sdd/features/landing-ui-contracts-alignment/executions/feature-landing-ui-contracts-alignment-01-shared-context-execution-report.md`
- `sdd/features/landing-ui-contracts-alignment/executions/feature-landing-ui-contracts-alignment-02-master-parallel-execution-report.md`
- `sdd/features/landing-ui-contracts-alignment/executions/feature-landing-ui-contracts-alignment-03-agent-c-frontend-execution-report.md`
- `sdd/features/landing-ui-contracts-alignment/executions/feature-landing-ui-contracts-alignment-04-agent-d-qa-execution-report.md`
- `sdd/features/landing-ui-contracts-alignment/executions/feature-landing-ui-contracts-alignment-05-gate-final-execution-report.md`

## If gate-final is OK

Then update:

- `sdd/features/landing-ui-contracts-alignment/feature-landing-ui-contracts-alignment-gate-final.md`
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
