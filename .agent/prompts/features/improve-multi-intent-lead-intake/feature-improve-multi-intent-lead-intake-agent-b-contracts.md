# Agent B — Contracts & Payload Design

## Mission

Design the multi-intent payload contract and UX field model based on Agent A inventory.

## Inputs

Read:

- Source inventory.
- Spec v1.
- Test plan v1.
- `src/lib/lead-intake.ts`
- `src/components/forms/SellerIntakeForm.tsx`

## Required Output

Update:

- `feature-improve-multi-intent-lead-intake-spec-v1.md`
- `feature-improve-multi-intent-lead-intake-test-plan-v1.md`

Create:

- `executions/feature-improve-multi-intent-lead-intake-02-agent-b-contracts-execution-report.md`

## Must Define

- Lead intent enum.
- Common fields.
- Seller fields.
- Buyer fields.
- Investor fields.
- Partner fields.
- Backward compatibility strategy.
- n8n expected mapping.
- Captcha token handling.
- Validation strategy.

## Forbidden

- Do not implement UI.
- Do not modify production code.
- Do not commit.
- Do not push.
