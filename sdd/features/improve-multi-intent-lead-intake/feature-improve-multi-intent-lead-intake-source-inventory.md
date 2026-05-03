# Source Inventory — Multi-Intent Lead Intake & Captcha

## Initial Inventory

This file must be completed by Agent A.

## Commands already used manually

```bash
find src -type f | grep -Ei "SellerIntakeForm|ValuationRequestForm|recaptcha|captcha|lead-intake|contact"
grep -RniE "SellerIntakeForm|ValuationRequestForm|recaptcha|captcha|VITE_RECAPTCHA|lead-intake" src
```

## Known matches

- `src/sections/ContactSection.tsx`
- `src/components/forms/SellerIntakeForm.tsx`
- `src/components/forms/SellerIntakeForm.test.tsx`
- `src/components/forms/ValuationRequestForm.tsx`
- `src/lib/lead-intake.ts`
- `src/sections/SellerIntakeSection.tsx`
- `src/sections/ValuationRequestSection.tsx`
- `src/content/site-copy.ts`

## Agent A responsibilities

Agent A must inspect the current implementation and fill:

- Current form fields.
- Current payload shape.
- Current validation behavior.
- Current captcha implementation in `ValuationRequestForm`.
- Missing captcha behavior in `SellerIntakeForm`.
- Current tests.
- Current copy model.
- Risks before implementation.
