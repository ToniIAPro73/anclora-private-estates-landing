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
  trustBadgeText: string;
  form: SellerFormCopy;
};

export type DataLabSignalCopy = {
  eyebrow: string;
  title: string;
  body?: string;
};

export type DataLabCopy = {
  eyebrow: string;
  title: string;
  lead: DataLabSignalCopy;
  signals: DataLabSignalCopy[];
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

export type SiteCopy = {
  navbar: NavbarCopy;
  hero: HeroCopy;
  credibility: CredibilityCopy;
  mallorcaFocus: MallorcaFocusCopy;
  investors: InvestorCopy;
  sellerIntake: SellerIntakeCopy;
  dataLab: DataLabCopy;
  contact: ContactCopy;
  finalCta: FinalCtaCopy;
  footer: FooterCopy;
  trustBadgeText: string;
};

const siteCopyEs: SiteCopy = {
  navbar: {
    navAriaLabel: "Principal",
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Inversores", href: "#inversores" },
      { label: "Propietarios", href: "#propietarios" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaLabel: "Solicitar evaluación confidencial",
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
    title: "Anclora Private Estates para Palma y el suroeste de Mallorca.",
    description:
      "Anclora Private Estates está diseñada para propietarios, compradores e inversores nacionales e internacionales que valoran criterio, microzona, confidencialidad y el respaldo operativo de eXp Group Spain.",
    chips: ["Lectura territorial", "Confidencialidad", "Capital internacional"],
    note:
      "Una puerta pública premium que combina narrativa editorial, inteligencia de microzona y ejecución comercial más precisa que la agencia residencial estándar.",
    primaryCta: "Abrir evaluación privada",
    secondaryCta: "Explorar foco territorial",
    media: {
      eyebrow: "Private Preview",
      title: "Palma, Son Vida, Portals, Bendinat y microzonas donde el relato correcto cambia el valor percibido del activo.",
      methodEyebrow: "Method",
      method:
        "No competimos por volumen. Competimos por lectura de mercado, acceso selectivo y arquitectura comercial afinada para operaciones premium.",
      statValue: "01",
      statCopy:
        "El posicionamiento correcto del activo empieza antes del portal, y muchas veces antes incluso de la venta.",
    },
  },
  credibility: {
    eyebrow: "Credibilidad",
    title: "Por qué confiar en una propuesta premium que no necesita aparentar volumen.",
    pillars: [
      "Agente independiente con respaldo de eXp Group Spain.",
      "Más de 25 años de trayectoria tecnológica aplicados a una operativa inmobiliaria mejor estructurada.",
      "Inteligencia territorial, procesos optimizados y red selectiva como diferencia real frente a la agencia tradicional.",
    ],
  },
  mallorcaFocus: {
    eyebrow: "Mallorca Focus",
    title: "Mallorca no se lee como una lista plana de zonas, sino como un sistema de microzonas.",
    areasLabel: "Áreas",
    clusters: [
      {
        id: "palma-hillside-core",
        eyebrow: "Palma & Hillside Core",
        title: "Capital, altura residencial y acceso institucional.",
        body:
          "Palma, Son Vida, Cala Major, San Agustín y Cas Català concentran una mezcla muy particular de capital local, demanda internacional y activos donde el relato urbano y la privacidad pesan tanto como la ubicación.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustín", "Cas Català"],
        audienceLabel: "Audience",
        audience:
          "Comprador patrimonial que prioriza capital, colegios, servicios y logística diaria.",
      },
      {
        id: "calvia-coastal-premium",
        eyebrow: "Calvià Coastal Premium",
        title: "Costa consolidada con lectura de lifestyle y liquidez.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes y Punta Negra funcionan como un sistema donde mar, marina, privacidad y servicios premium se convierten en señales clave de valor.",
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
        audienceLabel: "Audience",
        audience:
          "Comprador internacional y family office orientado a costa prime y continuidad relacional.",
      },
      {
        id: "southwest-lifestyle-capital-preservation",
        eyebrow: "Southwest Lifestyle & Capital Preservation",
        title: "Entrada premium con lifestyle, rentabilidad y timing.",
        body:
          "Palmanova, Paguera y Costa de la Calma permiten leer un tramo más flexible del mercado premium, donde lifestyle, ticket de entrada y velocidad comercial necesitan criterio fino por microzona.",
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Audience",
        audience:
          "Inversor híbrido que busca equilibrio entre uso propio, demanda y conservación patrimonial.",
      },
      {
        id: "heritage-serra-character",
        eyebrow: "Heritage & Serra Character",
        title: "Interior con carácter, paisaje y singularidad residencial.",
        body:
          "Puerto de Andratx, Andratx, Esporles y Valldemossa forman un clúster donde la lectura cambia: patrimonio, paisaje, privacidad y narrativa residencial pesan más que la mera proximidad a la costa.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Audience",
        audience:
          "Comprador UHNW relacional que valora singularidad, silencio y activos con relato duradero.",
      },
    ],
  },
  investors: {
    eyebrow: "Inversores",
    title: "Inversores nacionales e internacionales que necesitan menos ruido y más criterio.",
    profiles: [
      {
        title: "Inversor patrimonial nacional",
        body:
          "Busca activos sólidos, protección de valor y criterio territorial para no depender de ruido comercial ni de escaparates genéricos.",
      },
      {
        title: "International lifestyle investor",
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
  dataLab: {
    eyebrow: "Anclora Data Lab",
    title: "Señales territoriales para leer mejor el mercado premium.",
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
  },
  contact: {
    eyebrow: "Contacto",
    title: "Abramos una conversación privada.",
    body:
      "Si estás valorando vender, invertir o explorar una oportunidad patrimonial en Palma o el suroeste de Mallorca, podemos estudiar tu caso con criterio, confidencialidad y enfoque premium.",
    trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
    detailsTitle: "Contact details",
    details: [
      { label: "Email", value: "contacto@anclora.com", href: "mailto:contacto@anclora.com" },
      { label: "Teléfono", value: "+34 000 000 000", href: "tel:+34000000000" },
      { label: "Ubicación", value: "Palma de Mallorca · Islas Baleares" },
    ],
  },
  finalCta: {
    eyebrow: "Private conversation",
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
          { label: "Solicitar evaluación", href: "#propietarios" },
        ],
      },
      {
        title: "Mallorca",
        links: [
          { label: "Palma & Son Vida", href: "#mallorca-focus" },
          { label: "Portals & Bendinat", href: "#mallorca-focus" },
        ],
      },
      {
        title: "Acceso selectivo",
        links: [
          { label: "Data Lab", href: "#data-lab" },
          { label: "Partners", href: "#contacto" },
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
  trustBadgeText: "Respaldo internacional y confianza operativa a través de eXp Group Spain.",
};

const siteCopyEn: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Main",
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investors", href: "#inversores" },
      { label: "Owners", href: "#propietarios" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Request a confidential assessment",
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
    title: "Anclora Private Estates for Palma and Southwest Mallorca.",
    description:
      "Anclora Private Estates is designed for owners, buyers and national and international investors who value judgment, micro-location, confidentiality and the operational backing of eXp Group Spain.",
    chips: ["Territorial insight", "Confidentiality", "International capital"],
    note:
      "A premium public gateway that combines editorial storytelling, micro-location intelligence and sharper commercial execution than the standard residential agency.",
    primaryCta: "Open private assessment",
    secondaryCta: "Explore the territorial focus",
    media: {
      eyebrow: "Private preview",
      title:
        "Palma, Son Vida, Portals, Bendinat and the micro-locations where the right narrative changes perceived asset value.",
      methodEyebrow: "Method",
      method:
        "We do not compete on volume. We compete on market reading, selective access and a commercial architecture tuned for premium transactions.",
      statValue: "01",
      statCopy:
        "Correctly positioning an asset starts before the portal, and often even before the sale.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Credibility",
    title: "Why trust a premium proposition that does not need to pretend at scale.",
    pillars: [
      "Independent agent backed by eXp Group Spain.",
      "More than 25 years in technology applied to a better-structured real estate operation.",
      "Territorial intelligence, optimized processes and a selective network as the real edge over the traditional agency.",
    ],
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    eyebrow: "Mallorca Focus",
    title: "Mallorca is not read as a flat list of areas, but as a system of micro-locations.",
    areasLabel: "Areas",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma & Hillside Core",
        title: "Capital center, elevated living and institutional access.",
        body:
          "Palma, Son Vida, Cala Major, San Agustin and Cas Catala bring together a very specific mix of local capital, international demand and assets where the urban narrative and privacy matter as much as location.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustin", "Cas Catala"],
        audienceLabel: "Audience",
        audience:
          "Asset-preservation buyer who prioritizes capital, schools, services and everyday logistics.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[1],
        eyebrow: "Calvià Coastal Premium",
        title: "Established coastline with a lifestyle and liquidity lens.",
        body:
          "Illetas, Bendinat, Portals, Costa d'en Blanes and Punta Negra operate as a system where sea, marina, privacy and premium services become key value signals.",
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
        audienceLabel: "Audience",
        audience:
          "International buyer and family office focused on prime coast and relationship continuity.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[2],
        eyebrow: "Southwest Lifestyle & Capital Preservation",
        title: "Premium entry with lifestyle, yield and timing.",
        body:
          "Palmanova, Paguera and Costa de la Calma offer a more flexible premium-market band where lifestyle, entry ticket and commercial speed require a finely tuned micro-location lens.",
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Audience",
        audience:
          "Hybrid investor seeking balance between personal use, demand and capital preservation.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Heritage & Serra Character",
        title: "Interior with character, landscape and residential singularity.",
        body:
          "Puerto de Andratx, Andratx, Esporles and Valldemossa form a cluster where the reading changes: heritage, landscape, privacy and residential storytelling matter more than proximity to the coast.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Audience",
        audience:
          "Relationship-driven UHNW buyer who values singularity, silence and assets with a lasting story.",
      },
    ],
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investors",
    title: "National and international investors who need less noise and more judgment.",
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
    title: "Selective acquisition for assets that need more than mass exposure.",
    body:
      "If you are considering a sale in Palma or Southwest Mallorca, we can review your asset through the lens of micro-location, commercial narrative and the right timing, with a premium and confidential approach.",
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
  dataLab: {
    ...siteCopyEs.dataLab,
    eyebrow: "Anclora Data Lab",
    title: "Territorial signals for a clearer view of the premium market.",
    lead: {
      eyebrow: "Signal 01",
      title:
        "A shortage of well-positioned prime product favors more selective and less reactive decisions.",
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
        title: "Asset preparation shapes both the speed and the quality of the transaction.",
      },
    ],
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Contact",
    title: "Let's open a private conversation.",
    body:
      "If you are considering selling, investing or exploring a property opportunity in Palma or Southwest Mallorca, we can review your case with judgment, confidentiality and a premium mindset.",
    trustBadgeText: "International backing and operational trust through eXp Group Spain.",
    detailsTitle: "Contact details",
    details: [
      { label: "Email", value: "contacto@anclora.com", href: "mailto:contacto@anclora.com" },
      { label: "Phone", value: "+34 000 000 000", href: "tel:+34000000000" },
      { label: "Location", value: "Palma de Mallorca · Balearic Islands" },
    ],
  },
  finalCta: {
    ...siteCopyEs.finalCta,
    eyebrow: "Private conversation",
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
          { label: "Request assessment", href: "#propietarios" },
        ],
      },
      {
        title: "Mallorca",
        links: [
          { label: "Palma and Son Vida", href: "#mallorca-focus" },
          { label: "Portals and Bendinat", href: "#mallorca-focus" },
        ],
      },
      {
        title: "Selective access",
        links: [
          { label: "Data Lab", href: "#data-lab" },
          { label: "Partners", href: "#contacto" },
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
  trustBadgeText: "International backing and operational trust through eXp Group Spain.",
};

const siteCopyDe: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Hauptnavigation",
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investoren", href: "#inversores" },
      { label: "Eigentümer", href: "#propietarios" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Kontakt", href: "#contacto" },
    ],
    ctaLabel: "Vertrauliche Bewertung anfordern",
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
    title: "Anclora Private Estates für Palma und den Südwesten Mallorcas.",
    description:
      "Anclora Private Estates richtet sich an Eigentümer, Käufer und nationale wie internationale Investoren, die Urteilskraft, Mikrolage, Vertraulichkeit und die operative Stärke von eXp Group Spain schätzen.",
    chips: ["Territoriale Analyse", "Vertraulichkeit", "Internationales Kapital"],
    note:
      "Ein hochwertiger öffentlicher Zugang, der editoriales Storytelling, Mikrolagen-Intelligenz und eine präzisere kommerzielle Umsetzung als die Standard-Residential-Agentur verbindet.",
    primaryCta: "Private Bewertung öffnen",
    secondaryCta: "Territoriale Ausrichtung erkunden",
    media: {
      eyebrow: "Private Vorschau",
      title:
        "Palma, Son Vida, Portals, Bendinat und jene Mikrolagen, in denen die richtige Erzählung den wahrgenommenen Wert eines Objekts verändert.",
      methodEyebrow: "Methode",
      method:
        "Wir konkurrieren nicht über Volumen. Wir konkurrieren über Marktverständnis, selektiven Zugang und eine präzise kommerzielle Architektur für Premium-Transaktionen.",
      statValue: "01",
      statCopy:
        "Die richtige Positionierung eines Objekts beginnt vor dem Portal und oft schon vor dem Verkauf.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Glaubwürdigkeit",
    title: "Warum einer Premium-Darstellung vertrauen, die keine Größe vortäuschen muss.",
    pillars: [
      "Unabhängiger Makler mit Rückendeckung durch eXp Group Spain.",
      "Mehr als 25 Jahre Technologieerfahrung angewendet auf eine besser strukturierte Immobilienoperativ.",
      "Territoriale Intelligenz, optimierte Prozesse und ein selektives Netzwerk als echter Unterschied zur traditionellen Agentur.",
    ],
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    eyebrow: "Mallorca Focus",
    title: "Mallorca liest sich nicht als flache Liste von Zonen, sondern als System von Mikrolagen.",
    areasLabel: "Gebiete",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma und Hanglagen-Kern",
        title: "Städtisches Zentrum, erhöhte Wohnlagen und institutioneller Zugang.",
        body:
          "Palma, Son Vida, Cala Major, San Agustin und Cas Catala vereinen eine sehr spezifische Mischung aus lokalem Kapital, internationaler Nachfrage und Objekten, bei denen die urbane Erzählung und die Privatsphäre ebenso wichtig sind wie die Lage.",
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
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
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
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Zielgruppe",
        audience:
          "Hybrider Investor, der ein Gleichgewicht zwischen Eigennutzung, Nachfrage und Kapitalerhalt sucht.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Erbe und Serra-Charakter",
        title: "Innenland mit Charakter, Landschaft und Wohnsingularität.",
        body:
          "Puerto de Andratx, Andratx, Esporles und Valldemossa bilden einen Cluster, in dem sich die Lesart ändert: Erbe, Landschaft, Privatsphäre und Wohnnarrativ wiegen mehr als die reine Nähe zur Küste.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Zielgruppe",
        audience:
          "Beziehungsorientierter UHNW-Käufer, der Singularität, Ruhe und Objekte mit dauerhafter Geschichte schätzt.",
      },
    ],
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investoren",
    title: "Nationale und internationale Investoren, die weniger Rauschen und mehr Urteilskraft brauchen.",
    profiles: [
      {
        title: "Nationale Vermögensinvestor",
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
      "Wenn du einen Verkauf in Palma oder im Südwesten Mallorcas erwägst, können wir dein Objekt aus Sicht der Mikrolage, der kommerziellen Erzählung und des richtigen Timings prüfen, mit einem Premium- und Vertraulichkeitsansatz.",
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
  dataLab: {
    ...siteCopyEs.dataLab,
    eyebrow: "Anclora Data Lab",
    title: "Territoriale Signale für einen klareren Blick auf den Premium-Markt.",
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
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Kontakt",
    title: "Lassen Sie uns ein privates Gespräch öffnen.",
    body:
      "Wenn du einen Verkauf, eine Investition oder eine Immobilienchance in Palma oder im Südwesten Mallorcas prüfst, können wir deinen Fall mit Urteilskraft, Vertraulichkeit und Premium-Mentalität analysieren.",
    trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
    detailsTitle: "Kontaktdaten",
    details: [
      { label: "E-Mail", value: "contacto@anclora.com", href: "mailto:contacto@anclora.com" },
      { label: "Telefon", value: "+34 000 000 000", href: "tel:+34000000000" },
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
      "Premium-Immobilienmarke mit Fokus auf Palma und den Südwesten Mallorcas, territorialer Urteilskraft, selektivem Zugang und präziserer kommerzieller Umsetzung.",
    columns: [
      {
        title: "Kontakt",
        links: [
          { label: "Privates Gespräch öffnen", href: "#contacto" },
          { label: "Bewertung anfordern", href: "#propietarios" },
        ],
      },
      {
        title: "Mallorca",
        links: [
          { label: "Palma und Son Vida", href: "#mallorca-focus" },
          { label: "Portals und Bendinat", href: "#mallorca-focus" },
        ],
      },
      {
        title: "Selektiver Zugang",
        links: [
          { label: "Data Lab", href: "#data-lab" },
          { label: "Partner", href: "#contacto" },
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
  trustBadgeText: "Internationale Rückendeckung und operative Sicherheit durch eXp Group Spain.",
};

const siteCopyFr: SiteCopy = {
  ...siteCopyEs,
  navbar: {
    ...siteCopyEs.navbar,
    navAriaLabel: "Navigation principale",
    links: [
      { label: "Mallorca", href: "#mallorca-focus" },
      { label: "Investisseurs", href: "#inversores" },
      { label: "Propriétaires", href: "#propietarios" },
      { label: "Data Lab", href: "#data-lab" },
      { label: "Contact", href: "#contacto" },
    ],
    ctaLabel: "Demander une évaluation confidentielle",
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
    title: "Anclora Private Estates pour Palma et le sud-ouest de Majorque.",
    description:
      "Anclora Private Estates s'adresse aux propriétaires, acheteurs et investisseurs nationaux et internationaux qui valorisent le discernement, la micro-localisation, la confidentialité et l'appui opérationnel d'eXp Group Spain.",
    chips: ["Intelligence territoriale", "Confidentialité", "Capital international"],
    note:
      "Une porte d'entrée publique premium qui combine narration éditoriale, intelligence de micro-zone et une exécution commerciale plus précise que l'agence résidentielle standard.",
    primaryCta: "Ouvrir l'évaluation privée",
    secondaryCta: "Explorer le territoire",
    media: {
      eyebrow: "Aperçu privé",
      title:
        "Palma, Son Vida, Portals, Bendinat et les micro-zones où le bon récit transforme la valeur perçue de l'actif.",
      methodEyebrow: "Méthode",
      method:
        "Nous ne concurrençons pas sur le volume. Nous concurrençons sur la lecture du marché, l'accès sélectif et une architecture commerciale calibrée pour les opérations premium.",
      statValue: "01",
      statCopy:
        "Bien positionner un actif commence avant le portail, et souvent même avant la vente.",
    },
  },
  credibility: {
    ...siteCopyEs.credibility,
    eyebrow: "Crédibilité",
    title: "Pourquoi faire confiance à une proposition premium qui n'a pas besoin de simuler le volume.",
    pillars: [
      "Agent indépendant soutenu par eXp Group Spain.",
      "Plus de 25 ans d'expérience technologique appliqués à une opération immobilière mieux structurée.",
      "Intelligence territoriale, processus optimisés et réseau sélectif comme avantage réel face à l'agence traditionnelle.",
    ],
  },
  mallorcaFocus: {
    ...siteCopyEs.mallorcaFocus,
    eyebrow: "Mallorca Focus",
    title: "Majorque ne se lit pas comme une liste plate de zones, mais comme un système de micro-localisations.",
    areasLabel: "Zones",
    clusters: [
      {
        ...siteCopyEs.mallorcaFocus.clusters[0],
        eyebrow: "Palma et cœur des collines",
        title: "Centre capital, habitat élevé et accès institutionnel.",
        body:
          "Palma, Son Vida, Cala Major, San Agustín et Cas Català concentrent un mélange très particulier de capital local, de demande internationale et d'actifs où le récit urbain et la confidentialité comptent autant que l'emplacement.",
        areas: ["Palma", "Son Vida", "Cala Major", "San Agustín", "Cas Català"],
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
        areas: ["Illetas", "Bendinat", "Portals", "Costa d'en Blanes", "Punta Negra"],
        audienceLabel: "Profil",
        audience:
          "Acheteur international et family office orientés côte prime et continuité relationnelle.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[2],
        eyebrow: "Lifestyle sud-ouest et préservation du capital",
        title: "Entrée premium avec lifestyle, rendement et timing.",
        body:
          "Palmanova, Paguera et Costa de la Calma permettent de lire un segment plus flexible du marché premium, où lifestyle, ticket d'entrée et vitesse commerciale nécessitent un regard fin par micro-zone.",
        areas: ["Palmanova", "Paguera", "Costa de la Calma"],
        audienceLabel: "Profil",
        audience:
          "Investisseur hybride cherchant un équilibre entre usage personnel, demande et conservation patrimoniale.",
      },
      {
        ...siteCopyEs.mallorcaFocus.clusters[3],
        eyebrow: "Patrimoine et caractère de la Serra",
        title: "Intérieur avec caractère, paysage et singularité résidentielle.",
        body:
          "Puerto de Andratx, Andratx, Esporles et Valldemossa forment un cluster où la lecture change : patrimoine, paysage, confidentialité et récit résidentiel pèsent davantage que la simple proximité de la côte.",
        areas: ["Puerto de Andratx", "Andratx", "Esporles", "Valldemossa"],
        audienceLabel: "Profil",
        audience:
          "Acheteur UHNW relationnel qui valorise la singularité, le silence et les actifs à la narrativité durable.",
      },
    ],
  },
  investors: {
    ...siteCopyEs.investors,
    eyebrow: "Investisseurs",
    title: "Investisseurs nationaux et internationaux qui ont besoin de moins de bruit et de plus de discernement.",
    profiles: [
      {
        title: "Investisseur patrimonial national",
        body:
          "Recherche des actifs solides, une protection de la valeur et un discernement territorial pour ne pas dépendre du bruit commercial ni des vitrines génériques.",
      },
      {
        title: "Investisseur lifestyle international",
        body:
          "Priorise la micro-zone, la confidentialité, la marina, les écoles, la connectivité et la capacité d'exécuter avec confiance dans un environnement premium transfrontalier.",
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
      "Si vous envisagez une vente à Palma ou dans le sud-ouest de Majorque, nous pouvons étudier votre actif sous l'angle de la micro-zone, de la narration commerciale et du bon timing, avec une approche premium et confidentielle.",
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
  dataLab: {
    ...siteCopyEs.dataLab,
    eyebrow: "Anclora Data Lab",
    title: "Signaux territoriaux pour une meilleure lecture du marché premium.",
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
  },
  contact: {
    ...siteCopyEs.contact,
    eyebrow: "Contact",
    title: "Ouvrons une conversation privée.",
    body:
      "Si vous envisagez de vendre, d'investir ou d'explorer une opportunité patrimoniale à Palma ou dans le sud-ouest de Majorque, nous pouvons étudier votre dossier avec discernement, confidentialité et une approche premium.",
    trustBadgeText: "Soutien international et confiance opérationnelle via eXp Group Spain.",
    detailsTitle: "Coordonnées",
    details: [
      { label: "E-mail", value: "contacto@anclora.com", href: "mailto:contacto@anclora.com" },
      { label: "Téléphone", value: "+34 000 000 000", href: "tel:+34000000000" },
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
      "Marque immobilière premium concentrée sur Palma et le sud-ouest de Majorque, avec discernement territorial, accès sélectif et une exécution commerciale plus précise.",
    columns: [
      {
        title: "Contact",
        links: [
          { label: "Ouvrir la conversation privée", href: "#contacto" },
          { label: "Demander une évaluation", href: "#propietarios" },
        ],
      },
      {
        title: "Majorque",
        links: [
          { label: "Palma et Son Vida", href: "#mallorca-focus" },
          { label: "Portals et Bendinat", href: "#mallorca-focus" },
        ],
      },
      {
        title: "Accès sélectif",
        links: [
          { label: "Data Lab", href: "#data-lab" },
          { label: "Partenaires", href: "#contacto" },
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
