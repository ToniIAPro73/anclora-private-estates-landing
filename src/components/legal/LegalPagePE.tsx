type LegalKind = 'privacy' | 'terms' | 'legal';
type Lang = 'es' | 'en' | 'de';

interface LegalPagePEProps {
  kind: LegalKind;
}

function getLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem('ape:language');
  if (stored === 'en' || stored === 'de') return stored as Lang;
  return 'es';
}

// ── Titles ─────────────────────────────────────────────────────────────────

const titles: Record<LegalKind, Record<Lang, string>> = {
  privacy: {
    es: 'Política de Privacidad',
    en: 'Privacy Policy',
    de: 'Datenschutzerklärung',
  },
  terms: {
    es: 'Términos y Condiciones',
    en: 'Terms and Conditions',
    de: 'Nutzungsbedingungen',
  },
  legal: {
    es: 'Aviso Legal',
    en: 'Legal Notice',
    de: 'Impressum',
  },
};

const updatedLabels: Record<Lang, string> = {
  es: 'Última actualización: mayo de 2026',
  en: 'Last updated: May 2026',
  de: 'Letzte Aktualisierung: Mai 2026',
};

const backLabels: Record<Lang, string> = {
  es: '← Volver',
  en: '← Back',
  de: '← Zurück',
};

// ── Section helper ──────────────────────────────────────────────────────────

interface Section {
  heading: string;
  body: string | string[];
}

// ── Privacy content ─────────────────────────────────────────────────────────

const privacyContent: Record<Lang, Section[]> = {
  es: [
    {
      heading: '1. Responsable del tratamiento',
      body: 'Anclora Group es el responsable del tratamiento de los datos personales recogidos a través de este sitio web. Puede contactarnos en hola@anclora.com.',
    },
    {
      heading: '2. Datos que tratamos',
      body: [
        'Nombre, dirección de correo electrónico y número de teléfono.',
        'Tipología de propiedad buscada o en venta, zona geográfica de interés y rango de inversión.',
        'Motivación de compra o venta y horizonte temporal.',
        'Datos de patrimonio o solvencia únicamente cuando el usuario los facilita voluntariamente a través de los formularios del sitio.',
      ],
    },
    {
      heading: '3. Finalidades del tratamiento',
      body: [
        'Gestión de solicitudes inmobiliarias y presupuestos de valoración.',
        'Contacto personalizado por parte del equipo de Anclora Private Estates.',
        'Presentación de oportunidades inmobiliarias adaptadas al perfil del usuario.',
        'Seguimiento de conversaciones y relaciones comerciales en curso.',
      ],
    },
    {
      heading: '4. Base jurídica',
      body: 'El tratamiento de sus datos se realiza sobre la base de su consentimiento expreso otorgado en el momento de cumplimentar cualquiera de los formularios del sitio, de conformidad con el artículo 6.1.a) del Reglamento General de Protección de Datos (RGPD).',
    },
    {
      heading: '5. Comunicación con terceros',
      body: 'Sus datos podrán ser comunicados a abogados, notarios, asesores fiscales o relocation advisors colaboradores de Anclora Group únicamente cuando usted haya otorgado su consentimiento explícito para dicha comunicación. En ningún caso sus datos serán cedidos a terceros con fines publicitarios o comerciales ajenos a la operación inmobiliaria que gestione.',
    },
    {
      heading: '6. Plazos de conservación',
      body: [
        'Datos de contacto: conservados durante 24 meses desde el último contacto activo.',
        'Datos de valoración y análisis de activo: conservados durante 36 meses.',
        'Transcurridos estos plazos, los datos serán suprimidos de forma segura salvo que exista obligación legal de conservación.',
      ],
    },
    {
      heading: '7. Cesión de datos',
      body: 'Sus datos no serán cedidos ni transmitidos a terceros sin su consentimiento previo, salvo cuando así lo exija una obligación legal vigente.',
    },
    {
      heading: '8. Prevención del blanqueo de capitales',
      body: 'En las fases transaccionales de una operación inmobiliaria pueden aplicarse obligaciones legales de identificación del cliente derivadas de la normativa española de prevención del blanqueo de capitales. En ese contexto, podremos estar obligados a recabar documentación adicional de identificación.',
    },
    {
      heading: '9. Descargo de responsabilidad informativa',
      body: 'La información publicada en este sitio web tiene carácter meramente orientativo y no constituye asesoramiento fiscal, legal ni financiero vinculante. Para decisiones de inversión, le recomendamos consultar a profesionales debidamente habilitados.',
    },
    {
      heading: '10. Derechos RGPD',
      body: 'De acuerdo con la normativa europea de protección de datos, usted tiene derecho a: acceder a sus datos personales, rectificarlos, suprimirlos, limitar su tratamiento, oponerse al mismo y solicitar la portabilidad de sus datos. Para ejercer cualquiera de estos derechos, diríjase a hola@anclora.com. Tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).',
    },
    {
      heading: '11. Contacto',
      body: 'Para cualquier cuestión relacionada con el tratamiento de sus datos, puede contactar con nosotros en hola@anclora.com.',
    },
  ],
  en: [
    {
      heading: '1. Data Controller',
      body: 'Anclora Group is the data controller for the personal data collected through this website. You may contact us at hola@anclora.com.',
    },
    {
      heading: '2. Data We Process',
      body: [
        'Name, email address, and telephone number.',
        'Type of property sought or listed for sale, geographic area of interest, and investment range.',
        'Purchase or sale motivation and intended timeline.',
        "Wealth or solvency data only when voluntarily provided by the user through the site's forms.",
      ],
    },
    {
      heading: '3. Purposes of Processing',
      body: [
        'Managing property enquiries and valuation requests.',
        'Personal follow-up by the Anclora Private Estates team.',
        "Presenting real estate opportunities tailored to the user's profile.",
        'Ongoing commercial relationship management.',
      ],
    },
    {
      heading: '4. Legal Basis',
      body: "Data processing is based on your explicit consent given when completing any of the site's forms, in accordance with Article 6(1)(a) of the General Data Protection Regulation (GDPR).",
    },
    {
      heading: '5. Communication with Third Parties',
      body: 'Your data may be shared with lawyers, notaries, tax advisors, or relocation advisors that collaborate with Anclora Group, only when you have given explicit consent to such communication. Your data will never be passed to third parties for advertising or commercial purposes unrelated to the real estate transaction being managed.',
    },
    {
      heading: '6. Retention Periods',
      body: [
        'Contact data: retained for 24 months from the last active contact.',
        'Valuation and asset analysis data: retained for 36 months.',
        'After these periods, data will be securely deleted unless a legal retention obligation applies.',
      ],
    },
    {
      heading: '7. Data Transfers',
      body: 'Your data will not be transferred or disclosed to third parties without your prior consent, unless required by applicable law.',
    },
    {
      heading: '8. Anti-Money Laundering',
      body: 'In the transactional stages of a real estate operation, legal customer identification obligations under Spanish anti-money laundering regulations may apply. In such cases we may be required to collect additional identification documentation.',
    },
    {
      heading: '9. Disclaimer',
      body: 'Information published on this website is for general guidance only and does not constitute binding tax, legal, or financial advice. For investment decisions, we recommend consulting duly qualified professionals.',
    },
    {
      heading: '10. GDPR Rights',
      body: 'Under European data protection law, you have the right to: access your personal data, rectify it, erase it, restrict its processing, object to processing, and request data portability. To exercise any of these rights, contact hola@anclora.com. You also have the right to lodge a complaint with the Spanish Data Protection Agency (aepd.es).',
    },
    {
      heading: '11. Contact',
      body: 'For any question regarding the processing of your personal data, please contact us at hola@anclora.com.',
    },
  ],
  de: [
    {
      heading: '1. Verantwortlicher',
      body: 'Anclora Group ist der Verantwortliche für die Verarbeitung personenbezogener Daten, die über diese Website erhoben werden. Sie erreichen uns unter hola@anclora.com.',
    },
    {
      heading: '2. Verarbeitete Daten',
      body: [
        'Name, E-Mail-Adresse und Telefonnummer.',
        'Art der gesuchten oder zum Verkauf stehenden Immobilie, geografisches Interessensgebiet und Investitionsrahmen.',
        'Kauf- oder Verkaufsmotivation und beabsichtigter Zeithorizont.',
        'Vermögens- oder Bonitätsdaten nur, wenn der Nutzer diese freiwillig über die Formulare der Website angibt.',
      ],
    },
    {
      heading: '3. Verarbeitungszwecke',
      body: [
        'Bearbeitung von Immobilienanfragen und Bewertungsanträgen.',
        'Persönliche Kontaktaufnahme durch das Team von Anclora Private Estates.',
        'Präsentation von Immobilienopportunitäten, die auf das Nutzerprofil zugeschnitten sind.',
        'Pflege laufender Geschäftsbeziehungen.',
      ],
    },
    {
      heading: '4. Rechtsgrundlage',
      body: 'Die Datenverarbeitung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung, die Sie beim Ausfüllen eines der Website-Formulare erteilen, gemäß Art. 6 Abs. 1 lit. a) DSGVO.',
    },
    {
      heading: '5. Weitergabe an Dritte',
      body: 'Ihre Daten können an Rechtsanwälte, Notare, Steuerberater oder Relocation-Berater, die mit Anclora Group zusammenarbeiten, weitergegeben werden – ausschließlich mit Ihrer ausdrücklichen Einwilligung. Ihre Daten werden niemals für Werbe- oder kommerzielle Zwecke ohne Bezug zur verwalteten Immobilientransaktion an Dritte weitergegeben.',
    },
    {
      heading: '6. Aufbewahrungsfristen',
      body: [
        'Kontaktdaten: Aufbewahrung für 24 Monate ab dem letzten aktiven Kontakt.',
        'Bewertungs- und Asset-Analysedaten: Aufbewahrung für 36 Monate.',
        'Nach Ablauf dieser Fristen werden die Daten sicher gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.',
      ],
    },
    {
      heading: '7. Datenweitergabe',
      body: 'Ihre Daten werden ohne Ihre vorherige Einwilligung nicht an Dritte weitergegeben oder übermittelt, es sei denn, dies ist gesetzlich vorgeschrieben.',
    },
    {
      heading: '8. Geldwäscheprävention',
      body: 'In den Transaktionsphasen einer Immobilientransaktion können gesetzliche Identifikationspflichten des Kunden gemäß den spanischen Vorschriften zur Geldwäscheprävention gelten. In diesem Fall können wir verpflichtet sein, zusätzliche Identifikationsunterlagen einzuholen.',
    },
    {
      heading: '9. Haftungsausschluss',
      body: 'Die auf dieser Website veröffentlichten Informationen dienen nur zur allgemeinen Orientierung und stellen keine verbindliche steuerliche, rechtliche oder finanzielle Beratung dar. Für Anlageentscheidungen empfehlen wir die Konsultation qualifizierter Fachleute.',
    },
    {
      heading: '10. DSGVO-Rechte',
      body: 'Nach europäischem Datenschutzrecht haben Sie das Recht auf: Auskunft über Ihre personenbezogenen Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie Datenübertragbarkeit. Um diese Rechte auszuüben, wenden Sie sich an hola@anclora.com. Sie haben außerdem das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde (aepd.es) einzureichen.',
    },
    {
      heading: '11. Kontakt',
      body: 'Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten wenden Sie sich bitte an hola@anclora.com.',
    },
  ],
};

// ── Terms content ───────────────────────────────────────────────────────────

const termsContent: Record<Lang, Section[]> = {
  es: [
    {
      heading: '1. Objeto',
      body: 'Las presentes condiciones regulan el uso del sitio web de Anclora Private Estates, cuya finalidad es la presentación del servicio de intermediación inmobiliaria discreta y premium operado por Anclora Group en Palma y el suroeste de Mallorca.',
    },
    {
      heading: '2. Condiciones de uso del sitio',
      body: 'El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El sitio está destinado a la consulta de información y a la solicitud de contacto o servicios de valoración inmobiliaria. Queda prohibido cualquier uso contrario a la ley, la moral o el orden público.',
    },
    {
      heading: '3. Responsabilidades del usuario',
      body: 'El usuario se compromete a facilitar información veraz, completa y actualizada en los formularios de contacto y solicitud de servicios. Cualquier información inexacta proporcionada por el usuario será de su exclusiva responsabilidad.',
    },
    {
      heading: '4. Limitaciones del servicio',
      body: [
        'Los precios, disponibilidad y condiciones de los activos inmobiliarios están sujetos a confirmación y pueden variar sin previo aviso.',
        'Los renders, imágenes, descripciones y proyecciones presentadas en el sitio son de carácter orientativo y no constituyen oferta vinculante.',
        'La intermediación inmobiliaria está condicionada a la aceptación mutua entre comprador y vendedor.',
      ],
    },
    {
      heading: '5. Propiedad intelectual',
      body: 'Todos los contenidos de este sitio web — incluyendo textos, imágenes, logotipos, diseños gráficos y código — son propiedad de Anclora Group o están licenciados a su favor. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa y por escrito.',
    },
    {
      heading: '6. Exclusión de garantías',
      body: 'Anclora Private Estates presta un servicio de intermediación inmobiliaria. La información publicada en este sitio no constituye asesoramiento legal, fiscal, financiero ni de inversión. Anclora Group no asume responsabilidad alguna por decisiones adoptadas exclusivamente en base a la información publicada en este sitio.',
    },
    {
      heading: '7. Limitación de responsabilidad',
      body: 'Anclora Group no será responsable de daños directos o indirectos, pérdidas de datos, lucro cesante u otros perjuicios derivados del uso o imposibilidad de uso de este sitio web, salvo en los casos en que la ley española no permita la exclusión de responsabilidad.',
    },
    {
      heading: '8. Modificaciones',
      body: 'Anclora Group se reserva el derecho de modificar las presentes condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web. El uso continuado del sitio tras la publicación de cambios implica su aceptación.',
    },
    {
      heading: '9. Contacto',
      body: 'Para cualquier consulta sobre las presentes condiciones, puede contactarnos en hola@anclora.com.',
    },
  ],
  en: [
    {
      heading: '1. Purpose',
      body: 'These terms govern the use of the Anclora Private Estates website, which presents the discrete and premium real estate intermediation service operated by Anclora Group in Palma and Southwest Mallorca.',
    },
    {
      heading: '2. Conditions of Use',
      body: 'Accessing and using this website implies acceptance of these terms. The site is intended for browsing information and submitting contact or property valuation requests. Any use contrary to law, morality, or public order is prohibited.',
    },
    {
      heading: '3. User Responsibilities',
      body: 'Users undertake to provide truthful, complete, and up-to-date information in contact and service request forms. Any inaccurate information provided by the user is solely their responsibility.',
    },
    {
      heading: '4. Service Limitations',
      body: [
        'Prices, availability, and conditions of real estate assets are subject to confirmation and may change without prior notice.',
        'Renders, images, descriptions, and projections shown on the site are indicative only and do not constitute a binding offer.',
        'Real estate intermediation is conditional on mutual agreement between buyer and seller.',
      ],
    },
    {
      heading: '5. Intellectual Property',
      body: 'All content on this website — including texts, images, logos, graphic designs, and code — is the property of Anclora Group or is licensed to it. Reproduction, distribution, or commercial use without express written authorization is prohibited.',
    },
    {
      heading: '6. Exclusion of Warranties',
      body: 'Anclora Private Estates provides a real estate intermediation service. The information published on this site does not constitute legal, tax, financial, or investment advice. Anclora Group accepts no responsibility for decisions made solely on the basis of information published on this site.',
    },
    {
      heading: '7. Limitation of Liability',
      body: 'Anclora Group shall not be liable for direct or indirect damages, data loss, loss of profits, or other losses arising from the use or inability to use this website, except where Spanish law does not permit such exclusion.',
    },
    {
      heading: '8. Modifications',
      body: 'Anclora Group reserves the right to modify these terms at any time. Changes take effect upon publication on the website. Continued use of the site following the publication of changes implies their acceptance.',
    },
    {
      heading: '9. Contact',
      body: 'For any enquiries regarding these terms, please contact us at hola@anclora.com.',
    },
  ],
  de: [
    {
      heading: '1. Gegenstand',
      body: 'Diese Bedingungen regeln die Nutzung der Website von Anclora Private Estates, die den diskreten und erstklassigen Immobilienvermittlungsservice von Anclora Group in Palma und dem Südwesten Mallorcas vorstellt.',
    },
    {
      heading: '2. Nutzungsbedingungen der Website',
      body: 'Der Zugang zu und die Nutzung dieser Website impliziert die Annahme dieser Bedingungen. Die Website dient zum Durchsuchen von Informationen und zur Einreichung von Kontakt- oder Immobilienbewertungsanfragen. Jede Nutzung, die gegen Gesetze, Moral oder die öffentliche Ordnung verstößt, ist verboten.',
    },
    {
      heading: '3. Verantwortung des Nutzers',
      body: 'Der Nutzer verpflichtet sich, in den Kontakt- und Serviceanfrageformularen wahrheitsgemäße, vollständige und aktuelle Informationen anzugeben. Für unrichtige Angaben des Nutzers trägt dieser die alleinige Verantwortung.',
    },
    {
      heading: '4. Leistungsbeschränkungen',
      body: [
        'Preise, Verfügbarkeit und Konditionen von Immobilien unterliegen der Bestätigung und können sich ohne Vorankündigung ändern.',
        'Visualisierungen, Bilder, Beschreibungen und Projektionen auf der Website sind nur orientierungshalber und stellen kein verbindliches Angebot dar.',
        'Die Immobilienvermittlung ist an die gegenseitige Einigung zwischen Käufer und Verkäufer geknüpft.',
      ],
    },
    {
      heading: '5. Geistiges Eigentum',
      body: 'Alle Inhalte dieser Website — einschließlich Texte, Bilder, Logos, grafische Designs und Code — sind Eigentum von Anclora Group oder werden ihr lizenziert. Reproduktion, Verbreitung oder kommerzielle Nutzung ohne ausdrückliche schriftliche Genehmigung ist untersagt.',
    },
    {
      heading: '6. Gewährleistungsausschluss',
      body: 'Anclora Private Estates erbringt einen Immobilienvermittlungsservice. Die auf dieser Website veröffentlichten Informationen stellen keine rechtliche, steuerliche, finanzielle oder Anlageberatung dar. Anclora Group übernimmt keine Verantwortung für Entscheidungen, die ausschließlich auf der Grundlage der auf dieser Website veröffentlichten Informationen getroffen werden.',
    },
    {
      heading: '7. Haftungsbeschränkung',
      body: 'Anclora Group haftet nicht für direkte oder indirekte Schäden, Datenverluste, entgangene Gewinne oder sonstige Verluste, die aus der Nutzung oder Nichtnutzbarkeit dieser Website entstehen, außer in Fällen, in denen das spanische Recht einen solchen Ausschluss nicht gestattet.',
    },
    {
      heading: '8. Änderungen',
      body: 'Anclora Group behält sich das Recht vor, diese Bedingungen jederzeit zu ändern. Änderungen treten mit ihrer Veröffentlichung auf der Website in Kraft. Die weitere Nutzung der Website nach der Veröffentlichung von Änderungen impliziert deren Annahme.',
    },
    {
      heading: '9. Kontakt',
      body: 'Für Fragen zu diesen Bedingungen wenden Sie sich bitte an hola@anclora.com.',
    },
  ],
};

// ── Legal / Aviso legal content ─────────────────────────────────────────────

const legalContent: Record<Lang, Section[]> = {
  es: [
    {
      heading: '1. Titularidad',
      body: 'Anclora Private Estates es el servicio de intermediación inmobiliaria premium operado por Anclora Group. Anclora Private Estates forma parte del ecosistema Anclora Group.',
    },
    {
      heading: '2. Uso permitido',
      body: 'El acceso y la navegación por este sitio web implica la aceptación de las condiciones de uso aplicables. El sitio está destinado exclusivamente a la presentación del servicio y a la recepción de solicitudes de información. No se permite su uso con fines contrarios a la ley española.',
    },
    {
      heading: '3. Propiedad intelectual',
      body: 'Todos los contenidos del sitio — incluyendo textos, imágenes, logotipos, composiciones gráficas, código fuente y estructura — son de titularidad de Anclora Group o están sujetos a licencia en su favor. Cualquier uso no autorizado constituirá una infracción de los derechos de propiedad intelectual.',
    },
    {
      heading: '4. Responsabilidad sobre contenidos',
      body: 'Anclora Group adopta las medidas razonables para mantener la información del sitio actualizada y veraz. No obstante, no garantiza la exactitud, integridad o actualidad de todos los contenidos. La información publicada no sustituye el asesoramiento profesional legal, fiscal o financiero.',
    },
    {
      heading: '5. Marca y ecosistema',
      body: 'Anclora Private Estates forma parte del ecosistema Anclora Group. Los nombres, logotipos y señas de identidad visuales de Anclora son propiedad de Anclora Group. Su reproducción o uso no autorizado está expresamente prohibido.',
    },
    {
      heading: '6. Legislación aplicable',
      body: 'El presente aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso de este sitio, las partes se someten a los juzgados y tribunales de Palma de Mallorca, con renuncia expresa a cualquier otro fuero.',
    },
    {
      heading: '7. Contacto',
      body: 'Para cualquier consulta relacionada con el presente aviso legal, puede dirigirse a hola@anclora.com.',
    },
  ],
  en: [
    {
      heading: '1. Ownership',
      body: 'Anclora Private Estates is the premium real estate intermediation service operated by Anclora Group. Anclora Private Estates is part of the Anclora Group ecosystem.',
    },
    {
      heading: '2. Permitted Use',
      body: 'Accessing and browsing this website implies acceptance of the applicable terms of use. The site is intended exclusively for presenting the service and receiving information requests. Use for any purpose contrary to Spanish law is not permitted.',
    },
    {
      heading: '3. Intellectual Property',
      body: 'All content on this site — including texts, images, logos, graphic compositions, source code, and structure — is owned by Anclora Group or licensed to it. Any unauthorized use constitutes an infringement of intellectual property rights.',
    },
    {
      heading: '4. Content Accuracy',
      body: "Anclora Group takes reasonable steps to keep the site's information current and accurate. However, it does not guarantee the accuracy, completeness, or currency of all content. Information published does not replace professional legal, tax, or financial advice.",
    },
    {
      heading: '5. Brand and Ecosystem',
      body: 'Anclora Private Estates is part of the Anclora Group ecosystem. The names, logos, and visual identity elements of Anclora are the property of Anclora Group. Their unauthorized reproduction or use is expressly prohibited.',
    },
    {
      heading: '6. Applicable Law',
      body: 'This legal notice is governed by Spanish law. For any dispute arising from the use of this site, the parties submit to the courts of Palma de Mallorca, expressly waiving any other jurisdiction.',
    },
    {
      heading: '7. Contact',
      body: 'For any enquiries relating to this legal notice, please write to hola@anclora.com.',
    },
  ],
  de: [
    {
      heading: '1. Betreiber',
      body: 'Anclora Private Estates ist der erstklassige Immobilienvermittlungsservice, der von Anclora Group betrieben wird. Anclora Private Estates ist Teil des Anclora Group-Ökosystems.',
    },
    {
      heading: '2. Erlaubte Nutzung',
      body: 'Der Zugang zu und das Durchsuchen dieser Website impliziert die Annahme der geltenden Nutzungsbedingungen. Die Website dient ausschließlich der Präsentation des Services und der Entgegennahme von Informationsanfragen. Nutzungen, die gegen spanisches Recht verstoßen, sind nicht gestattet.',
    },
    {
      heading: '3. Geistiges Eigentum',
      body: 'Alle Inhalte dieser Website — einschließlich Texte, Bilder, Logos, grafische Kompositionen, Quellcode und Struktur — sind Eigentum von Anclora Group oder werden ihr lizenziert. Jede unbefugte Nutzung stellt eine Verletzung der Rechte des geistigen Eigentums dar.',
    },
    {
      heading: '4. Haftung für Inhalte',
      body: 'Anclora Group trifft angemessene Maßnahmen, um die Informationen auf der Website aktuell und korrekt zu halten. Es wird jedoch keine Garantie für die Richtigkeit, Vollständigkeit oder Aktualität aller Inhalte übernommen. Die veröffentlichten Informationen ersetzen keine professionelle rechtliche, steuerliche oder finanzielle Beratung.',
    },
    {
      heading: '5. Marke und Ökosystem',
      body: 'Anclora Private Estates ist Teil des technologischen Ökosystems von Anclora Group. Die Namen, Logos und visuellen Identitätselemente von Anclora sind Eigentum von Anclora Group. Deren unbefugte Reproduktion oder Nutzung ist ausdrücklich untersagt.',
    },
    {
      heading: '6. Anwendbares Recht',
      body: 'Dieses Impressum unterliegt spanischem Recht. Für etwaige Streitigkeiten aus der Nutzung dieser Website unterwerfen sich die Parteien den Gerichten von Palma de Mallorca unter ausdrücklichem Verzicht auf jeden anderen Gerichtsstand.',
    },
    {
      heading: '7. Kontakt',
      body: 'Für Anfragen zum Impressum wenden Sie sich bitte an hola@anclora.com.',
    },
  ],
};

// ── Content map ─────────────────────────────────────────────────────────────

const contentMap: Record<LegalKind, Record<Lang, Section[]>> = {
  privacy: privacyContent,
  terms: termsContent,
  legal: legalContent,
};

// ── Component ───────────────────────────────────────────────────────────────

export function LegalPagePE({ kind }: LegalPagePEProps) {
  const lang = getLang();
  const sections = contentMap[kind][lang];
  const title = titles[kind][lang];
  const updatedLabel = updatedLabels[lang];
  const backLabel = backLabels[lang];

  return (
    <div
      className="pe-section"
      style={{
        minHeight: '100vh',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        background: 'var(--pe-bg)',
      }}
    >
      <div
        className="pe-container"
        style={{ maxWidth: '800px' }}
      >
        {/* Header */}
        <header style={{ marginBottom: '3rem' }}>
          <p className="pe-eyebrow" style={{ marginBottom: '1rem' }}>Legal</p>
          <h1
            className="pe-display"
            style={{
              fontFamily: 'var(--pe-font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--pe-text)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: 'var(--pe-text-muted)',
              fontSize: 'var(--pe-text-sm)',
              marginBottom: '2rem',
            }}
          >
            {updatedLabel}
          </p>
          <hr
            style={{
              border: 'none',
              borderTop: '1px solid var(--pe-line-mid)',
              marginTop: '0',
            }}
          />
        </header>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2
                style={{
                  fontFamily: 'var(--pe-font-body)',
                  fontSize: 'var(--pe-text-base)',
                  fontWeight: 600,
                  color: 'var(--pe-text)',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.01em',
                }}
              >
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  {section.body.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: 'var(--pe-text-soft)',
                        fontSize: 'var(--pe-text-sm)',
                        lineHeight: 1.7,
                        paddingLeft: '1.25rem',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.55em',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--pe-gold)',
                          display: 'inline-block',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  style={{
                    color: 'var(--pe-text-soft)',
                    fontSize: 'var(--pe-text-sm)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {section.body}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Footer line */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid var(--pe-line-mid)',
            margin: '3rem 0 2rem',
          }}
        />

        {/* Back link */}
        <a
          href="/"
          className="pe-btn-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: 'var(--pe-text-sm)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'var(--pe-text-soft)',
            padding: '0.75rem 1.5rem',
            border: '1px solid var(--pe-line-strong)',
            borderRadius: 'var(--pe-radius-pill)',
            transition: 'all var(--pe-duration-base) var(--pe-ease)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--pe-gold)';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--pe-gold)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'var(--pe-text-soft)';
            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--pe-line-strong)';
          }}
        >
          {backLabel}
        </a>
      </div>
    </div>
  );
}
