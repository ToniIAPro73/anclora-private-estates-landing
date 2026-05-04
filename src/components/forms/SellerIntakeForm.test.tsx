import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { SellerIntakeForm } from "./SellerIntakeForm";

// Mock global fetch
const fetchMock = vi.fn();
vi.stubGlobal("fetch", fetchMock);

describe("SellerIntakeForm", () => {
  const esCopy = siteCopyByLanguage.es.sellerIntake.form;

  beforeEach(() => {
    fetchMock.mockReset();
    // Default success response
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("submits normalized seller payload when intent is 'sell'", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    // Default intent is "sell"
    await user.type(screen.getByTestId("seller-name-input"), "Test Seller");
    await user.type(screen.getByTestId("seller-email-input"), "seller@test.com");
    await user.type(screen.getByTestId("seller-phone-input"), "600000000");
    await user.type(screen.getByTestId("seller-zone-input"), "Son Vida");
    
    // Select property type and commercialization
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Venta en exclusiva");
    
    await user.type(screen.getByTestId("seller-message-input"), "I want to sell my villa.");
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const callArgs = fetchMock.mock.calls[0];
    const payload = JSON.parse(callArgs[1].body);

    expect(payload.source).toBe("private_estates_landing");
    expect(payload.lead_type).toBe("seller_intake"); // LNI-001 backward compatibility
    expect(payload.language).toBe("es");
    expect(payload.name).toBe("Test Seller");
    expect(payload.email).toBe("seller@test.com");
    expect(payload.zone).toBe("Son Vida");
    expect(payload.property_type).toBe("Villa");
    expect(payload.commercialization).toBe("Venta en exclusiva");
    expect(screen.getByTestId("seller-success")).toBeInTheDocument();
  });

  test("submits buyer payload when intent is 'buy'", async () => {
    const user = userEvent.setup();
    render(<SellerIntakeForm copy={esCopy} />);

    // Switch intent to "buy"
    await user.selectOptions(screen.getByTestId("lead-intent-select"), "buy");

    await user.type(screen.getByTestId("seller-name-input"), "Test Buyer");
    await user.type(screen.getByTestId("seller-email-input"), "buyer@test.com");
    
    // Buyer specific fields
    await user.type(screen.getByPlaceholderText(esCopy.placeholders.zone), "Portals");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.budget }), "1M - 3M €");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.timing }), "Inmediato");

    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    await user.click(screen.getByTestId("seller-submit-button"));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const payload = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(payload.lead_type).toBe("buy");
    expect(payload.target_zone).toBe("Portals");
    expect(payload.budget_range).toBe("1M - 3M €");
    expect(payload.buy_timing).toBe("Inmediato");
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
    await user.click(screen.getByTestId("seller-privacy-checkbox"));
    
    // Need to fill required fields for default "sell" intent
    await user.type(screen.getByTestId("seller-zone-input"), "Any");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.propertyType }), "Villa");
    await user.selectOptions(screen.getByRole("combobox", { name: esCopy.commercialization }), "Evaluación confidencial");

    await user.click(screen.getByTestId("seller-submit-button"));

    expect(await screen.findByTestId("seller-error")).toHaveTextContent("Invalid email domain.");
    expect(screen.queryByTestId("seller-success")).not.toBeInTheDocument();
  });
});
