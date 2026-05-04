# Execution Report 07 - Production Captcha Hotfix

## Root Cause Detected
1.  **reCAPTCHA Crash**: The `useRecaptcha` hook was calling `window.grecaptcha.render` without verifying if `render` was actually a function.
2.  **Submission Block**: The initial fix prevented the crash but still blocked form submission if the captcha failed to initialize while a `siteKey` was present.
3.  **Locale Inconsistency**: The landing was exposing French (FR) despite it not being a currently supported production locale.

## Fixes Implemented
1.  **New `captchaStatus` API in `useRecaptcha.ts`**:
    *   States: `"disabled" | "loading" | "ready" | "failed"`.
    *   **Graceful Degradation**: If `render` is unavailable or throws after several retries, status becomes `"failed"`.
    *   Forms only block submission when `captchaStatus === "ready"` and no token is present.
    *   Hardened with strict type checks and retry logic.
2.  **Form Updates**:
    *   `SellerIntakeForm.tsx` and `ValuationRequestForm.tsx` updated to use `captchaStatus` for intelligent submission blocking.
    *   Correctly sends `captcha_token` only when available.
3.  **Active Locale Cleanup**:
    *   Removed "fr" from `LanguageCode` and UI selectors.
    *   Updated `App.tsx` and `site-copy.ts` to strictly support ES, EN, and DE.
    *   TypeScript errors resolved.

## Captcha Behavior After Fix
*   **Ready**: Mandatory captcha, blocks if unsolved.
*   **Disabled/Failed**: Submission permitted without captcha (UX-first approach).
*   **Loading**: Submission permitted to avoid silently blocking the lead flow while the external captcha script is still resolving.

## Technical Results
*   **npm test**: **PASS** (9 tests passed). Added validation for the "failed" captcha state.
*   **npm run build**: **SUCCESS**.

## Final Decision
**OK**

The production hotfix now provides a robust, fail-safe integration of reCAPTCHA while maintaining a clean, localized UX for active markets.
