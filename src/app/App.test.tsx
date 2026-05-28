import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import App from "./App";

describe("App landing home", () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState({}, "", "/");
    Object.defineProperty(window.navigator, "languages", {
      value: ["es-ES"],
      configurable: true,
    });
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
    expect(siteCopyByLanguage.fr.hero.title).toBeTruthy();
    expect(siteCopyByLanguage.es.navbar.links).toHaveLength(7);
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
    expect(screen.getByRole("button", { name: /preferencias globales/i })).toBeInTheDocument();
  });

  test("switches between active Ultra Premium locales in the governed order", async () => {
    const user = userEvent.setup();
    render(<App />);
    const languageCombobox = () => screen.getAllByRole("combobox")[0];

    await user.click(screen.getByRole("button", { name: /preferencias globales/i }));
    const languageSelect = languageCombobox();
    expect(Array.from(languageSelect.querySelectorAll("option")).map((option) => option.value)).toEqual([
      "es", "ca", "de", "en", "sv", "fr", "it", "da", "nl", "no", "pt",
    ]);

    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.es.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.es.navbar.ctaLabel })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");
    expect(window.localStorage.getItem("ape:language")).toBe("es");

    await user.selectOptions(languageSelect, "en");
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("ape:language")).toBe("en");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.en.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.en.navbar.ctaLabel })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: siteCopyByLanguage.en.navbar.navAriaLabel })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.en.contact.title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1, name: siteCopyByLanguage.es.hero.title })).not.toBeInTheDocument();

    await user.selectOptions(languageCombobox(), "ca");
    expect(document.documentElement.lang).toBe("ca");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.ca.hero.title })).toBeInTheDocument();

    await user.selectOptions(languageCombobox(), "fr");
    expect(document.documentElement.lang).toBe("fr");
    expect(window.localStorage.getItem("ape:language")).toBe("fr");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.fr.hero.title })).toBeInTheDocument();

    await user.selectOptions(languageCombobox(), "de");
    expect(document.documentElement.lang).toBe("de");
    expect(window.localStorage.getItem("ape:language")).toBe("de");
    expect(screen.getByRole("heading", { level: 1, name: siteCopyByLanguage.de.hero.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteCopyByLanguage.de.navbar.ctaLabel })).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: siteCopyByLanguage.de.navbar.navAriaLabel })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: siteCopyByLanguage.de.contact.title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1, name: siteCopyByLanguage.en.hero.title })).not.toBeInTheDocument();
  });
});
