# Execution Report - Cloudflare Turnstile Migration (10)

## Context
Replaced Google reCAPTCHA v2 with Cloudflare Turnstile to improve user experience (non-interactive) and alignment with modern privacy standards.

## Changes Implemented

### 1. New Hook (`src/hooks/useTurnstile.ts`)
- Created a native Turnstile integration hook using `window.turnstile`.
- Modeled the API after the previous `useRecaptcha` hook to ensure minimal friction during migration.
- Uses `appearance: "interaction-only"` for a cleaner UI.
- Properly handles loading, ready, failed, and expired states.
- Includes safe TypeScript type declarations for the Turnstile API.

### 2. Form Updates
- **`SellerIntakeForm.tsx`**: Migrated to `useTurnstile`. Updated environment variable usage to `VITE_TURNSTILE_SITE_KEY`.
- **`ValuationRequestForm.tsx`**: Migrated to `useTurnstile`. Updated payload to send `captcha_provider: "turnstile"`.

### 3. Payload Changes
- The `captcha_provider` field in lead intake payloads now sends `"turnstile"` instead of `"recaptcha"` when a token is present.
- The `captcha_token` field remains unchanged to preserve backend compatibility.

### 4. Environment Configuration
- Updated `.env.example`:
    - Added `VITE_TURNSTILE_SITE_KEY`.
    - Removed active frontend dependency on `VITE_RECAPTCHA_SITE_KEY`.
- `TURNSTILE_SECRET_KEY` remains backend-only and is intentionally not included in the frontend `.env.example`.

### 5. Compatibility Note
- No active reCAPTCHA integration remains in the frontend.
- `captcha_provider?: "recaptcha" | "turnstile"` is retained in the payload type only for backward compatibility with historical records/integrations.

### 6. Cleanup
- Deleted `src/hooks/useRecaptcha.ts` as it is no longer used in the project.

### 7. Verification
- **Tests**: Updated `src/components/forms/SellerIntakeForm.test.tsx` to verify:
    - Metadata remains intact (org_id, external_id, etc.).
    - Captcha provider is correctly identified as "turnstile".
    - Intent mapping (sell, buy, invest, valuation) remains correct.
    - Graceful degradation on Turnstile failure.
- **Result**: 13/13 tests passed.
- **Build**: Successful production build.

## Why Native Turnstile?
Native integration was chosen over reCAPTCHA compatibility mode to:
1. Avoid loading unnecessary Google scripts.
2. Ensure full access to Turnstile-specific features (e.g., granular error callbacks).
3. Maintain a clean, future-proof implementation.

## Validation Result
- Tests: Passed.
- Build: Successful.
