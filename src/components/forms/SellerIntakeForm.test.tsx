import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { SellerIntakeForm } from "./SellerIntakeForm";

const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

const recaptchaMock = vi.hoisted(() => ({
  captchaToken: null as string | null,
  siteKey: undefined as string | undefined,
  resetCaptcha: vi.fn(),
}));

vi.mock("@/hooks/useRecaptcha", () => ({
  useRecaptcha: () => ({
    captchaToken: recaptchaMock.captchaToken,
    captchaContainerRef: { current: null },
    resetCaptcha: recaptchaMock.resetCaptcha,
    siteKey: recaptchaMock.siteKey,
  }),
}));

describe("SellerIntakeForm", () => {
  const esCopy = siteCopyByLanguage.es.sellerIntake.form;

  beforeEach(() => {
    fetchMock.mockReset();
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    recaptchaMock.captchaToken = null;
    recaptchaMock.siteKey = undefined;
    recaptchaMock.resetCaptcha.mockReset();

    vi.stubEnv("VITE_RECAPTCHA_SITE_KEY", "");
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });

  test("submits normalized seller payload when intent is sell and captcha is disabled", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Test Seller");
    await user.type(screen.getByTestId("seller-email-input"), "seller@test.com");
    await user.type(screen.getByTestId("seller-phone-input"), "600000000");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const [, request] = fetchMock.mock.calls[0];
    const payload = JSON.parse(String(request.body));

    expect(request.method).toBe("POST");
    expect(request.headers).toEqual({ "Content-Type": "application/json" });
    expect(payload.source).toBe("private_estates_landing");
    expect(payload.lead_type).toBe("seller_intake");
    expect(payload.language).toBe("es");
    expect(payload.name).toBe("Test Seller");
    expect(payload.email).toBe("seller@test.com");
    expect(payload.phone).toBe("600000000");
    expect(payload.zone).toBe("Son Vida");
    expect(payload.property_type).toBe("Villa");
    expect(payload.commercialization).toBe("Venta en exclusiva");
    expect(payload.captcha_token).toBeUndefined();
    expect(payload.captcha_provider).toBeUndefined();
    expect(payload.page_url).toBe(window.location.href);
    expect(payload.submitted_at).toBeTruthy();
    expect(screen.getByTestId("seller-success")).toBeInTheDocument();
  });

  test("submits buyer payload when intent is buy", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.selectOptions(screen.getByTestId("lead-intent-select"), "buy");
    await user.type(screen.getByTestId("seller-name-input"), "Test Buyer");
    await user.type(screen.getByTestId("seller-email-input"), "buyer@test.com");
    await user.type(screen.getByPlaceholderText(esCopy.placeholders.zone), "Portals");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.budget }), "1M - 3M €");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.timing }), "Inmediato");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const payload = JSON.parse(String(fetchMock.mock.calls[0][1].body));

    expect(payload.lead_type).toBe("buy");
    expect(payload.target_zone).toBe("Portals");
    expect(payload.budget_range).toBe("1M - 3M €");
    expect(payload.buy_timing).toBe("Inmediato");
  });

  test("blocks submission when captcha site key exists but no token is present", async () => {
    recaptchaMock.siteKey = "test-site-key";

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Test Captcha");
    await user.type(screen.getByTestId("seller-email-input"), "captcha@test.com");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    expect(await screen.findByTestId("seller-error")).toHaveTextContent("Por favor completa la verificación de seguridad.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("includes captcha token and provider when token is available", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaToken = "captcha-token-123";

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Captcha Seller");
    await user.type(screen.getByTestId("seller-email-input"), "captcha.seller@test.com");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const payload = JSON.parse(String(fetchMock.mock.calls[0][1].body));

    expect(payload.lead_type).toBe("seller_intake");
    expect(payload.zone).toBe("Son Vida");
    expect(payload.captcha_token).toBe("captcha-token-123");
    expect(payload.captcha_provider).toBe("recaptcha");
    expect(recaptchaMock.resetCaptcha).toHaveBeenCalled();
  });

  test("shows backend errors without breaking the form shell", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ detail: "Invalid email domain." }),
    });

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Error User");
    await user.type(screen.getByTestId("seller-email-input"), "error@invalid.com");
    await user.type(screen.getByTestId("seller-zone-input"), "Any");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Evaluación confidencial");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    expect(await screen.findByTestId("seller-error")).toHaveTextContent("Invalid email domain.");
    expect(screen.queryByTestId("seller-success")).not.toBeInTheDocument();
  });
});
