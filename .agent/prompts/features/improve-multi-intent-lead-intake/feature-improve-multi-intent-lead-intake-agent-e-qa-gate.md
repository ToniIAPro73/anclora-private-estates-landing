# Agent E — QA & Final Gate

## Mission

Validate the completed `ANCLORA-LNI-002` feature.

## Required Checks

Run:

```bash
npm test
npm run build
```

Inspect:

- form behavior
- payload compatibility
- captcha behavior
- copy completeness
- no secrets
- no regression in existing seller flow

## Required Output

Create:

- `executions/feature-improve-multi-intent-lead-intake-05-agent-e-qa-gate-execution-report.md`

Update:

- `feature-improve-multi-intent-lead-intake-gate-final.md`

## Final Decision

Return:

- OK only if tests/build pass and no blocking risk remains.
- KO if any critical issue remains.

## Forbidden

- Do not commit.
- Do not push.
