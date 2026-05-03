# Agent A — Source Inventory & Current State

## Mission

Inspect the current code and document the exact current state for `ANCLORA-LNI-002`.

## Required Files

Inspect:

- `src/components/forms/SellerIntakeForm.tsx`
- `src/components/forms/SellerIntakeForm.test.tsx`
- `src/components/forms/ValuationRequestForm.tsx`
- `src/sections/SellerIntakeSection.tsx`
- `src/sections/ValuationRequestSection.tsx`
- `src/lib/lead-intake.ts`
- `src/content/site-copy.ts`
- `.env.example`

## Required Commands

```bash
find src -type f | grep -Ei "SellerIntakeForm|ValuationRequestForm|recaptcha|captcha|lead-intake|contact"
grep -RniE "SellerIntakeForm|ValuationRequestForm|recaptcha|captcha|VITE_RECAPTCHA|lead-intake" src
npm test -- --run src/components/forms/SellerIntakeForm.test.tsx
```

## Required Output

Update:

`sdd/features/improve-multi-intent-lead-intake/feature-improve-multi-intent-lead-intake-source-inventory.md`

Create:

`sdd/features/improve-multi-intent-lead-intake/executions/feature-improve-multi-intent-lead-intake-01-agent-a-inventory-execution-report.md`

## Must Include

- Current form fields.
- Current payload fields.
- Current validation behavior.
- Current captcha implementation in `ValuationRequestForm`.
- Missing captcha behavior in `SellerIntakeForm`.
- Current tests.
- Current copy model.
- Risks before implementation.
- Recommended next contracts.

## Forbidden

- Do not modify app code.
- Do not modify tests.
- Do not commit.
- Do not push.
