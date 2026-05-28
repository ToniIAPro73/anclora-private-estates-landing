/**
 * Configuración legal centralizada para el ecosistema Anclora.
 * Fuente de verdad para copyright y declaraciones de marca.
 */
export type LegalLocale = "es" | "ca" | "en" | "de" | "sv" | "fr" | "it" | "da" | "nl" | "no" | "pt";

export const LEGAL_CONFIG = {
  ENTITY_NAME: "Anclora Group",
  COPYRIGHT_BASE: {
    es: "Todos los derechos reservados.",
    ca: "Tots els drets reservats.",
    en: "All rights reserved.",
    de: "Alle Rechte vorbehalten.",
    sv: "Alla rättigheter förbehållna.",
    fr: "Tous droits réservés.",
    it: "Tutti i diritti riservati.",
    da: "Alle rettigheder forbeholdes.",
    nl: "Alle rechten voorbehouden.",
    no: "Alle rettigheter forbeholdt.",
    pt: "Todos os direitos reservados.",
  },
  getCopyright: (lang: LegalLocale = "es", year: number = new Date().getFullYear()) => {
    const base = LEGAL_CONFIG.COPYRIGHT_BASE[lang] || LEGAL_CONFIG.COPYRIGHT_BASE.es;
    return `© ${year} ${LEGAL_CONFIG.ENTITY_NAME} - ${base}`;
  },
  getBrandDeclaration: (appName: string, lang: LegalLocale = "es") => {
    const declarations = {
      es: `${appName} forma parte del ecosistema tecnológico de Anclora Group.`,
      ca: `${appName} forma part de l'ecosistema tecnològic d'Anclora Group.`,
      en: `${appName} is part of the Anclora Group technology ecosystem.`,
      de: `${appName} ist Teil des technologischen Ökosystems von Anclora Group.`,
      sv: `${appName} är en del av Anclora Groups tekniska ekosystem.`,
      fr: `${appName} fait partie de l'écosystème technologique d'Anclora Group.`,
      it: `${appName} fa parte dell'ecosistema tecnologico di Anclora Group.`,
      da: `${appName} er en del af Anclora Groups teknologiske økosystem.`,
      nl: `${appName} maakt deel uit van het technologische ecosysteem van Anclora Group.`,
      no: `${appName} er en del av Anclora Groups teknologiske økosystem.`,
      pt: `${appName} faz parte do ecossistema tecnológico da Anclora Group.`,
    };
    return declarations[lang] || declarations.es;
  }
};
