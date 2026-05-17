/**
 * Configuración legal centralizada para el ecosistema Anclora.
 * Fuente de verdad para copyright y declaraciones de marca.
 */
export const LEGAL_CONFIG = {
  ENTITY_NAME: "Anclora Group",
  COPYRIGHT_BASE: {
    es: "Todos los derechos reservados.",
    en: "All rights reserved.",
    de: "Alle Rechte vorbehalten.",
  },
  getCopyright: (lang: "es" | "en" | "de" = "es", year: number = new Date().getFullYear()) => {
    const base = LEGAL_CONFIG.COPYRIGHT_BASE[lang] || LEGAL_CONFIG.COPYRIGHT_BASE.es;
    return `© ${year} ${LEGAL_CONFIG.ENTITY_NAME} - ${base}`;
  },
  getBrandDeclaration: (appName: string, lang: "es" | "en" | "de" = "es") => {
    const declarations = {
      es: `${appName} forma parte del ecosistema tecnológico de Anclora Group.`,
      en: `${appName} is part of the Anclora Group technology ecosystem.`,
      de: `${appName} ist Teil des technologischen Ökosystems von Anclora Group.`,
    };
    return declarations[lang] || declarations.es;
  }
};
