import type { ActiveAncloraLocale } from "@/lib/anclora-language-toggle";

export type LanguageCode = ActiveAncloraLocale;

export type NavLinkCopy = {
  label: string;
  href: string;
};

export type HeroMediaCopy = {
  eyebrow: string;
  title: string;
  methodEyebrow: string;
  method: string;
  statValue: string;
  statCopy: string;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  note: string;
  primaryCta: string;
  secondaryCta: string;
  scrollLabel: string;
  scrollText: string;
  media: HeroMediaCopy;
};

export type CredentialBadgeCopy = {
  text: string;
  detail: string;
};

export type CredibilityCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: string[];
  credentialBadges?: CredentialBadgeCopy[];
};

export type FAQItemCopy = {
  question: string;
  answer: string;
};

export type FAQSectionCopy = {
  eyebrow: string;
  title: string;
  items: FAQItemCopy[];
};

export type MallorcaClusterCopy = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  areas: string[];
  audienceLabel: string;
  audience: string;
};

export type MallorcaFocusCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  areasLabel: string;
  clusters: MallorcaClusterCopy[];
};

export type InvestorProfileCopy = {
  title: string;
  body: string;
};

export type InvestorCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  asideQuote: string;
  profiles: InvestorProfileCopy[];
};

export type SellerFormCopy = {
  intentLabel: string;
  intentOptions: { value: string; label: string }[];
  name: string;
  email: string;
  phone: string;
  zone: string;
  propertyType: string;
  commercialization: string;
  address: string;
  budget: string;
  timing: string;
  ticket: string;
  goal: string;
  message: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    zone: string;
    address: string;
    budget: string;
    timing: string;
    ticket: string;
    goal: string;
    message: string;
  };
  selectPlaceholder: string;
  propertyTypeOptions: string[];
  commercializationOptions: string[];
  budgetOptions: string[];
  timingOptions: string[];
  ticketOptions: string[];
  submitLabel: string;
  holidayRentalObjective?: string;
  holidayRentalAvailability?: string;
  holidayRentalObjectiveOptions?: string[];
};

export type SellerIntakeCopy = {
  eyebrow: string;
  title: string;
  body: string;
  checklistLabel: string;
  checklist: string[];
  trustBadgeText: string;
  form: SellerFormCopy;
};

export type DataLabSignalCopy = {
  eyebrow: string;
  title: string;
  body?: string;
};

export type ValuationFormCopy = {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    address: string;
    message: string;
  };
  privacyLabel: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  captchaError: string;
};

export type ValuationSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  checklistLabel: string;
  checklist: string[];
  form: ValuationFormCopy;
};

export type PartnersFormCopy = {
  name: string;
  email: string;
  serviceCategory: string;
  serviceSummary: string;
  placeholders: {
    name: string;
    email: string;
    serviceSummary: string;
  };
  selectPlaceholder: string;
  serviceCategoryOptions: { value: string; label: string }[];
  privacyLabel: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
};

export type PartnersSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  features: string[];
  form: PartnersFormCopy;
};

export type DataLabWhitelistFormCopy = {
  name: string;
  email: string;
  intendedUse: string;
  placeholders: {
    name: string;
    email: string;
    intendedUse: string;
  };
  privacyLabel: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
};

export type DataLabWhitelistCopy = {
  eyebrow: string;
  title: string;
  body: string;
  form: DataLabWhitelistFormCopy;
};

export type DataLabCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  lead: DataLabSignalCopy;
  signals: DataLabSignalCopy[];
  whitelist: DataLabWhitelistCopy;
};

export type ContactDetailCopy = {
  label: string;
  value: string;
  href?: string;
};

export type ContactCopy = {
  eyebrow: string;
  title: string;
  body: string;
  responseNote: string;
  trustBadgeText: string;
  detailsTitle: string;
  details: ContactDetailCopy[];
};

export type FinalCtaCopy = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
};

export type FooterColumnCopy = {
  title: string;
  links: NavLinkCopy[];
};

export type FooterCopy = {
  summary: string;
  columns: FooterColumnCopy[];
  copyright: string;
};

export type LanguageSwitcherOptionCopy = {
  code: LanguageCode;
  label: string;
  ariaLabel: string;
};

export type LanguageSwitcherCopy = {
  groupLabel: string;
  preferencesLabel: string;
  preferencesDialogLabel: string;
  title: string;
  eyebrow: string;
  languageLabel: string;
  currencyLabel: string;
  pendingLabel: string;
  closeLabel: string;
  saveLabel: string;
  currency: {
    eur: string;
    usd: string;
    gbp: string;
    chf: string;
    sek: string;
    dkk: string;
    nok: string;
  };
  options: LanguageSwitcherOptionCopy[];
};

export type NavbarCopy = {
  navAriaLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  menuDialogLabel: string;
  homeAriaLabel: string;
  logoAlt: string;
  links: NavLinkCopy[];
  ctaLabel: string;
  languageSwitcher: LanguageSwitcherCopy;
};

export type SeoCopy = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  schemaDescription: string;
  serviceType: string;
};

export type MediaAltCopy = {
  mallorcaFocusImage: string;
  investorImage: string;
  finalCtaImage: string;
};

export type CookieCopy = {
  title: string;
  description: string;
  acceptAll: string;
  settings: string;
  settingsTitle: string;
  necessary: {
    title: string;
    description: string;
  };
  analytics: {
    title: string;
    description: string;
  };
  marketing: {
    title: string;
    description: string;
  };
  savePreferences: string;
  back: string;
  rejectAll: string;
};

export type ScrollCopy = {
  up: string;
  down: string;
};

export type SocialCopy = {
  followUs: string;
};

export type HowWeWorkStepCopy = {
  number: string;
  title: string;
  description: string;
};

export type HowWeWorkCopy = {
  eyebrow: string;
  title: string;
  steps: HowWeWorkStepCopy[];
};

export type HolidayRentalCopy = {
  eyebrow: string;
  title: string;
  body: string;
  benefits: string[];
  technologyNote: string;
  primaryCta: string;
  secondaryCta: string;
  // P2: owner-centric repositioning (optional for locale backward compat)
  forWhomLabel?: string;
  whatWeReviewLabel?: string;
  forWhom?: string[];
  whatWeReview?: string[];
  prudenceNote?: string;
};

export type AfterContactStepCopy = {
  number: string;
  title: string;
  description: string;
};

export type AfterContactCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: AfterContactStepCopy[];
};

export type SiteCopy = {
  seo: SeoCopy;
  mediaAlt: MediaAltCopy;
  navbar: NavbarCopy;
  hero: HeroCopy;
  credibility: CredibilityCopy;
  howWeWork: HowWeWorkCopy;
  mallorcaFocus: MallorcaFocusCopy;
  holidayRental: HolidayRentalCopy;
  investors: InvestorCopy;
  sellerIntake: SellerIntakeCopy;
  valuation: ValuationSectionCopy;
  partners: PartnersSectionCopy;
  dataLab: DataLabCopy;
  contact: ContactCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
  cookies: CookieCopy;
  scroll: ScrollCopy;
  social: SocialCopy;
  faq: FAQSectionCopy;
  afterContact: AfterContactCopy;
  trustBadgeText: string;
  contactFloatingLabel: string;
};

const siteCopyEs: SiteCopy = {
  seo: {
    title: "Anclora Private Estates | Venta discreta en Mallorca",
    description:
      "Vende tu finca o villa en Andratx, Calvià o Son Vida de forma discreta, con acceso selectivo a compradores cualificados y sin exposición pública innecesaria.",
    ogTitle: "Anclora Private Estates | Venta discreta en Mallorca",
    ogDescription: "Acceso selectivo a compradores cualificados para propietarios en Palma y el suroeste de Mallorca.",
    schemaDescription:
      "Acceso selectivo a compradores cualificados para propietarios que valoran vender en el suroeste de Mallorca sin exposición pública innecesaria.",
    serviceType: "Asesoramiento inmobiliario premium y off-market",
  },
  mediaAlt: {
    mallorcaFocusImage: "Costa de Mallorca con aguas turquesa y embarcación en cala privada",
    investorImage: "Terraza premium con piscina y vistas al mar en Mallorca",
    finalCtaImage: "Villa premium en Mallorca con interior abierto al jardín",
  },
  navbar: {
    navAriaLabel: "Principal",
    menuOpenLabel: "Abrir menú",
    menuCloseLabel: "Cerrar menú",
    menuDialogLabel: "Menú de navegación",
    homeAriaLabel: "Anclora Private Estates — Inicio",
    logoAlt: "Anclora Private Estates by eXp Group Spain",
    links: [
      { label: "Credibilidad", href: "#credibilidad" },
      { label: "Cómo trabajamos", href: "#como-trabajamos" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Alquiler vacacional", href: "#alquiler-vacacional" },
      { label: "Inversores", href: "#inversores" },
      { label: "Clientes", href: "#clientes" },
      { label: "FAQ", href: "#faq" },
      { label: "Partners", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Editorial", href: "#editorial" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaLabel: "Solicitar valoración",
    languageSwitcher: {
      groupLabel: "Selector de idioma",
      preferencesLabel: "Preferencias globales",
      preferencesDialogLabel: "Ajustes de preferencias globales",
      eyebrow: "Preferencias",
      title: "Idioma",
      languageLabel: "Idioma",
      currencyLabel: "Moneda",
      pendingLabel: "Pendiente",
      closeLabel: "Cerrar selector de idioma",
      saveLabel: "Guardar y cerrar",
      currency: {
        eur: "Euro - EUR €",
        usd: "Dólar estadounidense - USD $",
        gbp: "Libra esterlina - GBP £",
        chf: "Franco suizo - CHF",
        sek: "Corona sueca - SEK kr",
        dkk: "Corona danesa - DKK kr",
        nok: "Corona noruega - NOK kr",
      },
      options: [
        { code: "es", label: "ES", ariaLabel: "Idioma español" },
        { code: "ca", label: "CA", ariaLabel: "Idioma catalán" },
        { code: "de", label: "DE", ariaLabel: "Idioma alemán" },
        { code: "en", label: "EN", ariaLabel: "Idioma inglés" },
        { code: "sv", label: "SV", ariaLabel: "Idioma sueco" },
        { code: "fr", label: "FR", ariaLabel: "Idioma francés" },
        { code: "it", label: "IT", ariaLabel: "Idioma italiano" },
        { code: "da", label: "DA", ariaLabel: "Idioma danés" },
        { code: "nl", label: "NL", ariaLabel: "Idioma neerlandés" },
        { code: "no", label: "NO", ariaLabel: "Idioma noruego" },
        { code: "pt", label: "PT", ariaLabel: "Idioma portugués" },
      ],
    },
  },
  hero: {
    eyebrow: "Palma · Suroeste de Mallorca · Capital premium",
    title: "Venta discreta y rentabilización premium de activos singulares en Mallorca.",
    description:
      "Preparamos, posicionamos y gestionamos villas, fincas y activos únicos para propietarios que no quieren exposición masiva. Discreción, control y acceso a compradores cualificados.",
    chips: [],
    note:
      "No diseñamos una presencia para parecer grandes. Diseñamos una presencia para transmitir criterio, silencio operativo y una relación más sofisticada con el activo.",
    primaryCta: "Solicitar evaluación privada",
    secondaryCta: "Explorar alquiler vacacional premium",
    scrollLabel: "Continuar",
    scrollText: "Descubrir",
    media: {
      eyebrow: "Private Preview",
      title: "Palma, Son Vida, Portals, Bendinat y microzonas donde el relato correcto reordena el valor percibido.",
      methodEyebrow: "Method",
      method:
        "La operación comienza antes del portal: preparación, narrativa, acceso y timing alineados con el tipo de comprador adecuado.",
      statValue: "01",
      statCopy:
        "Cada decisión visible en la landing sugiere el mismo principio: menos ruido, más control y mejor contexto para activos premium.",
    },
  },
  credibility: {
    eyebrow: "Credibilidad",
    title: "Descubre una propuesta premium que genera confianza de forma genuina.",
    intro:
      "La autoridad aquí no se comunica con promesas estridentes, sino con estructura, respaldo y una lectura más madura del mercado.",
    pillars: [
      "Agente independiente con respaldo de eXp Group Spain.",
      "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
      "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Red global de +80.000 agentes activos" },
      { text: "Mallorca Premium", detail: "Especialización exclusiva en el suroeste de Mallorca" },
      { text: "Comprador internacional", detail: "Acceso a perfiles cualificados de +40 países" },
    ],
  },
  howWeWork: {
    eyebrow: "Proceso · Cómo trabajamos",
    title: "Cuatro pasos para una operación con criterio y discreción.",
    steps: [
      {
        number: "01",
        title: "Evaluación privada",
        description: "Analizamos el activo, la microzona y el perfil del propietario antes de acordar ninguna acción.",
      },
      {
        number: "02",
        title: "Estrategia territorial",
        description: "Definimos el relato de valor, el posicionamiento y el tipo de comprador adecuado para el activo.",
      },
      {
        number: "03",
        title: "Acceso cualificado",
        description: "Activamos el acceso a compradores e inversores seleccionados sin exposición pública del activo.",
      },
      {
        number: "04",
        title: "Seguimiento y cierre",
        description: "Acompañamos cada conversación hasta el cierre con criterio, confidencialidad y respaldo operativo.",
      },
    ],
  },
  mallorcaFocus: {
    eyebrow: "Mallorca Focus",
    title: "Mallorca no se interpreta como una lista plana de zonas, sino como un sistema de microzonas y señales.",
    intro:
      "Cada enclave exige un lenguaje comercial distinto. La misma estética no sirve para Palma, Portals o Valldemossa; tampoco la misma narrativa de valor.",
    areasLabel: "Áreas",
    clusters: [
      {
        id: "palma-hillside-core",
        eyebrow: "Palma y la colina residencial",
        title: "Capital, altura residencial y acceso institucional.",
        body:
          "Palma, Son Vida, Cala Major, San Agustín y Cas Català concentran una mezcla muy particular de capital local, demanda internacional y activos donde el relato urbano y la privacidad pesan tanto como la ubicación.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustín", "Cas Català"],
        audienceLabel: "Perfil de comprador",
        audience:
          "Comprador patrimonial que prioriza capital, colegios, servicios y logística diaria.",
      },
      {
        id: "calvia-coastal-premium",
        eyebrow: "Costa premium de Calvià",
        title: "Costa consolidada con lifestyle y liquidez.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes y Punta Negra funcionan como un sistema donde mar, marina, privacidad y servicios premium se convierten en señales clave de valor.",
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
        audienceLabel: "Perfil de comprador",
        audience:
          "Comprador internacional y family office orientado a costa prime y continuidad relacional.",
      },
      {
        id: "southwest-lifestyle-capital-preservation",
        eyebrow: "Suroeste: lifestyle y patrimonio",
        title: "Entrada premium con lifestyle, rentabilidad y timing.",
        body:
          "Palmanova, Paguera y Costa de la Calma permiten leer un tramo más flexible del mercado premium, donde lifestyle, ticket de entrada y velocidad comercial necesitan criterio fino por microzona.",
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Perfil de comprador",
        audience:
          "Inversor híbrido que busca equilibrio entre uso propio, demanda y conservación patrimonial.",
      },
      {
        id: "heritage-serra-character",
        eyebrow: "Serra y herencia de interior",
        title: "Interior con carácter, paisaje y singularidad residencial.",
        body:
          "Puerto de Andratx, Andratx, Esporles y Valldemossa forman un clúster donde la lectura cambia: patrimonio, paisaje, privacidad y narrativa residencial pesan más que la mera proximidad a la costa.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Perfil de comprador",
        audience:
          "Comprador UHNW relacional que valora singularidad, silencio y activos con relato duradero.",
      },
    ],
  },
  holidayRental: {
    eyebrow: "Alquiler vacacional premium",
    title: "Rentabilizar sin perder control del activo.",
    body: "El alquiler vacacional puede ser una palanca de rentabilidad inteligente para activos singulares. Pero hacerlo bien exige preparación, criterio de posicionamiento y una estrategia operativa que preserve el valor del activo y la experiencia del propietario.",
    forWhomLabel: "Para quién encaja",
    forWhom: [
      "Propietarios de villas o fincas con periodos de no uso que quieren generar ingresos sin perder privacidad.",
      "Propietarios en proceso de venta que quieren mantener rentabilidad durante la fase de preparación.",
      "Inversores que combinan uso propio con rendimiento vacacional selectivo.",
    ],
    whatWeReviewLabel: "Qué revisamos contigo",
    whatWeReview: [
      "Potencial real de la microzona y la tipología del activo.",
      "Perfil de huésped adecuado y estrategia de posicionamiento.",
      "Estructura operativa y documental (SES.HOSPEDAJES, contratos, cobertura).",
      "Compatibilidad con una posible estrategia de venta futura.",
    ],
    benefits: [
      "Evaluación privada del potencial de alquiler.",
      "Posicionamiento alineado con activos de alto standing.",
      "Captación orientada a huéspedes cualificados.",
      "Preparación operativa y documental más ordenada.",
      "Compatibilidad con uso propio y estrategia de venta futura.",
    ],
    technologyNote: "La gestión documental puede apoyarse en Anclora SyncXML para estructurar datos de reservas orientados al flujo SES.HOSPEDAJES. Esta capa aporta trazabilidad y menos fricción documental; no sustituye la revisión legal ni el criterio del profesional.",
    primaryCta: "Evaluar potencial de alquiler premium",
    secondaryCta: "Abrir conversación privada",
    prudenceNote: "El alquiler vacacional en Mallorca está sujeto a regulación local. Disponibilidad de licencias, zonificación y normativa municipal son factores que evaluamos en cada caso antes de cualquier compromiso.",
  },
  investors: {
    eyebrow: "Inversores",
    title: "Capital nacional e internacional que necesita menos escaparate y una mejor lectura de contexto.",
    intro:
      "El inversor premium no busca simplemente stock; busca una interpretación fiable de acceso, timing, conservación de valor y continuidad relacional.",
    asideQuote:
      "La diferencia no está en mostrar más producto, sino en comprender mejor qué tipo de comprador y qué velocidad necesita cada activo.",
    profiles: [
      {
        title: "Inversor patrimonial nacional",
        body:
          "Busca activos sólidos, protección de valor y criterio territorial para no depender de ruido comercial ni de escaparates genéricos.",
      },
      {
        title: "Inversor lifestyle internacional",
        body:
          "Prioriza microzona, privacidad, marina, colegios, conectividad y capacidad de ejecutar con confianza en un entorno premium transfronterizo.",
      },
      {
        title: "Comprador UHNW relacional",
        body:
          "No entra por catálogo, sino por confianza, acceso, timing y capacidad de activar la red adecuada alrededor de una operación singular.",
      },
    ],
  },
  sellerIntake: {
    eyebrow: "Clientes",
    title: "Asesoramiento selectivo para propietarios, compradores e inversores.",
    body:
      "Estudiamos cada solicitud según su intención: venta, compra, valoración o inversión. Enfoque premium y confidencial para activos singulares en Palma y el suroeste de Mallorca.",
    checklistLabel: "Criterios de evaluación privada",
    checklist: ["Microzona y competencia real", "Narrativa de posicionamiento", "Timing y acceso cualificado"],
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    form: {
      intentLabel: "¿En qué podemos ayudarte?",
      intentOptions: [
        { value: "sell", label: "Quiero vender una propiedad" },
        { value: "valuation", label: "Quiero una valoración privada" },
        { value: "buy", label: "Quiero comprar una propiedad premium" },
        { value: "invest", label: "Busco oportunidades de inversión" },
        { value: "holiday_rental", label: "Quiero rentabilizar mi propiedad como alquiler vacacional" },
      ],
      holidayRentalObjective: "Objetivo de explotación",
      holidayRentalAvailability: "Disponibilidad prevista",
      holidayRentalObjectiveOptions: ["Rendimiento máximo", "Uso mixto (personal + alquiler)", "Gestión full-service"],
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      zone: "Zona del inmueble",
      propertyType: "Tipo de propiedad",
      commercialization: "Preferencia de comercialización",
      address: "Dirección del inmueble",
      budget: "Presupuesto aproximado",
      timing: "Plazo previsto",
      ticket: "Ticket de inversión",
      goal: "Objetivo de inversión",
      message: "Mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "nombre@dominio.com",
        phone: "+34 ...",
        zone: "Son Vida, Portals, Andratx...",
        address: "Calle, zona o referencia catastral",
        budget: "Ej: 1M - 3M €",
        timing: "Ej: Inmediato, 6 meses...",
        ticket: "Ej: 500k+, 2M+...",
        goal: "Ej: Patrimonio, Rentabilidad...",
        message: "Cuéntanos más detalles sobre tu solicitud.",
      },
      selectPlaceholder: "Selecciona una opción",
      propertyTypeOptions: ["Villa", "Ático", "Apartamento premium", "Finca"],
      commercializationOptions: [
        "Evaluación confidencial",
        "Venta en exclusiva",
        "Venta selectiva sin portal masivo",
      ],
      budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"],
      timingOptions: ["Inmediato", "1-3 meses", "3-6 meses", "Sólo explorando"],
      ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"],
      submitLabel: "Enviar solicitud privada",
    },
  },
  valuation: {
    eyebrow: "Solicitar valoración",
    title: "¿Cuánto vale tu propiedad en Mallorca?",
    body: "Si tienes un inmueble en Palma o el suroeste de Mallorca y quieres conocer su valor real de mercado, podemos hacer una valoración confidencial y sin compromiso.",
    checklistLabel: "La valoración incluye",
    checklist: [
      "Análisis de microzona y competencia real",
      "Lectura de timing de mercado",
      "Valoración orientada al comprador adecuado",
    ],
    form: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      address: "Dirección del inmueble",
      message: "Mensaje (opcional)",
      placeholders: {
        name: "Tu nombre",
        email: "nombre@dominio.com",
        phone: "+34 ...",
        address: "Calle, zona o referencia catastral",
        message: "Cuéntanos cualquier detail relevante.",
      },
      privacyLabel: "He leído y acepto la política de privacidad.",
      submitLabel: "Solicitar valoración confidencial",
      successTitle: "Solicitud recibida",
      successBody: "Te responderemos en un plazo de dos días hábiles con una valoración privada.",
      captchaError: "Por favor completa la verificación de seguridad.",
    },
  },
  partners: {
    eyebrow: "Synergi · Red de partners",
    title: "Una red selectiva para colaboradores que entienden el mercado premium.",
    body: "Anclora Synergi es el portal privado para partners ya validados: agentes independientes, profesionales del sector y colaboradores con criterio territorial. El acceso es curado, no masivo.",
    features: [
      "Acceso a oportunidades compartidas de forma selectiva",
      "Colaboración con un enfoque de microzona y calidad de activo",
      "Proceso de admisión curado y sin fricción comercial",
    ],
    form: {
      name: "Nombre",
      email: "Email",
      serviceCategory: "Tipo de servicio",
      serviceSummary: "Describe tu perfil y cómo trabajas",
      placeholders: {
        name: "Tu nombre o empresa",
        email: "nombre@dominio.com",
        serviceSummary: "Explica tu perfil profesional, especialidad y cómo podrías colaborar con Anclora (mín. 20 caracteres).",
      },
      selectPlaceholder: "Selecciona una categoría",
      serviceCategoryOptions: [
        { value: "real_estate", label: "Inmobiliario" },
        { value: "professional", label: "Profesional / Legal / Financiero" },
        { value: "luxury", label: "Lifestyle & Lujo" },
        { value: "eco", label: "Sostenibilidad" },
        { value: "other", label: "Otro" },
      ],
      privacyLabel: "He leído y acepto la política de privacidad.",
      submitLabel: "Solicitar acceso a Synergi",
      successTitle: "Solicitud recibida",
      successBody: "Revisaremos tu perfil y te responderemos en un plazo de siete días.",
    },
  },
  dataLab: {
    eyebrow: "Anclora Data Lab",
    title: "Señales territoriales para leer el mercado premium con más calma y menos reacción.",
    intro:
      "No presentamos dashboards. Presentamos indicios que ayudan a encuadrar la calidad del activo, la presión de demanda y la sensibilidad del comprador premium.",
    lead: {
      eyebrow: "Signal 01",
      title:
        "La escasez de producto prime bien posicionado favorece decisiones más selectivas y menos reactivas.",
      body:
        "En Palma y el suroeste, la combinación de oferta limitada, demanda internacional persistente y sensibilidad creciente al producto turnkey refuerza el valor de los activos bien preparados y bien narrados.",
    },
    signals: [
      {
        eyebrow: "Signal 02",
        title: "La microzona importa más que la etiqueta general del municipio.",
        body: "Andratx, Portals Nous y Son Vida generan perfiles de comprador, velocidades de absorción y rangos de precio distintos. Operar sin esta lectura es perder posicionamiento antes de empezar.",
      },
      {
        eyebrow: "Signal 03",
        title: "La preparación del activo condiciona la velocidad y la calidad de la operación.",
        body: "Los activos con documentación completa, narrativa comercial clara y presentación cuidada reducen el tiempo de exposición y mejoran la selectividad de las conversaciones que generan.",
      },
    ],
    whitelist: {
      eyebrow: "Acceso selectivo",
      title: "Únete a la lista de acceso anticipado.",
      body: "Anclora Data Lab está en fase de acceso selectivo para inversores, family offices y perfiles institucionales. Si tu perfil encaja, te avisaremos cuando abramos el siguiente bloque de acceso.",
      form: {
        name: "Nombre",
        email: "Email",
        intendedUse: "¿Por qué te interesa el Data Lab?",
        placeholders: {
          name: "Tu nombre o empresa",
          email: "nombre@dominio.com",
          intendedUse: "Describe brevemente tu interés y perfil inversor (mín. 20 caracteres).",
        },
        privacyLabel: "He leído y acepto la política de privacidad.",
        submitLabel: "Solicitar acceso anticipado",
        successTitle: "En lista de espera",
        successBody: "Te avisaremos cuando abramos el siguiente bloque de acceso para tu perfil.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Abramos una conversación privada.",
    body:
      "Si estás valorando vender, invertir o explorar una oportunidad patrimonial en Palma o el suroeste de Mallorca, podemos estudiar tu caso con criterio, confidencialidad y enfoque premium.",
    responseNote: "Las conversaciones se gestionan de forma selectiva y con retorno personal.",
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    detailsTitle: "Datos de contacto",
    details: [
      { label: "Email", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" },
      { label: "Teléfono", value: "+34 633 947 810", href: "tel:+34633947810" },
      { label: "Ubicación", value: "Palma de Mallorca · Islas Baleares" },
    ],
  },
  finalCta: {
    eyebrow: "Conversación privada",
    title: "El siguiente paso no es ver más ruido. Es abrir la conversación adecuada.",
    body:
      "Palma y el suroeste de Mallorca exigen criterio territorial, confidencialidad y una ejecución comercial más precisa. Si estás valorando vender, comprar o explorar una oportunidad patrimonial, podemos estudiar tu caso de forma privada.",
    primaryCta: "Iniciar evaluación privada",
    secondaryCta: "Abrir conversación privada",
  },
  footer: {
    summary:
      "Firma inmobiliaria premium orientada a Palma y el suroeste de Mallorca, con criterio territorial, acceso selectivo y una ejecución comercial más precisa.",
    columns: [
      {
        title: "Contacto",
        links: [
          { label: "Abrir conversación privada", href: "#contacto" },
        ],
      },
      {
        title: "Acceso selectivo",
        links: [
          { label: "Mallorca", href: "#mallorca-focus" },
          { label: "Inversores", href: "#inversores" },
          { label: "Clientes", href: "#clientes" },
          { label: "Partners", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidad", href: "/privacy" },
          { label: "Términos", href: "/terms" },
          { label: "Aviso legal", href: "/legal" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Group. Todos los derechos reservados.",
  },
  cookies: {
    title: "Preferencias de cookies",
    description: "Este sitio utiliza cookies para ofrecerle una mejor experiencia de usuario. Puede gestionar sus preferencias en cualquier momento.",
    acceptAll: "Aceptar todas",
    settings: "Configuración",
    settingsTitle: "Gestionar cookies",
    necessary: {
      title: "Cookies necesarias",
      description: "Estas cookies son esenciales para el funcionamiento del sitio y no se pueden desactivar.",
    },
    analytics: {
      title: "Cookies de análisis",
      description: "Nos ayudan a comprender cómo interactúan los visitantes con el sitio.",
    },
    marketing: {
      title: "Cookies de marketing",
      description: "Se utilizan para mostrar anuncios relevantes para los visitantes.",
    },
    savePreferences: "Guardar preferencias",
    back: "Volver",
    rejectAll: "Rechazar opcionales",
  },
  scroll: {
    up: "Subir",
    down: "Bajar",
  },
  social: {
    followUs: "SÍGUENOS",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que nos preguntan los propietarios, compradores e inversores.",
    items: [
      {
        question: "¿Qué es exactamente una venta off-market o discreta?",
        answer: "Una venta off-market es aquella en la que el activo no se publica en portales inmobiliarios de acceso masivo. Se trabaja de forma confidencial con un grupo selecto de compradores cualificados, preservando la privacidad del vendedor, evitando la fatiga del mercado y manteniendo el poder de negociación del activo.",
      },
      {
        question: "¿Cuánto tiempo tarda normalmente una venta privada en Mallorca?",
        answer: "Depende del activo, la microzona y el precio de posicionamiento. Una operación bien ejecutada puede cerrarse entre 3 y 12 meses. Priorizamos el precio adecuado y el comprador correcto sobre la velocidad. Un activo bien preparado y bien narrado atrae conversaciones de mayor calidad.",
      },
      {
        question: "¿Cómo accedo a propiedades no publicadas en Mallorca?",
        answer: "A través de nuestra lista de compradores cualificados. Trabajamos con perfiles que han sido evaluados previamente y que cuentan con capacidad de decisión real. Si encajas en ese perfil, puedes acceder a activos que no están en ningún portal.",
      },
      {
        question: "¿Qué rentabilidad puedo esperar como inversor en el suroeste de Mallorca?",
        answer: "La rentabilidad varía según el tipo de activo, la microzona y la estrategia (alquiler vacacional, plusvalía a largo plazo o mix). En zonas prime como Son Vida o Portals, el mercado muestra resistencia de precio y demanda internacional sostenida. Evaluamos cada caso con datos actualizados de la microzona.",
      },
      {
        question: "¿En qué zonas de Mallorca operáis?",
        answer: "Operamos principalmente en Palma, Andratx, Calvià, Son Vida, Portals Nous, Bendinat, Deià y Valldemossa. Evaluamos activos en otras ubicaciones según criterio y potencial del activo.",
      },
    ],
  },
  afterContact: {
    eyebrow: "Qué ocurre después",
    title: "Un proceso sin promesas vacías.",
    intro: "Cuando envías una solicitud, esto es lo que sucede en los días siguientes:",
    steps: [
      {
        number: "01",
        title: "Revisión inicial",
        description: "Estudiamos tu solicitud con criterio: intención, tipología del activo y encaje con lo que gestionamos.",
      },
      {
        number: "02",
        title: "Lectura privada",
        description: "Si hay un encaje real, organizamos una llamada o encuentro para entender la situación sin presión ni compromiso.",
      },
      {
        number: "03",
        title: "Propuesta de siguiente paso",
        description: "Según el caso, proponemos una valoración, un plan de alquiler o una estrategia de acceso a compradores cualificados.",
      },
      {
        number: "04",
        title: "Descarte honesto",
        description: "Si no encaja, te lo decimos con claridad. Preferimos la honestidad a ocupar tu tiempo con un proceso sin futuro.",
      },
    ],
  },
  trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
  contactFloatingLabel: "CONTACTAR",
};

const siteCopyEn: SiteCopy = {
  ...siteCopyEs,
  seo: {
    title: "Anclora Private Estates | Discreet sales in Mallorca",
    description:
      "Sell a finca or villa in Andratx, Calvià or Son Vida discreetly, with selective access to qualified buyers and no unnecessary public exposure.",
    ogTitle: "Anclora Private Estates | Discreet sales in Mallorca",
    ogDescription: "Selective access to qualified buyers for owners in Palma and Southwest Mallorca.",
    schemaDescription:
      "Selective access to qualified buyers for owners considering a discreet sale in Southwest Mallorca.",
    serviceType: "Premium and off-market real estate advisory",
  },
  mediaAlt: {
    mallorcaFocusImage: "Mallorca coastline with turquoise water and a boat in a private cove",
    investorImage: "Premium terrace with pool and sea views in Mallorca",
    finalCtaImage: "Premium Mallorca villa with an interior open to the garden",
  },
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Main",
    menuOpenLabel: "Open menu",
    menuCloseLabel: "Close menu",
    menuDialogLabel: "Navigation menu",
    homeAriaLabel: "Anclora Private Estates — Home",
    logoAlt: "Anclora Private Estates by eXp Group Spain",
    links: [
      { label: "Credibility", href: "#credibilidad" },
      { label: "How we work", href: "#como-trabajamos" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Holiday rental", href: "#alquiler-vacacional" },
      { label: "Investors", href: "#inversores" },
      { label: "Clients", href: "#clientes" },
      { label: "FAQ", href: "#faq" },
      { label: "Partners", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Editorial", href: "#editorial" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Request a valuation",
    languageSwitcher: {
      groupLabel: "Language selector",
      preferencesLabel: "Global preferences",
      preferencesDialogLabel: "Global preferences settings",
      eyebrow: "Preferences",
      title: "Language",
      languageLabel: "Language",
      currencyLabel: "Currency",
      pendingLabel: "Pending",
      closeLabel: "Close language selector",
      saveLabel: "Save and close",
      currency: {
        eur: "Euro - EUR €",
        usd: "US dollar - USD $",
        gbp: "Pound sterling - GBP £",
        chf: "Swiss franc - CHF",
        sek: "Swedish krona - SEK kr",
        dkk: "Danish krone - DKK kr",
        nok: "Norwegian krone - NOK kr",
      },
      options: [
        { code: "es", label: "ES", ariaLabel: "Spanish language" },
        { code: "ca", label: "CA", ariaLabel: "Catalan language" },
        { code: "de", label: "DE", ariaLabel: "German language" },
        { code: "en", label: "EN", ariaLabel: "English language" },
        { code: "sv", label: "SV", ariaLabel: "Swedish language" },
        { code: "fr", label: "FR", ariaLabel: "French language" },
        { code: "it", label: "IT", ariaLabel: "Italian language" },
        { code: "da", label: "DA", ariaLabel: "Danish language" },
        { code: "nl", label: "NL", ariaLabel: "Dutch language" },
        { code: "no", label: "NO", ariaLabel: "Norwegian language" },
        { code: "pt", label: "PT", ariaLabel: "Portuguese language" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Southwest Mallorca · Premium capital",
    title: "Discreet sale and premium monetisation of singular assets in Mallorca.",
    description:
      "We prepare, position and manage villas, fincas and unique assets for owners who prefer no mass exposure. Discretion, control and access to qualified buyers.",
    chips: [],
    note:
      "We are not designing a presence to look large. We are designing a presence that signals judgment, operational silence and a more sophisticated relationship with the asset.",
    primaryCta: "Request private evaluation",
    secondaryCta: "Explore premium holiday rental",
    scrollLabel: "Continue",
    scrollText: "Discover",
    media: {
      eyebrow: "Private preview",
      title:
        "Palma, Son Vida, Portals, Bendinat and the micro-locations where the right narrative reorders perceived value.",
      methodEyebrow: "Method",
      method:
        "The transaction starts before the portal: preparation, narrative, access and timing aligned with the right type of buyer.",
      statValue: "01",
      statCopy:
        "Every visible decision on the landing reflects the same principle: less noise, more control and better context for premium assets.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Credibility",
    title: "Discover a premium proposal that generates trust genuinely.",
    intro:
      "Authority is not expressed here through louder promises, but through structure, backing and a more mature reading of the market.",
    pillars: [
      "Independent agent backed by eXp Group Spain.",
      "More than 25 years in technology applied to a better-structured real estate operation.",
      "Territorial intelligence, optimized processes and a selective network as the real edge over the traditional agency.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Global network of 80,000+ active agents" },
      { text: "Mallorca Premium", detail: "Exclusive focus on southwest Mallorca" },
      { text: "International buyer access", detail: "Qualified profiles from 40+ countries" },
    ],
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    eyebrow: "Mallorca Focus",
    title: "Mallorca is not understood as a flat list of areas, but as a system of micro-locations and signals.",
    intro:
      "Each enclave requires a distinct commercial language. The same aesthetic does not work for Palma, Portals or Valldemossa; neither does the same value narrative.",
    areasLabel: "Areas",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma & Hillside Residential",
        audienceLabel: "Buyer profile",
        title: "Capital center, elevated living and institutional access.",
        body:
          "Palma, Son Vida, Cala Major, San Agustin and Cas Catala bring together a very specific mix of local capital, international demand and assets where the urban narrative and privacy matter as much as location.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustin", "Cas Catala"],
        audience: "Asset-preservation buyer who prioritizes capital, schools, services and everyday logistics.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[1],
        eyebrow: "Calvià Premium Coast",
        audienceLabel: "Buyer profile",
        title: "Established coastline with a lifestyle and liquidity lens.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes and Punta Negra operate as a system where sea, marina, privacy and premium services become key value signals.",
        audience: "International buyer and family office focused on prime coast and relationship continuity.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[2],
        eyebrow: "Southwest: Lifestyle & Heritage",
        audienceLabel: "Buyer profile",
        title: "Premium entry with lifestyle, yield and timing.",
        body:
          "Palmanova, Paguera and Costa de la Calma offer a more flexible premium-market band where lifestyle, entry ticket and commercial speed require a finely tuned micro-location lens.",
        audience: "Hybrid investor seeking balance between personal use, demand and capital preservation.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Serra & Interior Heritage",
        audienceLabel: "Buyer profile",
        title: "Interior with character, landscape and residential singularity.",
        body:
          "Puerto de Andratx, Andratx, Esporles and Valldemossa form a cluster where the reading changes: heritage, landscape, privacy and residential storytelling matter more than proximity to the coast.",
        audience: "Relationship-driven UHNW buyer who values singularity, silence and assets with a lasting story.",
      },
    ],
  },
  howWeWork: {
    eyebrow: "Process · How we work",
    title: "Four steps for an operation built on judgment and discretion.",
    steps: [
      {
        number: "01",
        title: "Private assessment",
        description: "We analyse the asset, the micro-location and the owner's profile before agreeing on any action.",
      },
      {
        number: "02",
        title: "Territorial strategy",
        description: "We define the value narrative, the positioning and the right buyer profile for the asset.",
      },
      {
        number: "03",
        title: "Qualified access",
        description: "We activate access to selected buyers and investors without public exposure of the asset.",
      },
      {
        number: "04",
        title: "Follow-up and close",
        description: "We accompany every conversation through to closing with judgment, confidentiality and operational support.",
      },
    ],
  },
  holidayRental: {
    eyebrow: "Premium holiday rental",
    title: "Monetise without losing control of the asset.",
    body: "Holiday rental can be an intelligent income lever for singular assets. But doing it well requires preparation, positioning judgment and an operational strategy that preserves the asset's value and the owner's experience.",
    forWhomLabel: "Who this is for",
    forWhom: [
      "Villa and finca owners with non-use periods who want income without losing privacy.",
      "Owners preparing for sale who want to maintain returns during the preparation phase.",
      "Investors who combine personal use with selective holiday yield.",
    ],
    whatWeReviewLabel: "What we review with you",
    whatWeReview: [
      "Real potential of the micro-location and asset type.",
      "Appropriate guest profile and positioning strategy.",
      "Operational and documentary structure (SES.HOSPEDAJES, contracts, coverage).",
      "Compatibility with any future sale strategy.",
    ],
    benefits: [
      "Private evaluation of rental potential.",
      "Positioning aligned with high-standing assets.",
      "Acquisition focused on qualified guests.",
      "More organised operational and documentary preparation.",
      "Compatibility with personal use and future sale strategy.",
    ],
    technologyNote: "Documentary operations can be supported by Anclora SyncXML to structure booking data oriented to the SES.HOSPEDAJES flow. This layer adds traceability and less documentary friction; it does not replace legal review or professional judgment.",
    primaryCta: "Evaluate holiday rental potential",
    secondaryCta: "Open private conversation",
    prudenceNote: "Holiday rental in Mallorca is subject to local regulation. Licence availability, zoning and municipal rules are factors we assess in each case before any commitment.",
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investors",
    title: "National and international capital that needs less showcase and a better reading of context.",
    intro:
      "The premium investor is not merely looking for inventory; they look for a reliable interpretation of access, timing, value preservation and relationship continuity.",
    asideQuote:
      "The edge is not showing more stock, but understanding more precisely what kind of buyer and what pace each asset requires.",
    profiles: [
      {
        title: "National wealth investor",
        body:
          "Looks for solid assets, value protection and territorial judgment so they do not depend on commercial noise or generic showcases.",
      },
      {
        title: "International lifestyle investor",
        body:
          "Prioritizes micro-location, privacy, marina access, schools, connectivity and the ability to execute with confidence in a cross-border premium environment.",
      },
      {
        title: "Relationship-driven UHNW buyer",
        body:
          "Does not enter through a catalogue, but through trust, access, timing and the ability to activate the right network around a singular transaction.",
      },
    ],
  },
  sellerIntake: {
    ...siteCopyEs.sellerIntake,
    eyebrow: "Clients",
    title: "Selective advisory for owners, buyers and investors.",
    body:
      "We study each request according to its intent: sell, buy, valuation or investment. A premium and confidential approach for singular assets in Palma and Southwest Mallorca.",
    checklistLabel: "Private evaluation criteria",
    checklist: ["Micro-location and real competition", "Positioning narrative", "Qualified timing and access"],
    trustBadgeText: "International backing and operational trust through eXp Group Spain.",
    form: {
      ...siteCopyEs.sellerIntake.form,
      intentLabel: "How can we help you?",
      intentOptions: [
        { value: "sell", label: "I want to sell a property" },
        { value: "valuation", label: "I want a private valuation" },
        { value: "buy", label: "I want to buy a premium property" },
        { value: "invest", label: "I'm looking for investment opportunities" },
        { value: "holiday_rental", label: "I want to monetise my property as a holiday rental" },
      ],
      holidayRentalObjective: "Rental objective",
      holidayRentalAvailability: "Expected availability",
      holidayRentalObjectiveOptions: ["Maximum yield", "Mixed use (personal + rental)", "Full-service management"],
      name: "Name",
      email: "Email",
      phone: "Phone",
      zone: "Property area",
      propertyType: "Property type",
      commercialization: "Commercial approach",
      address: "Property address",
      budget: "Approximate budget",
      timing: "Expected timing",
      ticket: "Investment ticket",
      goal: "Investment goal",
      message: "Message",
      placeholders: {
        name: "Your name",
        email: "name@domain.com",
        phone: "+34 ...",
        zone: "Son Vida, Portals, Andratx...",
        address: "Street, area or cadastral reference",
        budget: "e.g. 1M - 3M €",
        timing: "e.g. Immediate, 6 months...",
        ticket: "e.g. 500k+, 2M+...",
        goal: "e.g. Wealth, ROI...",
        message: "Tell us more details about your request.",
      },
      selectPlaceholder: "Select an option",
      submitLabel: "Send private request",
    },
  },
  valuation: {
    ...siteCopyEs.valuation,
    eyebrow: "Request a valuation",
    title: "What is your Mallorca property worth?",
    body: "If you own a property in Palma or Southwest Mallorca and want to know its real market value, we can provide a confidential, no-commitment valuation.",
    checklistLabel: "The valuation includes",
    checklist: [
      "Micro-location and competitive analysis",
      "Market timing review",
      "Valuation aligned with the right buyer type",
    ],
    form: {
      ...siteCopyEs.valuation.form,
      name: "Name",
      email: "Email",
      phone: "Phone",
      address: "Property address",
      message: "Message (optional)",
      placeholders: {
        name: "Your name",
        email: "name@domain.com",
        phone: "+34 ...",
        address: "Street, area or cadastral reference",
        message: "Share any relevant details.",
      },
      privacyLabel: "I have read and accept the privacy policy.",
      submitLabel: "Request a confidential valuation",
      successTitle: "Request received",
      successBody: "We will get back to you within two working days with a private valuation.",
      captchaError: "Please complete the security verification.",
    },
  },
  partners: {
    ...siteCopyEs.partners,
    eyebrow: "Synergi · Partner network",
    title: "A selective network for collaborators who understand the premium market.",
    body: "Anclora Synergi is the private portal for already-validated partners: independent agents, real estate professionals and collaborators with territorial judgment. Access is curated, not mass-market.",
    features: [
      "Access to selectively shared opportunities",
      "Collaboration focused on micro-location and asset quality",
      "Curated admission process free from commercial friction",
    ],
    form: {
      ...siteCopyEs.partners.form,
      name: "Name",
      email: "Email",
      serviceCategory: "Service type",
      serviceSummary: "Describe your profile and how you work",
      placeholders: {
        name: "Your name or company",
        email: "name@domain.com",
        serviceSummary: "Describe your professional profile, specialty and how you could collaborate with Anclora (min. 20 characters).",
      },
      selectPlaceholder: "Select a category",
      serviceCategoryOptions: [
        { value: "real_estate", label: "Real estate" },
        { value: "professional", label: "Professional / Legal / Finance" },
        { value: "luxury", label: "Lifestyle & Luxury" },
        { value: "eco", label: "Sustainability" },
        { value: "other", label: "Other" },
      ],
      privacyLabel: "I have read and accept the privacy policy.",
      submitLabel: "Request access to Synergi",
      successTitle: "Request received",
      successBody: "We will review your profile and get back to you within seven days.",
    },
  },
  dataLab: {
    ...siteCopyEs.dataLab,
    title: "Territorial signals for reading the premium market with more calm and less reaction.",
    intro:
      "We are not presenting dashboards. We are presenting cues that help frame asset quality, demand pressure and premium-buyer sensitivity.",
    lead: {
      eyebrow: "Signal 01",
      title: "A shortage of well-positioned prime product favors more selective and less reactive decisions.",
      body:
        "In Palma and the southwest, limited supply, persistent international demand and rising sensitivity to turnkey product reinforce the value of assets that are well prepared and well narrated.",
    },
    signals: [
      {
        eyebrow: "Signal 02",
        title: "Micro-location matters more than the municipality's broad label.",
        body: "Andratx, Portals Nous and Son Vida each generate distinct buyer profiles, absorption rates and price ranges. Operating without this reading means losing positioning before the conversation even starts.",
      },
      {
        eyebrow: "Signal 03",
        title: "Asset preparation shapes both the speed and quality of the transaction.",
        body: "Assets with complete documentation, a clear commercial narrative and careful presentation reduce exposure time and improve the selectivity of the conversations they generate.",
      },
    ],
    whitelist: {
      eyebrow: "Selective access",
      title: "Join the early access list.",
      body: "Anclora Data Lab is in selective access mode for investors, family offices and institutional profiles. If your profile fits, we will notify you when we open the next access block.",
      form: {
        name: "Name",
        email: "Email",
        intendedUse: "Why are you interested in the Data Lab?",
        placeholders: {
          name: "Your name or company",
          email: "name@domain.com",
          intendedUse: "Briefly describe your interest and investor profile (min. 20 characters).",
        },
        privacyLabel: "I have read and accept the privacy policy.",
        submitLabel: "Request early access",
        successTitle: "On the waiting list",
        successBody: "We will notify you when we open the next access block for your profile.",
      },
    },
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Contact",
    title: "Let us open a private conversation.",
    body:
      "If you are considering selling, investing or exploring a property opportunity in Palma or Southwest Mallorca, we can review your case with judgment, confidentiality and a premium mindset.",
    responseNote: "Conversations are handled selectively and with direct personal follow-up.",
    trustBadgeText: "International backing and operational trust through eXp Group Spain.",
    detailsTitle: "Contact details",
    details: [
      { label: "Email", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" },
      { label: "Phone", value: "+34 633 947 810", href: "tel:+34633947810" },
      { label: "Location", value: "Palma de Mallorca · Balearic Islands" },
    ],
  },
  finalCta: {
    ...siteCopyEs.finalCta,
    title: "The next step is not more noise. It is the right conversation.",
    body:
      "Palma and Southwest Mallorca require territorial judgment, confidentiality and sharper commercial execution. If you are considering selling, buying or exploring a property opportunity, we can review your case privately.",
    primaryCta: "Start private assessment",
    secondaryCta: "Open private conversation",
  },
  footer: {
    ...siteCopyEs.footer,
    summary:
      "Premium real estate signature focused on Palma and Southwest Mallorca, with territorial judgment, selective access and sharper commercial execution.",
    columns: [
      {
        title: "Contact",
        links: [
          { label: "Open private conversation", href: "#contacto" },
        ],
      },
      {
        title: "Selective access",
        links: [
          { label: "Mallorca", href: "#mallorca-focus" },
          { label: "Investors", href: "#inversores" },
          { label: "Clients", href: "#clientes" },
          { label: "Partners", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Legal notice", href: "/legal" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Group. All rights reserved.",
  },
  cookies: {
    title: "Cookie Preferences",
    description: "This site uses cookies to provide you with a better user experience. You can manage your preferences at any time.",
    acceptAll: "Accept All",
    settings: "Settings",
    settingsTitle: "Manage Cookies",
    necessary: {
      title: "Necessary Cookies",
      description: "These cookies are essential for the site to function and cannot be deactivated.",
    },
    analytics: {
      title: "Analytics Cookies",
      description: "They help us understand how visitors interact with the site.",
    },
    marketing: {
      title: "Marketing Cookies",
      description: "Used to display relevant ads to visitors.",
    },
    savePreferences: "Save Preferences",
    back: "Back",
    rejectAll: "Reject Optional",
  },
  scroll: {
    up: "Up",
    down: "Down",
  },
  social: {
    followUs: "FOLLOW US",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "What owners, buyers and investors ask us.",
    items: [
      {
        question: "What exactly is an off-market or discreet sale?",
        answer: "An off-market sale is one in which the property is not listed on mass-market portals. It is handled confidentially with a select group of qualified buyers, preserving the seller's privacy, avoiding market fatigue and maintaining the asset's negotiating strength.",
      },
      {
        question: "How long does a private sale in Mallorca normally take?",
        answer: "It depends on the asset, the micro-location and the asking price. A well-executed transaction can close in 3 to 12 months. We prioritise the right price and the right buyer over speed. A well-prepared, well-narrated asset attracts higher-quality conversations.",
      },
      {
        question: "How do I access off-market properties in Mallorca?",
        answer: "Through our qualified buyer list. We work with profiles that have been pre-screened and have real decision-making capacity. If your profile fits, you can access assets that are not listed on any portal.",
      },
      {
        question: "What return can I expect as an investor in southwest Mallorca?",
        answer: "Returns vary by asset type, micro-location and strategy (holiday rental, long-term capital gain or a mix). In prime zones such as Son Vida or Portals, the market shows price resilience and sustained international demand. We evaluate each case with up-to-date micro-location data.",
      },
      {
        question: "Which areas of Mallorca do you cover?",
        answer: "We operate mainly in Palma, Andratx, Calvià, Son Vida, Portals Nous, Bendinat, Deià and Valldemossa. We evaluate assets in other locations on a case-by-case basis.",
      },
    ],
  },
  afterContact: {
    eyebrow: "What happens next",
    title: "A process without empty promises.",
    intro: "When you send a request, here is what happens in the following days:",
    steps: [
      {
        number: "01",
        title: "Initial review",
        description: "We study your request with judgment: intent, asset type and fit with what we manage.",
      },
      {
        number: "02",
        title: "Private reading",
        description: "If there is a genuine fit, we arrange a call or meeting to understand the situation with no pressure or commitment.",
      },
      {
        number: "03",
        title: "Next-step proposal",
        description: "Depending on the case, we propose a valuation, a rental plan or a qualified buyer access strategy.",
      },
      {
        number: "04",
        title: "Honest pass",
        description: "If there is no fit, we say so clearly. We prefer honesty to taking up your time with a process that has no future.",
      },
    ],
  },
  trustBadgeText: "International backing and operational trust through eXp Group Spain.",
  contactFloatingLabel: "CONTACT US",
};

const siteCopyDe: SiteCopy = {
  ...siteCopyEs,
  seo: {
    title: "Anclora Private Estates | Diskreter Verkauf auf Mallorca",
    description:
      "Verkaufen Sie Ihre Finca oder Villa in Andratx, Calvià oder Son Vida diskret, mit selektivem Zugang zu qualifizierten Käufern und ohne unnötige öffentliche Sichtbarkeit.",
    ogTitle: "Anclora Private Estates | Diskreter Verkauf auf Mallorca",
    ogDescription: "Selektiver Zugang zu qualifizierten Käufern für Eigentümer in Palma und Südwest-Mallorca.",
    schemaDescription:
      "Selektiver Zugang zu qualifizierten Käufern für Eigentümer, die einen diskreten Verkauf in Südwest-Mallorca prüfen.",
    serviceType: "Premium- und Off-Market-Immobilienberatung",
  },
  mediaAlt: {
    mallorcaFocusImage: "Mallorquinische Küste mit türkisfarbenem Wasser und Boot in einer privaten Bucht",
    investorImage: "Premium-Terrasse mit Pool und Meerblick auf Mallorca",
    finalCtaImage: "Premium-Villa auf Mallorca mit zum Garten geöffnetem Wohnbereich",
  },
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Hauptnavigation",
    menuOpenLabel: "Menü öffnen",
    menuCloseLabel: "Menü schließen",
    menuDialogLabel: "Navigationsmenü",
    homeAriaLabel: "Anclora Private Estates — Startseite",
    logoAlt: "Anclora Private Estates by eXp Group Spain",
    links: [
      { label: "Glaubwürdigkeit", href: "#credibilidad" },
      { label: "Arbeitsweise", href: "#como-trabajamos" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Ferienvermietung", href: "#alquiler-vacacional" },
      { label: "Investoren", href: "#inversores" },
      { label: "Kunden", href: "#clientes" },
      { label: "FAQ", href: "#faq" },
      { label: "Partner", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Redaktion", href: "#editorial" },
      { label: "Kontakt", href: "#contacto" },
    ],
    ctaLabel: "Bewertung anfragen",
    languageSwitcher: {
      groupLabel: "Sprachauswahl",
      preferencesLabel: "Globale Einstellungen",
      preferencesDialogLabel: "Globale Präferenzeinstellungen",
      eyebrow: "Präferenzen",
      title: "Sprache",
      languageLabel: "Sprache",
      currencyLabel: "Währung",
      pendingLabel: "Ausstehend",
      closeLabel: "Sprachauswahl schließen",
      saveLabel: "Speichern und schließen",
      currency: {
        eur: "Euro - EUR €",
        usd: "US-Dollar - USD $",
        gbp: "Pfund Sterling - GBP £",
        chf: "Schweizer Franken - CHF",
        sek: "Schwedische Krone - SEK kr",
        dkk: "Dänische Krone - DKK kr",
        nok: "Norwegische Krone - NOK kr",
      },
      options: [
        { code: "es", label: "ES", ariaLabel: "Spanische Sprache" },
        { code: "ca", label: "CA", ariaLabel: "Katalanische Sprache" },
        { code: "de", label: "DE", ariaLabel: "Deutsche Sprache" },
        { code: "en", label: "EN", ariaLabel: "Englische Sprache" },
        { code: "sv", label: "SV", ariaLabel: "Schwedische Sprache" },
        { code: "fr", label: "FR", ariaLabel: "Französische Sprache" },
        { code: "it", label: "IT", ariaLabel: "Italienische Sprache" },
        { code: "da", label: "DA", ariaLabel: "Dänische Sprache" },
        { code: "nl", label: "NL", ariaLabel: "Niederländische Sprache" },
        { code: "no", label: "NO", ariaLabel: "Norwegische Sprache" },
        { code: "pt", label: "PT", ariaLabel: "Portugiesische Sprache" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Südwest-Mallorca · Premium-Kapital",
    title: "Diskreter Verkauf und Premium-Rentabilisierung einzigartiger Assets auf Mallorca.",
    description:
      "Wir bereiten, positionieren und verwalten Villen, Fincas und einzigartige Objekte für Eigentümer, die keine Massenexposition möchten. Diskretion, Kontrolle und Zugang zu qualifizierten Käufern.",
    chips: [],
    note:
      "Wir gestalten diese Präsenz nicht, um groß zu wirken. Wir gestalten sie, um Urteilskraft, operative Ruhe und einen anspruchsvolleren Umgang mit dem Asset zu vermitteln.",
    primaryCta: "Private Bewertung anfragen",
    secondaryCta: "Premium-Ferienvermietung erkunden",
    scrollLabel: "Weiter",
    scrollText: "Entdecken",
    media: {
      eyebrow: "Private Vorschau",
      title:
        "Palma, Son Vida, Portals, Bendinat und jene Mikrolagen, in denen die richtige Erzählung den wahrgenommenen Wert neu ordnet.",
      methodEyebrow: "Methode",
      method:
        "Die Transaktion beginnt vor dem Portal: Vorbereitung, Erzählung, Zugang und Timing im Einklang mit dem richtigen Käufertyp.",
      statValue: "01",
      statCopy:
        "Jede sichtbare Entscheidung auf der Landing folgt demselben Prinzip: weniger Rauschen, mehr Kontrolle und besserer Kontext für Premium-Assets.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Glaubwürdigkeit",
    title: "Entdecken Sie ein Premium-Angebot, das auf authentische Weise Vertrauen schafft.",
    intro:
      "Autorität wird hier nicht durch lautere Versprechen ausgedrückt, sondern durch Struktur, Rückendeckung und eine reifere Marktlesart.",
    pillars: [
      "Unabhängiger Makler mit Rückendeckung durch eXp Group Spain.",
      "Mehr als 25 Jahre Technologieerfahrung angewendet auf eine besser strukturierte Immobilienoperativ.",
      "Territoriale Intelligenz, optimierte Prozesse und ein selektives Netzwerk als echter Unterschied zur traditionellen Agentur.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Globales Netzwerk mit +80.000 aktiven Maklern" },
      { text: "Mallorca Premium", detail: "Exklusive Ausrichtung auf Südwest-Mallorca" },
      { text: "Internationaler Käuferzugang", detail: "Qualifizierte Profile aus +40 Ländern" },
    ],
  },
  howWeWork: {
    eyebrow: "Prozess · So arbeiten wir",
    title: "Vier Schritte für eine Operation mit Urteilsvermögen und Diskretion.",
    steps: [
      { number: "01", title: "Private Bewertung", description: "Wir analysieren das Asset, die Mikrolage und das Profil des Eigentümers, bevor wir irgendwelche Maßnahmen vereinbaren." },
      { number: "02", title: "Territoriale Strategie", description: "Wir definieren die Wertgeschichte, die Positionierung und das geeignete Käuferprofil für das Asset." },
      { number: "03", title: "Qualifizierter Zugang", description: "Wir aktivieren den Zugang zu ausgewählten Käufern und Investoren ohne öffentliche Exposition des Assets." },
      { number: "04", title: "Begleitung bis zum Abschluss", description: "Wir begleiten jedes Gespräch bis zum Abschluss mit Urteilsvermögen, Vertraulichkeit und operativer Unterstützung." },
    ],
  },
  holidayRental: {
    eyebrow: "Premium-Ferienvermietung",
    title: "Rendite erzielen ohne Kontrollverlust über das Asset.",
    body: "Ferienvermietung kann für einzigartige Assets ein intelligenter Einkommenshebel sein. Eine gute Umsetzung erfordert jedoch Vorbereitung, Positionierungsurteil und eine operative Strategie, die den Assetwert und die Eigentümererfahrung bewahrt.",
    forWhomLabel: "Für wen es passt",
    forWhom: [
      "Villen- und Finca-Eigentümer mit Leerstandszeiten, die Einnahmen erzielen möchten, ohne die Privatsphäre zu verlieren.",
      "Eigentümer in Verkaufsvorbereitung, die in der Vorbereitungsphase Rendite erhalten möchten.",
      "Investoren, die Eigennutzung mit selektiver Ferienrendite kombinieren.",
    ],
    whatWeReviewLabel: "Was wir gemeinsam prüfen",
    whatWeReview: [
      "Reales Potenzial der Mikrolage und des Assettyps.",
      "Geeignetes Gästeprofil und Positionierungsstrategie.",
      "Operative und dokumentarische Struktur (SES.HOSPEDAJES, Verträge, Versicherung).",
      "Vereinbarkeit mit einer möglichen zukünftigen Verkaufsstrategie.",
    ],
    benefits: [
      "Private Bewertung des Vermietungspotenzials.",
      "Positionierung abgestimmt auf Hochsegment-Assets.",
      "Ausrichtung auf qualifizierte Gäste.",
      "Strukturiertere operative und dokumentarische Vorbereitung.",
      "Vereinbarkeit mit Eigennutzung und zukünftiger Verkaufsstrategie.",
    ],
    technologyNote: "Das Dokumentenmanagement kann durch Anclora SyncXML unterstützt werden, um Buchungsdaten für den SES.HOSPEDAJES-Ablauf zu strukturieren. Diese Schicht bietet Nachvollziehbarkeit und weniger dokumentarische Reibung; sie ersetzt weder die rechtliche Prüfung noch das Urteilsvermögen des Fachmanns.",
    primaryCta: "Vermietungspotenzial bewerten",
    secondaryCta: "Privates Gespräch öffnen",
    prudenceNote: "Die Ferienvermietung auf Mallorca unterliegt lokalen Vorschriften. Lizenzverfügbarkeit, Zoneneinteilung und Gemeinderegeln sind Faktoren, die wir in jedem Fall vor jeder Verpflichtung bewerten.",
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    title: "Mallorca lässt sich nicht als flache Liste von Zonen lesen, sondern als System aus Mikrolagen und Signalen.",
    intro:
      "Jeder Ort verlangt eine eigene kommerzielle Sprache. Dieselbe Ästhetik funktioniert nicht für Palma, Portals oder Valldemossa; ebenso wenig dieselbe Wert-Erzählung.",
    areasLabel: "Gebiete",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma und Hanglagen-Kern",
        title: "Städtisches Zentrum, erhöhte Wohnlagen und institutioneller Zugang.",
        body:
          "Palma, Son Vida, Cala Major, San Agustin and Cas Catala vereinen eine sehr spezifische Mischung aus lokalem Kapital, internationaler Nachfrage und Objekten, bei denen urbane Erzählung und Privatsphäre ebenso wichtig sind wie die Lage.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustin", "Cas Catala"],
        audienceLabel: "Zielgruppe",
        audience:
          "Kapitalerhalt-orientierter Käufer, der Kapital, Schulen, Services und den Alltag priorisiert.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[1],
        eyebrow: "Premiumküste von Calvià",
        title: "Etablierte Küste mit Lifestyle- und Liquiditätsfokus.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes und Punta Negra funktionieren als System, in dem Meer, Marina, Privatsphäre und Premium-Services zu zentralen Wertsignalen werden.",
        audienceLabel: "Zielgruppe",
        audience:
          "Internationaler Käufer und Family Office mit Fokus auf Prime Coast and Beziehungskontinuität.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[2],
        eyebrow: "Lifestyle im Südwesten und Kapitalerhalt",
        title: "Premium-Einstieg mit Lifestyle, Rendite und Timing.",
        body:
          "Palmanova, Paguera und Costa de la Calma bilden ein flexibleres Segment des Premium-Marktes, in dem Lifestyle, Einstiegspreis und Transaktionsgeschwindigkeit eine fein austarierte Mikrolagen-Lesart brauchen.",
        audienceLabel: "Zielgruppe",
        audience:
          "Hybrider Investor, der ein Gleichgewicht zwischen Eigennutzung, Nachfrage und Kapitalerhalt sucht.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Erbe und Serra-Charakter",
        title: "Innenland mit Charakter, Landschaft und Wohnsingularität.",
        body:
          "Puerto de Andratx, Andratx, Esporles und Valldemossa bilden einen cluster, in dem sich die Lesartändert: Erbe, Landschaft, Privatsphäre und Wohnnarrativ wiegen mehr als die reine Nähe zur Küste.",
        audienceLabel: "Zielgruppe",
        audience:
          "Beziehungsorientierter UHNW-Käufer, der Singularität, Ruhe und Objekte mit dauerhafter Geschichte schätzt.",
      },
    ],
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investoren",
    title: "Nationales und internationales Kapital, das weniger Schaufenster und mehr Kontextverständnis braucht.",
    intro:
      "Der Premium-Investor sucht nicht einfach Bestand, sondern eine verlässliche Interpretation von Zugang, Timing, Werterhalt und Beziehungskontinuität.",
    asideQuote:
      "Der Vorteil liegt nicht darin, mehr Bestand zu zeigen, sondern präziser zu verstehen, welcher Käufertyp und welches Tempo jedes Asset verlangt.",
    profiles: [
      {
        title: "Nationaler Vermögensinvestor",
        body:
          "Sucht solide Objekte, Werterhalt und territoriale Urteilskraft, um nicht von kommerziellem Lärm oder generischen Schauflächen abhängig zu sein.",
      },
      {
        title: "Internationaler Lifestyle-Investor",
        body:
          "Priorisiert Mikrolage, Privatsphäre, Marina, Schulen, Konnektivität und die Fähigkeit, in einem grenzüberschreitenden Premium-Umfeld sicher zu handeln.",
      },
      {
        title: "Beziehungsorientierter UHNW-Käufer",
        body:
          "Steigt nicht über einen Katalog ein, sondern über Vertrauen, Zugang, Timing und die Fähigkeit, das richtige Netzwerk um eine singuläre Transaktion zu aktivieren.",
      },
    ],
  },
  sellerIntake: {
    ...siteCopyEs.sellerIntake,
    eyebrow: "Kunden",
    title: "Selektive Beratung für Eigentümer, Käufer und Investoren.",
    body:
      "Wir prüfen jede Anfrage entsprechend ihrer Absicht: Verkauf, Kauf, Bewertung oder Investition. Ein erstklassiger und vertraulicher Ansatz für einzigartige Vermögenswerte in Palma und im Südwesten Mallorcas.",
    checklistLabel: "Private Bewertungskriterien",
    checklist: ["Mikrolage und reale Wettbewerbsanalyse", "Positionierungsnarrativ", "Qualifiziertes Timing und Zugang"],
    trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
    form: {
      ...siteCopyEs.sellerIntake.form,
      intentLabel: "Wie können wir Ihnen helfen?",
      intentOptions: [
        { value: "sell", label: "Ich möchte eine Immobilie verkaufen" },
        { value: "valuation", label: "Ich möchte eine private Bewertung" },
        { value: "buy", label: "Ich möchte eine Premium-Immobilie kaufen" },
        { value: "invest", label: "Ich suche nach Investitionsmöglichkeiten" },
        { value: "holiday_rental", label: "Ich möchte meine Immobilie als Ferienunterkunft vermieten" },
      ],
      holidayRentalObjective: "Vermietungsziel",
      holidayRentalAvailability: "Erwartete Verfügbarkeit",
      holidayRentalObjectiveOptions: ["Maximale Rendite", "Gemischte Nutzung (Eigennutzung + Vermietung)", "Full-Service-Verwaltung"],
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      zone: "Objektlage",
      propertyType: "Objekttyp",
      commercialization: "Vermarktungspräferenz",
      address: "Objektadresse",
      budget: "Ungefähres Budget",
      timing: "Voraussichtlicher Zeitrahmen",
      ticket: "Investitionsvolumen",
      goal: "Investitionsziel",
      message: "Nachricht",
      placeholders: {
        name: "Ihr Name",
        email: "name@domain.de",
        phone: "+49 ...",
        zone: "Son Vida, Portals, Andratx...",
        address: "Straße, Lage oder Katasterreferenz",
        budget: "z.B. 1M - 3M €",
        timing: "z.B. Sofort, 6 Monate...",
        ticket: "z.B. 500k+, 2M+...",
        goal: "z.B. Vermögensaufbau, Rendite...",
        message: "Teilen Sie uns weitere Details zu Ihrer Anfrage mit.",
      },
      selectPlaceholder: "Option auswählen",
      submitLabel: "Private Anfrage senden",
    },
  },
  valuation: {
    ...siteCopyEs.valuation,
    eyebrow: "Bewertung anfragen",
    title: "Was ist Ihre Mallorca-Immobilie wert?",
    body: "Wenn Sie eine Immobilie in Palma oder im Südwesten Mallorcas besitzen und ihren realen Marktwert kennen möchten, erstellen wir eine vertrauliche und unverbindliche Bewertung.",
    checklistLabel: "Die Bewertung umfasst",
    checklist: [
      "Mikrolage und reale Wettbewerbsanalyse",
      "Markt-Timing-Analyse",
      "Bewertung ausgerichtet auf den richtigen Käufertyp",
    ],
    form: {
      ...siteCopyEs.valuation.form,
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      address: "Objektadresse",
      message: "Nachricht (optional)",
      placeholders: {
        name: "Ihr Name",
        email: "name@domain.de",
        phone: "+49 ...",
        address: "Straße, Lage oder Katasterreferenz",
        message: "Teilen Sie relevante Details mit.",
      },
      privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
      submitLabel: "Vertrauliche Bewertung anfragen",
      successTitle: "Anfrage erhalten",
      successBody: "Wir melden uns innerhalb von zwei Werktagen mit einer privaten Bewertung.",
      captchaError: "Bitte schließen Sie die Sicherheitsüberprüfung ab.",
    },
  },
  partners: {
    ...siteCopyEs.partners,
    eyebrow: "Synergi · Partnernetzwerk",
    title: "Ein selektives Netzwerk für Kooperationspartner, die den Premium-Markt verstehen.",
    body: "Anclora Synergi ist das private Portal für bereits validierte Partner: unabhängige Makler, Fachleute aus der Branche und Kooperationspartner mit territorialer Urteilskraft. Der Zugang ist kuriert, nicht massenmarktorientiert.",
    features: [
      "Zugang zu selektiv geteilten Gelegenheiten",
      "Zusammenarbeit mit Fokus auf Mikrolage und Asset-Qualität",
      "Kurierter Aufnahmeprozess ohne kommerzielle Reibung",
    ],
    form: {
      ...siteCopyEs.partners.form,
      name: "Name",
      email: "E-Mail",
      serviceCategory: "Servicekategorie",
      serviceSummary: "Beschreiben Sie Ihr Profil und Ihre Arbeitsweise",
      placeholders: {
        name: "Ihr Name oder Unternehmen",
        email: "name@domain.de",
        serviceSummary: "Beschreiben Sie Ihr Profil, Ihre Spezialisierung und wie Sie mit Anclora zusammenarbeiten könnten (min. 20 Zeichen).",
      },
      selectPlaceholder: "Kategorie auswählen",
      serviceCategoryOptions: [
        { value: "real_estate", label: "Immobilien" },
        { value: "professional", label: "Fachleute / Recht / Finanzen" },
        { value: "luxury", label: "Lifestyle & Luxus" },
        { value: "eco", label: "Nachhaltigkeit" },
        { value: "other", label: "Sonstiges" },
      ],
      privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
      submitLabel: "Zugang zu Synergi anfragen",
      successTitle: "Anfrage erhalten",
      successBody: "Wir prüfen Ihr Profil und melden uns innerhalb von sieben Tagen.",
    },
  },
  dataLab: {
    ...siteCopyEs.dataLab,
    title: "Territoriale Signale für eine ruhigere und weniger reaktive Lesart des Premium-Marktes.",
    intro:
      "Wir zeigen keine Dashboards. Wir zeigen Hinweise, die helfen, Objektqualität, Nachfragedruck und Sensibilität des Premium-Käufers einzuordnen.",
    lead: {
      eyebrow: "Signal 01",
      title:
        "Die Knappheit gut positionierter Prime-Objekte begünstigt selektivere und weniger reaktive Entscheidungen.",
      body:
        "In Palma und im Südwesten verstärken begrenztes Angebot, anhaltende internationale Nachfrage und die wachsende Sensibilität für Turnkey-Objekte den Wert gut vorbereiteter und gut erzählter Assets.",
    },
    signals: [
      {
        eyebrow: "Signal 02",
        title: "Die Mikrolage ist wichtiger als das grobe Etikett der Gemeinde.",
        body: "Andratx, Portals Nous und Son Vida generieren jeweils eigene Käuferprofile, Absorptionsraten und Preisspannen. Ohne diese Lesart verliert man Positionierung, bevor das Gespräch beginnt.",
      },
      {
        eyebrow: "Signal 03",
        title: "Die Vorbereitung des Objekts prägt Geschwindigkeit und Qualität der Transaktion.",
        body: "Objekte mit vollständiger Dokumentation, klarer Vermarktungsnarrative und sorgfältiger Präsentation reduzieren die Expositionszeit und verbessern die Selektivität der geführten Gespräche.",
      },
    ],
    whitelist: {
      eyebrow: "Selektiver Zugang",
      title: "Treten Sie der Early-Access-Liste bei.",
      body: "Anclora Data Lab befindet sich in der Phase des selektiven Zugangs für Investoren, Family Offices und institutionelle Profile. Wenn Ihr Profil passt, benachrichtigen wir Sie, wenn wir den nächsten Zugangsbock öffnen.",
      form: {
        name: "Name",
        email: "E-Mail",
        intendedUse: "Warum interessieren Sie sich für das Data Lab?",
        placeholders: {
          name: "Ihr Name oder Unternehmen",
          email: "name@domain.de",
          intendedUse: "Beschreiben Sie kurz Ihr Interesse und Ihr Investorenprofil (min. 20 Zeichen).",
        },
        privacyLabel: "Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.",
        submitLabel: "Frühzeitigen Zugang anfragen",
        successTitle: "Auf der Warteliste",
        successBody: "Wir benachrichtigen Sie, wenn wir den nächsten Zugangsbock für Ihr Profil öffnen.",
      },
    },
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Kontakt",
    title: "Lassen Sie uns ein privates Gespräch öffnen.",
    body:
      "Wenn du einen Verkauf, eine Investition oder eine Immobilienchance in Palma oder im Südwesten Mallorcas prüfst, können wir deinen Fall mit Urteilskraft, Vertraulichkeit und Premium-Mentalität analysieren.",
    responseNote: "Gespräche werden selektiv und mit persönlicher Rückmeldung geführt.",
    trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
    detailsTitle: "Kontaktdaten",
    details: [
      { label: "E-Mail", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" },
      { label: "Telefon", value: "+34 633 947 810", href: "tel:+34633947810" },
      { label: "Standort", value: "Palma de Mallorca · Balearen" },
    ],
  },
  finalCta: {
    ...siteCopyEs.finalCta,
    eyebrow: "Privates Gespräch",
    title: "Der nächste Schritt ist nicht mehr Rauschen. Es ist das richtige Gespräch.",
    body:
      "Palma und der Südwesten Mallorcas erfordern territoriale Urteilskraft, Vertraulichkeit und präzisere kommerzielle Umsetzung. Wenn du einen Verkauf, einen Kauf oder eine Immobilienchance prüfst, können wir deinen Fall privat analysieren.",
    primaryCta: "Private Bewertung starten",
    secondaryCta: "Privates Gespräch öffnen",
  },
  footer: {
    ...siteCopyEs.footer,
    summary:
      "Premium-Immobiliensignatur mit Fokus auf Palma und den Südwesten Mallorcas, territorialer Urteilskraft, selektivem Zugang und präziserer kommerzieller Umsetzung.",
    columns: [
      {
        title: "Kontakt",
        links: [
          { label: "Privates Gespräch öffnen", href: "#contacto" },
        ],
      },
      {
        title: "Selektiver Zugang",
        links: [
          { label: "Mallorca", href: "#mallorca-focus" },
          { label: "Investoren", href: "#inversores" },
          { label: "Kunden", href: "#clientes" },
          { label: "Partner", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Datenschutz", href: "/privacy" },
          { label: "Nutzungsbedingungen", href: "/terms" },
          { label: "Impressum", href: "/legal" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Group. Alle Rechte vorbehalten.",
  },
  cookies: {
    title: "Cookie-Einstellungen",
    description: "Diese Website verwendet Cookies, um Ihnen ein besseres Nutzererlebnis zu bieten. Sie können Ihre Einstellungen jederzeit verwalten.",
    acceptAll: "Alle akzeptieren",
    settings: "Einstellungen",
    settingsTitle: "Cookies verwalten",
    necessary: {
      title: "Notwendige Cookies",
      description: "Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.",
    },
    analytics: {
      title: "Analyse-Cookies",
      description: "Sie helfen uns zu verstehen, wie Besucher mit der Website interagieren.",
    },
    marketing: {
      title: "Marketing-Cookies",
      description: "Wird verwendet, um Besuchern relevante Anzeigen anzuzeigen.",
    },
    savePreferences: "Einstellungen speichern",
    back: "Zurück",
    rejectAll: "Optionale ablehnen",
  },
  scroll: {
    up: "Hoch",
    down: "Runter",
  },
  social: {
    followUs: "FOLGEN SIE UNS",
  },
  faq: {
    eyebrow: "Häufig gestellte Fragen",
    title: "Was Eigentümer, Käufer und Investoren uns fragen.",
    items: [
      {
        question: "Was genau ist ein Off-Market- oder diskreter Verkauf?",
        answer: "Ein Off-Market-Verkauf ist einer, bei dem das Objekt nicht auf massentauglichen Immobilienportalen veröffentlicht wird. Es wird vertraulich mit einer ausgewählten Gruppe qualifizierter Käufer gearbeitet, die Privatsphäre des Verkäufers gewahrt und die Verhandlungsposition des Assets erhalten.",
      },
      {
        question: "Wie lange dauert ein privater Verkauf auf Mallorca in der Regel?",
        answer: "Das hängt vom Objekt, der Mikrolage und dem Angebotspreis ab. Eine gut durchgeführte Transaktion kann innerhalb von 3 bis 12 Monaten abgeschlossen werden. Wir priorisieren den richtigen Preis und den richtigen Käufer vor der Geschwindigkeit.",
      },
      {
        question: "Wie erhalte ich Zugang zu nicht veröffentlichten Immobilien auf Mallorca?",
        answer: "Über unsere Liste qualifizierter Käufer. Wir arbeiten mit Profilen, die vorab geprüft wurden und über echte Entscheidungskapazität verfügen. Wenn Ihr Profil passt, können Sie Assets einsehen, die auf keinem Portal gelistet sind.",
      },
      {
        question: "Welche Rendite kann ich als Investor in Südwest-Mallorca erwarten?",
        answer: "Die Rendite variiert je nach Assettyp, Mikrolage und Strategie. In Premiumzonen wie Son Vida oder Portals zeigt der Markt Preisresistenz und anhaltende internationale Nachfrage. Wir evaluieren jeden Fall mit aktuellen Mikrolage-Daten.",
      },
      {
        question: "In welchen Gebieten Mallorcas sind Sie tätig?",
        answer: "Wir sind hauptsächlich in Palma, Andratx, Calvià, Son Vida, Portals Nous, Bendinat, Deià und Valldemossa tätig. Wir evaluieren Objekte in anderen Lagen nach Einzelfallbewertung.",
      },
    ],
  },
  afterContact: {
    eyebrow: "Was danach passiert",
    title: "Ein Prozess ohne leere Versprechen.",
    intro: "Wenn Sie eine Anfrage senden, passiert in den folgenden Tagen Folgendes:",
    steps: [
      {
        number: "01",
        title: "Erste Überprüfung",
        description: "Wir prüfen Ihre Anfrage mit Urteilskraft: Absicht, Assettyp und Passung mit dem, was wir verwalten.",
      },
      {
        number: "02",
        title: "Private Einschätzung",
        description: "Wenn es eine echte Passung gibt, organisieren wir einen Anruf oder ein Treffen, um die Situation ohne Druck oder Verpflichtung zu verstehen.",
      },
      {
        number: "03",
        title: "Nächster Schritt",
        description: "Je nach Fall schlagen wir eine Bewertung, einen Mietplan oder eine Strategie für den Zugang zu qualifizierten Käufern vor.",
      },
      {
        number: "04",
        title: "Ehrliche Absage",
        description: "Wenn es keine Passung gibt, sagen wir das klar. Wir bevorzugen Ehrlichkeit gegenüber dem Verschwenden Ihrer Zeit.",
      },
    ],
  },
  trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
  contactFloatingLabel: "KONTAKT",
};

const siteCopyFr: SiteCopy = {
  ...siteCopyEs,
  seo: {
    title: "Anclora Private Estates | Vente discrète à Majorque",
    description:
      "Vendez une finca ou une villa à Andratx, Calvià ou Son Vida avec discrétion, accès sélectif à des acheteurs qualifiés et sans exposition publique inutile.",
    ogTitle: "Anclora Private Estates | Vente discrète à Majorque",
    ogDescription: "Accès sélectif à des acheteurs qualifiés pour les propriétaires à Palma et dans le sud-ouest de Majorque.",
    schemaDescription:
      "Accès sélectif à des acheteurs qualifiés pour les propriétaires qui envisagent une vente discrète dans le sud-ouest de Majorque.",
    serviceType: "Conseil immobilier premium et off-market",
  },
  mediaAlt: {
    mallorcaFocusImage: "Côte de Majorque aux eaux turquoise avec une embarcation dans une crique privée",
    investorImage: "Terrasse premium avec piscine et vue sur la mer à Majorque",
    finalCtaImage: "Villa premium à Majorque avec intérieur ouvert sur le jardin",
  },
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Navigation principale",
    menuOpenLabel: "Ouvrir le menu",
    menuCloseLabel: "Fermer le menu",
    menuDialogLabel: "Menu de navigation",
    homeAriaLabel: "Anclora Private Estates — Accueil",
    logoAlt: "Anclora Private Estates by eXp Group Spain",
    links: [
      { label: "Crédibilité", href: "#credibilidad" },
      { label: "Notre approche", href: "#como-trabajamos" },
      { label: "Majorque", href: "#mallorca-focus" },
      { label: "Location saisonnière", href: "#alquiler-vacacional" },
      { label: "Investisseurs", href: "#inversores" },
      { label: "Propriétaires", href: "#clientes" },
      { label: "FAQ", href: "#faq" },
      { label: "Partenaires", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Éditorial", href: "#editorial" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Demander une évaluation",
    languageSwitcher: {
      groupLabel: "Sélecteur de langue",
      preferencesLabel: "Préférences globales",
      preferencesDialogLabel: "Réglages des préférences globales",
      eyebrow: "Préférences",
      title: "Langue",
      languageLabel: "Langue",
      currencyLabel: "Devise",
      pendingLabel: "À localiser",
      closeLabel: "Fermer le sélecteur de langue",
      saveLabel: "Enregistrer et fermer",
      currency: {
        eur: "Euro - EUR €",
        usd: "Dollar américain - USD $",
        gbp: "Livre sterling - GBP £",
        chf: "Franc suisse - CHF",
        sek: "Couronne suédoise - SEK kr",
        dkk: "Couronne danoise - DKK kr",
        nok: "Couronne norvégienne - NOK kr",
      },
      options: [
        { code: "es", label: "ES", ariaLabel: "Langue espagnole" },
        { code: "ca", label: "CA", ariaLabel: "Langue catalane" },
        { code: "de", label: "DE", ariaLabel: "Langue allemande" },
        { code: "en", label: "EN", ariaLabel: "Langue anglaise" },
        { code: "fr", label: "FR", ariaLabel: "Langue française" },
        { code: "sv", label: "SV", ariaLabel: "Langue suédoise" },
        { code: "it", label: "IT", ariaLabel: "Langue italienne" },
        { code: "da", label: "DA", ariaLabel: "Langue danoise" },
        { code: "nl", label: "NL", ariaLabel: "Langue néerlandaise" },
        { code: "no", label: "NO", ariaLabel: "Langue norvégienne" },
        { code: "pt", label: "PT", ariaLabel: "Langue portugaise" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Sud-Ouest de Majorque · Capital premium",
    title: "Vente discrète et rentabilisation premium d'actifs singuliers à Majorque.",
    description:
      "Nous préparons, positionnons et gérons des villas, fincas et actifs uniques pour des propriétaires qui ne souhaitent pas d'exposition massive. Discrétion, contrôle et accès à des acheteurs qualifiés.",
    chips: [],
    note:
      "Nous ne construisons pas cette présence pour paraître plus grands. Nous la construisons pour transmettre du discernement, du silence opérationnel y une relation plus sophistiquée avec l'actif.",
    primaryCta: "Demander une évaluation privée",
    secondaryCta: "Explorer la location saisonnière premium",
    scrollLabel: "Continuer",
    scrollText: "Découvrir",
    media: {
      eyebrow: "Aperçu privé",
      title:
        "Palma, Son Vida, Portals, Bendinat et les micro-zones où le bon récit réordonne la valeur perçue.",
      methodEyebrow: "Méthode",
      method:
        "La transaction commence avant le portail : préparation, narration, accès et timing alignés avec le bon type d'acquéreur.",
      statValue: "01",
      statCopy:
        "Chaque décision visible ici traduit le même principe : moins de bruit, plus de contrôle et un meilleur contexte pour les actifs premium.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Crédibilité",
    title: "Une proposition premium qui n'a pas besoin de simuler l'échelle pour inspirer confiance.",
    intro:
      "L'autorité ne s'exprime pas ici par des promesses plus bruyantes, mais par la structure, l'appui et une lecture plus mature du marché.",
    pillars: [
      "Agent indépendant soutenu par eXp Group Spain.",
      "Plus de 25 ans d'expérience technologique appliqués à une opération immobilière mieux structurée.",
      "Intelligence territoriale, processus optimisés et réseau sélectif comme avantage réel face à l'agence traditionnelle.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Réseau mondial de +80 000 agents actifs" },
      { text: "Majorque Premium", detail: "Spécialisation exclusive sur le sud-ouest de Majorque" },
      { text: "Accès acheteurs internationaux", detail: "Profils qualifiés de +40 pays" },
    ],
  },
  howWeWork: {
    eyebrow: "Processus · Comment nous travaillons",
    title: "Quatre étapes pour une opération conduite avec discernement et discrétion.",
    steps: [
      { number: "01", title: "Évaluation privée", description: "Nous analysons l'actif, la micro-localisation et le profil du propriétaire avant de convenir d'une quelconque action." },
      { number: "02", title: "Stratégie territoriale", description: "Nous définissons le récit de valeur, le positionnement et le profil d'acquéreur adapté à l'actif." },
      { number: "03", title: "Accès qualifié", description: "Nous activons l'accès à des acheteurs et investisseurs sélectionnés sans exposition publique de l'actif." },
      { number: "04", title: "Suivi et clôture", description: "Nous accompagnons chaque conversation jusqu'à la clôture avec discernement, confidentialité et soutien opérationnel." },
    ],
  },
  holidayRental: {
    eyebrow: "Location saisonnière premium",
    title: "Rentabiliser sans perdre le contrôle de l'actif.",
    body: "La location saisonnière peut être un levier de revenus intelligent pour les actifs singuliers. Mais bien la réaliser exige préparation, discernement de positionnement et une stratégie opérationnelle qui préserve la valeur de l'actif et l'expérience du propriétaire.",
    forWhomLabel: "Pour qui c'est adapté",
    forWhom: [
      "Propriétaires de villas ou fincas avec des périodes de non-occupation qui souhaitent générer des revenus sans perdre leur confidentialité.",
      "Propriétaires en phase de préparation à la vente qui souhaitent maintenir un rendement pendant cette période.",
      "Investisseurs qui combinent usage personnel et rendement locatif sélectif.",
    ],
    whatWeReviewLabel: "Ce que nous examinons ensemble",
    whatWeReview: [
      "Potentiel réel de la micro-localisation et du type d'actif.",
      "Profil d'hôtes approprié et stratégie de positionnement.",
      "Structure opérationnelle et documentaire (SES.HOSPEDAJES, contrats, couverture).",
      "Compatibilité avec une éventuelle stratégie de vente future.",
    ],
    benefits: [
      "Évaluation privée du potentiel locatif.",
      "Positionnement aligné sur les actifs haut de gamme.",
      "Acquisition orientée vers des hôtes qualifiés.",
      "Préparation opérationnelle et documentaire plus structurée.",
      "Compatibilité avec l'usage personnel et la stratégie de vente future.",
    ],
    technologyNote: "La gestion documentaire peut s'appuyer sur Anclora SyncXML pour structurer les données de réservation orientées vers le flux SES.HOSPEDAJES. Cette couche apporte traçabilité et moins de friction documentaire ; elle ne remplace pas l'examen juridique ni le jugement du professionnel.",
    primaryCta: "Évaluer le potentiel locatif premium",
    secondaryCta: "Ouvrir une conversation privée",
    prudenceNote: "La location saisonnière à Majorque est soumise à la réglementation locale. La disponibilité des licences, le zonage et les règles municipales sont des facteurs que nous évaluons dans chaque cas avant tout engagement.",
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    title: "Majorque ne se lit pas comme une liste plate de zones, mais como un système de micro-localisations et de signaux.",
    intro:
      "Chaque enclave exige un langage commercial distinct. La même esthétique ne convient pas à Palma, Portals ou Valldemossa ; pas plus que le même récit de valeur.",
    areasLabel: "Zones",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma et cœur des collines",
        title: "Centre capital, habitat élevé et accès institutionnel.",
        body:
          "Palma, Son Vida, Cala Major, San Agustín et Cas Català concentrent un mélange très particulier de capital local, de demande internationale et d'actifs où le récit urbain et la confidentialité comptent autant que l'emplacement.",
        audienceLabel: "Profil",
        audience:
          "Acheteur patrimonial qui priorise le capital, les écoles, les services et la logistique quotidienne.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[1],
        eyebrow: "Côte premium de Calvià",
        title: "Littoral établi avec une lecture lifestyle et liquidité.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes et Punta Negra fonctionnent comme un système où mer, marina, confidentialité et services premium deviennent des signaux clés de valeur.",
        audienceLabel: "Profil",
        audience:
          "Acheteur international et family office orientés côte prime et continuité relationnelle.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[2],
        eyebrow: "Lifestyle sud-ouest et préservation du capital",
        title: "Entrée premium avec lifestyle, rendement et timing.",
        body:
          "Palmanova, Paguera and Costa de la Calma permettent de lire un segment plus flexible du marché premium, où lifestyle, ticket d'entrée et vitesse commerciale nécessitent un regard fin par micro-zone.",
        audienceLabel: "Profil",
        audience:
          "Investisseur hybride cherchant un équilibre entre usage personnel, demande et conservation patrimoniale.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Patrimoine et caractère de la Serra",
        title: "Intérieur with caractère, paysage et singularité résidentielle.",
        body:
          "Puerto de Andratx, Andratx, Esporles et Valldemossa forment un cluster où la lecture change : patrimoine, paysage, confidentialité et récit résidentiel pèsent davantage que la simple proximité de la côte.",
        audienceLabel: "Profil",
        audience:
          "Acheteur UHNW relationnel qui valorise la singularité, le silence et les actifs à la narrativité durable.",
      },
    ],
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investisseurs",
    title: "Capital national et international qui a besoin de moins de vitrine et d'une meilleure lecture du contexte.",
    intro:
      "L'investisseur premium ne cherche pas seulement du stock ; il cherche une interprétation fiable de l'accès, du timing, de la préservation de valeur et de la continuité relationnelle.",
    asideQuote:
      "L'avantage ne consiste pas à montrer plus d'actifs, mais à comprendre avec plus de précision quel type d'acheteur et quel rythme chaque actif exige.",
    profiles: [
      {
        title: "Investisseur patrimonial national",
        body:
          "Recherche des actifs solides, une protection de la valeur et un discernement territorial pour ne pas dépendre du bruit commercial ni des vitrines génériques.",
      },
      {
        title: "Investisseur lifestyle international",
        body:
          "Priorise la micro-zone, la confidentialité, la marina, les écoles, la connectividad et la capacité d'exécuter avec confiance dans un environnement premium transfrontalier.",
      },
      {
        title: "Acheteur UHNW relationnel",
        body:
          "N'entre pas par un catalogue, mais par la confiance, l'accès, le timing et la capacité d'activer le bon réseau autour d'une opération singulière.",
      },
    ],
  },
  sellerIntake: {
    ...siteCopyEs.sellerIntake,
    eyebrow: "Propriétaires",
    title: "Sélection pour les actifs qui ont besoin de plus qu'une exposition de masse.",
    body:
      "Si vous envisagez une vente à Palma ou dans le sud-ouest de Majorque, nous pouvons étudier votre actif sous l'angle de la micro-zone, de la narration commerciale et du bon timing, with une approche premium et confidentielle.",
    checklistLabel: "L'évaluation privée considère",
    checklist: ["Micro-zone et concurrence réelle", "Narration de positionnement", "Timing commercial et accès"],
    trustBadgeText: "Soutien international et confiance opérationnelle via eXp Group Spain.",
    form: {
      intentLabel: "Comment pouvons-nous vous aider ?",
      intentOptions: [
        { value: "sell", label: "Je souhaite vendre un bien" },
        { value: "valuation", label: "Je souhaite une évaluation privée" },
        { value: "buy", label: "Je souhaite acheter un bien premium" },
        { value: "invest", label: "Je recherche des opportunités d'investissement" },
        { value: "holiday_rental", label: "Je souhaite valoriser mon bien en location saisonnière" },
      ],
      holidayRentalObjective: "Objectif locatif",
      holidayRentalAvailability: "Disponibilité prévue",
      holidayRentalObjectiveOptions: ["Rendement maximum", "Usage mixte (personnel + location)", "Gestion full-service"],
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone",
      zone: "Zone du bien",
      propertyType: "Type de bien",
      commercialization: "Préférence de commercialisation",
      address: "Adresse du bien",
      budget: "Budget approximatif",
      timing: "Délai prévu",
      ticket: "Ticket d'investissement",
      goal: "Objectif d'investissement",
      message: "Message",
      placeholders: {
        name: "Votre nom",
        email: "nom@domaine.fr",
        phone: "+33 ...",
        zone: "Son Vida, Portals, Andratx...",
        address: "Rue, zone ou référence cadastrale",
        budget: "ex: 1M - 3M €",
        timing: "ex: Immédiat, 6 mois...",
        ticket: "ex: 500k+, 2M+...",
        goal: "ex: Patrimoine, Rendement...",
        message: "Donnez-nous plus de détails sur votre demande.",
      },
      selectPlaceholder: "Sélectionner une option",
      propertyTypeOptions: ["Villa", "Penthouse", "Appartement premium", "Finca"],
      commercializationOptions: [
        "Évaluation confidentielle",
        "Vente en exclusivité",
        "Vente sélective sans portail de masse",
      ],
      budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"],
      timingOptions: ["Immédiat", "1-3 mois", "3-6 mois", "Juste exploration"],
      ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"],
      submitLabel: "Envoyer une demande privée",
    },
  },
  valuation: {
    ...siteCopyEs.valuation,
    eyebrow: "Demander une évaluation",
    title: "Quelle est la valeur de votre bien à Majorque ?",
    body: "Si vous possédez un bien à Palma ou dans le sud-ouest de Majorque et souhaitez connaître sa valeur réelle de marché, nous pouvons réaliser une évaluation confidentielle et sans engagement.",
    checklistLabel: "L'évaluation comprend",
    checklist: [
      "Analyse de micro-zone et concurrence réelle",
      "Lecture du timing de marché",
      "Évaluation orientée vers le bon profil d'acquéreur",
    ],
    form: {
      ...siteCopyEs.valuation.form,
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone",
      address: "Adresse du bien",
      message: "Message (optionnel)",
      placeholders: {
        name: "Votre nom",
        email: "nom@domaine.fr",
        phone: "+33 ...",
        address: "Rue, zone ou référence cadastrale",
        message: "Partagez tout détail pertinent.",
      },
      privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
      submitLabel: "Demander une évaluation confidentielle",
      successTitle: "Demande reçue",
      successBody: "Nous vous répondrons dans un délai de deux jours ouvrables avec une évaluation privée.",
      captchaError: "Veuillez compléter la vérification de sécurité.",
    },
  },
  partners: {
    ...siteCopyEs.partners,
    eyebrow: "Synergi · Réseau de partenaires",
    title: "Un réseau sélectif pour les collaborateurs qui comprennent le mercado premium.",
    body: "Anclora Synergi est le portail privé pour les partenaires déjà validés : agents indépendants, professionnels du secteur et collaborateurs avec un discernement territorial. L'accès est sélectionné, pas massif.",
    features: [
      "Accès à des opportunités partagées de façon sélective",
      "Collaboration axée sur la micro-zone et la qualité des actifs",
      "Processus d'admission sélectionné sans friction commerciale",
    ],
    form: {
      ...siteCopyEs.partners.form,
      name: "Nom",
      email: "E-mail",
      serviceCategory: "Type de service",
      serviceSummary: "Décrivez votre profil et votre façon de travailler",
      placeholders: {
        name: "Votre nom ou entreprise",
        email: "nom@domaine.fr",
        serviceSummary: "Décrivez votre profil professionnel, votre spécialité et comment vous pourriez collaborer avec Anclora (min. 20 caractères).",
      },
      selectPlaceholder: "Sélectionner une catégorie",
      serviceCategoryOptions: [
        { value: "real_estate", label: "Immobilier" },
        { value: "professional", label: "Professionnel / Juridique / Finance" },
        { value: "luxury", label: "Lifestyle & Luxe" },
        { value: "eco", label: "Développement durable" },
        { value: "other", label: "Autre" },
      ],
      privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
      submitLabel: "Demander l'accès à Synergi",
      successTitle: "Demande reçue",
      successBody: "Nous examinerons votre profil et vous répondrons dans un délai de sept jours.",
    },
  },
  dataLab: {
    ...siteCopyEs.dataLab,
    title: "Signaux territoriaux pour lire le mercado premium with plus de calme et moins de réaction.",
    intro:
      "Nous ne présentons pas de dashboards. Nous présentons des indices qui aident à cadrer la qualité de l'actif, la pression de la narration et la sensibilité de l'acheteur premium.",
    lead: {
      eyebrow: "Signal 01",
      title:
        "La rareté des produits prime bien positionnés favorise des décisions plus sélectives et moins réactives.",
      body:
        "À Palma et dans le sud-ouest, la combinaison d'une offre limitée, d'une demande internationale persistante et d'une sensibilité croissante aux produits clé en main renforce la valeur des actifs bien préparés et bien narrés.",
    },
    signals: [
      {
        eyebrow: "Signal 02",
        title: "La micro-localisation compte davantage que l'étiquette générale de la commune.",
        body: "Andratx, Portals Nous et Son Vida génèrent des profils d'acheteurs, des vitesses d'absorption et des fourchettes de prix distincts. Opérer sans cette lecture, c'est perdre le positionnement avant même d'engager la conversation.",
      },
      {
        eyebrow: "Signal 03",
        title: "La préparation de l'actif conditionne la vitesse et la qualité de l'opération.",
        body: "Les actifs dotés d'une documentation complète, d'un récit commercial clair et d'une présentation soignée réduisent le temps d'exposition et améliorent la sélectivité des conversations qu'ils génèrent.",
      },
    ],
    whitelist: {
      eyebrow: "Accès sélectif",
      title: "Rejoignez la liste d'accès anticipé.",
      body: "Anclora Data Lab est en phase d'accès sélectif pour les investisseurs, family offices et profils institutionnels. Si votre profil correspond, nous vous informerons à l'ouverture du prochain bloc d'accès.",
      form: {
        name: "Nom",
        email: "E-mail",
        intendedUse: "Pourquoi vous intéressez-vous au Data Lab ?",
        placeholders: {
          name: "Votre nom ou entreprise",
          email: "nom@domaine.fr",
          intendedUse: "Décrivez brièvement votre intérêt et votre profil d'investisseur (min. 20 caractères).",
        },
        privacyLabel: "J'ai lu et j'accepte la politique de confidentialité.",
        submitLabel: "Demander un accès anticipé",
        successTitle: "Sur la liste d'attente",
        successBody: "Nous vous informerons à l'ouverture du prochain bloc d'accès pour votre profil.",
      },
    },
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Contact",
    title: "Ouvrons une conversation privée.",
    body:
      "Si vous envisagez de vendre, d'investir ou d'explorer une opportunité patrimoniale à Palma ou dans le sud-ouest de Majorque, nous pouvons étudier votre dossier avec discernement, confidentialité et une approche premium.",
    responseNote: "Les conversations sont traitées de manière sélective avec un retour personnel.",
    trustBadgeText: "Soutien international et confiance opérationnelle via eXp Group Spain.",
    detailsTitle: "Coordonnées",
    details: [
      { label: "E-mail", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" },
      { label: "Téléphone", value: "+34 633 947 810", href: "tel:+34633947810" },
      { label: "Localisation", value: "Palma de Majorque · Îles Baléares" },
    ],
  },
  finalCta: {
    ...siteCopyEs.finalCta,
    eyebrow: "Conversation privée",
    title: "La prochaine étape n'est pas plus de bruit. C'est la bonne conversation.",
    body:
      "Palma et le sud-ouest de Majorque exigent du discernement territorial, de la confidentialité et une exécution commerciale plus précise. Si vous envisagez de vendre, d'acheter ou d'explorer une opportunité patrimoniale, nous pouvons étudier votre cas en privé.",
    primaryCta: "Démarrer l'évaluation privée",
    secondaryCta: "Ouvrir la conversation privée",
  },
  footer: {
    ...siteCopyEs.footer,
    summary:
      "Signature immobilière premium concentrée sur Palma et le sud-ouest de Majorque, avec discernement territorial, accès sélectif et exécution commerciale plus précise.",
    columns: [
      {
        title: "Contact",
        links: [
          { label: "Ouvrir la conversation privée", href: "#contacto" },
        ],
      },
      {
        title: "Accès sélectif",
        links: [
          { label: "Majorque", href: "#mallorca-focus" },
          { label: "Investisseurs", href: "#inversores" },
          { label: "Propriétaires", href: "#clientes" },
          { label: "Partenaires", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Mentions légales",
        links: [
          { label: "Confidentialité", href: "/privacy" },
          { label: "Conditions", href: "/terms" },
          { label: "Mentions légales", href: "/legal" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Group. Tous droits réservés.",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Ce que nous demandent les propriétaires, acheteurs et investisseurs.",
    items: [
      {
        question: "Qu'est-ce exactement qu'une vente off-market ou discrète ?",
        answer: "Une vente off-market est une vente dans laquelle le bien n'est pas publié sur des portails immobiliers grand public. Elle se déroule de façon confidentielle avec un groupe sélect d'acheteurs qualifiés, en préservant la vie privée du vendeur et la force de négociation de l'actif.",
      },
      {
        question: "Combien de temps dure généralement une vente privée à Majorque ?",
        answer: "Cela dépend du bien, de la micro-localisation et du prix de positionnement. Une transaction bien conduite peut se conclure en 3 à 12 mois. Nous privilégions le bon prix et le bon acheteur plutôt que la vitesse.",
      },
      {
        question: "Comment accéder à des biens non publiés à Majorque ?",
        answer: "Via notre liste d'acheteurs qualifiés. Nous travaillons avec des profils préalablement évalués et disposant d'une réelle capacité de décision. Si votre profil correspond, vous pouvez accéder à des actifs absents de tout portail.",
      },
      {
        question: "Quel rendement puis-je espérer en tant qu'investisseur dans le sud-ouest de Majorque ?",
        answer: "Le rendement varie selon le type d'actif, la micro-localisation et la stratégie. Dans des zones premium comme Son Vida ou Portals, le marché affiche une résistance des prix et une demande internationale soutenue. Nous évaluons chaque cas avec des données actualisées.",
      },
      {
        question: "Dans quelles zones de Majorque intervenez-vous ?",
        answer: "Nous opérons principalement à Palma, Andratx, Calvià, Son Vida, Portals Nous, Bendinat, Deià et Valldemossa. Nous évaluons les biens dans d'autres localisations au cas par cas.",
      },
    ],
  },
  afterContact: {
    eyebrow: "Ce qui se passe ensuite",
    title: "Un processus sans promesses creuses.",
    intro: "Lorsque vous envoyez une demande, voici ce qui se passe dans les jours suivants :",
    steps: [
      {
        number: "01",
        title: "Examen initial",
        description: "Nous étudions votre demande avec discernement : intention, type d'actif et adéquation avec ce que nous gérons.",
      },
      {
        number: "02",
        title: "Lecture privée",
        description: "Si l'adéquation est réelle, nous organisons un appel ou une rencontre pour comprendre la situation sans pression ni engagement.",
      },
      {
        number: "03",
        title: "Proposition d'étape suivante",
        description: "Selon le cas, nous proposons une évaluation, un plan locatif ou une stratégie d'accès à des acheteurs qualifiés.",
      },
      {
        number: "04",
        title: "Réponse honnête",
        description: "Si ce n'est pas le bon profil, nous le disons clairement. Nous préférons l'honnêteté à une perte de temps.",
      },
    ],
  },
  trustBadgeText: "Soutien international et confiance opérationnelle via eXp Group Spain.",
};

const siteCopyCa: SiteCopy = {
  ...siteCopyEs,
  seo: {
    title: "Anclora Private Estates | Venda discreta a Mallorca",
    description:
      "Ven la teva finca o villa a Andratx, Calvià o Son Vida de manera discreta, amb accés selectiu a compradors qualificats i sense exposició pública innecessària.",
    ogTitle: "Anclora Private Estates | Venda discreta a Mallorca",
    ogDescription: "Accés selectiu a compradors qualificats per a propietaris a Palma i el sud-oest de Mallorca.",
    schemaDescription:
      "Accés selectiu a compradors qualificats per a propietaris que valoren vendre al sud-oest de Mallorca sense exposició pública innecessària.",
    serviceType: "Assessorament immobiliari premium i off-market",
  },
  mediaAlt: {
    mallorcaFocusImage: "Costa de Mallorca amb aigües turqueses i embarcació en una cala privada",
    investorImage: "Terrassa premium amb piscina i vistes al mar a Mallorca",
    finalCtaImage: "Villa premium a Mallorca amb interior obert al jardí",
  },
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Navegació principal",
    menuOpenLabel: "Obrir menú",
    menuCloseLabel: "Tancar menú",
    menuDialogLabel: "Menú de navegació",
    homeAriaLabel: "Anclora Private Estates — Inici",
    logoAlt: "Anclora Private Estates by eXp Group Spain",
    links: [
      { label: "Credibilitat", href: "#credibilidad" },
      { label: "Com treballem", href: "#como-trabajamos" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Lloguer vacacional", href: "#alquiler-vacacional" },
      { label: "Inversors", href: "#inversores" },
      { label: "Clients", href: "#clientes" },
      { label: "FAQ", href: "#faq" },
      { label: "Partners", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Editorial", href: "#editorial" },
      { label: "Contacte", href: "#contacto" },
    ],
    ctaLabel: "Sol·licitar valoració",
    languageSwitcher: {
      ...siteCopyEs.navbar.languageSwitcher,
      groupLabel: "Selector d'idioma",
      preferencesLabel: "Preferències globals",
      preferencesDialogLabel: "Configuració de preferències globals",
      eyebrow: "Preferències",
      title: "Idioma",
      languageLabel: "Idioma",
      currencyLabel: "Moneda",
      pendingLabel: "Pendent",
      closeLabel: "Tancar selector d'idioma",
      saveLabel: "Desar i tancar",
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Sud-oest de Mallorca · Capital premium",
    title: "Venda discreta i rendibilització premium d'actius singulars a Mallorca.",
    description:
      "Preparem, posicionem i gestionem vil·les, finques i actius únics per a propietaris que no volen exposició massiva. Discreció, control i accés a compradors qualificats.",
    primaryCta: "Sol·licitar avaluació privada",
    secondaryCta: "Explorar lloguer vacacional premium",
    scrollLabel: "Continuar",
    scrollText: "Descobrir",
    media: {
      ...siteCopyEs.hero.media,
      eyebrow: "Vista privada",
      title: "Palma, Son Vida, Portals, Bendinat i microzones on el relat adequat reordena el valor percebut.",
      methodEyebrow: "Mètode",
      method: "L'operació comença abans del portal: preparació, relat, accés i timing alineats amb el comprador adequat.",
      statCopy: "Cada decisió visible a la landing respon al mateix principi: menys soroll, més control i millor context per a actius premium.",
    },
  },
  credibility: {
    eyebrow: "Credibilitat",
    title: "Una proposta premium que no necessita simular volum per transmetre confiança.",
    intro: "L'autoritat no es comunica amb promeses estridents, sinó amb estructura, suport i una lectura més madura del mercat.",
    pillars: [
      "Agent independent amb el suport d'eXp Group Spain.",
      "Més de 25 anys de trajectòria tecnològica aplicats a una operativa immobiliària més ben estructurada.",
      "Intel·ligència territorial, processos optimitzats i xarxa selectiva com a diferència real davant l'agència tradicional.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Xarxa global de +80.000 agents actius" },
      { text: "Mallorca Premium", detail: "Especialització exclusiva al sud-oest de Mallorca" },
      { text: "Accés a compradors internacionals", detail: "Perfils qualificats de +40 països" },
    ],
  },
  howWeWork: {
    eyebrow: "Procés · Com treballem",
    title: "Quatre passos per a una operació amb criteri i discreció.",
    steps: [
      { number: "01", title: "Avaluació privada", description: "Analitzem l'actiu, la microzona i el perfil del propietari abans d'acordar cap acció." },
      { number: "02", title: "Estratègia territorial", description: "Definim el relat de valor, el posicionament i el perfil de comprador adequat per a l'actiu." },
      { number: "03", title: "Accés qualificat", description: "Activem l'accés a compradors i inversors seleccionats sense exposició pública de l'actiu." },
      { number: "04", title: "Seguiment i tancament", description: "Acompanyem cada conversa fins al tancament amb criteri, confidencialitat i suport operatiu." },
    ],
  },
  holidayRental: {
    eyebrow: "Lloguer vacacional premium",
    title: "Rendibilitzar sense perdre el control de l'actiu.",
    body: "El lloguer vacacional pot ser un palanca de rendibilitat intel·ligent per a actius singulars. Però fer-ho bé requereix preparació, criteri de posicionament i una estratègia operativa que preservi el valor de l'actiu i l'experiència del propietari.",
    forWhomLabel: "Per a qui encaixa",
    forWhom: [
      "Propietaris de vil·les o finques amb períodes de no ús que volen generar ingressos sense perdre privacitat.",
      "Propietaris en procés de venda que volen mantenir rendibilitat durant la fase de preparació.",
      "Inversors que combinen ús propi amb rendiment vacacional selectiu.",
    ],
    whatWeReviewLabel: "Què revisem amb tu",
    whatWeReview: [
      "Potencial real de la microzona i la tipologia de l'actiu.",
      "Perfil d'hoste adequat i estratègia de posicionament.",
      "Estructura operativa i documental (SES.HOSPEDAJES, contractes, cobertura).",
      "Compatibilitat amb una possible estratègia de venda futura.",
    ],
    benefits: [
      "Avaluació privada del potencial de lloguer.",
      "Posicionament alineat amb actius d'alt standing.",
      "Captació orientada a hostes qualificats.",
      "Preparació operativa i documental més ordenada.",
      "Compatibilitat amb ús propi i estratègia de venda futura.",
    ],
    technologyNote: "La gestió documental pot recolzar-se en Anclora SyncXML per estructurar dades de reserves orientades al flux SES.HOSPEDAJES. Aquesta capa aporta traçabilitat i menys fricció documental; no substitueix la revisió legal ni el criteri del professional.",
    primaryCta: "Avaluar potencial de lloguer premium",
    secondaryCta: "Obrir conversa privada",
    prudenceNote: "El lloguer vacacional a Mallorca està subjecte a regulació local. Disponibilitat de llicències, zonificació i normativa municipal són factors que avaluem en cada cas abans de qualsevol compromís.",
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    eyebrow: "Mallorca Focus",
    title: "Mallorca no s'interpreta com una llista plana de zones, sinó com un sistema de microzones i senyals.",
    intro: "Cada enclavament demana un llenguatge comercial propi. La mateixa estètica no serveix per a Palma, Portals o Valldemossa; tampoc el mateix relat de valor.",
    areasLabel: "Àrees",
    clusters: siteCopyEs.mallorcaFocus.clusters.map((cluster, index) => ({
      ...cluster,
      eyebrow: [
        "Palma i la zona residencial en altura",
        "Costa premium de Calvià",
        "Sud-oest: lifestyle i patrimoni",
        "Serra i herència d'interior",
      ][index],
      title: [
        "Capital, altura residencial i accés institucional.",
        "Costa consolidada amb lifestyle i liquiditat.",
        "Entrada premium amb lifestyle, rendibilitat i timing.",
        "Interior amb caràcter, paisatge i singularitat residencial.",
      ][index],
      body: [
        "Palma, Son Vida, Cala Major, San Agustín i Cas Català concentren capital local, demanda internacional i actius on el relat urbà i la privacitat pesen tant com la ubicació.",
        "Illetas, Bendinat, Portals, Costa d'en Blanes i Punta Negra funcionen com un sistema on mar, marina, privacitat i serveis premium esdevenen senyals clau de valor.",
        "Palmanova, Paguera i Costa de la Calma permeten llegir un tram més flexible del mercat premium, on lifestyle, ticket d'entrada i velocitat comercial demanen criteri fi per microzona.",
        "Puerto de Andratx, Andratx, Esporles i Valldemossa formen un clúster on canvia la lectura: patrimoni, paisatge, privacitat i relat residencial pesen més que la proximitat a la costa.",
      ][index],
      audienceLabel: "Perfil de comprador",
      audience: [
        "Comprador patrimonial que prioritza capital, escoles, serveis i logística diària.",
        "Comprador internacional i family office orientat a costa prime i continuïtat relacional.",
        "Inversor híbrid que busca equilibri entre ús propi, demanda i conservació patrimonial.",
        "Comprador UHNW relacional que valora singularitat, silenci i actius amb relat durador.",
      ][index],
    })),
  },
  investors: {
    eyebrow: "Inversors",
    title: "Capital nacional i internacional que necessita menys aparador i una lectura millor del context.",
    intro: "L'inversor premium no busca simplement stock; busca una interpretació fiable d'accés, timing, conservació de valor i continuïtat relacional.",
    asideQuote: "La diferència no és mostrar més producte, sinó entendre millor quin tipus de comprador i quin ritme necessita cada actiu.",
    profiles: [
      { title: "Inversor patrimonial nacional", body: "Busca actius sòlids, protecció de valor i criteri territorial per no dependre del soroll comercial ni d'aparadors genèrics." },
      { title: "Inversor lifestyle internacional", body: "Prioritza microzona, privacitat, marina, escoles, connectivitat i capacitat d'executar amb confiança en un entorn premium transfronterer." },
      { title: "Comprador UHNW relacional", body: "No entra per catàleg, sinó per confiança, accés, timing i capacitat d'activar la xarxa adequada al voltant d'una operació singular." },
    ],
  },
  sellerIntake: {
    ...siteCopyEs.sellerIntake,
    eyebrow: "Clients",
    title: "Assessorament selectiu per a propietaris, compradors i inversors.",
    body: "Estudiem cada sol·licitud segons la intenció: venda, compra, valoració o inversió. Enfocament premium i confidencial per a actius singulars a Palma i el sud-oest de Mallorca.",
    checklistLabel: "Criteris d'avaluació privada",
    checklist: ["Microzona i competència real", "Relat de posicionament", "Timing i accés qualificat"],
    trustBadgeText: "Suport internacional i confiança operativa a través d'eXp Group Spain.",
    form: {
      ...siteCopyEs.sellerIntake.form,
      intentLabel: "Com et podem ajudar?",
      intentOptions: [
        { value: "sell", label: "Vull vendre una propietat" },
        { value: "valuation", label: "Vull una valoració privada" },
        { value: "buy", label: "Vull comprar una propietat premium" },
        { value: "invest", label: "Busco oportunitats d'inversió" },
        { value: "holiday_rental", label: "Vull rendibilitzar la meva propietat com a lloguer vacacional" },
      ],
      holidayRentalObjective: "Objectiu d'explotació",
      holidayRentalAvailability: "Disponibilitat prevista",
      holidayRentalObjectiveOptions: ["Rendiment màxim", "Ús mixt (personal + lloguer)", "Gestió full-service"],
      name: "Nom",
      phone: "Telèfon",
      zone: "Zona de l'immoble",
      propertyType: "Tipus de propietat",
      commercialization: "Preferència de comercialització",
      address: "Adreça de l'immoble",
      budget: "Pressupost aproximat",
      timing: "Termini previst",
      ticket: "Ticket d'inversió",
      goal: "Objectiu d'inversió",
      message: "Missatge",
      placeholders: {
        ...siteCopyEs.sellerIntake.form.placeholders,
        name: "El teu nom",
        zone: "Son Vida, Portals, Andratx...",
        address: "Carrer, zona o referència cadastral",
        timing: "Ex.: immediat, 6 mesos...",
        goal: "Ex.: patrimoni, rendibilitat...",
        message: "Explica'ns més detalls sobre la teva sol·licitud.",
      },
      selectPlaceholder: "Selecciona una opció",
      propertyTypeOptions: ["Villa", "Àtic", "Apartament premium", "Finca"],
      commercializationOptions: [
        "Avaluació confidencial",
        "Venda en exclusiva",
        "Venda selectiva sense portal massiu",
      ],
      submitLabel: "Enviar sol·licitud privada",
    },
  },
  valuation: {
    ...siteCopyEs.valuation,
    eyebrow: "Sol·licitar valoració",
    title: "Quin valor té la teva propietat a Mallorca?",
    body: "Si tens un immoble a Palma o al sud-oest de Mallorca i vols conèixer-ne el valor real de mercat, podem preparar una valoració confidencial i sense compromís.",
    checklistLabel: "La valoració inclou",
    checklist: ["Anàlisi de microzona i competència real", "Lectura del timing de mercat", "Valoració orientada al comprador adequat"],
    form: {
      ...siteCopyEs.valuation.form,
      name: "Nom",
      phone: "Telèfon",
      address: "Adreça de l'immoble",
      message: "Missatge (opcional)",
      placeholders: { ...siteCopyEs.valuation.form.placeholders, name: "El teu nom", address: "Carrer, zona o referència cadastral", message: "Comparteix qualsevol detall rellevant." },
      privacyLabel: "He llegit i accepto la política de privacitat.",
      submitLabel: "Sol·licitar valoració confidencial",
      successTitle: "Sol·licitud rebuda",
      successBody: "Et respondrem en un termini de dos dies hàbils amb una valoració privada.",
      captchaError: "Completa la verificació de seguretat.",
    },
  },
  partners: {
    ...siteCopyEs.partners,
    eyebrow: "Synergi · Xarxa de partners",
    title: "Una xarxa selectiva per a col·laboradors que entenen el mercat premium.",
    body: "Anclora Synergi és el portal privat per a partners ja validats: agents independents, professionals del sector i col·laboradors amb criteri territorial. L'accés és curat, no massiu.",
    features: ["Accés a oportunitats compartides de forma selectiva", "Col·laboració amb enfocament de microzona i qualitat d'actiu", "Procés d'admissió curat i sense fricció comercial"],
    form: {
      ...siteCopyEs.partners.form,
      name: "Nom",
      serviceCategory: "Tipus de servei",
      serviceSummary: "Descriu el teu perfil i com treballes",
      placeholders: { ...siteCopyEs.partners.form.placeholders, name: "El teu nom o empresa", serviceSummary: "Explica el teu perfil professional, especialitat i com podries col·laborar amb Anclora (mín. 20 caràcters)." },
      selectPlaceholder: "Selecciona una categoria",
      serviceCategoryOptions: [
        { value: "real_estate", label: "Immobiliari" },
        { value: "professional", label: "Professional / Legal / Financer" },
        { value: "luxury", label: "Lifestyle i luxe" },
        { value: "eco", label: "Sostenibilitat" },
        { value: "other", label: "Altres" },
      ],
      privacyLabel: "He llegit i accepto la política de privacitat.",
      submitLabel: "Sol·licitar accés a Synergi",
      successTitle: "Sol·licitud rebuda",
      successBody: "Revisarem el teu perfil i et respondrem en un termini de set dies.",
    },
  },
  dataLab: {
    ...siteCopyEs.dataLab,
    title: "Senyals territorials per llegir el mercat premium amb més calma i menys reacció.",
    intro: "No presentem dashboards. Presentem indicis que ajuden a situar la qualitat de l'actiu, la pressió de demanda i la sensibilitat del comprador premium.",
    lead: {
      eyebrow: "Senyal 01",
      title: "L'escassetat de producte prime ben posicionat afavoreix decisions més selectives i menys reactives.",
      body: "A Palma i al sud-oest, la combinació d'oferta limitada, demanda internacional persistent i sensibilitat creixent pel producte turnkey reforça el valor dels actius ben preparats i ben narrats.",
    },
    signals: [
      {
        eyebrow: "Senyal 02",
        title: "La microzona importa més que l'etiqueta general del municipi.",
        body: "Andratx, Portals Nous i Son Vida generen perfils de comprador, velocitats d'absorció i rangs de preu distints. Operar sense aquesta lectura és perdre posicionament abans d'iniciar la conversa.",
      },
      {
        eyebrow: "Senyal 03",
        title: "La preparació de l'actiu condiciona la velocitat i la qualitat de l'operació.",
        body: "Els actius amb documentació completa, narrativa comercial clara i presentació acurada redueixen el temps d'exposició i milloren la selectivitat de les converses que generen.",
      },
    ],
    whitelist: {
      ...siteCopyEs.dataLab.whitelist,
      eyebrow: "Accés selectiu",
      title: "Uneix-te a la llista d'accés anticipat.",
      body: "Anclora Data Lab està en fase d'accés selectiu per a inversors, family offices i perfils institucionals. Si el teu perfil encaixa, t'avisarem quan obrim el següent bloc d'accés.",
      form: {
        ...siteCopyEs.dataLab.whitelist.form,
        name: "Nom",
        intendedUse: "Per què t'interessa el Data Lab?",
        placeholders: { ...siteCopyEs.dataLab.whitelist.form.placeholders, name: "El teu nom o empresa", intendedUse: "Descriu breument el teu interès i perfil inversor (mín. 20 caràcters)." },
        privacyLabel: "He llegit i accepto la política de privacitat.",
        submitLabel: "Sol·licitar accés anticipat",
        successTitle: "A la llista d'espera",
        successBody: "T'avisarem quan obrim el següent bloc d'accés per al teu perfil.",
      },
    },
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Contacte",
    title: "Obrim una conversa privada.",
    body: "Si valores vendre, invertir o explorar una oportunitat patrimonial a Palma o al sud-oest de Mallorca, podem estudiar el teu cas amb criteri, confidencialitat i enfocament premium.",
    responseNote: "Les converses es gestionen de manera selectiva i amb retorn personal.",
    trustBadgeText: "Suport internacional i confiança operativa a través d'eXp Group Spain.",
    detailsTitle: "Dades de contacte",
    details: [
      { label: "Email", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" },
      { label: "Telèfon", value: "+34 633 947 810", href: "tel:+34633947810" },
      { label: "Ubicació", value: "Palma de Mallorca · Illes Balears" },
    ],
  },
  finalCta: {
    eyebrow: "Conversa privada",
    title: "El següent pas no és veure més soroll. És obrir la conversa adequada.",
    body: "Palma i el sud-oest de Mallorca exigeixen criteri territorial, confidencialitat i una execució comercial més precisa. Si valores vendre, comprar o explorar una oportunitat patrimonial, podem estudiar el teu cas de forma privada.",
    primaryCta: "Iniciar avaluació privada",
    secondaryCta: "Obrir conversa privada",
  },
  footer: {
    ...siteCopyEs.footer,
    summary: "Firma immobiliària premium orientada a Palma i el sud-oest de Mallorca, amb criteri territorial, accés selectiu i una execució comercial més precisa.",
    columns: [
      {
        title: "Contacte",
        links: [
          { label: "Obrir conversa privada", href: "#contacto" },
        ],
      },
      {
        title: "Accés selectiu",
        links: [
          { label: "Mallorca", href: "#mallorca-focus" },
          { label: "Inversors", href: "#inversores" },
          { label: "Clients", href: "#clientes" },
          { label: "Partners", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacitat", href: "/privacy" },
          { label: "Termes", href: "/terms" },
          { label: "Avís legal", href: "/legal" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Group. Tots els drets reservats.",
  },
  cookies: {
    ...siteCopyEs.cookies,
    title: "Preferències de cookies",
    description: "Aquest lloc utilitza cookies per oferir-te una millor experiència d'usuari. Pots gestionar les preferències en qualsevol moment.",
    acceptAll: "Acceptar totes",
    settings: "Configuració",
    settingsTitle: "Gestionar cookies",
    necessary: { title: "Cookies necessàries", description: "Aquestes cookies són essencials per al funcionament del lloc i no es poden desactivar." },
    analytics: { title: "Cookies d'anàlisi", description: "Ens ajuden a entendre com interactuen els visitants amb el lloc." },
    marketing: { title: "Cookies de màrqueting", description: "S'utilitzen per mostrar anuncis rellevants als visitants." },
    savePreferences: "Desar preferències",
    back: "Tornar",
    rejectAll: "Rebutjar opcionals",
  },
  scroll: { up: "Pujar", down: "Baixar" },
  social: { followUs: "SEGUEIX-NOS" },
  faq: {
    eyebrow: "Preguntes freqüents",
    title: "El que ens pregunten els propietaris, compradors i inversors.",
    items: [
      {
        question: "Què és exactament una venda off-market o discreta?",
        answer: "Una venda off-market és aquella en la qual el actiu no es publica a portals immobiliaris d'accés massiu. Es treballa de forma confidencial amb un grup selecte de compradors qualificats, preservant la privacitat del venedor i mantenint el poder de negociació de l'actiu.",
      },
      {
        question: "Quant de temps triga normalment una venda privada a Mallorca?",
        answer: "Depèn de l'actiu, la microzona i el preu de posicionament. Una operació ben executada pot tancar-se entre 3 i 12 mesos. Prioritzem el preu adequat i el comprador correcte per sobre de la velocitat.",
      },
      {
        question: "Com accedeixo a propietats no publicades a Mallorca?",
        answer: "A través de la nostra llista de compradors qualificats. Treballem amb perfils que han estat avaluats prèviament i que compten amb capacitat de decisió real. Si el teu perfil s'hi ajusta, pots accedir a actius que no estan a cap portal.",
      },
      {
        question: "Quina rendibilitat puc esperar com a inversor al sud-oest de Mallorca?",
        answer: "La rendibilitat varia segons el tipus d'actiu, la microzona i l'estratègia. En zones prime com Son Vida o Portals, el mercat mostra resistència de preu i demanda internacional sostinguda. Avaluem cada cas amb dades actualitzades.",
      },
      {
        question: "En quines zones de Mallorca opereu?",
        answer: "Operem principalment a Palma, Andratx, Calvià, Son Vida, Portals Nous, Bendinat, Deià i Valldemossa. Avaluem actius en altres ubicacions segons criteri.",
      },
    ],
  },
  afterContact: {
    eyebrow: "Què passa després",
    title: "Un procés sense promeses buides.",
    intro: "Quan envies una sol·licitud, això és el que passa els dies següents:",
    steps: [
      {
        number: "01",
        title: "Revisió inicial",
        description: "Estudiem la teva sol·licitud amb criteri: intenció, tipologia de l'actiu i encaix amb el que gestionem.",
      },
      {
        number: "02",
        title: "Lectura privada",
        description: "Si hi ha un encaix real, organitzem una trucada o reunió per entendre la situació sense pressió ni compromís.",
      },
      {
        number: "03",
        title: "Proposta de pas següent",
        description: "Segons el cas, proposem una valoració, un pla de lloguer o una estratègia d'accés a compradors qualificats.",
      },
      {
        number: "04",
        title: "Descart honest",
        description: "Si no encaixa, t'ho diem clarament. Preferim l'honestedat a ocupar el teu temps amb un procés sense futur.",
      },
    ],
  },
  trustBadgeText: "Suport internacional i confiança operativa a través d'eXp Group Spain.",
  contactFloatingLabel: "CONTACTAR",
};

const createEuropeanCopy = (
  base: SiteCopy,
  labels: {
    nav: string[];
    navAriaLabel: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    menuDialogLabel: string;
    homeAriaLabel: string;
    logoAlt: string;
    seo: SeoCopy;
    mediaAlt: MediaAltCopy;
    ctaLabel: string;
    switcher: Partial<LanguageSwitcherCopy>;
    hero: Pick<HeroCopy, "eyebrow" | "title" | "description" | "primaryCta" | "secondaryCta" | "scrollLabel" | "scrollText">;
    contactTitle: string;
    finalTitle: string;
    footerSummary: string;
    copyright: string;
    contactFloatingLabel: string;
    social: string;
  },
): SiteCopy => ({
  ...base,
  seo: labels.seo,
  mediaAlt: labels.mediaAlt,
  navbar: {
    ...base.navbar,
    navAriaLabel: labels.navAriaLabel,
    menuOpenLabel: labels.menuOpenLabel,
    menuCloseLabel: labels.menuCloseLabel,
    menuDialogLabel: labels.menuDialogLabel,
    homeAriaLabel: labels.homeAriaLabel,
    logoAlt: labels.logoAlt,
    links: base.navbar.links.map((link, index) => ({ ...link, label: labels.nav[index] ?? link.label })),
    ctaLabel: labels.ctaLabel,
    languageSwitcher: {
      ...base.navbar.languageSwitcher,
      ...labels.switcher,
      currency: { ...base.navbar.languageSwitcher.currency, ...labels.switcher.currency },
    },
  },
  hero: { ...base.hero, ...labels.hero },
  contact: { ...base.contact, title: labels.contactTitle },
  finalCta: { ...base.finalCta, title: labels.finalTitle },
  footer: { ...base.footer, summary: labels.footerSummary, copyright: labels.copyright },
  social: { followUs: labels.social },
  contactFloatingLabel: labels.contactFloatingLabel,
});

const siteCopySv: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Huvudnavigering",
  menuOpenLabel: "Öppna meny",
  menuCloseLabel: "Stäng meny",
  menuDialogLabel: "Navigeringsmeny",
  homeAriaLabel: "Anclora Private Estates — Startsida",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Diskret försäljning på Mallorca",
    description: "Sälj en finca eller villa i Andratx, Calvià eller Son Vida diskret, med selektiv tillgång till kvalificerade köpare och utan onödig offentlig exponering.",
    ogTitle: "Anclora Private Estates | Diskret försäljning på Mallorca",
    ogDescription: "Selektiv tillgång till kvalificerade köpare för ägare i Palma och sydvästra Mallorca.",
    schemaDescription: "Selektiv tillgång till kvalificerade köpare för ägare som överväger en diskret försäljning i sydvästra Mallorca.",
    serviceType: "Premiumrådgivning och off-market fastighetsförmedling",
  },
  mediaAlt: {
    mallorcaFocusImage: "Mallorcas kust med turkost vatten och båt i en privat vik",
    investorImage: "Premiumterrass med pool och havsutsikt på Mallorca",
    finalCtaImage: "Premiumvilla på Mallorca med interiör öppen mot trädgården",
  },
  nav: ["Trovärdighet", "Hur vi arbetar", "Mallorca", "Semesteruthyrning", "Investerare", "Kunder", "FAQ", "Partners", "Data Lab", "Redaktionellt", "Kontakt"],
  ctaLabel: "Begär värdering",
  switcher: {
    groupLabel: "Språkväljare",
    preferencesLabel: "Globala inställningar",
    preferencesDialogLabel: "Globala inställningar",
    eyebrow: "Inställningar",
    title: "Språk",
    languageLabel: "Språk",
    currencyLabel: "Valuta",
    pendingLabel: "Väntande",
    closeLabel: "Stäng språkväljaren",
    saveLabel: "Spara och stäng",
  },
  hero: {
    eyebrow: "Palma · Sydvästra Mallorca · Premiumkapital",
    title: "För ägare som överväger en privat försäljning på Mallorca.",
    description: "Värdering och förberedelse av villor, fincas och premiumtillgångar för diskret försäljning med kvalificerade köpare.",
    primaryCta: "Begär privat värdering",
    secondaryCta: "Utforska det lokala fokuset",
    scrollLabel: "Fortsätt",
    scrollText: "Upptäck",
  },
  contactTitle: "Låt oss inleda ett privat samtal.",
  finalTitle: "Nästa steg är inte mer brus. Det är rätt samtal.",
  footerSummary: "Premiuminriktad fastighetsfirma med fokus på Palma och sydvästra Mallorca, territoriellt omdöme, selektiv tillgång och skarpare kommersiellt genomförande.",
  copyright: "© 2026 Anclora Group. Alla rättigheter förbehållna.",
  social: "FÖLJ OSS",
  contactFloatingLabel: "KONTAKT",
});

const siteCopyIt: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Navigazione principale",
  menuOpenLabel: "Apri menu",
  menuCloseLabel: "Chiudi menu",
  menuDialogLabel: "Menu di navigazione",
  homeAriaLabel: "Anclora Private Estates — Home",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Vendita discreta a Mallorca",
    description: "Vendi una finca o villa ad Andratx, Calvià o Son Vida in modo discreto, con accesso selettivo ad acquirenti qualificati e senza esposizione pubblica inutile.",
    ogTitle: "Anclora Private Estates | Vendita discreta a Mallorca",
    ogDescription: "Accesso selettivo ad acquirenti qualificati per proprietari a Palma e nel sud-ovest di Mallorca.",
    schemaDescription: "Accesso selettivo ad acquirenti qualificati per proprietari che valutano una vendita discreta nel sud-ovest di Mallorca.",
    serviceType: "Consulenza immobiliare premium e off-market",
  },
  mediaAlt: {
    mallorcaFocusImage: "Costa di Mallorca con acque turchesi e barca in una cala privata",
    investorImage: "Terrazza premium con piscina e vista mare a Mallorca",
    finalCtaImage: "Villa premium a Mallorca con interni aperti sul giardino",
  },
  nav: ["Credibilità", "Come lavoriamo", "Mallorca", "Affitti vacanze", "Investitori", "Clienti", "FAQ", "Partner", "Data Lab", "Editoriale", "Contatto"],
  ctaLabel: "Richiedi valutazione",
  switcher: {
    groupLabel: "Selettore lingua",
    preferencesLabel: "Preferenze globali",
    preferencesDialogLabel: "Impostazioni preferenze globali",
    eyebrow: "Preferenze",
    title: "Lingua",
    languageLabel: "Lingua",
    currencyLabel: "Valuta",
    pendingLabel: "In attesa",
    closeLabel: "Chiudi selettore lingua",
    saveLabel: "Salva e chiudi",
  },
  hero: {
    eyebrow: "Palma · Sud-ovest di Mallorca · Capitale premium",
    title: "Per proprietari che valutano una vendita privata a Mallorca.",
    description: "Valutazione e preparazione di ville, fincas e asset premium per vendere con discrezione e acquirenti qualificati.",
    primaryCta: "Richiedi una valutazione privata",
    secondaryCta: "Esplora il focus territoriale",
    scrollLabel: "Continua",
    scrollText: "Scopri",
  },
  contactTitle: "Apriamo una conversazione privata.",
  finalTitle: "Il passo successivo non è più rumore. È la conversazione giusta.",
  footerSummary: "Firma immobiliare premium focalizzata su Palma e sul sud-ovest di Mallorca, con criterio territoriale, accesso selettivo ed esecuzione commerciale più precisa.",
  copyright: "© 2026 Anclora Group. Tutti i diritti riservati.",
  social: "SEGUICI",
  contactFloatingLabel: "CONTATTO",
});

const siteCopyDa: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Hovednavigation",
  menuOpenLabel: "Åbn menu",
  menuCloseLabel: "Luk menu",
  menuDialogLabel: "Navigationsmenu",
  homeAriaLabel: "Anclora Private Estates — Forside",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Diskret salg på Mallorca",
    description: "Sælg en finca eller villa i Andratx, Calvià eller Son Vida diskret med selektiv adgang til kvalificerede købere og uden unødig offentlig eksponering.",
    ogTitle: "Anclora Private Estates | Diskret salg på Mallorca",
    ogDescription: "Selektiv adgang til kvalificerede købere for ejere i Palma og sydvestlige Mallorca.",
    schemaDescription: "Selektiv adgang til kvalificerede købere for ejere, der overvejer et diskret salg i sydvestlige Mallorca.",
    serviceType: "Premium og off-market ejendomsrådgivning",
  },
  mediaAlt: {
    mallorcaFocusImage: "Mallorcas kyst med turkisblåt vand og båd i en privat bugt",
    investorImage: "Premiumterrasse med pool og havudsigt på Mallorca",
    finalCtaImage: "Premiumvilla på Mallorca med interiør åbent mod haven",
  },
  nav: ["Troværdighed", "Sådan arbejder vi", "Mallorca", "Feriebolig", "Investorer", "Kunder", "FAQ", "Partnere", "Data Lab", "Redaktion", "Kontakt"],
  ctaLabel: "Anmod om vurdering",
  switcher: {
    groupLabel: "Sprogvælger",
    preferencesLabel: "Globale præferencer",
    preferencesDialogLabel: "Globale præferencer",
    eyebrow: "Præferencer",
    title: "Sprog",
    languageLabel: "Sprog",
    currencyLabel: "Valuta",
    pendingLabel: "Afventer",
    closeLabel: "Luk sprogvælger",
    saveLabel: "Gem og luk",
  },
  hero: {
    eyebrow: "Palma · Sydvestlige Mallorca · Premiumkapital",
    title: "For ejere, der overvejer et privat salg på Mallorca.",
    description: "Vurdering og forberedelse af villaer, fincas og premiumaktiver til diskret salg med kvalificerede købere.",
    primaryCta: "Anmod om privat vurdering",
    secondaryCta: "Udforsk det territoriale fokus",
    scrollLabel: "Fortsæt",
    scrollText: "Opdag",
  },
  contactTitle: "Lad os åbne en privat samtale.",
  finalTitle: "Næste skridt er ikke mere støj. Det er den rette samtale.",
  footerSummary: "Premium ejendomsfirma med fokus på Palma og sydvestlige Mallorca, territorial dømmekraft, selektiv adgang og mere præcis kommerciel eksekvering.",
  copyright: "© 2026 Anclora Group. Alle rettigheder forbeholdes.",
  social: "FØLG OS",
  contactFloatingLabel: "KONTAKT",
});

const siteCopyNl: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Hoofdnavigatie",
  menuOpenLabel: "Menu openen",
  menuCloseLabel: "Menu sluiten",
  menuDialogLabel: "Navigatiemenu",
  homeAriaLabel: "Anclora Private Estates — Home",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Discrete verkoop op Mallorca",
    description: "Verkoop een finca of villa in Andratx, Calvià of Son Vida discreet, met selectieve toegang tot gekwalificeerde kopers en zonder onnodige publieke zichtbaarheid.",
    ogTitle: "Anclora Private Estates | Discrete verkoop op Mallorca",
    ogDescription: "Selectieve toegang tot gekwalificeerde kopers voor eigenaren in Palma en Zuidwest-Mallorca.",
    schemaDescription: "Selectieve toegang tot gekwalificeerde kopers voor eigenaren die een discrete verkoop in Zuidwest-Mallorca overwegen.",
    serviceType: "Premium en off-market vastgoedadvies",
  },
  mediaAlt: {
    mallorcaFocusImage: "Kust van Mallorca met turkoois water en boot in een privébaai",
    investorImage: "Premium terras met zwembad en zeezicht op Mallorca",
    finalCtaImage: "Premium villa op Mallorca met interieur open naar de tuin",
  },
  nav: ["Geloofwaardigheid", "Hoe wij werken", "Mallorca", "Vakantieverhuur", "Investeerders", "Klanten", "FAQ", "Partners", "Data Lab", "Redactioneel", "Contact"],
  ctaLabel: "Waardering aanvragen",
  switcher: {
    groupLabel: "Taalkeuze",
    preferencesLabel: "Algemene voorkeuren",
    preferencesDialogLabel: "Algemene voorkeuren",
    eyebrow: "Voorkeuren",
    title: "Taal",
    languageLabel: "Taal",
    currencyLabel: "Valuta",
    pendingLabel: "In behandeling",
    closeLabel: "Taalkeuze sluiten",
    saveLabel: "Opslaan en sluiten",
  },
  hero: {
    eyebrow: "Palma · Zuidwest-Mallorca · Premiumkapitaal",
    title: "Voor eigenaren die een private verkoop op Mallorca overwegen.",
    description: "Waardering en voorbereiding van villa's, fincas en premiumobjecten voor discrete verkoop met gekwalificeerde kopers.",
    primaryCta: "Privé taxatie aanvragen",
    secondaryCta: "Verken de territoriale focus",
    scrollLabel: "Doorgaan",
    scrollText: "Ontdek",
  },
  contactTitle: "Laten we een privégesprek openen.",
  finalTitle: "De volgende stap is niet meer ruis. Het is het juiste gesprek.",
  footerSummary: "Premium vastgoedfirma gericht op Palma en Zuidwest-Mallorca, met territoriaal oordeel, selectieve toegang en scherpere commerciële uitvoering.",
  copyright: "© 2026 Anclora Group. Alle rechten voorbehouden.",
  social: "VOLG ONS",
  contactFloatingLabel: "CONTACT",
});

const siteCopyNo: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Hovednavigasjon",
  menuOpenLabel: "Åpne meny",
  menuCloseLabel: "Lukk meny",
  menuDialogLabel: "Navigasjonsmeny",
  homeAriaLabel: "Anclora Private Estates — Forside",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Diskret salg på Mallorca",
    description: "Selg en finca eller villa i Andratx, Calvià eller Son Vida diskret, med selektiv tilgang til kvalifiserte kjøpere og uten unødvendig offentlig eksponering.",
    ogTitle: "Anclora Private Estates | Diskret salg på Mallorca",
    ogDescription: "Selektiv tilgang til kvalifiserte kjøpere for eiere i Palma og sørvestlige Mallorca.",
    schemaDescription: "Selektiv tilgang til kvalifiserte kjøpere for eiere som vurderer et diskret salg i sørvestlige Mallorca.",
    serviceType: "Premium og off-market eiendomsrådgivning",
  },
  mediaAlt: {
    mallorcaFocusImage: "Mallorcas kyst med turkist vann og båt i en privat vik",
    investorImage: "Premiumterrasse med basseng og havutsikt på Mallorca",
    finalCtaImage: "Premiumvilla på Mallorca med interiør åpent mot hagen",
  },
  nav: ["Tillit", "Slik jobber vi", "Mallorca", "Ferieutleie", "Investorer", "Kunder", "FAQ", "Partnere", "Data Lab", "Redaksjon", "Kontakt"],
  ctaLabel: "Be om verdivurdering",
  switcher: {
    groupLabel: "Språkvelger",
    preferencesLabel: "Globale preferanser",
    preferencesDialogLabel: "Globale preferanser",
    eyebrow: "Preferanser",
    title: "Språk",
    languageLabel: "Språk",
    currencyLabel: "Valuta",
    pendingLabel: "Venter",
    closeLabel: "Lukk språkvelger",
    saveLabel: "Lagre og lukk",
  },
  hero: {
    eyebrow: "Palma · Sørvest-Mallorca · Premiumkapital",
    title: "For eiere som vurderer et privat salg på Mallorca.",
    description: "Verdivurdering og klargjøring av villaer, fincas og premiumaktiva for diskret salg med kvalifiserte kjøpere.",
    primaryCta: "Be om privat verdivurdering",
    secondaryCta: "Utforsk det territorielle fokuset",
    scrollLabel: "Fortsett",
    scrollText: "Oppdag",
  },
  contactTitle: "La oss åpne en privat samtale.",
  finalTitle: "Neste steg er ikke mer støy. Det er riktig samtale.",
  footerSummary: "Premium eiendomsfirma med fokus på Palma og sørvestlige Mallorca, territorielt skjønn, selektiv tilgang og mer presis kommersiell gjennomføring.",
  copyright: "© 2026 Anclora Group. Alle rettigheter forbeholdt.",
  social: "FØLG OSS",
  contactFloatingLabel: "KONTAKT",
});

const siteCopyPt: SiteCopy = createEuropeanCopy(siteCopyEn, {
  navAriaLabel: "Navegação principal",
  menuOpenLabel: "Abrir menu",
  menuCloseLabel: "Fechar menu",
  menuDialogLabel: "Menu de navegação",
  homeAriaLabel: "Anclora Private Estates — Início",
  logoAlt: "Anclora Private Estates by eXp Group Spain",
  seo: {
    title: "Anclora Private Estates | Venda discreta em Mallorca",
    description: "Venda uma finca ou villa em Andratx, Calvià ou Son Vida de forma discreta, com acesso selectivo a compradores qualificados e sem exposição pública desnecessária.",
    ogTitle: "Anclora Private Estates | Venda discreta em Mallorca",
    ogDescription: "Acesso selectivo a compradores qualificados para proprietários em Palma e no sudoeste de Mallorca.",
    schemaDescription: "Acesso selectivo a compradores qualificados para proprietários que ponderam vender no sudoeste de Mallorca sem exposição pública desnecessária.",
    serviceType: "Consultoria imobiliária premium e off-market",
  },
  mediaAlt: {
    mallorcaFocusImage: "Costa de Mallorca com águas turquesa e embarcação numa enseada privada",
    investorImage: "Terraço premium com piscina e vista mar em Mallorca",
    finalCtaImage: "Villa premium em Mallorca com interior aberto para o jardim",
  },
  nav: ["Credibilidade", "Como trabalhamos", "Mallorca", "Aluguer de férias", "Investidores", "Clientes", "FAQ", "Parceiros", "Data Lab", "Editorial", "Contacto"],
  ctaLabel: "Solicitar avaliação",
  switcher: {
    groupLabel: "Selector de idioma",
    preferencesLabel: "Preferências globais",
    preferencesDialogLabel: "Definições de preferências globais",
    eyebrow: "Preferências",
    title: "Idioma",
    languageLabel: "Idioma",
    currencyLabel: "Moeda",
    pendingLabel: "Pendente",
    closeLabel: "Fechar selector de idioma",
    saveLabel: "Guardar e fechar",
  },
  hero: {
    eyebrow: "Palma · Sudoeste de Mallorca · Capital premium",
    title: "Para proprietários que ponderam uma venda privada em Mallorca.",
    description: "Avaliação e preparação de villas, fincas e activos premium para vender com discrição e compradores qualificados.",
    primaryCta: "Solicitar avaliação privada",
    secondaryCta: "Explorar o foco territorial",
    scrollLabel: "Continuar",
    scrollText: "Descobrir",
  },
  contactTitle: "Abramos uma conversa privada.",
  finalTitle: "O próximo passo não é mais ruído. É a conversa certa.",
  footerSummary: "Firma imobiliária premium focada em Palma e no sudoeste de Mallorca, com critério territorial, acesso selectivo e execução comercial mais precisa.",
  copyright: "© 2026 Anclora Group. Todos os direitos reservados.",
  social: "SIGA-NOS",
  contactFloatingLabel: "CONTACTO",
});

Object.assign(siteCopySv, {
  credibility: {
    eyebrow: "Trovärdighet",
    title: "Ett premiumerbjudande som inte behöver låtsas vara större för att skapa förtroende.",
    intro: "Auktoritet uttrycks här genom struktur, förankring och en mognare läsning av marknaden.",
    pillars: [
      "Oberoende rådgivare med stöd av eXp Group Spain.",
      "Över 25 års teknisk erfarenhet tillämpad på en mer strukturerad fastighetsprocess.",
      "Territoriell intelligens, optimerade processer och ett selektivt nätverk som verklig skillnad mot traditionell byrålogik.",
    ],
    credentialBadges: [
      { text: "eXp Group Spain", detail: "Globalt nätverk med 80 000+ aktiva agenter" },
      { text: "Mallorca Premium", detail: "Exklusivt fokus på sydvästra Mallorca" },
      { text: "International köparaccess", detail: "Kvalificerade profiler från 40+ länder" },
    ],
  },
  mallorcaFocus: {
    eyebrow: "Mallorca Focus",
    title: "Mallorca läses inte som en platt lista över områden, utan som ett system av mikrolägen och signaler.",
    intro: "Varje område kräver ett eget kommersiellt språk. Samma estetik fungerar inte för Palma, Portals eller Valldemossa; inte heller samma värdeberättelse.",
    areasLabel: "Områden",
    clusters: siteCopyEn.mallorcaFocus.clusters.map((cluster, index) => ({
      ...cluster,
      eyebrow: ["Palma och höjdlägen", "Calviàs premiumkust", "Sydväst: livsstil och kapital", "Serra och inlandskaraktär"][index],
      title: ["Kapital, högt boende och institutionell närhet.", "Etablerad kust med livsstil och likviditet.", "Premiuminträde med livsstil, avkastning och timing.", "Inland med karaktär, landskap och bostadssingularitet."][index],
      body: [
        "Palma, Son Vida, Cala Major, San Agustín och Cas Català samlar lokalt kapital, internationell efterfrågan och objekt där urban berättelse och integritet väger lika tungt som läget.",
        "Illetas, Bendinat, Portals, Costa d'en Blanes och Punta Negra fungerar som ett system där hav, marina, integritet och premiumservice blir tydliga värdesignaler.",
        "Palmanova, Paguera och Costa de la Calma visar ett mer flexibelt premiumsegment där livsstil, inträdesnivå och försäljningshastighet kräver fin läsning av mikroläget.",
        "Puerto de Andratx, Andratx, Esporles och Valldemossa bildar ett kluster där arv, landskap, integritet och bostadsberättelse väger mer än ren närhet till kusten.",
      ][index],
      audienceLabel: "Köparprofil",
      audience: [
        "Förmögenhetsköpare som prioriterar kapital, skolor, service och vardagslogistik.",
        "Internationell köpare eller family office med fokus på prime-kust och relationell kontinuitet.",
        "Hybridinvesterare som söker balans mellan eget bruk, efterfrågan och kapitalbevarande.",
        "Relationsdriven UHNW-köpare som värdesätter särprägel, diskretion och objekt med varaktig berättelse.",
      ][index],
    })),
  },
  investors: {
    eyebrow: "Investerare",
    title: "Nationellt och internationellt kapital som behöver mindre skyltfönster och bättre kontext.",
    intro: "Premiuminvesteraren söker inte bara utbud; den söker en pålitlig tolkning av tillgång, timing, värdebevarande och relationell kontinuitet.",
    asideQuote: "Skillnaden ligger inte i att visa mer produkt, utan i att förstå vilken köpare och vilket tempo varje tillgång kräver.",
    profiles: [
      { title: "Nationell kapitalinvesterare", body: "Söker stabila tillgångar, värdeskydd och territoriellt omdöme utan beroende av kommersiellt brus." },
      { title: "Internationell livsstilsinvesterare", body: "Prioriterar mikroläge, integritet, marina, skolor, uppkoppling och trygg exekvering över gränser." },
      { title: "Relationsdriven UHNW-köpare", body: "Går inte in via katalog, utan genom förtroende, tillgång, timing och rätt nätverk runt en singulär affär." },
    ],
  },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Begär värdering", title: "Vad är din fastighet på Mallorca värd?", body: "Om du äger en fastighet i Palma eller sydvästra Mallorca och vill veta det reella marknadsvärdet kan vi göra en konfidentiell och förbehållslös värdering.", checklistLabel: "Värderingen inkluderar", checklist: ["Analys av mikroläge och verklig konkurrens", "Genomgång av marknadstiming", "Värdering anpassad till rätt köparprofil"], form: { ...siteCopyEn.valuation.form, name: "Namn", email: "E-post", phone: "Telefon", address: "Fastighetsadress", message: "Meddelande (valfritt)", placeholders: { name: "Ditt namn", email: "namn@domän.se", phone: "+46 ...", address: "Gata, område eller fastighetsreferens", message: "Dela relevanta detaljer." }, privacyLabel: "Jag har läst och accepterar integritetspolicyn.", submitLabel: "Begär konfidentiell värdering", successTitle: "Förfrågan mottagen", successBody: "Vi återkommer inom två arbetsdagar med en privat värdering.", captchaError: "Slutför säkerhetsverifieringen." } },
  sellerIntake: { ...siteCopyEn.sellerIntake, eyebrow: "Kunder", title: "Selektiv rådgivning för ägare, köpare och investerare.", body: "Vi bedömer varje förfrågan efter avsikt: försäljning, köp, värdering eller investering. Ett konfidentiellt premiumupplägg för utvalda tillgångar i Palma och sydvästra Mallorca.", checklistLabel: "Kriterier för privat bedömning", checklist: ["Mikroläge och verklig konkurrens", "Positionerande berättelse", "Kvalificerad timing och tillgång"], trustBadgeText: "Internationellt stöd och operativ trygghet genom eXp Group Spain.", form: { ...siteCopyEn.sellerIntake.form, intentLabel: "Hur kan vi hjälpa dig?", intentOptions: [{ value: "sell", label: "Jag vill sälja en fastighet" }, { value: "valuation", label: "Jag vill ha en privat värdering" }, { value: "buy", label: "Jag vill köpa en premiumfastighet" }, { value: "invest", label: "Jag söker investeringsmöjligheter" }, { value: "holiday_rental", label: "Jag vill hyra ut min fastighet för semesteruthyrning" }], holidayRentalObjective: "Uthyrningsmål", holidayRentalAvailability: "Förväntad tillgänglighet", holidayRentalObjectiveOptions: ["Maximal avkastning", "Blandat bruk (privat + uthyrning)", "Full-service förvaltning"], name: "Namn", email: "E-post", phone: "Telefon", zone: "Fastighetsområde", propertyType: "Fastighetstyp", commercialization: "Försäljningsupplägg", address: "Fastighetsadress", budget: "Ungefärlig budget", timing: "Planerad tidsram", ticket: "Investeringsnivå", goal: "Investeringsmål", message: "Meddelande", placeholders: { name: "Ditt namn", email: "namn@domän.se", phone: "+46 ...", zone: "Son Vida, Portals, Andratx...", address: "Gata, område eller fastighetsreferens", budget: "t.ex. 1M - 3M €", timing: "t.ex. Omedelbart, 6 månader...", ticket: "t.ex. 500k+, 2M+...", goal: "t.ex. Förmögenhet, Avkastning...", message: "Berätta mer om din förfrågan." }, selectPlaceholder: "Välj ett alternativ", propertyTypeOptions: ["Villa", "Takvåning", "Premiumlägenhet", "Finca"], commercializationOptions: ["Konfidentiell bedömning", "Exklusiv försäljning", "Selektiv försäljning utan massportal"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Omedelbart", "1-3 månader", "3-6 månader", "Endast utforskar"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Skicka privat förfrågan" } },
  partners: { ...siteCopyEn.partners, eyebrow: "Synergi · Partnernätverk", title: "Ett selektivt nätverk för samarbetspartner som förstår premiummarknaden.", body: "Anclora Synergi är den privata portalen för redan validerade partners: oberoende agenter, branschproffs och samarbetspartner med territoriellt omdöme.", features: ["Selektiv tillgång till delade möjligheter", "Samarbete med fokus på mikroläge och tillgångskvalitet", "Kurerad antagning utan kommersiell friktion"], form: { ...siteCopyEn.partners.form, name: "Namn", email: "E-post", serviceCategory: "Tjänstekategori", serviceSummary: "Beskriv din profil och hur du arbetar", placeholders: { name: "Ditt namn eller företag", email: "namn@domän.se", serviceSummary: "Beskriv din profil, specialisering och hur du skulle kunna samarbeta med Anclora (min. 20 tecken)." }, selectPlaceholder: "Välj kategori", serviceCategoryOptions: [{ value: "real_estate", label: "Fastigheter" }, { value: "professional", label: "Juridik / Finans / Professionellt" }, { value: "luxury", label: "Lifestyle & Lyx" }, { value: "eco", label: "Hållbarhet" }, { value: "other", label: "Annat" }], privacyLabel: "Jag har läst och accepterar integritetspolicyn.", submitLabel: "Begär tillgång till Synergi", successTitle: "Förfrågan mottagen", successBody: "Vi granskar din profil och återkommer inom sju dagar." } },
  dataLab: { ...siteCopyEn.dataLab, title: "Territoriella signaler för att läsa premiummarknaden lugnare och mindre reaktivt.", intro: "Vi presenterar inte dashboards. Vi visar signaler som hjälper till att rama in tillgångskvalitet, efterfrågetryck och premiumköparens känslighet.", lead: { eyebrow: "Signal 01", title: "Bristen på väl positionerade prime-objekt gynnar mer selektiva och mindre reaktiva beslut.", body: "I Palma och sydväst stärker begränsat utbud, stabil internationell efterfrågan och ökad känslighet för turnkey-objekt värdet på väl förberedda och väl berättade tillgångar." }, signals: [{ eyebrow: "Signal 02", title: "Mikroläget väger tyngre än kommunens övergripande etikett.", body: "Andratx, Portals Nous och Son Vida genererar skilda köparprofiler, absorptionshastigheter och prisspann. Att agera utan denna läsning innebär att man tappar positioneringen redan innan samtalet börjar." }, { eyebrow: "Signal 03", title: "Tillgångens förberedelse påverkar både hastighet och kvalitet i affären.", body: "Tillgångar med fullständig dokumentation, tydlig kommersiell berättelse och omsorgsfull presentation minskar exponeringstiden och förbättrar selektiviteten i de samtal de genererar." }], whitelist: { ...siteCopyEn.dataLab.whitelist, eyebrow: "Selektiv tillgång", title: "Gå med i listan för tidig tillgång.", body: "Anclora Data Lab är i selektiv tillgångsfas för investerare, family offices och institutionella profiler.", form: { ...siteCopyEn.dataLab.whitelist.form, name: "Namn", intendedUse: "Varför är du intresserad av Data Lab?", placeholders: { name: "Ditt namn eller företag", email: "namn@domän.se", intendedUse: "Beskriv kortfattat ditt intresse och investerarprofil (min. 20 tecken)." }, privacyLabel: "Jag har läst och accepterar integritetspolicyn.", submitLabel: "Begär tidig tillgång", successTitle: "På väntelistan", successBody: "Vi meddelar dig när nästa tillgångsblock öppnar för din profil." } } },
  contact: { ...siteCopySv.contact, body: "Om du överväger att sälja, investera eller utforska en fastighetsmöjlighet i Palma eller sydvästra Mallorca kan vi bedöma ditt fall med omdöme, konfidentialitet och premiumfokus.", responseNote: "Samtal hanteras selektivt och med personlig återkoppling.", detailsTitle: "Kontaktuppgifter", details: [{ label: "E-post", value: "antonio@anclora.com", href: "mailto:antonio@anclora.com" }, { label: "Telefon", value: "+34 633 947 810", href: "tel:+34633947810" }, { label: "Plats", value: "Palma de Mallorca · Balearerna" }] },
  finalCta: { ...siteCopySv.finalCta, eyebrow: "Privat samtal", body: "Palma och sydvästra Mallorca kräver territoriellt omdöme, konfidentialitet och mer precis kommersiell exekvering. Om du överväger att sälja, köpa eller utforska en möjlighet kan vi bedöma ditt fall privat.", primaryCta: "Starta privat bedömning", secondaryCta: "Öppna privat samtal" },
  footer: { ...siteCopySv.footer, columns: [{ title: "Kontakt", links: [{ label: "Öppna privat samtal", href: "#contacto" }] }, { title: "Selektivt tillträde", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investerare", href: "#inversores" }, { label: "Kunder", href: "#clientes" }, { label: "Partners", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Juridik", links: [{ label: "Integritet", href: "/privacy" }, { label: "Villkor", href: "/terms" }, { label: "Juridisk information", href: "/legal" }] }] },
  cookies: { ...siteCopyEn.cookies, title: "Cookieinställningar", description: "Denna webbplats använder cookies för att ge en bättre upplevelse. Du kan hantera dina inställningar när som helst.", acceptAll: "Acceptera alla", settings: "Inställningar", settingsTitle: "Hantera cookies", necessary: { title: "Nödvändiga cookies", description: "Dessa cookies krävs för att webbplatsen ska fungera." }, analytics: { title: "Analyscookies", description: "De hjälper oss att förstå hur besökare använder webbplatsen." }, marketing: { title: "Marknadsföringscookies", description: "Används för att visa relevanta annonser." }, savePreferences: "Spara inställningar", back: "Tillbaka", rejectAll: "Avvisa valfria" },
  scroll: { up: "Upp", down: "Ned" },
  howWeWork: { eyebrow: "Process · Hur vi arbetar", title: "Fyra steg för en operation byggd på omdöme och diskretion.", steps: [{ number: "01", title: "Privat värdering", description: "Vi analyserar tillgången, mikroläget och ägarens profil innan vi avtalar om någon åtgärd." }, { number: "02", title: "Territoriell strategi", description: "Vi definierar värdenarrativet, positioneringen och rätt köparprofil för tillgången." }, { number: "03", title: "Kvalificerad åtkomst", description: "Vi aktiverar åtkomst till utvalda köpare och investerare utan offentlig exponering av tillgången." }, { number: "04", title: "Uppföljning och avslut", description: "Vi följer varje samtal fram till avslut med omdöme, konfidentialitet och operativt stöd." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Premiumägare · Semesteruthyrning i toppklass", title: "Tjäna på din Mallorca-fastighet utan att offra diskretion, kontroll eller premiumpositionering.", body: "För villor, fincas och unika lägenheter bör semesteruthyrning inte behandlas som en masstouristprodukt. Vi utvärderar tillgångens potential, mikroläget, gästprofilen och operativ genomförbarhet för att bygga en selektiv strategi.", benefits: ["Privat utvärdering av uthyrningspotential.", "Positionering anpassad till premiumtillgångar.", "Inriktning mot kvalificerade gäster.", "Mer strukturerad operativ och dokumentär förberedelse.", "Möjlighet att kombinera eget boende, inkomst och framtida försäljning."], technologyNote: "Dokumenthanteringen kan stödjas av Anclora SyncXML för att strukturera bokningsdata för SES.HOSPEDAJES-flödet. Detta lager ger spårbarhet och mindre dokumentär friktion; det ersätter varken juridisk granskning eller yrkesmässigt omdöme.", primaryCta: "Utvärdera uthyrningspotential", secondaryCta: "Öppna privat samtal" },
  trustBadgeText: "Internationellt stöd och operativ trygghet genom eXp Group Spain.",
});

Object.assign(siteCopyDa, {
  credibility: { eyebrow: "Troværdighed", title: "Et premiumtilbud, der ikke behøver at simulere størrelse for at skabe tillid.", intro: "Autoritet formidles gennem struktur, forankring og en mere moden markedsforståelse.", pillars: ["Uafhængig rådgiver med støtte fra eXp Group Spain.", "Mere end 25 års teknologisk erfaring anvendt på en bedre struktureret ejendomsproces.", "Territorial intelligens, optimerede processer og et selektivt netværk som reel forskel fra traditionel mæglerlogik."], credentialBadges: [{ text: "eXp Group Spain", detail: "Globalt netværk med 80.000+ aktive agenter" }, { text: "Mallorca Premium", detail: "Eksklusivt fokus på det sydvestlige Mallorca" }, { text: "International køberadgang", detail: "Kvalificerede profiler fra 40+ lande" }] },
  mallorcaFocus: { ...siteCopySv.mallorcaFocus, title: "Mallorca læses ikke som en flad liste over områder, men som et system af mikroområder og signaler.", intro: "Hvert område kræver sit eget kommercielle sprog. Samme æstetik fungerer ikke for Palma, Portals eller Valldemossa.", areasLabel: "Områder", clusters: siteCopySv.mallorcaFocus.clusters.map((cluster, index) => ({ ...cluster, eyebrow: ["Palma og højdeliggende boligområder", "Calviàs premiumkyst", "Sydvest: livsstil og kapital", "Serra og indlandskarakter"][index], title: ["Kapital, højtliggende boligmiljø og institutionel nærhed.", "Etableret kyst med livsstil og likviditet.", "Premiumindgang med livsstil, afkast og timing.", "Indland med karakter, landskab og boligsmæssig særpræg."][index], body: ["Palma, Son Vida, Cala Major, San Agustín og Cas Català samler lokal kapital, international efterspørgsel og aktiver, hvor urban fortælling og privatliv vejer lige så tungt som placering.", "Illetas, Bendinat, Portals, Costa d'en Blanes og Punta Negra fungerer som et system, hvor hav, marina, privatliv og premiumservice bliver centrale værdisignaler.", "Palmanova, Paguera og Costa de la Calma viser et mere fleksibelt premiumsegment, hvor livsstil, indgangsniveau og salgshastighed kræver præcis læsning af mikroområdet.", "Puerto de Andratx, Andratx, Esporles og Valldemossa danner et kluster, hvor arv, landskab, privatliv og boligfortælling vejer mere end nærhed til kysten."][index], audienceLabel: "Køberprofil", audience: ["Formuekøber, der prioriterer kapital, skoler, service og daglig logistik.", "International køber eller family office med fokus på prime-kyst og relationel kontinuitet.", "Hybrid investor, der søger balance mellem eget brug, efterspørgsel og kapitalbevarelse.", "Relationsdrevet UHNW-køber, der værdsætter særpræg, diskretion og aktiver med varig fortælling."][index] })) },
  investors: { ...siteCopySv.investors, eyebrow: "Investorer", title: "National og international kapital, der har brug for mindre udstilling og bedre kontekst.", intro: "Premiuminvestoren søger ikke blot udbud, men en pålidelig læsning af adgang, timing, værdibevarelse og relationel kontinuitet.", asideQuote: "Forskellen ligger ikke i at vise mere produkt, men i at forstå hvilken køber og hvilket tempo hvert aktiv kræver.", profiles: [{ title: "National formueinvestor", body: "Søger solide aktiver, værdibeskyttelse og territorial dømmekraft uden afhængighed af kommerciel støj." }, { title: "International livsstilsinvestor", body: "Prioriterer mikroområde, privatliv, marina, skoler, forbindelse og sikker eksekvering på tværs af grænser." }, { title: "Relationsdrevet UHNW-køber", body: "Kommer ikke ind via katalog, men gennem tillid, adgang, timing og det rigtige netværk." }] },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Anmod om vurdering", title: "Hvad er din ejendom på Mallorca værd?", body: "Hvis du ejer en ejendom i Palma eller sydvestlige Mallorca og ønsker at kende dens reelle markedsværdi, kan vi udføre en fortrolig og uforpligtende vurdering.", checklistLabel: "Vurderingen inkluderer", checklist: ["Analyse af mikroområde og reel konkurrence", "Gennemgang af markeds-timing", "Vurdering tilpasset den rette køberprofil"], form: { ...siteCopyEn.valuation.form, name: "Navn", email: "E-mail", phone: "Telefon", address: "Ejendommens adresse", message: "Besked (valgfrit)", placeholders: { name: "Dit navn", email: "navn@domæne.dk", phone: "+45 ...", address: "Gade, område eller matrikelreference", message: "Del relevante detaljer." }, privacyLabel: "Jeg har læst og accepterer privatlivspolitikken.", submitLabel: "Anmod om fortrolig vurdering", successTitle: "Henvendelse modtaget", successBody: "Vi vender tilbage inden for to hverdage med en privat vurdering.", captchaError: "Gennemfør venligst sikkerhedsbekræftelsen." } },
  sellerIntake: { ...siteCopySv.sellerIntake, eyebrow: "Kunder", title: "Selektiv rådgivning til ejere, købere og investorer.", body: "Vi vurderer hver henvendelse efter intention: salg, køb, vurdering eller investering. En fortrolig premiumtilgang til særlige aktiver i Palma og sydvestlige Mallorca.", checklistLabel: "Kriterier for privat vurdering", checklist: ["Mikroområde og reel konkurrence", "Positionerende fortælling", "Kvalificeret timing og adgang"], form: { ...siteCopySv.sellerIntake.form, intentLabel: "Hvordan kan vi hjælpe?", intentOptions: [{ value: "sell", label: "Jeg ønsker at sælge en ejendom" }, { value: "valuation", label: "Jeg ønsker en privat vurdering" }, { value: "buy", label: "Jeg ønsker at købe en premiumerjendom" }, { value: "invest", label: "Jeg søger investeringsmuligheder" }, { value: "holiday_rental", label: "Jeg vil udleje min ejendom som feriebolig" }], holidayRentalObjective: "Udlejningsmål", holidayRentalAvailability: "Forventet tilgængelighed", holidayRentalObjectiveOptions: ["Maksimalt afkast", "Blandet brug (privat + udlejning)", "Full-service forvaltning"], name: "Navn", email: "E-mail", phone: "Telefon", zone: "Ejendommens område", propertyType: "Ejendomstype", commercialization: "Salgspræference", address: "Ejendommens adresse", budget: "Omtrentligt budget", timing: "Forventet tidslinje", ticket: "Investeringsniveau", goal: "Investeringsmål", message: "Besked", placeholders: { name: "Dit navn", email: "navn@domæne.dk", phone: "+45 ...", zone: "Son Vida, Portals, Andratx...", address: "Gade, område eller matrikelreference", budget: "f.eks. 1M - 3M €", timing: "f.eks. Straks, 6 måneder...", ticket: "f.eks. 500k+, 2M+...", goal: "f.eks. Formue, Afkast...", message: "Fortæl os mere om din henvendelse." }, selectPlaceholder: "Vælg en mulighed", propertyTypeOptions: ["Villa", "Penthouse", "Premiumlejlighed", "Finca"], commercializationOptions: ["Fortrolig vurdering", "Eksklusivt salg", "Selektivt salg uden masseportal"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Straks", "1-3 måneder", "3-6 måneder", "Blot undersøger"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Send privat henvendelse" } },
  partners: { ...siteCopySv.partners, eyebrow: "Synergi · Partnernetværk", title: "Et selektivt netværk for samarbejdspartnere, der forstår premiummarkedet.", body: "Anclora Synergi er den private portal for validerede partnere med territorial dømmekraft.", features: ["Selektiv adgang til delte muligheder", "Samarbejde med fokus på mikroområde og aktivkvalitet", "Kureret optagelse uden kommerciel friktion"], form: { ...siteCopySv.partners.form, name: "Navn", email: "E-mail", serviceCategory: "Servicekategori", serviceSummary: "Beskriv din profil og arbejdsmetode", placeholders: { name: "Dit navn eller virksomhed", email: "navn@domæne.dk", serviceSummary: "Beskriv din professionelle profil, speciale og hvordan du kunne samarbejde med Anclora (min. 20 tegn)." }, selectPlaceholder: "Vælg kategori", serviceCategoryOptions: [{ value: "real_estate", label: "Ejendomme" }, { value: "professional", label: "Professionel / Juridisk / Finans" }, { value: "luxury", label: "Lifestyle & Luksus" }, { value: "eco", label: "Bæredygtighed" }, { value: "other", label: "Andet" }], privacyLabel: "Jeg har læst og accepterer privatlivspolitikken.", submitLabel: "Anmod om adgang til Synergi", successTitle: "Henvendelse modtaget", successBody: "Vi gennemgår din profil og vender tilbage inden for syv dage." } },
  dataLab: { ...siteCopySv.dataLab, title: "Territoriale signaler til at læse premiummarkedet roligere og mindre reaktivt.", intro: "Vi viser ikke dashboards. Vi viser signaler, der hjælper med at forstå aktivkvalitet, efterspørgselspres og premiumkøberens følsomhed.", lead: { eyebrow: "Signal 01", title: "Mangel på velpositionerede prime-aktiver fremmer mere selektive og mindre reaktive beslutninger.", body: "I Palma og sydvest styrker begrænset udbud, vedvarende international efterspørgsel og interesse for turnkey-aktiver værdien af godt forberedte aktiver." }, whitelist: { ...siteCopySv.dataLab.whitelist, form: { ...siteCopySv.dataLab.whitelist.form, intendedUse: "Hvorfor er du interesseret i Data Lab?", placeholders: { name: "Dit navn eller virksomhed", email: "navn@domæne.dk", intendedUse: "Beskriv kort din interesse og investorprofil (min. 20 tegn)." }, privacyLabel: "Jeg har læst og accepterer privatlivspolitikken.", submitLabel: "Anmod om tidlig adgang", successTitle: "På ventelisten", successBody: "Vi giver dig besked, når vi åbner det næste adgangsblok for din profil." } } },
  contact: { ...siteCopyDa.contact, body: "Hvis du overvejer salg, investering eller en ejendomsmulighed i Palma eller sydvestlige Mallorca, kan vi vurdere sagen med dømmekraft, fortrolighed og premiumfokus.", responseNote: "Samtaler håndteres selektivt og med personlig opfølgning.", detailsTitle: "Kontaktoplysninger" },
  finalCta: { ...siteCopyDa.finalCta, eyebrow: "Privat samtale", body: "Palma og sydvestlige Mallorca kræver territorial dømmekraft, fortrolighed og mere præcis kommerciel eksekvering. Vi kan vurdere din sag privat.", primaryCta: "Start privat vurdering", secondaryCta: "Åbn privat samtale" },
  footer: { ...siteCopyDa.footer, columns: [{ title: "Kontakt", links: [{ label: "Åbn privat samtale", href: "#contacto" }] }, { title: "Selektiv adgang", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investorer", href: "#inversores" }, { label: "Kunder", href: "#clientes" }, { label: "Partnere", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Juridisk", links: [{ label: "Privatliv", href: "/privacy" }, { label: "Vilkår", href: "/terms" }, { label: "Juridisk information", href: "/legal" }] }] },
  cookies: { ...siteCopyDa.cookies, title: "Cookieindstillinger", description: "Dette websted bruger cookies til at give en bedre oplevelse. Du kan administrere dine præferencer når som helst.", acceptAll: "Accepter alle", settings: "Indstillinger", settingsTitle: "Administrer cookies", necessary: { title: "Nødvendige cookies", description: "Disse cookies er nødvendige for, at webstedet fungerer." }, analytics: { title: "Analysecookies", description: "De hjælper os med at forstå brugen af webstedet." }, marketing: { title: "Marketingcookies", description: "Bruges til relevante annoncer." }, savePreferences: "Gem præferencer", back: "Tilbage", rejectAll: "Afvis valgfrie" },
  scroll: { up: "Op", down: "Ned" },
  howWeWork: { eyebrow: "Proces · Sådan arbejder vi", title: "Fire trin til en operation baseret på dømmekraft og diskretion.", steps: [{ number: "01", title: "Privat vurdering", description: "Vi analyserer aktivet, mikroområdet og ejerens profil, inden vi aftaler nogen handling." }, { number: "02", title: "Territorial strategi", description: "Vi definerer værdinarrativet, positioneringen og den rette køberprofil for aktivet." }, { number: "03", title: "Kvalificeret adgang", description: "Vi aktiverer adgang til udvalgte købere og investorer uden offentlig eksponering af aktivet." }, { number: "04", title: "Opfølgning og afslutning", description: "Vi ledsager hvert samtale frem til afslutning med dømmekraft, fortrolighed og operationel støtte." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Premiumejere · Ferieboligudlejning i topklasse", title: "Opnå indkomst fra din Mallorca-ejendom uden at opgive diskretion, kontrol eller premiumpositionering.", body: "For villaer, fincas og unikke lejligheder bør ferieboligudlejning ikke behandles som et masseturistprodukt. Vi evaluerer aktivets potentiale, mikroområdet, gæsteprofilen og den operative gennemførlighed.", benefits: ["Privat evaluering af udlejningspotentiale.", "Positionering tilpasset premiumaktiver.", "Rekruttering rettet mod kvalificerede gæster.", "Mere struktureret operativ og dokumentarisk forberedelse.", "Mulighed for at kombinere eget brug, indkomst og fremtidigt salg."], technologyNote: "Dokumentstyring kan understøttes af Anclora SyncXML til at strukturere bookingdata til SES.HOSPEDAJES-flowet. Dette lag giver sporbarhed og mindre dokumentar friktion; det erstatter hverken juridisk gennemgang eller fagmands skøn.", primaryCta: "Evaluér udlejningspotentiale", secondaryCta: "Åbn privat samtale" },
  trustBadgeText: "International støtte og operationel tillid gennem eXp Group Spain.",
});

Object.assign(siteCopyNl, {
  credibility: { eyebrow: "Geloofwaardigheid", title: "Een premiumvoorstel dat geen schaal hoeft te simuleren om vertrouwen te wekken.", intro: "Autoriteit ontstaat hier uit structuur, rugdekking en een volwassen marktlezing.", pillars: ["Onafhankelijke adviseur met steun van eXp Group Spain.", "Meer dan 25 jaar technologische ervaring toegepast op een beter gestructureerde vastgoedaanpak.", "Territoriale intelligentie, geoptimaliseerde processen en een selectief netwerk als werkelijk onderscheid."], credentialBadges: [{ text: "eXp Group Spain", detail: "Globaal netwerk van 80.000+ actieve agenten" }, { text: "Mallorca Premium", detail: "Exclusieve focus op Zuidwest-Mallorca" }, { text: "Internationale koperstoegang", detail: "Gekwalificeerde profielen uit 40+ landen" }] },
  mallorcaFocus: { ...siteCopyDa.mallorcaFocus, title: "Mallorca is geen vlakke lijst met zones, maar een systeem van microzones en signalen.", intro: "Elke enclave vraagt om een eigen commerciële taal. Palma, Portals en Valldemossa hebben niet dezelfde esthetiek of waardeverhaallijn nodig.", areasLabel: "Gebieden", clusters: siteCopyDa.mallorcaFocus.clusters.map((cluster, index) => ({ ...cluster, eyebrow: ["Palma en residentiële hoogte", "Premiumkust van Calvià", "Zuidwest: lifestyle en vermogen", "Serra en binnenlandkarakter"][index], title: ["Kapitaal, residentiële hoogte en institutionele nabijheid.", "Gevestigde kust met lifestyle en liquiditeit.", "Premiuminstap met lifestyle, rendement en timing.", "Binnenland met karakter, landschap en residentiële eigenheid."][index], body: ["Palma, Son Vida, Cala Major, San Agustín en Cas Català combineren lokaal kapitaal, internationale vraag en objecten waar stedelijk verhaal en privacy even zwaar wegen als locatie.", "Illetas, Bendinat, Portals, Costa d'en Blanes en Punta Negra vormen een systeem waarin zee, marina, privacy en premiumdiensten duidelijke waardesignalen zijn.", "Palmanova, Paguera en Costa de la Calma tonen een flexibeler premiumsegment waar lifestyle, instapniveau en verkoopsnelheid fijnzinnige microzonekennis vragen.", "Puerto de Andratx, Andratx, Esporles en Valldemossa vormen een cluster waar erfgoed, landschap, privacy en woonverhaal meer wegen dan kustnabijheid."][index], audienceLabel: "Kopersprofiel", audience: ["Vermogenskoper die kapitaal, scholen, diensten en dagelijkse logistiek prioriteert.", "Internationale koper of family office gericht op prime kust en relationele continuïteit.", "Hybride investeerder die balans zoekt tussen eigen gebruik, vraag en vermogensbehoud.", "Relationele UHNW-koper die eigenheid, discretie en objecten met blijvend verhaal waardeert."][index] })) },
  investors: { ...siteCopyDa.investors, eyebrow: "Investeerders", title: "Nationaal en internationaal kapitaal dat minder etalage en meer context nodig heeft.", intro: "De premiuminvesteerder zoekt niet alleen aanbod, maar een betrouwbare interpretatie van toegang, timing, waardebehoud en relationele continuïteit.", asideQuote: "Het verschil zit niet in meer product tonen, maar in beter begrijpen welke koper en welk tempo elk object vraagt." },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Waardering aanvragen", title: "Wat is uw eigendom op Mallorca waard?", body: "Als u een eigendom bezit in Palma of Zuidwest-Mallorca en de reële marktwaarde wilt kennen, kunnen we een vertrouwelijke en vrijblijvende waardering opstellen.", checklistLabel: "De waardering omvat", checklist: ["Analyse van microzone en reële concurrentie", "Beoordeling van markttiming", "Waardering afgestemd op het juiste kopersprofiel"], form: { ...siteCopyEn.valuation.form, name: "Naam", email: "E-mail", phone: "Telefoon", address: "Adres van het object", message: "Bericht (optioneel)", placeholders: { name: "Uw naam", email: "naam@domein.nl", phone: "+31 ...", address: "Straat, gebied of kadastreferentie", message: "Deel relevante details." }, privacyLabel: "Ik heb het privacybeleid gelezen en accepteer het.", submitLabel: "Vertrouwelijke waardering aanvragen", successTitle: "Aanvraag ontvangen", successBody: "We nemen binnen twee werkdagen contact met u op met een private waardering.", captchaError: "Voltooi de beveiligingsverificatie." } },
  sellerIntake: { ...siteCopyDa.sellerIntake, eyebrow: "Klanten", title: "Selectief advies voor eigenaren, kopers en investeerders.", body: "We beoordelen elke aanvraag naar intentie: verkoop, aankoop, waardering of investering. Een vertrouwelijke premiumaanpak voor bijzondere objecten in Palma en Zuidwest-Mallorca.", checklistLabel: "Criteria voor private beoordeling", checklist: ["Microzone en reële concurrentie", "Positioneringsverhaal", "Gekwalificeerde timing en toegang"], form: { ...siteCopyDa.sellerIntake.form, intentLabel: "Hoe kunnen we u helpen?", intentOptions: [{ value: "sell", label: "Ik wil een object verkopen" }, { value: "valuation", label: "Ik wil een private waardering" }, { value: "buy", label: "Ik wil een premiumobject kopen" }, { value: "invest", label: "Ik zoek investeringsmogelijkheden" }, { value: "holiday_rental", label: "Ik wil mijn object verhuren als vakantiewoning" }], holidayRentalObjective: "Verhuurdoel", holidayRentalAvailability: "Verwachte beschikbaarheid", holidayRentalObjectiveOptions: ["Maximaal rendement", "Gemengd gebruik (privé + verhuur)", "Full-service beheer"], name: "Naam", email: "E-mail", phone: "Telefoon", zone: "Gebied van het object", propertyType: "Type object", commercialization: "Voorkeur commercialisering", address: "Adres van het object", budget: "Geschat budget", timing: "Verwachte tijdlijn", ticket: "Investeringsniveau", goal: "Investeringsdoel", message: "Bericht", placeholders: { name: "Uw naam", email: "naam@domein.nl", phone: "+31 ...", zone: "Son Vida, Portals, Andratx...", address: "Straat, gebied of kadastreferentie", budget: "bijv. 1M - 3M €", timing: "bijv. Direct, 6 maanden...", ticket: "bijv. 500k+, 2M+...", goal: "bijv. Vermogen, Rendement...", message: "Vertel ons meer over uw aanvraag." }, selectPlaceholder: "Selecteer een optie", propertyTypeOptions: ["Villa", "Penthouse", "Premiumappartement", "Finca"], commercializationOptions: ["Vertrouwelijke beoordeling", "Exclusieve verkoop", "Selectieve verkoop zonder massamarktportal"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Direct", "1-3 maanden", "3-6 maanden", "Alleen verkennen"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Privé aanvraag verzenden" } },
  partners: { ...siteCopyDa.partners, eyebrow: "Synergi · Partnernetwerk", title: "Een selectief netwerk voor partners die de premiummarkt begrijpen.", body: "Anclora Synergi is de private portal voor gevalideerde partners met territoriaal oordeel.", features: ["Selectieve toegang tot gedeelde kansen", "Samenwerking met focus op microzone en objectkwaliteit", "Gecureerd toelatingsproces zonder commerciële frictie"], form: { ...siteCopyDa.partners.form, name: "Naam", email: "E-mail", serviceCategory: "Servicecategorie", serviceSummary: "Beschrijf uw profiel en werkwijze", placeholders: { name: "Uw naam of bedrijf", email: "naam@domein.nl", serviceSummary: "Beschrijf uw professioneel profiel, specialisatie en hoe u met Anclora zou kunnen samenwerken (min. 20 tekens)." }, selectPlaceholder: "Selecteer een categorie", serviceCategoryOptions: [{ value: "real_estate", label: "Vastgoed" }, { value: "professional", label: "Professioneel / Juridisch / Financieel" }, { value: "luxury", label: "Lifestyle & Luxe" }, { value: "eco", label: "Duurzaamheid" }, { value: "other", label: "Overig" }], privacyLabel: "Ik heb het privacybeleid gelezen en accepteer het.", submitLabel: "Toegang aanvragen tot Synergi", successTitle: "Aanvraag ontvangen", successBody: "We beoordelen uw profiel en nemen binnen zeven dagen contact met u op." } },
  dataLab: { ...siteCopyDa.dataLab, title: "Territoriale signalen om de premiummarkt rustiger en minder reactief te lezen.", intro: "We tonen geen dashboards. We tonen signalen die objectkwaliteit, vraagdruk en gevoeligheid van premiumkopers helpen duiden.", whitelist: { ...siteCopyDa.dataLab.whitelist, form: { ...siteCopyDa.dataLab.whitelist.form, intendedUse: "Waarom bent u geïnteresseerd in het Data Lab?", placeholders: { name: "Uw naam of bedrijf", email: "naam@domein.nl", intendedUse: "Beschrijf kort uw interesse en investeursprofiel (min. 20 tekens)." }, privacyLabel: "Ik heb het privacybeleid gelezen en accepteer het.", submitLabel: "Vroege toegang aanvragen", successTitle: "Op de wachtlijst", successBody: "We informeren u wanneer het volgende toegangsblok voor uw profiel opengaat." } } },
  contact: { ...siteCopyNl.contact, body: "Als u verkoop, investering of een vastgoedkans in Palma of Zuidwest-Mallorca overweegt, kunnen we uw situatie met oordeel, vertrouwelijkheid en premiumfocus beoordelen.", responseNote: "Gesprekken worden selectief en persoonlijk opgevolgd.", detailsTitle: "Contactgegevens" },
  finalCta: { ...siteCopyNl.finalCta, eyebrow: "Privégesprek", body: "Palma en Zuidwest-Mallorca vragen om territoriaal oordeel, vertrouwelijkheid en preciezere commerciële uitvoering. We kunnen uw situatie privé beoordelen.", primaryCta: "Start private beoordeling", secondaryCta: "Open privégesprek" },
  footer: { ...siteCopyNl.footer, columns: [{ title: "Contact", links: [{ label: "Privégesprek openen", href: "#contacto" }] }, { title: "Selectieve toegang", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investeerders", href: "#inversores" }, { label: "Klanten", href: "#clientes" }, { label: "Partners", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Juridisch", links: [{ label: "Privacy", href: "/privacy" }, { label: "Voorwaarden", href: "/terms" }, { label: "Juridische mededeling", href: "/legal" }] }] },
  cookies: { ...siteCopyNl.cookies, title: "Cookievoorkeuren", description: "Deze site gebruikt cookies voor een betere ervaring. U kunt uw voorkeuren altijd beheren.", acceptAll: "Alles accepteren", settings: "Instellingen", settingsTitle: "Cookies beheren", necessary: { title: "Noodzakelijke cookies", description: "Deze cookies zijn nodig voor de werking van de site." }, analytics: { title: "Analysecookies", description: "Ze helpen ons te begrijpen hoe bezoekers de site gebruiken." }, marketing: { title: "Marketingcookies", description: "Worden gebruikt voor relevante advertenties." }, savePreferences: "Voorkeuren opslaan", back: "Terug", rejectAll: "Optionele weigeren" },
  scroll: { up: "Omhoog", down: "Omlaag" },
  howWeWork: { eyebrow: "Proces · Hoe wij werken", title: "Vier stappen voor een operatie gebouwd op oordeel en discretie.", steps: [{ number: "01", title: "Privé beoordeling", description: "We analyseren het actief, de microlocatie en het profiel van de eigenaar voordat we actie ondernemen." }, { number: "02", title: "Territoriale strategie", description: "We definiëren het waardenarrief, de positionering en het juiste kopersprofiel voor het actief." }, { number: "03", title: "Gekwalificeerde toegang", description: "We activeren toegang tot geselecteerde kopers en investeerders zonder publieke blootstelling van het actief." }, { number: "04", title: "Opvolging en afsluiting", description: "We begeleiden elk gesprek tot afsluiting met oordeel, vertrouwelijkheid en operationele ondersteuning." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Premiumeigenaren · Vakantieverhuur in het topsegment", title: "Verdien aan uw Mallorca-woning zonder afstand te doen van discretie, controle of premiumpositionering.", body: "Voor villa's, finca's en unieke appartementen mag vakantieverhuur niet als een massatoerismeproduct worden behandeld. We beoordelen het potentieel van het actief, de microlocatie, het gastprofiel en de operationele haalbaarheid.", benefits: ["Privé evaluatie van verhuringspotentieel.", "Positionering afgestemd op premiumactiva.", "Werving gericht op gekwalificeerde gasten.", "Meer gestructureerde operationele en documentaire voorbereiding.", "Mogelijkheid om eigen gebruik, inkomen en toekomstige verkoop te combineren."], technologyNote: "Documentbeheer kan worden ondersteund door Anclora SyncXML voor het structureren van boekingsgegevens voor de SES.HOSPEDAJES-stroom. Deze laag biedt traceerbaarheid en minder documentaire wrijving; zij vervangt noch juridische controle, noch het oordeel van de professional.", primaryCta: "Verhuringspotentieel beoordelen", secondaryCta: "Privégesprek openen" },
  trustBadgeText: "Internationale steun en operationeel vertrouwen via eXp Group Spain.",
});

Object.assign(siteCopyIt, {
  credibility: { eyebrow: "Credibilità", title: "Una proposta premium che non ha bisogno di simulare scala per generare fiducia.", intro: "L'autorevolezza nasce da struttura, supporto e una lettura più matura del mercato.", pillars: ["Agente indipendente con il supporto di eXp Group Spain.", "Oltre 25 anni di esperienza tecnologica applicati a un'operatività immobiliare più strutturata.", "Intelligenza territoriale, processi ottimizzati e rete selettiva come differenza reale."], credentialBadges: [{ text: "eXp Group Spain", detail: "Rete globale di 80.000+ agenti attivi" }, { text: "Mallorca Premium", detail: "Focus esclusivo sul sud-ovest di Maiorca" }, { text: "Accesso acquirenti internazionali", detail: "Profili qualificati da 40+ paesi" }] },
  mallorcaFocus: { ...siteCopyNl.mallorcaFocus, title: "Mallorca non si legge come una lista piatta di zone, ma come un sistema di microzone e segnali.", intro: "Ogni enclave richiede un linguaggio commerciale proprio. Palma, Portals e Valldemossa non hanno bisogno della stessa estetica né dello stesso racconto di valore.", areasLabel: "Aree", clusters: siteCopyNl.mallorcaFocus.clusters.map((cluster, index) => ({ ...cluster, eyebrow: ["Palma e residenziale in altura", "Costa premium di Calvià", "Sud-ovest: lifestyle e patrimonio", "Serra e carattere dell'interno"][index], title: ["Capitale, residenziale elevato e accesso istituzionale.", "Costa consolidata con lifestyle e liquidità.", "Ingresso premium con lifestyle, rendimento e timing.", "Interno con carattere, paesaggio e singolarità residenziale."][index], body: ["Palma, Son Vida, Cala Major, San Agustín e Cas Català concentrano capitale locale, domanda internazionale e asset in cui racconto urbano e privacy contano quanto la posizione.", "Illetas, Bendinat, Portals, Costa d'en Blanes e Punta Negra funzionano come un sistema in cui mare, marina, privacy e servizi premium diventano segnali chiave di valore.", "Palmanova, Paguera e Costa de la Calma mostrano una fascia premium più flessibile, dove lifestyle, ticket d'ingresso e velocità commerciale richiedono criterio di microzona.", "Puerto de Andratx, Andratx, Esporles e Valldemossa formano un cluster in cui patrimonio, paesaggio, privacy e racconto residenziale pesano più della vicinanza alla costa."][index], audienceLabel: "Profilo acquirente", audience: ["Acquirente patrimoniale che privilegia capitale, scuole, servizi e logistica quotidiana.", "Acquirente internazionale o family office orientato a costa prime e continuità relazionale.", "Investitore ibrido che cerca equilibrio tra uso personale, domanda e conservazione patrimoniale.", "Acquirente UHNW relazionale che apprezza singolarità, discrezione e asset con racconto duraturo."][index] })) },
  investors: { ...siteCopyNl.investors, eyebrow: "Investitori", title: "Capitale nazionale e internazionale che richiede meno vetrina e più contesto.", intro: "L'investitore premium non cerca solo stock; cerca una lettura affidabile di accesso, timing, conservazione del valore e continuità relazionale.", asideQuote: "La differenza non è mostrare più prodotto, ma capire quale acquirente e quale ritmo richiede ogni asset." },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Richiedi valutazione", title: "Quanto vale il tuo immobile a Mallorca?", body: "Se possiedi un immobile a Palma o nel sud-ovest di Mallorca e vuoi conoscerne il valore reale di mercato, possiamo eseguire una valutazione riservata e senza impegno.", checklistLabel: "La valutazione include", checklist: ["Analisi della microzona e della concorrenza reale", "Lettura del timing di mercato", "Valutazione orientata al profilo acquirente adatto"], form: { ...siteCopyEn.valuation.form, name: "Nome", email: "E-mail", phone: "Telefono", address: "Indirizzo dell'immobile", message: "Messaggio (opzionale)", placeholders: { name: "Il tuo nome", email: "nome@dominio.it", phone: "+39 ...", address: "Via, zona o riferimento catastale", message: "Condividi dettagli rilevanti." }, privacyLabel: "Ho letto e accetto la politica sulla privacy.", submitLabel: "Richiedi valutazione riservata", successTitle: "Richiesta ricevuta", successBody: "Ti risponderemo entro due giorni lavorativi con una valutazione privata.", captchaError: "Completa la verifica di sicurezza." } },
  sellerIntake: { ...siteCopyNl.sellerIntake, eyebrow: "Clienti", title: "Consulenza selettiva per proprietari, acquirenti e investitori.", body: "Valutiamo ogni richiesta in base all'intenzione: vendita, acquisto, valutazione o investimento. Approccio premium e riservato per asset singolari a Palma e nel sud-ovest di Mallorca.", checklistLabel: "Criteri di valutazione privata", checklist: ["Microzona e concorrenza reale", "Racconto di posizionamento", "Timing e accesso qualificato"], form: { ...siteCopyNl.sellerIntake.form, intentLabel: "Come possiamo aiutarti?", intentOptions: [{ value: "sell", label: "Voglio vendere un immobile" }, { value: "valuation", label: "Voglio una valutazione privata" }, { value: "buy", label: "Voglio acquistare un immobile premium" }, { value: "invest", label: "Cerco opportunità di investimento" }, { value: "holiday_rental", label: "Voglio affittare il mio immobile come casa vacanza" }], holidayRentalObjective: "Obiettivo di locazione", holidayRentalAvailability: "Disponibilità prevista", holidayRentalObjectiveOptions: ["Rendimento massimo", "Uso misto (personale + affitto)", "Gestione full-service"], name: "Nome", email: "E-mail", phone: "Telefono", zone: "Zona dell'immobile", propertyType: "Tipo di immobile", commercialization: "Preferenza di commercializzazione", address: "Indirizzo dell'immobile", budget: "Budget approssimativo", timing: "Tempistica prevista", ticket: "Ticket di investimento", goal: "Obiettivo di investimento", message: "Messaggio", placeholders: { name: "Il tuo nome", email: "nome@dominio.it", phone: "+39 ...", zone: "Son Vida, Portals, Andratx...", address: "Via, zona o riferimento catastale", budget: "es. 1M - 3M €", timing: "es. Immediato, 6 mesi...", ticket: "es. 500k+, 2M+...", goal: "es. Patrimonio, Rendimento...", message: "Raccontaci i dettagli della tua richiesta." }, selectPlaceholder: "Seleziona un'opzione", propertyTypeOptions: ["Villa", "Attico", "Appartamento premium", "Finca"], commercializationOptions: ["Valutazione riservata", "Vendita in esclusiva", "Vendita selettiva senza portale di massa"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Immediato", "1-3 mesi", "3-6 mesi", "Solo esplorazione"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Invia richiesta privata" } },
  partners: { ...siteCopyNl.partners, eyebrow: "Synergi · Rete partner", title: "Una rete selettiva per partner che comprendono il mercato premium.", body: "Anclora Synergi è il portale privato per partner validati con criterio territoriale.", features: ["Accesso selettivo a opportunità condivise", "Collaborazione centrata su microzona e qualità dell'asset", "Processo di ammissione curato e senza frizione commerciale"], form: { ...siteCopyNl.partners.form, name: "Nome", email: "E-mail", serviceCategory: "Tipo di servizio", serviceSummary: "Descrivi il tuo profilo e il tuo metodo di lavoro", placeholders: { name: "Il tuo nome o azienda", email: "nome@dominio.it", serviceSummary: "Descrivi il tuo profilo professionale, la specializzazione e come potresti collaborare con Anclora (min. 20 caratteri)." }, selectPlaceholder: "Seleziona una categoria", serviceCategoryOptions: [{ value: "real_estate", label: "Immobiliare" }, { value: "professional", label: "Professionale / Legale / Finanziario" }, { value: "luxury", label: "Lifestyle & Lusso" }, { value: "eco", label: "Sostenibilità" }, { value: "other", label: "Altro" }], privacyLabel: "Ho letto e accetto la politica sulla privacy.", submitLabel: "Richiedi accesso a Synergi", successTitle: "Richiesta ricevuta", successBody: "Esamineremo il tuo profilo e ti risponderemo entro sette giorni." } },
  dataLab: { ...siteCopyNl.dataLab, title: "Segnali territoriali per leggere il mercato premium con più calma e meno reazione.", intro: "Non presentiamo dashboard. Presentiamo segnali che aiutano a inquadrare qualità dell'asset, pressione della domanda e sensibilità dell'acquirente premium.", whitelist: { ...siteCopyNl.dataLab.whitelist, form: { ...siteCopyNl.dataLab.whitelist.form, intendedUse: "Perché sei interessato al Data Lab?", placeholders: { name: "Il tuo nome o azienda", email: "nome@dominio.it", intendedUse: "Descrivi brevemente il tuo interesse e il profilo investitore (min. 20 caratteri)." }, privacyLabel: "Ho letto e accetto la politica sulla privacy.", submitLabel: "Richiedi accesso anticipato", successTitle: "In lista d'attesa", successBody: "Ti informeremo quando apriremo il prossimo blocco di accesso per il tuo profilo." } } },
  contact: { ...siteCopyIt.contact, body: "Se stai valutando una vendita, un investimento o un'opportunità patrimoniale a Palma o nel sud-ovest di Mallorca, possiamo studiare il tuo caso con criterio, riservatezza e approccio premium.", responseNote: "Le conversazioni sono gestite in modo selettivo con riscontro personale.", detailsTitle: "Contatti" },
  finalCta: { ...siteCopyIt.finalCta, eyebrow: "Conversazione privata", body: "Palma e il sud-ovest di Mallorca richiedono criterio territoriale, riservatezza ed esecuzione commerciale più precisa. Possiamo studiare il tuo caso in privato.", primaryCta: "Avvia valutazione privata", secondaryCta: "Apri conversazione privata" },
  footer: { ...siteCopyIt.footer, columns: [{ title: "Contatto", links: [{ label: "Apri conversazione privata", href: "#contacto" }] }, { title: "Accesso selettivo", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investitori", href: "#inversores" }, { label: "Clienti", href: "#clientes" }, { label: "Partner", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Legale", links: [{ label: "Privacy", href: "/privacy" }, { label: "Termini", href: "/terms" }, { label: "Note legali", href: "/legal" }] }] },
  cookies: { ...siteCopyIt.cookies, title: "Preferenze cookie", description: "Questo sito utilizza cookie per offrirti un'esperienza migliore. Puoi gestire le preferenze in qualsiasi momento.", acceptAll: "Accetta tutti", settings: "Impostazioni", settingsTitle: "Gestisci cookie", necessary: { title: "Cookie necessari", description: "Sono necessari per il funzionamento del sito." }, analytics: { title: "Cookie di analisi", description: "Ci aiutano a capire come i visitatori usano il sito." }, marketing: { title: "Cookie marketing", description: "Sono usati per mostrare annunci pertinenti." }, savePreferences: "Salva preferenze", back: "Indietro", rejectAll: "Rifiuta opzionali" },
  scroll: { up: "Su", down: "Giù" },
  howWeWork: { eyebrow: "Processo · Come lavoriamo", title: "Quattro passi per un'operazione condotta con criterio e discrezione.", steps: [{ number: "01", title: "Valutazione privata", description: "Analizziamo l'asset, la microzona e il profilo del proprietario prima di concordare qualsiasi azione." }, { number: "02", title: "Strategia territoriale", description: "Definiamo il racconto di valore, il posizionamento e il profilo di acquirente adatto all'asset." }, { number: "03", title: "Accesso qualificato", description: "Attiviamo l'accesso ad acquirenti e investitori selezionati senza esposizione pubblica dell'asset." }, { number: "04", title: "Accompagnamento e chiusura", description: "Accompagniamo ogni conversazione fino alla chiusura con criterio, riservatezza e supporto operativo." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Proprietari premium · Affitto vacanziero di alto standing", title: "Rendere redditizia la tua proprietà a Mallorca senza rinunciare a discrezione, controllo né posizionamento premium.", body: "Per ville, fincas e appartamenti singolari, l'affitto vacanziero non dovrebbe essere trattato come un prodotto turistico di massa. Valutiamo il potenziale dell'asset, la microzona, il profilo dell'ospite e la fattibilità operativa.", benefits: ["Valutazione privata del potenziale locativo.", "Posizionamento allineato ad asset di alto standing.", "Acquisizione orientata a ospiti qualificati.", "Preparazione operativa e documentale più ordinata.", "Possibilità di combinare uso personale, reddito e futura vendita."], technologyNote: "La gestione documentale può avvalersi di Anclora SyncXML per strutturare i dati delle prenotazioni per il flusso SES.HOSPEDAJES. Questo strato fornisce tracciabilità e minore attrito documentale; non sostituisce la revisione legale né il giudizio del professionista.", primaryCta: "Valutare il potenziale locativo", secondaryCta: "Aprire conversazione privata" },
  trustBadgeText: "Supporto internazionale e fiducia operativa tramite eXp Group Spain.",
});

Object.assign(siteCopyNo, {
  credibility: { ...siteCopyDa.credibility, eyebrow: "Tillit", title: "Et premiumtilbud som ikke trenger å late som det er større for å skape tillit.", intro: "Autoritet formidles gjennom struktur, forankring og en mer moden markedsforståelse.", pillars: ["Uavhengig rådgiver med støtte fra eXp Group Spain.", "Mer enn 25 års teknologisk erfaring brukt på en bedre strukturert eiendomsprosess.", "Territoriell intelligens, optimaliserte prosesser og et selektivt nettverk som reell forskjell."], credentialBadges: [{ text: "eXp Group Spain", detail: "Globalt nettverk med 80 000+ aktive agenter" }, { text: "Mallorca Premium", detail: "Eksklusivt fokus på sørvest Mallorca" }, { text: "Internasjonal kjøpertilgang", detail: "Kvalifiserte profiler fra 40+ land" }] },
  mallorcaFocus: { ...siteCopyDa.mallorcaFocus, title: "Mallorca leses ikke som en flat liste over områder, men som et system av mikrosoner og signaler.", intro: "Hvert område krever sitt eget kommersielle språk. Palma, Portals og Valldemossa trenger ikke samme estetikk eller verdifortelling.", areasLabel: "Områder", clusters: siteCopyDa.mallorcaFocus.clusters.map((cluster, index) => ({ ...cluster, eyebrow: ["Palma og høytliggende boligområder", "Calviàs premiumkyst", "Sørvest: livsstil og kapital", "Serra og innlandskarakter"][index], audienceLabel: "Kjøperprofil" })) },
  investors: { ...siteCopyDa.investors, eyebrow: "Investorer", title: "Nasjonal og internasjonal kapital som trenger mindre utstilling og bedre kontekst.", intro: "Premiuminvestoren søker ikke bare tilbud, men en pålitelig lesning av tilgang, timing, verdibevaring og relasjonell kontinuitet." },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Be om verdivurdering", title: "Hva er eiendommen din på Mallorca verdt?", body: "Hvis du eier en eiendom i Palma eller sørvestlige Mallorca og ønsker å kjenne den reelle markedsverdien, kan vi gjennomføre en konfidensiell og uforpliktende vurdering.", checklistLabel: "Verdivurderingen inkluderer", checklist: ["Analyse av mikrosone og reell konkurranse", "Gjennomgang av markeds-timing", "Vurdering tilpasset riktig kjøperprofil"], form: { ...siteCopyEn.valuation.form, name: "Navn", email: "E-post", phone: "Telefon", address: "Eiendommens adresse", message: "Melding (valgfritt)", placeholders: { name: "Ditt navn", email: "navn@domene.no", phone: "+47 ...", address: "Gate, område eller matrikkelreferanse", message: "Del relevante detaljer." }, privacyLabel: "Jeg har lest og aksepterer personvernpolicyen.", submitLabel: "Be om konfidensiell verdivurdering", successTitle: "Henvendelse mottatt", successBody: "Vi svarer innen to virkedager med en privat vurdering.", captchaError: "Fullfør sikkerhetsverifiseringen." } },
  sellerIntake: { ...siteCopyDa.sellerIntake, eyebrow: "Kunder", title: "Selektiv rådgivning for eiere, kjøpere og investorer.", body: "Vi vurderer hver henvendelse etter intensjon: salg, kjøp, verdivurdering eller investering. En konfidensiell premiumtilnærming for særlige eiendeler i Palma og sørvestlige Mallorca.", checklistLabel: "Kriterier for privat vurdering", checklist: ["Mikrosone og reell konkurranse", "Posisjoneringsfortelling", "Kvalifisert timing og tilgang"], form: { ...siteCopyDa.sellerIntake.form, intentLabel: "Hvordan kan vi hjelpe?", intentOptions: [{ value: "sell", label: "Jeg ønsker å selge en eiendom" }, { value: "valuation", label: "Jeg ønsker en privat vurdering" }, { value: "buy", label: "Jeg ønsker å kjøpe en premiumeiendom" }, { value: "invest", label: "Jeg søker investeringsmuligheter" }, { value: "holiday_rental", label: "Jeg vil leie ut eiendommen min som feriebolig" }], holidayRentalObjective: "Utleiemål", holidayRentalAvailability: "Forventet tilgjengelighet", holidayRentalObjectiveOptions: ["Maksimal avkastning", "Blandet bruk (privat + utleie)", "Full-service forvaltning"], name: "Navn", email: "E-post", phone: "Telefon", zone: "Eiendommens område", propertyType: "Eiendomstype", commercialization: "Salgspreferanse", address: "Eiendommens adresse", budget: "Omtrentlig budsjett", timing: "Forventet tidslinje", ticket: "Investeringsnivå", goal: "Investeringsmål", message: "Melding", placeholders: { name: "Ditt navn", email: "navn@domene.no", phone: "+47 ...", zone: "Son Vida, Portals, Andratx...", address: "Gate, område eller matrikkelreferanse", budget: "f.eks. 1M - 3M €", timing: "f.eks. Umiddelbart, 6 måneder...", ticket: "f.eks. 500k+, 2M+...", goal: "f.eks. Formue, Avkastning...", message: "Fortell oss mer om henvendelsen din." }, selectPlaceholder: "Velg et alternativ", propertyTypeOptions: ["Villa", "Penthouse", "Premiumleilighet", "Finca"], commercializationOptions: ["Konfidensiell vurdering", "Eksklusivt salg", "Selektivt salg uten masseportal"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Umiddelbart", "1-3 måneder", "3-6 måneder", "Bare utforsker"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Send privat henvendelse" } },
  partners: { ...siteCopyDa.partners, eyebrow: "Synergi · Partnernettverk", title: "Et selektivt nettverk for partnere som forstår premiummarkedet.", form: { ...siteCopyDa.partners.form, name: "Navn", email: "E-post", serviceCategory: "Tjenestekategori", serviceSummary: "Beskriv din profil og arbeidsmåte", placeholders: { name: "Ditt navn eller selskap", email: "navn@domene.no", serviceSummary: "Beskriv din faglige profil, spesialisering og hvordan du kan samarbeide med Anclora (min. 20 tegn)." }, selectPlaceholder: "Velg kategori", serviceCategoryOptions: [{ value: "real_estate", label: "Eiendom" }, { value: "professional", label: "Profesjonell / Juridisk / Finans" }, { value: "luxury", label: "Lifestyle & Luksus" }, { value: "eco", label: "Bærekraft" }, { value: "other", label: "Annet" }], privacyLabel: "Jeg har lest og aksepterer personvernpolicyen.", submitLabel: "Be om tilgang til Synergi", successTitle: "Henvendelse mottatt", successBody: "Vi gjennomgår profilen din og svarer innen syv dager." } },
  dataLab: { ...siteCopyDa.dataLab, title: "Territorielle signaler for å lese premiummarkedet roligere og mindre reaktivt.", intro: "Vi viser ikke dashboards. Vi viser signaler som hjelper med å forstå eiendelskvalitet, etterspørselspress og premiumkjøperens følsomhet.", whitelist: { ...siteCopyDa.dataLab.whitelist, form: { ...siteCopyDa.dataLab.whitelist.form, intendedUse: "Hvorfor er du interessert i Data Lab?", placeholders: { name: "Ditt navn eller selskap", email: "navn@domene.no", intendedUse: "Beskriv kort din interesse og investorprofil (min. 20 tegn)." }, privacyLabel: "Jeg har lest og aksepterer personvernpolicyen.", submitLabel: "Be om tidlig tilgang", successTitle: "På ventelisten", successBody: "Vi gir deg beskjed når neste tilgangsblokk åpner for din profil." } } },
  contact: { ...siteCopyNo.contact, body: "Hvis du vurderer salg, investering eller en eiendomsmulighet i Palma eller sørvestlige Mallorca, kan vi vurdere saken med skjønn, konfidensialitet og premiumfokus.", responseNote: "Samtaler håndteres selektivt og med personlig oppfølging.", detailsTitle: "Kontaktinformasjon" },
  finalCta: { ...siteCopyNo.finalCta, eyebrow: "Privat samtale", body: "Palma og sørvestlige Mallorca krever territorielt skjønn, konfidensialitet og mer presis kommersiell gjennomføring. Vi kan vurdere saken privat.", primaryCta: "Start privat vurdering", secondaryCta: "Åpne privat samtale" },
  footer: { ...siteCopyNo.footer, columns: [{ title: "Kontakt", links: [{ label: "Åpne privat samtale", href: "#contacto" }] }, { title: "Selektiv tilgang", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investorer", href: "#inversores" }, { label: "Kunder", href: "#clientes" }, { label: "Partnere", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Juridisk", links: [{ label: "Personvern", href: "/privacy" }, { label: "Vilkår", href: "/terms" }, { label: "Juridisk informasjon", href: "/legal" }] }] },
  cookies: { ...siteCopyDa.cookies, title: "Cookieinnstillinger", description: "Dette nettstedet bruker informasjonskapsler for å gi en bedre opplevelse. Du kan administrere dine preferanser når som helst.", acceptAll: "Godta alle", settings: "Innstillinger", settingsTitle: "Administrer cookies", necessary: { title: "Nødvendige cookies", description: "Disse informasjonskapslene er nødvendige for at nettstedet skal fungere." }, analytics: { title: "Analysecookies", description: "De hjelper oss å forstå hvordan besøkende bruker nettstedet." }, marketing: { title: "Markedsføringscookies", description: "Brukes til å vise relevante annonser." }, savePreferences: "Lagre preferanser", back: "Tilbake", rejectAll: "Avvis valgfrie" },
  scroll: { up: "Opp", down: "Ned" },
  howWeWork: { eyebrow: "Prosess · Slik jobber vi", title: "Fire trinn for en operasjon bygget på skjønn og diskresjon.", steps: [{ number: "01", title: "Privat vurdering", description: "Vi analyserer eiendelen, mikrosonen og eierens profil før vi avtaler noen handling." }, { number: "02", title: "Territoriell strategi", description: "Vi definerer verdinarrativet, posisjoneringen og riktig kjøperprofil for eiendelen." }, { number: "03", title: "Kvalifisert tilgang", description: "Vi aktiverer tilgang til utvalgte kjøpere og investorer uten offentlig eksponering av eiendelen." }, { number: "04", title: "Oppfølging og avslutning", description: "Vi følger hvert samtale frem til avslutning med skjønn, konfidensialitet og operativ støtte." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Premiumeiere · Ferieutleie i toppklassen", title: "Generer inntekter fra din Mallorca-eiendom uten å ofre diskresjon, kontroll eller premiumposisjonering.", body: "For villaer, fincas og unike leiligheter bør ferieutleie ikke behandles som et masseturistprodukt. Vi evaluerer eiendelens potensial, mikrosonen, gjesteprofilen og operativ gjennomførbarhet.", benefits: ["Privat evaluering av utleiepotensial.", "Posisjonering tilpasset premiueiendeler.", "Rekruttering rettet mot kvalifiserte gjester.", "Mer strukturert operativ og dokumentarisk forberedelse.", "Mulighet til å kombinere eget bruk, inntekt og fremtidig salg."], technologyNote: "Dokumenthåndteringen kan støttes av Anclora SyncXML for å strukturere bestillingsdata for SES.HOSPEDAJES-flyten. Dette laget gir sporbarhet og mindre dokumentarisk friksjon; det erstatter verken juridisk gjennomgang eller faglig skjønn.", primaryCta: "Evaluer utleiepotensial", secondaryCta: "Åpne privat samtale" },
  trustBadgeText: "Internasjonal støtte og operativ tillit gjennom eXp Group Spain.",
});

Object.assign(siteCopyPt, {
  credibility: { eyebrow: "Credibilidade", title: "Uma proposta premium que não precisa de simular escala para transmitir confiança.", intro: "A autoridade nasce de estrutura, suporte e uma leitura mais madura do mercado.", pillars: ["Consultor independente com suporte da eXp Group Spain.", "Mais de 25 anos de experiência tecnológica aplicados a uma operação imobiliária mais estruturada.", "Inteligência territorial, processos optimizados e rede selectiva como diferença real."], credentialBadges: [{ text: "eXp Group Spain", detail: "Rede global com 80.000+ agentes activos" }, { text: "Mallorca Premium", detail: "Foco exclusivo no sudoeste de Maiorca" }, { text: "Acesso a compradores internacionais", detail: "Perfis qualificados de 40+ países" }] },
  mallorcaFocus: { ...siteCopyIt.mallorcaFocus, title: "Mallorca não se lê como uma lista plana de zonas, mas como um sistema de microzonas e sinais.", intro: "Cada enclave exige uma linguagem comercial própria. Palma, Portals e Valldemossa não pedem a mesma estética nem a mesma narrativa de valor.", areasLabel: "Áreas", clusters: siteCopyIt.mallorcaFocus.clusters.map((cluster, index) => ({ ...cluster, eyebrow: ["Palma e zona residencial elevada", "Costa premium de Calvià", "Sudoeste: lifestyle e património", "Serra e carácter de interior"][index], audienceLabel: "Perfil de comprador" })) },
  investors: { ...siteCopyIt.investors, eyebrow: "Investidores", title: "Capital nacional e internacional que precisa de menos montra e mais contexto.", intro: "O investidor premium não procura apenas oferta; procura uma leitura fiável de acesso, timing, preservação de valor e continuidade relacional." },
  valuation: { ...siteCopyEn.valuation, eyebrow: "Solicitar avaliação", title: "Quanto vale o seu imóvel em Mallorca?", body: "Se possui um imóvel em Palma ou no sudoeste de Mallorca e quer conhecer o seu valor real de mercado, podemos realizar uma avaliação confidencial e sem compromisso.", checklistLabel: "A avaliação inclui", checklist: ["Análise de microzona e concorrência real", "Leitura do timing de mercado", "Avaliação orientada para o perfil de comprador adequado"], form: { ...siteCopyEn.valuation.form, name: "Nome", email: "E-mail", phone: "Telefone", address: "Endereço do imóvel", message: "Mensagem (opcional)", placeholders: { name: "O seu nome", email: "nome@dominio.pt", phone: "+351 ...", address: "Rua, zona ou referência cadastral", message: "Partilhe detalhes relevantes." }, privacyLabel: "Li e aceito a política de privacidade.", submitLabel: "Solicitar avaliação confidencial", successTitle: "Pedido recebido", successBody: "Respondemos em dois dias úteis com uma avaliação privada.", captchaError: "Conclua a verificação de segurança." } },
  sellerIntake: { ...siteCopyIt.sellerIntake, eyebrow: "Clientes", title: "Consultoria selectiva para proprietários, compradores e investidores.", body: "Avaliamos cada pedido segundo a sua intenção: venda, compra, avaliação ou investimento. Abordagem premium e confidencial para activos singulares em Palma e no sudoeste de Mallorca.", checklistLabel: "Critérios de avaliação privada", checklist: ["Microzona e concorrência real", "Narrativa de posicionamento", "Timing e acesso qualificado"], form: { ...siteCopyIt.sellerIntake.form, intentLabel: "Como podemos ajudar?", intentOptions: [{ value: "sell", label: "Quero vender um imóvel" }, { value: "valuation", label: "Quero uma avaliação privada" }, { value: "buy", label: "Quero comprar um imóvel premium" }, { value: "invest", label: "Procuro oportunidades de investimento" }, { value: "holiday_rental", label: "Quero rentabilizar o meu imóvel como alojamento de férias" }], holidayRentalObjective: "Objectivo de exploração", holidayRentalAvailability: "Disponibilidade prevista", holidayRentalObjectiveOptions: ["Rendimento máximo", "Uso misto (pessoal + arrendamento)", "Gestão full-service"], name: "Nome", email: "E-mail", phone: "Telefone", zone: "Zona do imóvel", propertyType: "Tipo de imóvel", commercialization: "Preferência de comercialização", address: "Endereço do imóvel", budget: "Orçamento aproximado", timing: "Prazo previsto", ticket: "Ticket de investimento", goal: "Objectivo de investimento", message: "Mensagem", placeholders: { name: "O seu nome", email: "nome@dominio.pt", phone: "+351 ...", zone: "Son Vida, Portals, Andratx...", address: "Rua, zona ou referência cadastral", budget: "ex: 1M - 3M €", timing: "ex: Imediato, 6 meses...", ticket: "ex: 500k+, 2M+...", goal: "ex: Património, Rendimento...", message: "Conte-nos mais detalhes sobre o seu pedido." }, selectPlaceholder: "Seleccione uma opção", propertyTypeOptions: ["Villa", "Penthouse", "Apartamento premium", "Finca"], commercializationOptions: ["Avaliação confidencial", "Venda em exclusivo", "Venda selectiva sem portal de massas"], budgetOptions: ["< 1M €", "1M - 3M €", "3M - 5M €", "5M - 10M €", "10M+ €"], timingOptions: ["Imediato", "1-3 meses", "3-6 meses", "Apenas a explorar"], ticketOptions: ["< 500k €", "500k - 2M €", "2M - 5M €", "5M+ €"], submitLabel: "Enviar pedido privado" } },
  partners: { ...siteCopyIt.partners, eyebrow: "Synergi · Rede de parceiros", title: "Uma rede selectiva para parceiros que compreendem o mercado premium.", body: "Anclora Synergi é o portal privado para parceiros validados com critério territorial.", form: { ...siteCopyIt.partners.form, name: "Nome", email: "E-mail", serviceCategory: "Tipo de serviço", serviceSummary: "Descreva o seu perfil e método de trabalho", placeholders: { name: "O seu nome ou empresa", email: "nome@dominio.pt", serviceSummary: "Descreva o seu perfil profissional, especialização e como poderia colaborar com a Anclora (mín. 20 caracteres)." }, selectPlaceholder: "Seleccione uma categoria", serviceCategoryOptions: [{ value: "real_estate", label: "Imobiliário" }, { value: "professional", label: "Profissional / Jurídico / Financeiro" }, { value: "luxury", label: "Lifestyle & Luxo" }, { value: "eco", label: "Sustentabilidade" }, { value: "other", label: "Outro" }], privacyLabel: "Li e aceito a política de privacidade.", submitLabel: "Solicitar acesso ao Synergi", successTitle: "Pedido recebido", successBody: "Analisaremos o seu perfil e responderemos no prazo de sete dias." } },
  dataLab: { ...siteCopyIt.dataLab, title: "Sinais territoriais para ler o mercado premium com mais calma e menos reacção.", intro: "Não apresentamos dashboards. Apresentamos sinais que ajudam a enquadrar qualidade do activo, pressão de procura e sensibilidade do comprador premium.", whitelist: { ...siteCopyIt.dataLab.whitelist, form: { ...siteCopyIt.dataLab.whitelist.form, intendedUse: "Por que razão se interessa pelo Data Lab?", placeholders: { name: "O seu nome ou empresa", email: "nome@dominio.pt", intendedUse: "Descreva brevemente o seu interesse e perfil de investidor (mín. 20 caracteres)." }, privacyLabel: "Li e aceito a política de privacidade.", submitLabel: "Solicitar acesso antecipado", successTitle: "Na lista de espera", successBody: "Avisaremos quando abrirmos o próximo bloco de acesso para o seu perfil." } } },
  contact: { ...siteCopyPt.contact, body: "Se está a ponderar vender, investir ou explorar uma oportunidade patrimonial em Palma ou no sudoeste de Mallorca, podemos estudar o seu caso com critério, confidencialidade e abordagem premium.", responseNote: "As conversas são geridas de forma selectiva e com resposta pessoal.", detailsTitle: "Contactos" },
  finalCta: { ...siteCopyPt.finalCta, eyebrow: "Conversa privada", body: "Palma e o sudoeste de Mallorca exigem critério territorial, confidencialidade e execução comercial mais precisa. Podemos estudar o seu caso em privado.", primaryCta: "Iniciar avaliação privada", secondaryCta: "Abrir conversa privada" },
  footer: { ...siteCopyPt.footer, columns: [{ title: "Contacto", links: [{ label: "Abrir conversa privada", href: "#contacto" }] }, { title: "Acesso selectivo", links: [{ label: "Mallorca", href: "#mallorca-focus" }, { label: "Investidores", href: "#inversores" }, { label: "Clientes", href: "#clientes" }, { label: "Parceiros", href: "#partners" }, { label: "Data Lab", href: "#data-lab" }] }, { title: "Legal", links: [{ label: "Privacidade", href: "/privacy" }, { label: "Termos", href: "/terms" }, { label: "Aviso legal", href: "/legal" }] }] },
  cookies: { ...siteCopyIt.cookies, title: "Preferências de cookies", description: "Este site utiliza cookies para oferecer uma melhor experiência. Pode gerir as suas preferências em qualquer momento.", acceptAll: "Aceitar todas", settings: "Definições", settingsTitle: "Gerir cookies", necessary: { title: "Cookies necessários", description: "Estes cookies são essenciais para o funcionamento do site." }, analytics: { title: "Cookies de análise", description: "Ajudam-nos a perceber como os visitantes utilizam o site." }, marketing: { title: "Cookies de marketing", description: "Utilizados para mostrar anúncios relevantes aos visitantes." }, savePreferences: "Guardar preferências", back: "Voltar", rejectAll: "Rejeitar opcionais" },
  scroll: { up: "Subir", down: "Descer" },
  howWeWork: { eyebrow: "Processo · Como trabalhamos", title: "Quatro passos para uma operação conduzida com critério e discrição.", steps: [{ number: "01", title: "Avaliação privada", description: "Analisamos o activo, a microzona e o perfil do proprietário antes de acordar qualquer acção." }, { number: "02", title: "Estratégia territorial", description: "Definimos a narrativa de valor, o posicionamento e o perfil de comprador adequado ao activo." }, { number: "03", title: "Acesso qualificado", description: "Activamos o acesso a compradores e investidores seleccionados sem exposição pública do activo." }, { number: "04", title: "Acompanhamento e fecho", description: "Acompanhamos cada conversa até ao fecho com critério, confidencialidade e suporte operativo." }] },
  holidayRental: { ...siteCopyEn.holidayRental, eyebrow: "Proprietários premium · Aluguer de férias de alto standing", title: "Rentabilize a sua propriedade em Mallorca sem abdicar de discrição, controlo nem posicionamento premium.", body: "Para villas, fincas e apartamentos singulares, o aluguer de férias não deve ser tratado como um produto turístico de massas. Avaliamos o potencial do activo, a microzona, o perfil do hóspede e a viabilidade operativa.", benefits: ["Avaliação privada do potencial de aluguer.", "Posicionamento alinhado com activos de alto standing.", "Captação orientada para hóspedes qualificados.", "Preparação operativa e documental mais estruturada.", "Possibilidade de combinar uso pessoal, rendimento e futura venda."], technologyNote: "A gestão documental pode apoiar-se no Anclora SyncXML para estruturar dados de reservas orientados ao fluxo SES.HOSPEDAJES. Esta camada acrescenta rastreabilidade e menos fricção documental; não substitui a revisão jurídica nem o critério do profissional.", primaryCta: "Avaliar potencial de aluguer premium", secondaryCta: "Abrir conversa privada" },
  trustBadgeText: "Suporte internacional e confiança operativa através da eXp Group Spain.",
});

export const siteCopyByLanguage = {
  es: siteCopyEs,
  ca: siteCopyCa,
  de: siteCopyDe,
  en: siteCopyEn,
  sv: siteCopySv,
  fr: siteCopyFr,
  it: siteCopyIt,
  da: siteCopyDa,
  nl: siteCopyNl,
  no: siteCopyNo,
  pt: siteCopyPt,
} satisfies Record<LanguageCode, SiteCopy>;
