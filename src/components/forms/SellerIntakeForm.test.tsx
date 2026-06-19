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
    (useTurnstileHook.useTurnstile as any).mockReturnValue(
      defaultTurnstileMock,
    );

    // Set default env variables
    vi.stubEnv("VITE_NEXUS_ORG_ID", "test-org-id");
    vi.stubEnv("VITE_TURNSTILE_SITE_KEY", "test-site-key");

    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({
        lead_id: "test-lead-123",
        status: "created",
        temperature: "cold",
      }),
    });
  });

  afterEach(() => {
    cleanup();
  });

  async function fillCommonFields(user: any) {
    await user.type(screen.getByTestId("seller-name-input"), "Test User");
    await user.type(
      screen.getByTestId("seller-email-input"),
      "test@example.com",
    );
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

    // First call is the Nexus v1 lead intake API (standardized schema)
    const callArgs = mockFetch.mock.calls[0];
    const payload = JSON.parse(callArgs[1].body);

    // Verify Nexus v1 standardized fields
    expect(callArgs[0]).toContain("/api/v1/leads/intake");
    expect(payload.source_system).toBe("private-estates-landing");
    expect(payload.source_channel).toBe("form-main");
    expect(payload.contact.name).toBe("Test User");
    expect(payload.contact.email).toBe("test@example.com");
    expect(payload.timestamp).toBeDefined();
    expect(payload.metadata).toBeDefined();
    expect(payload.metadata.intent).toBe("sell");
    expect(payload.metadata.language).toBe("es");
    expect(payload.metadata.gdpr_consent).toBe(true);
    expect(payload.metadata.org_id).toBe("test-org-id");
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
      expect(screen.getByTestId("seller-error")).toHaveTextContent(
        /seguridad/i,
      );
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

      // Primary call is Nexus v1 — captcha info is in metadata
      const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(payload.metadata.captcha_provider).toBe("turnstile");
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

  test("3. Env behavior: missing VITE_NEXUS_ORG_ID still submits to Nexus v1", async () => {
    vi.stubEnv("VITE_NEXUS_ORG_ID", "");

    const user = userEvent.setup();
    render(<SellerIntakeForm copy={copy} />);

    await fillCommonFields(user);
    await fillSellFields(user);

    await user.click(screen.getByTestId("seller-submit-button"));

    // Nexus v1 endpoint does not require org_id (it's passed in metadata as optional)
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(payload.source_system).toBe("private-estates-landing");
    // org_id is empty in metadata since it's not set
    expect(payload.metadata.org_id).toBe("");
  });

  describe("4. Backend error formatting coverage", () => {
    test("renders FastAPI validation error list correctly", async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        json: async () => ({
          detail: [
            {
              loc: ["body", "email"],
              msg: "invalid email format",
              type: "value_error",
            },
            { loc: ["body", "phone"], msg: "too short", type: "value_error" },
          ],
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
        await user.type(
          screen.getByPlaceholderText(copy.placeholders.zone),
          "Z",
        );
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.budgetOptions[0]);
        await user.selectOptions(selects[2], copy.timingOptions[0]);
      } else if (value === "invest") {
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.ticketOptions[0]);
        await user.type(
          screen.getByPlaceholderText(copy.placeholders.goal),
          "G",
        );
      } else if (value === "valuation") {
        await user.type(
          screen.getByPlaceholderText(copy.placeholders.address),
          "A",
        );
        const selects = screen.getAllByRole("combobox");
        await user.selectOptions(selects[1], copy.propertyTypeOptions[0]);
      }

      await user.click(screen.getByTestId("seller-submit-button"));

      await waitFor(() => {
        expect(mockFetch).toHaveBeenCalled();
      });

      // Nexus v1 payload uses metadata.intent instead of lead_type
      const payload = JSON.parse(mockFetch.mock.calls[0][1].body);
      expect(payload.source_system).toBe("private-estates-landing");
      expect(payload.metadata.intent).toBe(value);
    }
  });

  test("6. Required fields validation", async () => {
    render(<SellerIntakeForm copy={copy} />);
    const form = screen.getByTestId("seller-intake-form");

    const { fireEvent: testingFireEvent } =
      await import("@testing-library/react");
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
