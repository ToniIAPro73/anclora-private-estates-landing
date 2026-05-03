# Test Plan v1 — Multi-Intent Lead Intake & Captcha

## Unit / Component Tests

Update or add tests for:

- `SellerIntakeForm` renders lead intent selector.
- Common fields validate correctly.
- Intent-specific fields appear for each intent.
- Existing seller flow still submits normalized payload.
- Buyer flow submits expected fields.
- Investor flow submits expected fields.
- Partner flow submits expected fields.
- Captcha error appears when site key exists and no token is available.
- Form can submit when captcha is disabled in local/test mode.

## Integration Tests

Validate:

- Intake submitter receives extended payload.
- Existing `lead-intake.ts` fallback behavior remains safe.
- `.env.example` documents public variables only.

## Manual E2E

Local test:

```text
Landing -> form submit -> n8n webhook -> Normalize & Score -> Nexus API -> response OK
```

Scenarios:

1. Seller hot lead.
2. Valuation-only owner.
3. Buyer lead.
4. Investor lead.
5. Partner lead.
6. Captcha missing or invalid.
7. Backend or n8n failure.

## Build

Required before merge:

```bash
npm test
npm run build
```

## Acceptance Criteria

- Existing seller intake does not regress.
- Multi-intent data reaches n8n.
- Nexus ingestion remains successful.
- Captcha is visible when configured.
- Captcha validation strategy is documented and implemented or explicitly gated.
