import type { LanguageCode } from "@/content/site-copy";

const DEFAULT_NEXUS_BASE_URL = "https://nexus.anclora.group";
const DEFAULT_PUBLIC_LEAD_INTAKE_PATH = "/api/public/lead-intake";

/**
 * Definitive Lead Intent types for internal logic.
 * Corrected to exclude partners (handled by Synergi).
 */
export type LeadIntent = "sell" | "valuation" | "buy" | "invest";

/**
 * Unified Lead Intake Payload.
 * Designed to be flat for n8n/Nexus compatibility.
 */
export type LeadIntakePayload = {
  // Common Fields
  source: "private_estates_landing";
  lead_type: LeadIntent | "seller_intake"; // "seller_intake" kept for wire compatibility with LNI-001
  language: LanguageCode;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  page_url: string;
  submitted_at: string;
  
  // Captcha
  captcha_token?: string;
  captcha_provider?: "recaptcha";

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
 * Generic builder for multi-intent payloads.
 */
export function buildLeadIntakePayload(input: {
  intent: LeadIntent;
  language: LanguageCode;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  pageUrl?: string;
  submittedAt?: string;
  captchaToken?: string;
  qualifiers?: Record<string, string | undefined>;
}): LeadIntakePayload {
  // Map "sell" intent to legacy "seller_intake" wire value for LNI-001 compatibility
  const wireLeadType = input.intent === "sell" ? "seller_intake" : input.intent;

  const payload: LeadIntakePayload = {
    source: "private_estates_landing",
    lead_type: wireLeadType as LeadIntent | "seller_intake",
    language: input.language,
    name: input.name.trim(),
    email: input.email.trim(),
    phone: trimOptional(input.phone),
    message: trimOptional(input.message),
    page_url: input.pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
    submitted_at: input.submittedAt || new Date().toISOString(),
    captcha_token: trimOptional(input.captchaToken),
    captcha_provider: input.captchaToken ? "recaptcha" : undefined,
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
}): SellerLeadIntakePayload {
  return buildLeadIntakePayload({
    intent: "sell",
    language: input.language,
    name: input.name,
    email: input.email,
    phone: input.phone,
    message: input.message,
    pageUrl: input.pageUrl,
    submittedAt: input.submittedAt,
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
  const endpoint = resolveLeadIntakeEndpoint({ webhookUrl, nexusBaseUrl });
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error((body as { detail?: string }).detail || "Lead intake request failed.");
  }

  return response;
}

/**
 * Legacy alias for LNI-001 compatibility.
 */
export const submitSellerLeadIntake = submitLeadIntake;
