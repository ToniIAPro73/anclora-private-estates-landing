# Agent D — Captcha Integration

## Mission

Integrate captcha protection into the connected intake flow.

## Context

`ValuationRequestForm` already contains reCAPTCHA rendering logic.

`SellerIntakeForm` currently does not show captcha.

## Required Decisions

- Reuse existing logic directly, or extract shared captcha component/hook.
- Ensure captcha appears when `VITE_RECAPTCHA_SITE_KEY` is configured.
- Include provider/token in payload.
- Document server-side validation requirement for n8n/Nexus.
- Avoid fake security: client-only captcha is not enough.

## Required Commands

```bash
npm test
npm run build
```

## Required Output

Create:

- `executions/feature-improve-multi-intent-lead-intake-04-agent-d-captcha-execution-report.md`

## Forbidden

- Do not add secret keys to frontend.
- Do not bypass privacy consent.
- Do not commit.
- Do not push.
