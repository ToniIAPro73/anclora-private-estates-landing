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

    expect(payload.lead_type).toBe("seller_intake");
    expect(payload.captcha_token).toBeUndefined();
    expect(screen.getByTestId("seller-success")).toBeInTheDocument();
  });

  test("blocks submission when captchaStatus is ready but no token is present", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaStatus = "ready";

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

  test("allows submission when captchaStatus is failed (graceful degradation)", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaStatus = "failed";

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    await user.type(screen.getByTestId("seller-name-input"), "Failed Captcha");
    await user.type(screen.getByTestId("seller-email-input"), "failed@test.com");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("seller-success")).toBeInTheDocument();
  });

  test("includes captcha token and provider when token is available", async () => {
    recaptchaMock.siteKey = "test-site-key";
    recaptchaMock.captchaStatus = "ready";
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
    expect(payload.captcha_token).toBe("captcha-token-123");
    expect(payload.captcha_provider).toBe("recaptcha");
    expect(recaptchaMock.resetCaptcha).toHaveBeenCalled();
  });

  test("does not include partner intent in selector", () => {
    render(<SellerIntakeForm copy={esCopy} />);
    const select = screen.getByTestId("lead-intent-select") as HTMLSelectElement;
    const options = Array.from(select.options).map(o => o.value);
    expect(options).not.toContain("partner");
  });
});
