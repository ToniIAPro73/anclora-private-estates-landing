import type { LanguageCode } from "@/content/site-copy";

const DEFAULT_NEXUS_BASE_URL = "https://nexus.anclora.group";
const DEFAULT_PUBLIC_LEAD_INTAKE_PATH = "/api/public/lead-intake";

/**
 * Nexus unified lead intake API path (v1).
 * Used when sending leads with the standardized LeadIntakeRequest schema.
 */
const NEXUS_LEAD_INTAKE_V1_PATH = "/api/v1/leads/intake";

/**
 * Definitive Lead Intent types for internal logic.
 * Corrected to exclude partners (handled by Synergi).
 */
export type LeadIntent =
  | "sell"
  | "valuation"
  | "buy"
  | "invest"
  | "holiday_rental";

/**
 * Unified Lead Intake Payload.
 * Designed to be flat for n8n/Nexus compatibility.
 */
export type LeadIntakePayload = {
  // Nexus Mandatory Ingestion Fields (Enum aligned)
  org_id: string;
  external_id: string;
  source_system:
    | "cta_web"
    | "manual"
    | "import"
    | "referral"
    | "partner"
    | "social";
  source_channel:
    | "website"
    | "linkedin"
    | "instagram"
    | "facebook"
    | "email"
    | "phone"
    | "other";

  // Common Fields
  source: "private_estates_landing";
  submission_source?: "private_estates_landing"; // Alias for Nexus

  lead_type:
    | LeadIntent
    | "seller_intake"
    | "buyer_intake"
    | "investment_intake"
    | "valuation_intake"
    | "holiday_rental_intake"; // Explicitly typed for Nexus enums

  language: LanguageCode;
  submission_language?: LanguageCode; // Alias for Nexus

  name: string;
  full_name?: string; // Alias for Nexus

  email: string;
  phone?: string;
  message?: string;

  privacy_accepted?: boolean; // For legacy n8n ingestion
  gdpr_consent: boolean; // MANDATORY for Nexus web lead ingestion

  page_url: string;
  submitted_at: string;

  // Captcha
  captcha_token?: string;
  captcha_provider?: "recaptcha" | "turnstile";

  // Behavioral scoring signals (collected frontend-side, enriched by Nexus)
  time_on_page_s?: number;
  scroll_depth_pct?: number;
  pre_submit_cta_clicks?: number;

  // Intent-Specific Qualifiers (Flat semantic prefixes)
  // Seller / legacy seller compatibility
  zone?: string;
  property_zone?: string;
  property_type?: string;
  commercialization?: string;

  // Valuation
  valuation_address?: string;
  valuation_property_type?: string;

  // Buyer
  target_zone?: string;
  budget_range?: string;
  buy_timing?: string;

  // Investor (Property-focused)
  investment_ticket?: string;
  investment_goal?: string;

  // Holiday Rental
  holiday_rental_zone?: string;
  holiday_rental_property_type?: string;
  holiday_rental_availability?: string;
  holiday_rental_objective?: string;
};

/**
 * Legacy payload type for backward compatibility.
 */
export type SellerLeadIntakePayload = LeadIntakePayload;

type SubmitLeadIntakeOptions = {
  payload: LeadIntakePayload;
  webhookUrl?: string;
  nexusBaseUrl?: string;
};

function trimOptional(value?: string) {
  if (!value) return undefined;
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : undefined;
}

/**
 * Helper to format complex backend error messages (FastAPI/Pydantic style).
 */
function formatBackendError(errorBody: any): string {
  const DEFAULT_ERROR = "Lead intake request failed.";
  if (!errorBody) return DEFAULT_ERROR;

  // If it's a simple string detail
  if (typeof errorBody.detail === "string") {
    return errorBody.detail || DEFAULT_ERROR;
  }

  // If detail is an array (FastAPI validation errors)
  if (Array.isArray(errorBody.detail) && errorBody.detail.length > 0) {
    return errorBody.detail
      .map((err: any) => {
        let path = Array.isArray(err.loc) ? err.loc.join(".") : "field";
        // Strip "body." prefix for cleaner user display
        if (path.startsWith("body.")) {
          path = path.replace("body.", "");
        }
        return `${path}: ${err.msg}`;
      })
      .join(", ");
  }

  // Fallback for other structured error bodies
  if (errorBody.message && typeof errorBody.message === "string") {
    return errorBody.message;
  }

  // Fallback for other objects
  if (typeof errorBody.detail === "object" && errorBody.detail !== null) {
    try {
      return JSON.stringify(errorBody.detail);
    } catch {
      return "An unknown validation error occurred.";
    }
  }

  return DEFAULT_ERROR;
}

/**
 * Generic builder for multi-intent payloads.
 */
export function buildLeadIntakePayload(input: {
  intent: LeadIntent;
  language: LanguageCode;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  privacyAccepted?: boolean;
  pageUrl?: string;
  submittedAt?: string;
  captchaToken?: string;
  qualifiers?: Record<string, string | undefined>;
  orgId?: string;
  externalId?: string;
  timeOnPageS?: number;
  scrollDepthPct?: number;
  preSubmitCtaClicks?: number;
}): LeadIntakePayload {
  const internal_trace_prefix = "private_estates_landing";

  // Map internal intents to Nexus-compatible lead_type wire values
  const intentToWireMap: Record<LeadIntent, LeadIntakePayload["lead_type"]> = {
    sell: "seller_intake",
    buy: "buyer_intake",
    invest: "investment_intake",
    valuation: "valuation_intake",
    holiday_rental: "holiday_rental_intake",
  };

  const wireLeadType = intentToWireMap[input.intent];

  const payload: LeadIntakePayload = {
    // Nexus Ingestion Alignment (Enum strict)
    org_id: input.orgId || "",
    source_system: "cta_web",
    source_channel: "website",
    external_id:
      input.externalId ||
      `${internal_trace_prefix}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,

    // Legacy and Common Fields (Preserve for internal traceability)
    source: "private_estates_landing",
    submission_source: "private_estates_landing",

    lead_type: wireLeadType as LeadIntent | "seller_intake",

    language: input.language,
    submission_language: input.language,

    name: input.name.trim(),
    full_name: input.name.trim(),

    email: input.email.trim(),
    phone: trimOptional(input.phone),
    message: trimOptional(input.message),

    privacy_accepted: input.privacyAccepted,
    gdpr_consent: !!input.privacyAccepted, // Align with Nexus mandatory field

    page_url:
      input.pageUrl ||
      (typeof window !== "undefined" ? window.location.href : ""),
    submitted_at: input.submittedAt || new Date().toISOString(),
    captcha_token: trimOptional(input.captchaToken),
    captcha_provider: input.captchaToken ? "turnstile" : undefined,

    time_on_page_s: input.timeOnPageS,
    scroll_depth_pct: input.scrollDepthPct,
    pre_submit_cta_clicks: input.preSubmitCtaClicks,
  };

  // Merge qualifiers directly into the flat payload if they match our known fields
  if (input.qualifiers) {
    Object.entries(input.qualifiers).forEach(([key, value]) => {
      const trimmed = trimOptional(value);
      if (trimmed) {
        // We cast to any here to allow dynamic keys while maintaining the flat contract
        (payload as any)[key] = trimmed;
      }
    });
  }

  return payload;
}

/**
 * Legacy wrapper for Seller Intake (LNI-001).
 * Maintained to avoid breaking existing form logic if called directly.
 */
export function buildSellerLeadIntakePayload(input: {
  language: LanguageCode;
  name: string;
  email: string;
  phone: string;
  zone: string;
  propertyType: string;
  commercialization: string;
  message: string;
  pageUrl?: string;
  submittedAt?: string;
  orgId?: string;
}): SellerLeadIntakePayload {
  return buildLeadIntakePayload({
    intent: "sell",
    language: input.language,
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    privacyAccepted: true, // Legacy always assumes accepted if they reached this point
    pageUrl: input.pageUrl,
    submittedAt: input.submittedAt,
    orgId: input.orgId,
    qualifiers: {
      zone: input.zone,
      property_type: input.propertyType,
      commercialization: input.commercialization,
    },
  });
}

export function resolveLeadIntakeEndpoint({
  webhookUrl,
  nexusBaseUrl,
}: {
  webhookUrl?: string;
  nexusBaseUrl?: string;
}) {
  const explicitWebhookUrl = webhookUrl?.trim();
  if (explicitWebhookUrl) {
    return explicitWebhookUrl;
  }

  const baseUrl = nexusBaseUrl?.trim() || DEFAULT_NEXUS_BASE_URL;
  return `${baseUrl}${DEFAULT_PUBLIC_LEAD_INTAKE_PATH}`;
}

/**
 * Generic submission function for all property intents.
 */
export async function submitLeadIntake({
  payload,
  webhookUrl,
  nexusBaseUrl,
}: SubmitLeadIntakeOptions) {
  // Validate org_id before POST
  if (!payload.org_id) {
    throw new Error("Configuration Error: NEXUS_ORG_ID is missing.");
  }

  const endpoint = resolveLeadIntakeEndpoint({ webhookUrl, nexusBaseUrl });
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(formatBackendError(errorBody));
  }

  return response;
}

/**
 * Legacy alias for LNI-001 compatibility.
 */
export const submitSellerLeadIntake = submitLeadIntake;

// ---------------------------------------------------------------------------
// Nexus /api/v1/leads/intake — Standardized Lead Intake (Task 7.10)
// ---------------------------------------------------------------------------

/**
 * Contact information nested object for the Nexus v1 lead intake API.
 */
export type NexusLeadContact = {
  name: string;
  email: string;
  phone?: string;
};

/**
 * Payload matching the Nexus /api/v1/leads/intake LeadIntakeRequest schema.
 * Uses standardized source_system and source_channel fields.
 */
export type NexusLeadIntakeRequest = {
  contact: NexusLeadContact;
  source_system: "private-estates-landing";
  source_channel: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
};

/**
 * Response from Nexus /api/v1/leads/intake.
 */
export type NexusLeadIntakeResponse = {
  lead_id: string;
  status: "created" | "duplicate";
  temperature: "cold" | "warm" | "hot";
};

/**
 * Resolves the source_channel value based on the form context.
 * Defaults to "form-main" for the primary seller intake form.
 */
export function resolveSourceChannel(formId?: string): string {
  if (formId) return formId;
  return "form-main";
}

/**
 * Build a Nexus v1 LeadIntakeRequest payload from form data.
 * Conforms to the standardized schema: contact, source_system, source_channel, timestamp, metadata.
 */
export function buildNexusLeadIntakePayload(input: {
  name: string;
  email: string;
  phone?: string;
  sourceChannel?: string;
  timestamp?: string;
  metadata?: Record<string, unknown>;
}): NexusLeadIntakeRequest {
  return {
    contact: {
      name: input.name.trim(),
      email: input.email.trim(),
      phone: trimOptional(input.phone),
    },
    source_system: "private-estates-landing",
    source_channel: resolveSourceChannel(input.sourceChannel),
    timestamp: input.timestamp || new Date().toISOString(),
    metadata: input.metadata,
  };
}

type SubmitNexusLeadIntakeOptions = {
  payload: NexusLeadIntakeRequest;
  nexusBaseUrl?: string;
};

/**
 * Submit a lead to Nexus /api/v1/leads/intake.
 * Uses the standardized LeadIntakeRequest schema with source_system: "private-estates-landing".
 */
export async function submitNexusLeadIntake({
  payload,
  nexusBaseUrl,
}: SubmitNexusLeadIntakeOptions): Promise<NexusLeadIntakeResponse> {
  const baseUrl = nexusBaseUrl?.trim() || DEFAULT_NEXUS_BASE_URL;
  const endpoint = `${baseUrl}${NEXUS_LEAD_INTAKE_V1_PATH}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(formatBackendError(errorBody));
  }

  return response.json();
}
