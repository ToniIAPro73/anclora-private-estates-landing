# Execution Report 08 - Nexus 422 Payload Hotfix

## Root Cause Detected
1.  **Payload Mismatch**: The unified `lead-intake.ts` library was missing fields required by the newer Anclora Nexus ingestion contract (e.g., `full_name`, `privacy_accepted`, `submission_language`).
2.  **Unfriendly Error Rendering**: Frontend forms were rendering complex backend validation error objects directly, resulting in `[object Object]` displays instead of human-readable messages.

## Fixes Implemented
1.  **Payload Alignment (`src/lib/lead-intake.ts`)**:
    *   Updated `LeadIntakePayload` to include Nexus-standard aliases: `full_name`, `submission_source`, `submission_language`, and `privacy_accepted`.
    *   Maintained legacy fields (`name`, `source`, `language`) for backward compatibility with older n8n workflows.
    *   Updated `buildLeadIntakePayload` to automatically populate both legacy and new fields.
2.  **Hardened Error Parsing (`src/lib/lead-intake.ts`)**:
    *   Implemented `formatBackendError` to safely parse FastAPI-style validation errors (arrays in `detail` field).
    *   Converts structured error locations and messages into a flat, readable string (e.g., "body.email: invalid email format").
3.  **Global Form Improvements**:
    *   Updated `SellerIntakeForm.tsx` to pass the `privacy_accepted` state to the payload builder.
    *   Applied improved error parsing logic to `ValuationRequestForm.tsx`, `DataLabSignalsSection.tsx`, and `PartnersSynergiSection.tsx` to eliminate `[object Object]` rendering site-wide.

## Outgoing Payload Comparison (Seller Intent)

### Before
```json
{
  "source": "private_estates_landing",
  "lead_type": "seller_intake",
  "language": "es",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "zone": "Son Vida",
  "page_url": "...",
  "submitted_at": "..."
}
```

### After (Aligned with Nexus)
```json
{
  "source": "private_estates_landing",
  "submission_source": "private_estates_landing",
  "lead_type": "seller_intake",
  "language": "es",
  "submission_language": "es",
  "name": "John Doe",
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "privacy_accepted": true,
  "zone": "Son Vida",
  "page_url": "...",
  "submitted_at": "..."
}
```

## Technical Results
*   **npm test**: **PASS** (8 tests passed). Added specific coverage for structured 422 errors and Nexus payload validation.
*   **npm run build**: **SUCCESS**.

## Final Decision
**OK**

The lead intake flow is now fully compatible with the Anclora Nexus ingestion contract, and validation errors are presented clearly to the user.
