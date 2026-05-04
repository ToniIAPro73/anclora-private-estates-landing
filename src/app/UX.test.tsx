import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { CookieBanner } from "@/components/layout/CookieBanner";
import App from "./App";

describe("UX Navigation and Modal", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "es";
  });

  test("critical sections have correct IDs for anchor navigation", () => {
    render(<App />);
    
    // Check main sections IDs
    expect(document.getElementById("mallorca-focus")).toBeInTheDocument();
    expect(document.getElementById("inversores")).toBeInTheDocument();
    expect(document.getElementById("propietarios")).toBeInTheDocument();
    expect(document.getElementById("partners")).toBeInTheDocument();
    expect(document.getElementById("data-lab")).toBeInTheDocument();
    expect(document.getElementById("contacto")).toBeInTheDocument();
    expect(document.getElementById("credibilidad")).toBeInTheDocument();
  });

  test("cookie modal displays settings view with premium reject button", async () => {
    const copy = siteCopyByLanguage.es.cookies;
    render(<CookieBanner isOpen={true} copy={copy} />);
    
    // Switch to settings
    const settingsBtn = screen.getByText(copy.settings);
    fireEvent.click(settingsBtn);
    
    // Check for cookie types
    expect(screen.getByText(copy.necessary.title)).toBeInTheDocument();
    expect(screen.getByText(copy.analytics.title)).toBeInTheDocument();
    expect(screen.getByText(copy.marketing.title)).toBeInTheDocument();
    
    // Check for the new premium reject button
    const rejectBtn = screen.getByText(copy.rejectAll);
    expect(rejectBtn).toBeInTheDocument();
    expect(rejectBtn).toHaveClass("btn-cookie-reject-optional");
  });
});
