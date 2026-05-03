# Agent C — Frontend Multi-Intent Implementation

## Mission

Implement the multi-intent intake UI after Agent B contracts are complete.

## Required Scope

- Update connected intake form.
- Add lead intent selector.
- Show conditional fields.
- Preserve seller flow.
- Preserve existing styling language.
- Update copy in all supported languages if required.
- Update tests.

## Files likely affected

- `src/components/forms/SellerIntakeForm.tsx`
- `src/components/forms/SellerIntakeForm.test.tsx`
- `src/lib/lead-intake.ts`
- `src/content/site-copy.ts`

## Required Commands

```bash
npm test
npm run build
```

## Required Output

Create:

- `executions/feature-improve-multi-intent-lead-intake-03-agent-c-frontend-execution-report.md`

## Forbidden

- Do not add captcha verification here unless coordinated with Agent D.
- Do not hardcode webhook URLs.
- Do not commit.
- Do not push.
