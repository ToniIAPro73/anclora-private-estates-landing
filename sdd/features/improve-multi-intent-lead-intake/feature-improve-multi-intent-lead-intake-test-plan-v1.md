# Test Plan v1 — Multi-Intent Lead Intake & Captcha

## Unit / Component Tests (`LeadIntakeForm.tsx`)

- **Rendering**:
  - `LeadIntakeForm` renders the `lead_intent` selector as the first field.
  - Selecting an intent dynamically shows/hides the correct qualification fields.
  - reCAPTCHA widget renders ONLY if `VITE_RECAPTCHA_SITE_KEY` is present.
- **Validation**:
  - Form cannot submit if `lead_intent` is not selected.
  - Form cannot submit if captcha site key exists but no token is generated.
  - Validation errors are multilingual and accessible.
- **Intents**:
  - **Seller**: Renders zone, type, commercialization.
  - **Valuation**: Renders address, type.
  - **Buyer**: Renders zone, budget, timing.
  - **Investor**: Renders ticket, goal.
  - **Partner**: Renders category, proposal.

## Integration Tests (`lead-intake.ts`)

- **Payload Generation**:
  - `buildLeadIntakePayload` correctly flattens intent-specific fields.
  - `buildSellerLeadIntakePayload` (wrapper) still returns `lead_type: "seller_intake"` for backward compatibility with n8n LNI-001.
  - Captcha token and provider are correctly included in the payload when present.
- **Submission**:
  - `submitLeadIntake` sends a POST request with the expected flat JSON structure.

## Integration Tests (Vitest / MSW)

- Intercept `/api/public/lead-intake` and verify:
  - Payload contains `captcha_token` when site key is mocked.
  - Payload contains `buy_*` fields when `lead_type` is `"buy"`.

## Manual E2E Validation

Using a local n8n instance or a test webhook:

1. **Legacy Seller Path**: Verify it still works without changes to n8n.
2. **New Buyer Path**: Verify `target_zone`, `budget_range`, etc., reach the webhook.
3. **Captcha Flow**: 
   - Verify form is blocked without checking captcha.
   - Verify payload includes `g-recaptcha-response` (aliased to `captcha_token`).
4. **Error Handling**: Verify 400 from n8n (captcha fail) shows the correct error message on the landing.

## Build & CI

- `npm test` -> Must cover new intent branches.
- `npm run build` -> No regressions in bundle or types.
