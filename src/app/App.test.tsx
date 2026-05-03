import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import App from "./App";

describe("App landing home", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
    document.documentElement.dataset.theme = "";
  });

  test("renders the ultra premium home shell with primary navigation and critical sections", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: siteCopyByLanguage.es.hero.title,
      }),
    ).toBeInTheDocument();

    const navigation = screen.getByRole("navigation", { name: siteCopyByLanguage.es.navbar.navAriaLabel });
    expect(navigation).toBeInTheDocument();

    await user.click(screen.getByTestId("navbar-menu-toggle"));

    const navbarLinks = screen.getByTestId("navbar-links");
    for (const link of siteCopyByLanguage.es.navbar.links) {
      expect(within(navbarLinks).getByRole("link", { name: link.label })).toBeInTheDocument();
    }

    expect(screen.getByRole("link", { name: siteCopyByLanguage.es.navbar.ctaLabel })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.es.credibility.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.es.mallorcaFocus.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.es.investors.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.es.dataLab.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.es.contact.title })).toBeInTheDocument();
  });

  test("exposes a typed site copy record for every supported language", () => {
    expect(siteCopyByLanguage.es.hero.title).toBeTruthy();
    expect(siteCopyByLanguage.en.hero.title).toBeTruthy();
    expect(siteCopyByLanguage.de.hero.title).toBeTruthy();
    expect(siteCopyByLanguage.es.navbar.links).toHaveLength(6);
    expect(siteCopyByLanguage.en.footer.columns).toHaveLength(3);
    expect(siteCopyByLanguage.de.sellerIntake.form.submitLabel).toBeTruthy();
  });

  test("renders a dark-only shell with premium language switcher and no theme toggle", () => {
    render(<App />);

    const root = document.documentElement;
    expect(root.dataset.theme).toBe("dark");
    expect(root.lang).toBe("es");
    expect(window.localStorage.getItem("ape:language")).toBe("es");

    expect(
      screen.queryByRole("button", { name: /cambiar a light|cambiar a dark|tema light|tema dark/i }),
    ).not.toBeInTheDocument();

    expect(screen.getByRole("group", { name: /selector de idioma/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /idioma español|español/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /idioma inglés|english/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /idioma alemán|deutsch/i })).toBeInTheDocument();
  });

  test("switches between es, en, and de from the header language switcher", async () => {
    const user = userEvent.setup();
    render(<App />);

    const spanishButton = screen.getByRole("button", { name: /idioma español|español/i });
    const englishButton = screen.getByRole("button", { name: /idioma inglés|english/i });
    const germanButton = screen.getByRole("button", { name: /idioma alemán|deutsch/i });

    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.es.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.es.navbar.ctaLabel })).toBeInTheDocument();
    expect(spanishButton).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement.lang).toBe("es");
    expect(window.localStorage.getItem("ape:language")).toBe("es");

    await user.click(englishButton);
    expect(englishButton).toHaveAttribute("aria-pressed", "true");
    expect(spanishButton).toHaveAttribute("aria-pressed", "false");
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("ape:language")).toBe("en");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.en.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.en.navbar.ctaLabel })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: siteCopyByLanguage.en.navbar.navAriaLabel })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.en.contact.title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1, name: siteCopyByLanguage.es.hero.title })).not.toBeInTheDocument();

    await user.click(germanButton);
    expect(germanButton).toHaveAttribute("aria-pressed", "true");
    expect(englishButton).toHaveAttribute("aria-pressed", "false");
    expect(document.documentElement.lang).toBe("de");
    expect(window.localStorage.getItem("ape:language")).toBe("de");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.de.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.de.navbar.ctaLabel })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: siteCopyByLanguage.de.navbar.navAriaLabel })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.de.contact.title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1, name: siteCopyByLanguage.en.hero.title })).not.toBeInTheDocument();
  });
});
