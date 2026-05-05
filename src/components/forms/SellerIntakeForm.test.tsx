import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { SellerIntakeForm } from "./SellerIntakeForm";
import { siteCopyByLanguage } from "@/content/site-copy";
import * as useTurnstileHook from "@/hooks/useTurnstile";

// Mock the useTurnstile hook
vi.mock("@/hooks/useTurnstile", () => ({
  useTurnstile: vi.fn(),
}));

describe("SellerIntakeForm Integration & Coverage", () => {
  const copy = siteCopyByLanguage.es.sellerIntake.form;
  const mockFetch = vi.fn();
  global.fetch = mockFetch;

  const defaultTurnstileMock = {
    captchaToken: "mock-token",
    captchaStatus: "ready",
    captchaContainerRef: { current: null },
    resetCaptcha: vi.fn(),
    siteKey: "mock-site-key",
  };

  beforeEach(() => {
    vi.clearAllMocks();
    window.location.hash = "";
    // Default mock implementation
    (useTurnstileHook.useTurnstile as any).mockReturnValue(defaultTurnstileMock);
    
    // Set default env variables
    vi.stubEnv("VITE_NEXUS_ORG_ID", "test-org-id");
    vi.stubEnv("VITE_TURNSTILE_SITE_KEY", "test-site-key");
    
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    cleanup();
  });

  async function fillCommonFields(user: any) {
    await user.type(screen.getByTestId("seller-name-input"), "Test User");
    await user.type(screen.getByTestId("seller-email-input"), "test@example.com");
    await user.type(screen.getByTestId("seller-message-input"), "Test message");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
  }

  async function fillSellFields(user: any) {
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    const selects = screen.getAllByRole("combobox");
    // selects[0] is intent, [1] is propertyType, [2] is commercialization
    await user.selectOptions(selects[1], copy.propertyTypeOptions[0]);
    await user.selectOptions(selects[2], copy.commercializationOptions[0]);
  }

  test("1. Nexus mandatory metadata coverage", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={copy} />);

    await fillCommonFields(user);
    await fillSellFields(user);

    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    const callArgs = mockFetch.mock.calls[0];
    const payload = JSON.parse(callArgs[1].body);

    // Verify Nexus mandatory fields
    expect(payload.org_id).toBe("test-org-id");
    expect(payload.external_id).toMatch(/^private_estates_landing_/);
    expect(payload.source_system).toBe("cta_web");
    expect(payload.source_channel).toBe("website");
    expect(payload.source).toBe("private_estates_landing");
    expect(payload.submission_source).toBe("private_estates_landing");
    expect(payload.submission_language).toBe("es");
    expect(payload.gdpr_consent).toBe(true);
    expect(payload.privacy_accepted).toBe(true);
  });

  describe("2. Captcha behavior coverage", () => {
    test("blocks submission when status is ready but token is missing", async () => {
      (useTurnstileHook.useTurnstile as any).mockReturnValue({
        ...defaultTurnstileMock,
        captchaToken: null,
        captchaStatus: "ready",
      });

      const user = userEvent.setup();
      render(<SellerIntakeForm copy={copy} />);

      await fillCommonFields(user);
      await fillSellFields(user); // Important: fill all to reach JS validation

      await user.click(screen.getByTestId("seller-submit-button"));

      expect(mockFetch).not.toHaveBeenCalled();
      expect(screen.getByTestId("seller-error")).toHaveTextContent(/seguridad/i);
    });

    test("includes captcha_token and captcha_provider when token is present", async () => {
      (useTurnstileHook.useTurnstile as any).mockReturnValue({
        ...defaultTurnstileMock,
        captchaToken: "valid-token",
        captchaStatus: "ready",
      });

      const user = userEvent.setup();
      render(<SellerIntakeForm copy={copy} />);

      await fillCommonFields(user);
      await fillSellFields(user);

      await user.click(screen.getByTestId("seller-submit-button"));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });

      const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(payload.captcha_token).toBe("valid-token");
      expect(payload.captcha_provider).toBe("turnstile");
    });

    test("allows graceful submission when status is failed", async () => {
      (useTurnstileHook.useTurnstile as any).mockReturnValue({
        ...defaultTurnstileMock,
        captchaToken: null,
        captchaStatus: "failed",
      });

      const user = userEvent.setup();
      render(<SellerIntakeForm copy={copy} />);

      await fillCommonFields(user);
      await fillSellFields(user);

      await user.click(screen.getByTestId("seller-submit-button"));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });
      expect(screen.queryByTestId("seller-error")).not.toBeInTheDocument();
    });
  });

  test("3. Env behavior: missing VITE_NEXUS_ORG_ID blocks submit visibly", async () => {
    vi.stubEnv("VITE_NEXUS_ORG_ID", "");
    
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={copy} />);

    await fillCommonFields(user);
    await fillSellFields(user);

    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => {
      expect(screen.getByTestId("seller-error")).toHaveTextContent(/NEXUS_ORG_ID/);
    });
    expect(mockFetch).not.toHaveBeenCalled();
  });

  describe("4. Backend error formatting coverage", () => {
    test("renders FastAPI validation error list correctly", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        json: async () => ({
          detail: [
            { loc: ["body", "email"], msg: "invalid email format", type: "value_error" },
            { loc: ["body", "phone"], msg: "too short", type: "value_error" }
          ]
        }),
      });

      const user = userEvent.setup();
      render(<SellerIntakeForm copy={copy} />);

      await fillCommonFields(user);
      await fillSellFields(user);

      await user.click(screen.getByTestId("seller-submit-button"));

      await waitFor(() => {
        const errorEl = screen.getByTestId("seller-error");
        expect(errorEl.textContent).toContain("email: invalid email format");
        expect(errorEl.textContent).toContain("phone: too short");
        expect(errorEl.textContent).not.toContain("body.");
      });
    });
  });

  test("5. Intent mapping coverage", async () => {
    const user = userEvent.setup();

    const intents = [
      { value: "sell", expected: "seller_intake" },
      { value: "buy", expected: "buyer_intake" },
      { value: "invest", expected: "investment_intake" },
      { value: "valuation", expected: "valuation_intake" },
    ];

    for (const { value, expected } of intents) {
      cleanup(); // Reset component state completely for each intent
      render(<SellerIntakeForm copy={copy} />);
      mockFetch.mockClear();
      
      const select = screen.getByTestId("lead-intent-select");
      await user.selectOptions(select, value);

      await user.type(screen.getByTestId("seller-name-input"), "User");
      await user.type(screen.getByTestId("seller-email-input"), "u@e.c");
      await user.type(screen.getByTestId("seller-message-input"), "Msg");
      await user.click(screen.getByTestId("seller-privacy-checkbox"));

      // Fill dynamic required fields
      if (value === "sell") {
        await user.type(screen.getByTestId("seller-zone-input"), "Z");
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.propertyTypeOptions[0]);
        await user.selectOptions(selects[2], copy.commercializationOptions[0]);
      } else if (value === "buy") {
        await user.type(screen.getByPlaceholderText(copy.placeholders.zone), "Z");
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.budgetOptions[0]);
        await user.selectOptions(selects[2], copy.timingOptions[0]);
      } else if (value === "invest") {
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.ticketOptions[0]);
        await user.type(screen.getByPlaceholderText(copy.placeholders.goal), "G");
      } else if (value === "valuation") {
        await user.type(screen.getByPlaceholderText(copy.placeholders.address), "A");
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.propertyTypeOptions[0]);
      }

      await user.click(screen.getByTestId("seller-submit-button"));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });

      const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(payload.lead_type).toBe(expected);
    }
  });

  test("6. Required fields validation", async () => {
    render(<SellerIntakeForm copy={copy} />);
    const form = screen.getByTestId("seller-intake-form");
    
    const { fireEvent: testingFireEvent } = await import("@testing-library/react");
    testingFireEvent.submit(form);

    expect(mockFetch).not.toHaveBeenCalled();
    expect(screen.getByTestId("seller-error")).toBeInTheDocument();
  });

  test("7. Focus behavior: #clientes focuses intent selector", () => {
    window.location.hash = "#clientes";
    render(<SellerIntakeForm copy={copy} />);
    
    const select = screen.getByTestId("lead-intent-select");
    expect(document.activeElement).toBe(select);
  });
});
