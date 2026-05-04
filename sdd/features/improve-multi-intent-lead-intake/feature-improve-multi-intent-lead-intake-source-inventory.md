# Source Inventory — improve-multi-intent-lead-intake

## Current State Analysis

### 1. Forms and Sections

| Component | Context | Connected to Nexus? | Captcha? | Multi-intent? |
|-----------|---------|---------------------|----------|---------------|
| `SellerIntakeForm.tsx` | Used in `/propietarios` | **Yes** (via `lead-intake.ts`) | No | No (Seller only) |
| `ValuationRequestForm.tsx`| Used in `/valoracion` | No (Direct fetch to `/api/public/valuation-requests`) | **Yes** (reCAPTCHA v2) | No (Valuation only) |

### 2. Lead Intake Logic (`src/lib/lead-intake.ts`)

- Current Payload (`SellerLeadIntakePayload`):
  - `source`: fixed to `"private_estates_landing"`
  - `lead_type`: fixed to `"seller_intake"`
  - `language`: `LanguageCode`
  - `name`, `email`: required
  - `phone`, `zone`, `property_type`, `commercialization`, `message`, `page_url`: optional
  - `submitted_at`: ISO string
- Submit flow:
  - Resolves endpoint using `VITE_N8N_LEAD_INTAKE_WEBHOOK_URL` or `VITE_ANCLORA_NEXUS_BASE_URL`.
  - Sends raw JSON.

### 3. Captcha Implementation (`ValuationRequestForm.tsx`)

- Uses reCAPTCHA v2 (explicit render).
- Script loaded dynamically on mount.
- Uses `VITE_RECAPTCHA_SITE_KEY`.
- Token sent in `captcha_token` field.
- Provider sent in `captcha_provider` field.

### 4. Copy Model (`src/content/site-copy.ts`)

- `SellerFormCopy`: Fields for name, email, phone, zone, propertyType, commercialization, message.
- `ValuationFormCopy`: Fields for name, email, phone, address, message.
- Missing: Intent selection (Buyer, Seller, Investor, Partner, Valuation).

## Findings and Gaps

1. **Intake Inconsistency**: The landing has two parallel intake paths. `SellerIntakeForm` is the one connected to the new n8n Unified Intake, while `ValuationRequestForm` still hits the legacy Nexus valuation endpoint.
2. **Missing Captcha**: `SellerIntakeForm` (the one connected to the main flow) lacks captcha protection.
3. **Intent Hardcoding**: `lead-intake.ts` hardcodes `lead_type: "seller_intake"`.
4. **Validation**: `SellerIntakeForm` lacks strong client-side validation for phone or message length.

## Risks

- **Breaking LNI-001**: Modifying `lead-intake.ts` incorrectly could break the already validated seller flow.
- **Captcha Race Conditions**: Dynamically loading the reCAPTCHA script multiple times if the form is re-mounted.
- **n8n Payload Mismatch**: Changing field names without updating the n8n "Normalize & Score" node.

## Recommendations for Agent B

- Create a shared `IntakeForm.tsx` or evolve `SellerIntakeForm.tsx` into a generic `LeadIntakeForm.tsx`.
- Extract Captcha logic into a reusable hook or primitive.
- Update `lead-intake.ts` to support dynamic `lead_type` based on user intent.
- Ensure `IntakePayload` is backward compatible.
