# RUN_AGENT — ANCLORA-LNI-002

## Feature

`ANCLORA-LNI-002 — Multi-Intent Lead Intake & Captcha`

## Slug

`improve-multi-intent-lead-intake`

## Execution Order

1. Agent A — Inventory
2. Agent B — Contracts
3. Agent C — Frontend
4. Agent D — Captcha
5. Agent E — QA & Gate

## Rule

Do not skip Agent A.

Do not implement frontend changes before contracts are documented.

Do not commit or push from agents unless explicitly instructed.

## Local Commands

```bash
npm test
npm run build
```
