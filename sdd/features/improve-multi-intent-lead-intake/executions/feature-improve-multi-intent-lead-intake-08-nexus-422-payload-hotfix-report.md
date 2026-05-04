# Execution Report 08 - Nexus 422 Payload Hotfix

## Root Cause Detected
Anclora Nexus now requires strict schema validation for lead ingestion. Previous payloads were missing:
*   `org_id`: Mandatory tenant identification.
*   `external_id`: Unique client-side identifier.
*   `source_system` / `source_channel`: Origin metadata.

Additionally, frontend forms were rendering structured Pydantic/FastAPI error objects with a "body." prefix and potentially as `[object Object]` if not strings.

## Fixes Implemented
1.  **Mandatory Ingestion Fields**:
    *   Added `org_id` (sourced from `VITE_NEXUS_ORG_ID`).
    *   Added `external_id` (auto-generated as `anclora_private_estates_landing_TIMESTAMP_RANDOM`).
    *   Added `source_system` ("anclora_private_estates_landing") and `source_channel` ("web").
2.  **Configuration Safety**:
    *   Implemented a pre-POST check for `org_id`. If `VITE_NEXUS_ORG_ID` is missing, the submission is blocked with a clear "Configuration Error" message instead of a generic backend 422.
3.  **Refined Error Formatting**:
    *   Improved `formatBackendError` to strip the `body.` prefix from validation locations.
    *   Example: `["body", "email"]` now renders as `email: Field required` instead of `body.email: Field required`.
4.  **Global Alignment**:
    *   Updated `SellerIntakeForm`, `ValuationRequestForm`, `DataLabSignalsSection`, and `PartnersSynergiSection` to include the mandatory Nexus fields.

## Outgoing Payload Comparison (Seller Intent)

### After alignment with Nexus
```json
{
  "org_id": "YOUR_ORG_ID",
  "source_system": "anclora_private_estates_landing",
  "source_channel": "web",
  "external_id": "anclora_private_estates_landing_1714856400000_123",
  "source": "private_estates_landing",
  "submission_source": "private_estates_landing",
  "lead_type": "seller_intake",
  "full_name": "John Doe",
  "email": "john@example.com",
  "privacy_accepted": true,
  "zone": "Son Vida",
  ...
}
```

## Technical Results
*   **npm test**: **PASS** (8 tests passed).
*   **npm run build**: **SUCCESS**.

## Final Decision
**OK**

The landing payload is now fully aligned with the Anclora Nexus mandatory ingestion contract.
