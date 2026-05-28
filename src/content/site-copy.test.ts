import { describe, expect, test } from "vitest";
import { siteCopyByLanguage } from "@/content/site-copy";
import { ACTIVE_LOCALES, ULTRA_PREMIUM_LOCALES } from "@/lib/anclora-language-toggle";

const flatten = (value: unknown, prefix = ""): Record<string, string> => {
  if (typeof value === "string") return { [prefix]: value };
  if (!value || typeof value !== "object") return {};

  if (Array.isArray(value)) {
    return value.reduce<Record<string, string>>((acc, item, index) => ({
      ...acc,
      ...flatten(item, `${prefix}[${index}]`),
    }), {});
  }

  return Object.entries(value).reduce<Record<string, string>>((acc, [key, item]) => ({
    ...acc,
    ...flatten(item, prefix ? `${prefix}.${key}` : key),
  }), {});
};

const placeholders = (text: string) => text.match(/({{?\w+}?}|%[sd]|\{\w+\}|<br\s*\/>|<\/?strong>|<\/?a>)/g) ?? [];

describe("Ultra Premium locale copy", () => {
  test("exposes every Ultra Premium locale in the governed order", () => {
    expect(ULTRA_PREMIUM_LOCALES).toEqual(["es", "ca", "de", "en", "sv", "fr", "it", "da", "nl", "no", "pt"]);
    expect(ACTIVE_LOCALES).toEqual(ULTRA_PREMIUM_LOCALES);
    expect(Object.keys(siteCopyByLanguage)).toEqual(ULTRA_PREMIUM_LOCALES);
  });

  test("keeps the same string key surface across all locales", () => {
    const baseKeys = Object.keys(flatten(siteCopyByLanguage.es)).sort();

    for (const locale of ULTRA_PREMIUM_LOCALES) {
      expect(Object.keys(flatten(siteCopyByLanguage[locale])).sort()).toEqual(baseKeys);
    }
  });

  test("preserves placeholders and formatting tokens across locales", () => {
    const base = flatten(siteCopyByLanguage.es);

    for (const locale of ULTRA_PREMIUM_LOCALES) {
      const localized = flatten(siteCopyByLanguage[locale]);

      for (const key of Object.keys(base)) {
        expect(placeholders(localized[key]).sort(), `${locale}.${key}`).toEqual(placeholders(base[key]).sort());
      }
    }
  });

  test("does not contain configured literalism patterns", () => {
    const forbidden = [
      "Damos la bienvenida a tus preguntas",
      "siéntete libre de",
      "no dudes en contactarnos",
      "propiedades únicas",
      "Wir begrüßen Ihre Fragen",
      "fühlen Sie sich frei",
      "zögern Sie nicht",
      "unique properties",
    ];
    const allCopy = Object.values(flatten(siteCopyByLanguage)).join("\n").toLowerCase();

    for (const pattern of forbidden) {
      expect(allCopy).not.toContain(pattern.toLowerCase());
    }
  });
});
