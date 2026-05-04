import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { SellerIntakeForm } from "./SellerIntakeForm";
import type { CaptchaStatus } from "@/hooks/useRecaptcha";

const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

const recaptchaMock = vi.hoisted(() => ({
  captchaToken: null as string | null,
  captchaStatus: "disabled" as CaptchaStatus,
  siteKey: undefined as string | undefined,
  resetCaptcha: vi.fn(),
}));

vi.mock("@/hooks/useRecaptcha", () => ({
  useRecaptcha: () => ({
    captchaToken: recaptchaMock.captchaToken,
    captchaStatus: recaptchaMock.captchaStatus,
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
    recaptchaMock.captchaStatus = "disabled";
    recaptchaMock.siteKey = undefined;
    recaptchaMock.resetCaptcha.mockReset();

    vi.stubEnv("VITE_RECAPTCHA_SITE_KEY", "");
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.unstubAllEnvs();
  });

  test("submits normalized seller payload and includes Nexus alignment fields", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Test Seller");
    await user.type(screen.getByTestId("seller-email-input"), "seller@test.com");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    
    // Required fields for default "sell" intent
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");

    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));

    const payload = JSON.parse(fetchMock.mock.calls[0][1].body);

    // Legacy LNI-001 fields
    expect(payload.lead_type).toBe("seller_intake");
    expect(payload.name).toBe("Test Seller");
    expect(payload.zone).toBe("Son Vida");

    // Nexus alignment fields
    expect(payload.full_name).toBe("Test Seller");
    expect(payload.submission_source).toBe("private_estates_landing");
    expect(payload.submission_language).toBe("es");
    expect(payload.privacy_accepted).toBe(true);
  });

  test("displays human-readable message for structured 422 validation errors", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({
        detail: [
          { loc: ["body", "email"], msg: "invalid email format", type: "value_error.email" },
          { loc: ["body", "phone"], msg: "too short", type: "value_error.any_str.min_length" }
        ]
      }),
    });

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Error User");
    await user.type(screen.getByTestId("seller-email-input"), "error@test.com");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    
    // Fill required intent fields
    await user.type(screen.getByTestId("seller-zone-input"), "Any");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Evaluación confidencial");

    await user.click(screen.getByTestId("seller-submit-button"));

    const errorEl = await screen.findByTestId("seller-error", {}, { timeout: 3000 });
    expect(errorEl.textContent).toContain("body.email: invalid email format");
    expect(errorEl.textContent).toContain("body.phone: too short");
    expect(errorEl.textContent).not.toContain("[object Object]");
  });

  test("blocks submission when captchaStatus is ready but no token is present", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaStatus = "ready";

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Test Captcha");
    await user.type(screen.getByTestId("seller-email-input"), "captcha@test.com");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");

    await user.click(screen.getByTestId("seller-submit-button"));

    expect(await screen.findByTestId("seller-error")).toHaveTextContent("Por favor completa la verificación de seguridad.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test("allows submission when captchaStatus is failed (graceful degradation)", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaStatus = "failed";

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Failed Captcha");
    await user.type(screen.getByTestId("seller-email-input"), "failed@test.com");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");

    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("seller-success")).toBeInTheDocument();
  });
});
