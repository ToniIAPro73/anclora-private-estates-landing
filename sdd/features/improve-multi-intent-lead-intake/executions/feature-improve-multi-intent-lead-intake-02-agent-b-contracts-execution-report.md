# Execution Report 02 - Agent B Contracts

## Prompt executed

`.agent/prompts/features/improve-multi-intent-lead-intake/feature-improve-multi-intent-lead-intake-agent-b-contracts.md`

## Summary of Contracts Defined

### 1. Lead Intent Enum
```ts
export type LeadIntent = "sell" | "valuation" | "buy" | "invest" | "partner";
```

### 2. Payload Structure (Flat)
- **Common**: `source`, `lead_type`, `language`, `name`, `email`, `phone`, `message`, `page_url`, `submitted_at`, `captcha_token`, `captcha_provider`.
- **Seller**: `property_zone`, `property_type`, `commercialization`.
- **Valuation**: `valuation_address`, `valuation_property_type`.
- **Buyer**: `target_zone`, `budget_range`, `buy_timing`.
- **Investor**: `investment_ticket`, `investment_goal`.
- **Partner**: `partner_category`, `partner_proposal`.

### 3. Backward Compatibility
- Maintain `lead_type: "seller_intake"` specifically when the intent is `"sell"` to avoid breaking the current n8n node configured in LNI-001.
- `buildSellerLeadIntakePayload` will remain as a legacy wrapper.

### 4. Captcha Strategy
- reCAPTCHA v2 (explicit).
- Frontend sends `captcha_token`.
- n8n/Backend verifies via Google API with private secret.

## Risks & Mitigations
- **Complexity in n8n**: The "Normalize & Score" node must now handle 10+ new potential fields. Mitigation: Document clearly and use semantic prefixes.
- **Form Weight**: Adding all intents into one form might make it heavy. Mitigation: Use a clean `switch/case` in the render function.

## Recommendation for Agent C (Frontend)
- Rebrand `SellerIntakeForm.tsx` to `LeadIntakeForm.tsx`.
- Implement a `switch/case` or a mapping for intent-specific fields.
- Extract the Captcha logic from `ValuationRequestForm.tsx` (it's currently duplicated or legacy) and implement it robustly in the new `LeadIntakeForm.tsx`.
- Ensure the `SiteCopy` model is updated to include labels for all new fields and intents.

## Recommendation for Agent D (Captcha)
- Extract or reuse captcha behavior from `ValuationRequestForm.tsx` without duplicating fragile script-loading logic.
- Ensure `captcha_token` and `captcha_provider` are included only when captcha is enabled.
- Document server-side verification in n8n/Nexus as mandatory.

## Recommendation for Agent E (QA)
- Create or validate a comprehensive test suite for `LeadIntakeForm.tsx` covering all 5 intents.
- Mock `VITE_RECAPTCHA_SITE_KEY` to test captcha presence and blocking behavior.
- Validate that the payload reaching the mocked backend remains flat and semantic.

## Git Status

```bash
git status --short
 M sdd/features/improve-multi-intent-lead-intake/feature-improve-multi-intent-lead-intake-spec-v1.md
 M sdd/features/improve-multi-intent-lead-intake/feature-improve-multi-intent-lead-intake-test-plan-v1.md
?? sdd/features/improve-multi-intent-lead-intake/executions/feature-improve-multi-intent-lead-intake-02-agent-b-contracts-execution-report.md
```
