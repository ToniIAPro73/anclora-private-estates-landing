# Shared Context — Multi-Intent Lead Intake & Captcha

## Background

`ANCLORA-LNI-001` connected `SellerIntakeForm` to the public n8n/Nexus intake flow.

A local E2E test confirmed:

```text
Landing local -> n8n webhook -> Normalize & Score -> Nexus API Request -> Nexus ingestion OK
```

A separate n8n issue was identified during manual testing: the `Nexus API Request` node must send the JSON object body, not a JSON-stringified body.

## Product Gap

The current intake is too seller-specific. The same form can be reached from valuation and owner-oriented entry points, but real users may also be buyers, investors or partners.

The form must capture intent explicitly and adapt the qualification fields accordingly.

## Captcha Gap

`ValuationRequestForm` contains reCAPTCHA code and uses `VITE_RECAPTCHA_SITE_KEY`.

`SellerIntakeForm` does not currently render captcha, even though it is the form connected to the new intake flow.

Captcha must be validated server-side through n8n or Nexus. A client-side widget alone is not enough.

## Known Files

- `src/components/forms/SellerIntakeForm.tsx`
- `src/components/forms/SellerIntakeForm.test.tsx`
- `src/components/forms/ValuationRequestForm.tsx`
- `src/sections/SellerIntakeSection.tsx`
- `src/sections/ValuationRequestSection.tsx`
- `src/lib/lead-intake.ts`
- `src/content/site-copy.ts`

## Constraints

- Do not break the already validated Nexus/n8n intake path.
- Do not expose secrets in frontend variables.
- Do not hardcode private webhook URLs.
- Keep `.env.example` safe.
- Any captcha verification must happen outside the browser.
- Maintain multilingual copy compatibility.
- Keep implementation testable.
