# Shared Agent Context — ANCLORA-LNI-002

Read first.

The feature must improve the existing intake form so the landing can capture multiple lead intents, not only sellers.

Do not break the working `ANCLORA-LNI-001` flow.

Important current state:

- `SellerIntakeForm` is connected to Nexus/n8n.
- `ValuationRequestForm` has reCAPTCHA logic.
- `SellerIntakeForm` does not show captcha.
- Local E2E confirmed landing to n8n to Nexus ingestion works.
- n8n must send JSON object body, not JSON-stringified body.

Primary constraint: preserve existing working path while expanding intent capture.
