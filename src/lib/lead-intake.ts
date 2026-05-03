import type { LanguageCode } from "@/content/site-copy";

const DEFAULT_NEXUS_BASE_URL = "https://nexus.anclora.group";
const DEFAULT_PUBLIC_LEAD_INTAKE_PATH = "/api/public/lead-intake";

export type SellerLeadIntakePayload = {
  source: "private_estates_landing";
  lead_type: "seller_intake";
  language: LanguageCode;
  name: string;
  email: string;
  phone?: string;
  zone?: string;
  property_type?: string;
  commercialization?: string;
  message?: string;
  page_url?: string;
  submitted_at: string;
};

type SubmitSellerLeadIntakeOptions = {
  payload: SellerLeadIntakePayload;
  webhookUrl?: string;
  nexusBaseUrl?: string;
};

function trimOptional(value: string) {
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : undefined;
}

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
  return {
    source: "private_estates_landing",
    lead_type: "seller_intake",
    language: input.language,
    name: input.name.trim(),
    email: input.email.trim(),
    phone: trimOptional(input.phone),
    zone: trimOptional(input.zone),
    property_type: trimOptional(input.propertyType),
    commercialization: trimOptional(input.commercialization),
    message: trimOptional(input.message),
    page_url: trimOptional(input.pageUrl ?? ""),
    submitted_at: input.submittedAt ?? new Date().toISOString(),
  };
}

export function resolveSellerLeadIntakeEndpoint({
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

export async function submitSellerLeadIntake({
  payload,
  webhookUrl,
  nexusBaseUrl,
}: SubmitSellerLeadIntakeOptions) {
  const endpoint = resolveSellerLeadIntakeEndpoint({ webhookUrl, nexusBaseUrl });
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
