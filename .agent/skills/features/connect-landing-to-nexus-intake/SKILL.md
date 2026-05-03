---
name: connect-landing-to-nexus-intake
description: Connect landing lead forms to Anclora Nexus / n8n Unified Lead Intake safely.
---

# Skill — Landing Nexus Intake Connection

## Read first

- `sdd/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-index.md`
- `sdd/features/connect-landing-to-nexus-intake/feature-connect-landing-to-nexus-intake-spec-v1.md`
- `.agent/rules/feature-connect-landing-to-nexus-intake.md`
- `sdd/contracts/CONTRACTS_BASELINE_INDEX.md`

## Method

1. Audit existing form flows.
2. Define payload and endpoint strategy.
3. Implement smallest safe connection.
4. Run QA.
5. Run gate-final.

## Stop conditions

- Endpoint contract is unknown.
- Required env variable is missing and no safe fallback exists.
- Implementation would require secrets in frontend.
- Existing working forms would be broken.
