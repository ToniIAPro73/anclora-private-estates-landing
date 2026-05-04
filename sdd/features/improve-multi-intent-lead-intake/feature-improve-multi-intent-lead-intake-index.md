# ANCLORA-LNI-002 — Multi-Intent Lead Intake & Captcha

## Metadata

- Slug: `improve-multi-intent-lead-intake`
- Version: `1.0`
- Status: `Planned`
- Priority: `Critical`
- Area: Landing / Lead Intake / Nexus / n8n
- Previous feature: `ANCLORA-LNI-001 — Landing Nexus Intake Connection`

## Objective

Evolve the current seller-oriented intake into a multi-intent lead intake experience for owners, valuation requests, buyers, investors and partners.

The feature must preserve the existing Nexus/n8n intake connection, improve lead qualification data and add captcha support to the form connected to the intake flow.

## Current Finding

The current `/propietarios` form uses `SellerIntakeForm`, which is connected to Nexus/n8n through `src/lib/lead-intake.ts`, but it does not render reCAPTCHA.

A separate `ValuationRequestForm` already contains reCAPTCHA logic, but it is not the active connected form in the `/propietarios` intake path.

## Expected Outcome

- Clearer multi-intent UX.
- Safer extended intake payload.
- Captcha reuse or extraction plan.
- Existing E2E flow preserved.
- Tests and documentation updated.
