export type LanguageCode = "es" | "en" | "de" | "fr";

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
  media: HeroMediaCopy;
};

export type CredibilityCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: string[];
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
  name: string;
  email: string;
  phone: string;
  zone: string;
  propertyType: string;
  commercialization: string;
  message: string;
  placeholders: {
    name: string;
    email: string;
    phone: string;
    zone: string;
    message: string;
  };
  selectPlaceholder: string;
  propertyTypeOptions: string[];
  commercializationOptions: string[];
  submitLabel: string;
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
  options: LanguageSwitcherOptionCopy[];
};

export type NavbarCopy = {
  navAriaLabel: string;
  links: NavLinkCopy[];
  ctaLabel: string;
  languageSwitcher: LanguageSwitcherCopy;
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

export type SiteCopy = {
  navbar: NavbarCopy;
  hero: HeroCopy;
  credibility: CredibilityCopy;
  mallorcaFocus: MallorcaFocusCopy;
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
  trustBadgeText: string;
  contactFloatingLabel: string;
};

const siteCopyEs: SiteCopy = {
  navbar: {
    navAriaLabel: "Principal",
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Inversores", href: "#inversores" },
      { label: "Propietarios", href: "#propietarios" },
      { label: "Partners", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaLabel: "Solicitar valoración",
    languageSwitcher: {
      groupLabel: "Selector de idioma",
      options: [
        { code: "es", label: "ES", ariaLabel: "Idioma español" },
        { code: "en", label: "EN", ariaLabel: "Idioma inglés" },
        { code: "de", label: "DE", ariaLabel: "Idioma alemán" },
        { code: "fr", label: "FR", ariaLabel: "Idioma francés" },
      ],
    },
  },
  hero: {
    eyebrow: "Palma · Suroeste de Mallorca · Capital premium",
    title: "Una lectura más precisa para activos singulares en Palma y el suroeste de Mallorca.",
    description:
      "Acceso discreto para propietarios, compradores e inversores que valoran microzona, confidencialidad y ejecución comercial precisa.",
    chips: [],
    note:
      "No diseñamos una presencia para parecer grandes. Diseñamos una presencia para transmitir criterio, silencio operativo y una relación más sofisticada con el activo.",
    primaryCta: "Abrir evaluación privada",
    secondaryCta: "Explorar foco territorial",
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
    title: "Una propuesta premium que no necesita simular volumen para transmitir confianza.",
    intro:
      "La autoridad aquí no se comunica con promesas estridentes, sino con estructura, respaldo y una lectura más madura del mercado.",
    pillars: [
      "Agente independiente con respaldo de eXp Group Spain.",
      "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
      "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
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
    eyebrow: "Propietarios",
    title: "Captación selectiva para activos que necesitan más que exposición masiva.",
    body:
      "Si estás valorando vender en Palma o el suroeste de Mallorca, podemos estudiar tu activo desde la microzona, la narrativa comercial y el timing correcto, con un enfoque premium y confidencial.",
    checklistLabel: "La evaluación privada considera",
    checklist: ["Microzona y competencia real", "Narrativa de posicionamiento", "Timing comercial y acceso"],
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    form: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      zone: "Zona del inmueble",
      propertyType: "Tipo de propiedad",
      commercialization: "Preferencia de comercialización",
      message: "Mensaje",
      placeholders: {
        name: "Tu nombre",
        email: "nombre@dominio.com",
        phone: "+34 ...",
        zone: "Son Vida, Portals, Andratx...",
        message: "Cuéntanos el contexto del activo y qué necesitas resolver.",
      },
      selectPlaceholder: "Selecciona una opción",
      propertyTypeOptions: ["Villa", "Ático", "Apartamento premium", "Finca"],
      commercializationOptions: [
        "Evaluación confidencial",
        "Venta en exclusiva",
        "Venta selectiva sin portal masivo",
      ],
      submitLabel: "Solicitar evaluación confidencial",
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
      },
      {
        eyebrow: "Signal 03",
        title: "La preparación del activo condiciona la velocidad y la calidad de la operación.",
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
          { label: "Propietarios", href: "#propietarios" },
          { label: "Partners", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacidad", href: "#contacto" },
          { label: "Aviso legal", href: "#contacto" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Private Estates. Todos los derechos reservados.",
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
  trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
  contactFloatingLabel: "CONTACTAR",
};

const siteCopyEn: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Main",
    links: [
      { label: "Credibility", href: "#credibilidad" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investors", href: "#inversores" },
      { label: "Owners", href: "#propietarios" },
      { label: "Partners", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Request a valuation",
    languageSwitcher: {
      groupLabel: "Language selector",
      options: [
        { code: "es", label: "ES", ariaLabel: "Spanish language" },
        { code: "en", label: "EN", ariaLabel: "English language" },
        { code: "de", label: "DE", ariaLabel: "German language" },
        { code: "fr", label: "FR", ariaLabel: "French language" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Southwest Mallorca · Premium capital",
    title: "A more precise reading for singular assets in Palma and Southwest Mallorca.",
    description:
      "A discreet gateway for owners, buyers and investors who value micro-location, confidentiality and precise commercial execution.",
    chips: [],
    note:
      "We are not designing a presence to look large. We are designing a presence that signals judgment, operational silence and a more sophisticated relationship with the asset.",
    primaryCta: "Open private assessment",
    secondaryCta: "Explore the territorial focus",
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
    title: "A premium proposition that does not need to simulate scale in order to communicate trust.",
    intro:
      "Authority is not expressed here through louder promises, but through structure, backing and a more mature reading of the market.",
    pillars: [
      "Independent agent backed by eXp Group Spain.",
      "More than 25 years in technology applied to a better-structured real estate operation.",
      "Territorial intelligence, optimized processes and a selective network as the real edge over the traditional agency.",
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
    eyebrow: "Owners",
    title: "Selective representation for assets that need more than mass exposure.",
    body:
      "If you are considering a sale in Palma or Southwest Mallorca, we can review your asset through the lens of micro-location, commercial narrative and the right timing, with a premium and confidential approach.",
    checklistLabel: "The private review considers",
    checklist: ["Micro-location and real competition", "Positioning narrative", "Commercial timing and access"],
    trustBadgeText: "International backing and operational trust through eXp Group Spain.",
    form: {
      ...siteCopyEs.sellerIntake.form,
      name: "Name",
      email: "Email",
      phone: "Phone",
      zone: "Property area",
      propertyType: "Property type",
      commercialization: "Commercial approach",
      message: "Message",
      placeholders: {
        name: "Your name",
        email: "name@domain.com",
        phone: "+34 ...",
        zone: "Son Vida, Portals, Andratx...",
        message: "Tell us about the asset context and what you need to solve.",
      },
      selectPlaceholder: "Select an option",
      propertyTypeOptions: ["Villa", "Penthouse", "Premium apartment", "Finca"],
      commercializationOptions: [
        "Confidential assessment",
        "Exclusive mandate",
        "Selective sale without mass portals",
      ],
      submitLabel: "Request a confidential assessment",
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
      },
      {
        eyebrow: "Signal 03",
        title: "Asset preparation shapes both the speed and quality of the transaction.",
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
          { label: "Owners", href: "#propietarios" },
          { label: "Partners", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "#contacto" },
          { label: "Legal notice", href: "#contacto" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Private Estates. All rights reserved.",
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
  trustBadgeText: "International backing and operational trust through eXp Group Spain.",
  contactFloatingLabel: "CONTACT US",
};

const siteCopyDe: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Hauptnavigation",
    links: [
      { label: "Glaubwürdigkeit", href: "#credibilidad" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investoren", href: "#inversores" },
      { label: "Eigentümer", href: "#propietarios" },
      { label: "Partner", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Kontakt", href: "#contacto" },
    ],
    ctaLabel: "Bewertung anfragen",
    languageSwitcher: {
      groupLabel: "Sprachauswahl",
      options: [
        { code: "es", label: "ES", ariaLabel: "Spanische Sprache" },
        { code: "en", label: "EN", ariaLabel: "Englische Sprache" },
        { code: "de", label: "DE", ariaLabel: "Deutsche Sprache" },
        { code: "fr", label: "FR", ariaLabel: "Französische Sprache" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Südwest-Mallorca · Premium-Kapital",
    title: "Eine präzisere Lesart für singuläre Assets in Palma und im Südwesten Mallorcas.",
    description:
      "Diskreter Zugang für Eigentümer, Käufer und Investoren, die Mikrolage, Vertraulichkeit und präzise kommerzielle Umsetzung schätzen.",
    chips: [],
    note:
      "Wir gestalten diese Präsenz nicht, um groß zu wirken. Wir gestalten sie, um Urteilskraft, operative Ruhe und einen anspruchsvolleren Umgang mit dem Asset zu vermitteln.",
    primaryCta: "Private Bewertung öffnen",
    secondaryCta: "Territoriale Ausrichtung erkunden",
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
    title: "Eine Premium-Darstellung, die keine Größe simulieren muss, um Vertrauen zu kommunizieren.",
    intro:
      "Autorität wird hier nicht durch lautere Versprechen ausgedrückt, sondern durch Struktur, Rückendeckung und eine reifere Marktlesart.",
    pillars: [
      "Unabhängiger Makler mit Rückendeckung durch eXp Group Spain.",
      "Mehr als 25 Jahre Technologieerfahrung angewendet auf eine besser strukturierte Immobilienoperativ.",
      "Territoriale Intelligenz, optimierte Prozesse und ein selektives Netzwerk als echter Unterschied zur traditionellen Agentur.",
    ],
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
          "Internationaler Käufer und Family Office mit Fokus auf Prime Coast und Beziehungskontinuität.",
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
          "Puerto de Andratx, Andratx, Esporles und Valldemossa bilden einen cluster, in dem sich die Lesart ändert: Erbe, Landschaft, Privatsphäre und Wohnnarrativ wiegen mehr als die reine Nähe zur Küste.",
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
    eyebrow: "Eigentümer",
    title: "Selektive Vermarktung für Objekte, die mehr als Massenexposition brauchen.",
    body:
      "Wenn du einen Verkauf in Palma oder im Südwesten Mallorcas erwägst, können wir dein Objekt aus Sicht der Mikrolage, der kommerziellen Erzählung und des richtigen Timings prüfen, mit Premium- und Vertraulichkeitsansatz.",
    checklistLabel: "Die private Prüfung berücksichtigt",
    checklist: ["Mikrolage und reale Konkurrenz", "Positionierungsnarrativ", "Kommerzielles Timing und Zugang"],
    trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
    form: {
      ...siteCopyEs.sellerIntake.form,
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      zone: "Objektlage",
      propertyType: "Objekttyp",
      commercialization: "Vermarktungspräferenz",
      message: "Nachricht",
      placeholders: {
        name: "Dein Name",
        email: "name@domain.de",
        phone: "+49 ...",
        zone: "Son Vida, Portals, Andratx...",
        message: "Erzähle uns vom Objekt und davon, was du lösen möchtest.",
      },
      selectPlaceholder: "Option auswählen",
      propertyTypeOptions: ["Villa", "Penthouse", "Premium-Apartment", "Finca"],
      commercializationOptions: [
        "Vertrauliche Bewertung",
        "Exklusivverkauf",
        "Selektiver Verkauf ohne Massenportale",
      ],
      submitLabel: "Vertrauliche Bewertung anfordern",
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
      },
      {
        eyebrow: "Signal 03",
        title: "Die Vorbereitung des Objekts prägt Geschwindigkeit und Qualität der Transaktion.",
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
          { label: "Eigentümer", href: "#propietarios" },
          { label: "Partner", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Datenschutz", href: "#contacto" },
          { label: "Impressum", href: "#contacto" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Private Estates. Alle Rechte vorbehalten.",
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
  trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
  contactFloatingLabel: "KONTAKT",
};

const siteCopyFr: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Navigation principale",
    links: [
      { label: "Crédibilité", href: "#credibilidad" },
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investisseurs", href: "#inversores" },
      { label: "Propriétaires", href: "#propietarios" },
      { label: "Partenaires", href: "#partners" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Demander une évaluation",
    languageSwitcher: {
      groupLabel: "Sélecteur de langue",
      options: [
        { code: "es", label: "ES", ariaLabel: "Langue espagnole" },
        { code: "en", label: "EN", ariaLabel: "Langue anglaise" },
        { code: "de", label: "DE", ariaLabel: "Langue allemande" },
        { code: "fr", label: "FR", ariaLabel: "Langue française" },
      ],
    },
  },
  hero: {
    ...siteCopyEs.hero,
    eyebrow: "Palma · Sud-Ouest de Majorque · Capital premium",
    title: "Une lecture plus précise pour les actifs singuliers à Palma et dans le sud-ouest de Majorque.",
    description:
      "Accès discret pour propriétaires, acheteurs et investisseurs qui valorisent la micro-zone, la confidentialité et la précision commerciale.",
    chips: [],
    note:
      "Nous ne construisons pas cette présence pour paraître plus grands. Nous la construisons pour transmettre du discernement, du silence opérationnel et une relation plus sophistiquée avec l'actif.",
    primaryCta: "Ouvrir l'évaluation privée",
    secondaryCta: "Explorer le territoire",
    media: {
      eyebrow: "Aperçu privé",
      title:
        "Palma, Son Vida, Portals, Bendinat et les micro-zones où le bon récit réordonne la valeur perçue.",
      methodEyebrow: "Méthode",
      method:
        "La transaction commence avant le portail : préparation, narration, accès et timing alignés avec le bon type d'acquéreur.",
      statValue: "01",
      statCopy:
        "Chaque décision visible on the landing traduit le même principe : moins de bruit, plus de contrôle et un meilleur contexte pour les actifs premium.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Crédibilidad",
    title: "Une proposition premium qui n'a pas besoin de simuler l'échelle pour inspirer confiance.",
    intro:
      "L'autorité ne s'exprime pas ici par des promesses plus bruyantes, mais par la structure, l'appui et une lecture plus mature du marché.",
    pillars: [
      "Agent indépendant soutenu par eXp Group Spain.",
      "Plus de 25 ans d'expérience technologique appliqués à une opération immobilière mieux structurée.",
      "Intelligence territoriale, processus optimisés et réseau sélectif comme avantage réel face à l'agence traditionnelle.",
    ],
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    title: "Majorque ne se lit pas comme une liste plate de zones, mais comme un système de micro-localisations et de signaux.",
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
      ...siteCopyEs.sellerIntake.form,
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone",
      zone: "Zone du bien",
      propertyType: "Type de bien",
      commercialization: "Préférence de commercialisation",
      message: "Message",
      placeholders: {
        name: "Votre nom",
        email: "nom@domaine.fr",
        phone: "+33 ...",
        zone: "Son Vida, Portals, Andratx...",
        message: "Décrivez le contexte de l'actif et ce que vous souhaitez résoudre.",
      },
      selectPlaceholder: "Sélectionner une option",
      propertyTypeOptions: ["Villa", "Penthouse", "Appartement premium", "Finca"],
      commercializationOptions: [
        "Évaluation confidentielle",
        "Vente en exclusivité",
        "Vente sélective sans portail de masse",
      ],
      submitLabel: "Demander une évaluation confidentielle",
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
      },
      {
        eyebrow: "Signal 03",
        title: "La préparation de l'actif conditionne la vitesse et la qualité de l'opération.",
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
          { label: "Propriétaires", href: "#propietarios" },
          { label: "Partenaires", href: "#partners" },
          { label: "Data Lab", href: "#data-lab" },
        ],
      },
      {
        title: "Mentions légales",
        links: [
          { label: "Confidentialité", href: "#contacto" },
          { label: "Mentions légales", href: "#contacto" },
        ],
      },
    ],
    copyright: "© 2026 Anclora Private Estates. Tous droits réservés.",
  },
  trustBadgeText: "Soutien international et confiance opérationnelle via eXp Group Spain.",
};

export const siteCopyByLanguage = {
  es: siteCopyEs,
  en: siteCopyEn,
  de: siteCopyDe,
  fr: siteCopyFr,
} satisfies Record<LanguageCode, SiteCopy>;
