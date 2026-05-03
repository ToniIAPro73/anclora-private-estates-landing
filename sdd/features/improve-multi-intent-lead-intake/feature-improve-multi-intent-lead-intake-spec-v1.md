# Spec v1 — Multi-Intent Lead Intake & Captcha

## Status

Draft. Must be refined by Agent B after Agent A inventory.

## Feature Goal

Replace the current seller-only lead intake assumption with a multi-intent intake model while preserving the working public intake integration.

## Proposed Lead Intent Values

```ts
type LeadIntent =
  | "sell_property"
  | "private_valuation"
  | "buy_property"
  | "investment_opportunity"
  | "partner_collaboration";
```

## Recommended UX

First field:

```text
¿En qué podemos ayudarte?
```

Options:

- Quiero vender una propiedad
- Quiero una valoración privada
- Quiero comprar una propiedad premium
- Busco oportunidades de inversión
- Soy partner / colaborador

## Common Fields

- name
- email
- phone
- preferred_language
- lead_intent
- message
- privacy consent
- captcha token/provider where enabled

## Intent-Specific Fields

Owner or seller:

- property_zone
- property_type
- estimated_value_range
- commercialization_preference
- timing
- confidentiality_level

Buyer:

- target_zone
- desired_property_type
- budget_range
- intended_use
- purchase_timing
- key_requirements

Investor:

- investment_ticket_range
- expected_yield_or_goal
- asset_type_interest
- investment_horizon
- vacation_rental_interest
- documentation_required

Partner:

- partner_type
- company_or_profile
- operating_area
- collaboration_proposal

## Payload Direction

The payload should remain backward-compatible with Nexus/n8n. If the existing Nexus contract is flat, Agent B must define the safest transition strategy.

## Captcha

- Render captcha in the connected intake form when `VITE_RECAPTCHA_SITE_KEY` is configured.
- Include `captcha_provider` and `captcha_token` in payload.
- Validate token in n8n or backend before sending to Nexus.
- If captcha validation is not implemented server-side, document as blocker or explicit phase split.

## Non-Goals

- Do not redesign the whole landing.
- Do not replace n8n.
- Do not introduce paid tools unless necessary.
- Do not add secrets to the client.
