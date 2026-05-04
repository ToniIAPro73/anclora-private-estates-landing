# Spec v1 — Multi-Intent Lead Intake & Captcha

## Status

Refined by Agent B. Ready for implementation.

## Feature Goal

Evolve the current seller-specific lead intake into a multi-intent capture system that preserves the existing Nexus/n8n integration while adding security (Captcha) and deeper qualification.

## Technical Contract: Lead Intent

Definitive `LeadIntent` enum for internal UI logic:

```ts
export type LeadIntent =
  | "sell"          // Equivalent to legacy seller_intake
  | "valuation"     // Private valuation request
  | "buy"           // Buyer lead
  | "invest"        // Investor lead
  | "partner";      // Partner/Collaboration
```

## Payload Design: Unified Lead Intake

The payload must be **flat** to ensure maximum compatibility with the existing n8n "Normalize & Score" node and the Nexus API. Internal UI intent and wire `lead_type` are intentionally separated for backward compatibility.

### Common Fields (Base)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | `"private_estates_landing"` | Yes | Fixed value |
| `lead_type` | `"seller_intake"` or `LeadIntent` wire value | Yes | For `sell`, keep `"seller_intake"` for LNI-001 compatibility. Other intents use `"valuation"`, `"buy"`, `"invest"` or `"partner"`. |
| `language` | `LanguageCode` | Yes | es, en, de, fr |
| `name` | `string` | Yes | |
| `email` | `string` | Yes | |
| `phone` | `string` | No | |
| `message` | `string` | No | General notes |
| `page_url` | `string` | Yes | For attribution |
| `submitted_at`| `string` | Yes | ISO Date |
| `captcha_token`| `string` | Cond. | reCAPTCHA v2 token |
| `captcha_provider`| `"recaptcha"` | Cond.| Fixed if site key exists |

### Intent-Specific Fields (Qualifiers)

To maintain a flat structure, we use semantic prefixes:

**Seller (`intent: "sell"`, wire `lead_type: "seller_intake"`):**
- `property_zone`: string
- `property_type`: string
- `commercialization`: string

**Valuation (`lead_type: "valuation"`):**
- `valuation_address`: string
- `valuation_property_type`: string (reuse if possible)

**Buyer (`lead_type: "buy"`):**
- `target_zone`: string
- `budget_range`: string
- `buy_timing`: string

**Investor (`lead_type: "invest"`):**
- `investment_ticket`: string
- `investment_goal`: string

**Partner (`lead_type: "partner"`):**
- `partner_category`: string
- `partner_proposal`: string

## Backward Compatibility Strategy (Legacy LNI-001)

1. **Intake Client (`lead-intake.ts`)**:
   - Refactor `buildSellerLeadIntakePayload` to be a wrapper around a new `buildLeadIntakePayload`.
   - Ensure the output of the wrapper is identical to the current one when internal `intent` is `"sell"`.
   - **Crucial**: The `lead_type` value `"seller_intake"` in LNI-001 should be aliased or migrated to `"sell"` in n8n, but the frontend should ideally send `"sell"` and have n8n handle the mapping or update the Nexus intake to accept `"sell"`. *Decision: Maintain `"seller_intake"` as the wire value for `lead_type` if intent is `"sell"` to avoid breaking the current n8n node.*

2. **n8n Normalize & Score**:
   - This node should be updated to handle the new fields (prefixed with intent).
   - It must validate the `captcha_token` before proceeding to Nexus.

## Captcha Strategy

- **Verification Location**: n8n Webhook entry point.
- **Frontend Action**: `SellerIntakeForm` (rebranded as `LeadIntakeForm`) will render the reCAPTCHA v2 widget.
- **Validation**: If `VITE_RECAPTCHA_SITE_KEY` is present, `captcha_token` is **required** for submission.
- **Verification Logic (n8n)**:
  - Call `https://www.google.com/recaptcha/api/siteverify` with the token and the secret key (stored in n8n/Nexus, NEVER in frontend).
  - If `success: false`, return 400 to the landing.
  - If `success: true`, continue lead processing.

## Validation Strategy

- **Client-side**:
  - Name, Email, Privacy: Mandatory.
  - Intent Selection: Mandatory.
  - Captcha (if enabled): Mandatory.
- **Server-side (n8n)**:
  - Captcha verify.
  - Email format check.
  - Intent-specific mandatory field check.

## Risks & Mitigations

- **Risk**: Captcha blocks legitimate leads due to technical errors.
  - **Mitigation**: Clear error messages and "Reset Captcha" button. Ensure `recaptcha` script is loaded only once.
- **Risk**: Payload too large for n8n or Nexus.
  - **Mitigation**: Keep fields flat and strictly relevant to qualification.
- **Risk**: Breaking existing `SellerIntakeForm` tests.
  - **Mitigation**: Update tests to reflect the new `LeadIntent` selection requirement.
