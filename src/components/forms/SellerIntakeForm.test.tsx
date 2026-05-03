import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { SellerIntakeForm } from "./SellerIntakeForm";

const fetchMock = vi.fn<typeof fetch>();

describe("SellerIntakeForm", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
    document.documentElement.lang = "es";
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  test("submits normalized seller payload to the configured public webhook", async () => {
    const user = userEvent.setup();
    vi.stubEnv("VITE_N8N_LEAD_INTAKE_WEBHOOK_URL", "https://hooks.example.com/webhook/seller-intake");
    fetchMock.mockResolvedValue(
      new Response(null, {
        status: 200,
      }),
    );

    render(<SellerIntakeForm copy={siteCopyByLanguage.es.sellerIntake.form} />);

    await user.type(screen.getByTestId("seller-name-input"), "Ada Lovelace");
    await user.type(screen.getByTestId("seller-email-input"), "ada@example.com");
    await user.type(screen.getByTestId("seller-phone-input"), "+34 600 000 000");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByTestId("seller-property-type-select"), "Villa");
    await user.selectOptions(screen.getByTestId("seller-commercialization-select"), "Evaluación confidencial");
    await user.type(screen.getByTestId("seller-message-input"), "Activo off-market con necesidad de lectura estratégica.");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [endpoint, request] = fetchMock.mock.calls[0]!;
    expect(endpoint).toBe("https://hooks.example.com/webhook/seller-intake");
    expect(request?.method).toBe("POST");
    expect(request?.headers).toEqual({ "Content-Type": "application/json" });

    const parsedBody = JSON.parse(String(request?.body)) as Record<string, string>;
    expect(parsedBody.source).toBe("private_estates_landing");
    expect(parsedBody.lead_type).toBe("seller_intake");
    expect(parsedBody.language).toBe("es");
    expect(parsedBody.name).toBe("Ada Lovelace");
    expect(parsedBody.email).toBe("ada@example.com");
    expect(parsedBody.phone).toBe("+34 600 000 000");
    expect(parsedBody.zone).toBe("Son Vida");
    expect(parsedBody.property_type).toBe("Villa");
    expect(parsedBody.commercialization).toBe("Evaluación confidencial");
    expect(parsedBody.message).toBe("Activo off-market con necesidad de lectura estratégica.");
    expect(parsedBody.page_url).toBe(window.location.href);
    expect(parsedBody.submitted_at).toBeTruthy();

    expect(await screen.findByTestId("seller-success")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("shows backend errors without breaking the form shell", async () => {
    const user = userEvent.setup();
    vi.stubEnv("VITE_N8N_LEAD_INTAKE_WEBHOOK_URL", "https://hooks.example.com/webhook/seller-intake");
    fetchMock.mockResolvedValue(
      new Response(JSON.stringify({ detail: "Seller intake rejected." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }),
    );

    render(<SellerIntakeForm copy={siteCopyByLanguage.en.sellerIntake.form} />);
    document.documentElement.lang = "en";

    await user.type(screen.getByTestId("seller-name-input"), "Grace Hopper");
    await user.type(screen.getByTestId("seller-email-input"), "grace@example.com");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    expect(await screen.findByTestId("seller-error")).toHaveTextContent("Seller intake rejected.");
    expect(screen.queryByTestId("seller-success")).not.toBeInTheDocument();
  });
});
