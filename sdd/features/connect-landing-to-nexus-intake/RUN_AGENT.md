# RUN FEATURE — connect-landing-to-nexus-intake

Execute this feature in repo `anclora-private-estates-landing`.

## Branch

Use only branch:

`feat/connect-landing-to-nexus-intake`

Do not commit to `main`.

Before writing anything, verify:

```bash
git fetch origin
git checkout main
git pull origin main
git checkout -B feat/connect-landing-to-nexus-intake origin/feat/connect-landing-to-nexus-intake
git branch --show-current
git status --short
```

## Mandatory execution order

Execute these prompt files in order:

1. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-shared-context.md`
2. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-master-parallel.md`
3. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-agent-a-contracts.md`
4. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-agent-b-integration.md`
5. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-agent-c-frontend.md`
6. `.agent/prompts/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-agent-d-qa.md`
7. `sdd/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-gate-final.md`

Do not skip Agent A.
Do not skip Agent B.
Do not skip Agent C.
Do not skip Agent D / QA.

## Mandatory sources

Read and apply:

- `sdd/contracts/CONTRACTS_BASELINE_INDEX.md`
- `sdd/contracts/DESIGN_SYSTEM_CONSUMPTION_CONTRACT.md`
- `sdd/contracts/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`
- `sdd/contracts/ANCLORA_ULTRA_PREMIUM_APP_CONTRACT.md`
- `sdd/contracts/LOCALIZATION_CONTRACT.md`
- `sdd/contracts/UI_MOTION_CONTRACT.md`
- `sdd/contracts/DEFERRED_CONTRACTS.md`
- `sdd/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-source-inventory.md`

## Feature objective

Connect landing forms to the public n8n Unified Lead Intake / Anclora Nexus intake flow.

Current known state:

- `SellerIntakeForm` exists but does not submit.
- `ValuationRequestForm` already submits to a public Nexus endpoint.
- `DataLabSignalsSection` already submits to a public Nexus endpoint.
- `PartnersSynergiSection` already submits to a public Nexus endpoint.

The safest v1 target is to connect `SellerIntakeForm` first and avoid breaking existing working flows.

## Required reports

Create execution evidence under:

`sdd/features/connect-landing-to-nexus-intake/executions/`

Required reports:

- `feature-connect-landing-to-nexus-intake-01-shared-context-execution-report.md`
- `feature-connect-landing-to-nexus-intake-02-master-parallel-execution-report.md`
- `feature-connect-landing-to-nexus-intake-03-agent-a-contracts-execution-report.md`
- `feature-connect-landing-to-nexus-intake-04-agent-b-integration-execution-report.md`
- `feature-connect-landing-to-nexus-intake-05-agent-c-frontend-execution-report.md`
- `feature-connect-landing-to-nexus-intake-06-agent-d-qa-execution-report.md`
- `feature-connect-landing-to-nexus-intake-07-gate-final-execution-report.md`

## If gate-final is OK

Then update:

- `sdd/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-gate-final.md`
- `sdd/features/FEATURES.md`
- `sdd/core/CHANGELOG.md`

Then verify no forbidden files changed outside the approved functional scope, commit and push the branch.

## If gate-final is KO

Do not update final registries.
Do not commit.
Do not push.
Report issues clearly.

## Approved functional scope

Allowed:

- `src/components/forms/SellerIntakeForm.tsx`
- new `src/lib/*intake*` helper/client if needed
- related tests
- `.env.example`
- SDD and `.agent` files for this feature

Do not modify unrelated UI sections unless explicitly justified.

## Forbidden changes

Do not modify:

- secrets
- `.env`
- backend Nexus code
- n8n workflows
- unrelated styling/branding
- unrelated landing sections

Do not hardcode temporary tunnel URLs.

Do not use local `docs/` as normative source.

`MODAL_CONTRACT.md` remains deferred unless explicitly justified.

## Final response

Report:

- branch used
- prompts executed
- generated reports
- gate-final result
- files changed
- functional files changed
- tests/build executed
- commit hash and push result if OK
- issues if KO
