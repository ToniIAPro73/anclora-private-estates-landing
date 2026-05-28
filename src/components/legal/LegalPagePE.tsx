type LegalKind = 'privacy' | 'terms' | 'legal';
type Lang = 'es' | 'ca' | 'de' | 'en' | 'sv' | 'fr' | 'it' | 'da' | 'nl' | 'no' | 'pt';

const ALL_LANGS: Lang[] = ['es', 'ca', 'de', 'en', 'sv', 'fr', 'it', 'da', 'nl', 'no', 'pt'];

interface LegalPagePEProps {
  kind: LegalKind;
  language?: string;
}

function getLang(propLanguage?: string): Lang {
  const candidate = propLanguage ?? (typeof window !== 'undefined' ? window.localStorage.getItem('ape:language') ?? '' : '');
  if (ALL_LANGS.includes(candidate as Lang)) return candidate as Lang;
  return 'es';
}

// ── Titles ─────────────────────────────────────────────────────────────────

const titles: Record<LegalKind, Record<Lang, string>> = {
  privacy: {
    es: 'Política de Privacidad',
    ca: 'Política de Privacitat',
    en: 'Privacy Policy',
    de: 'Datenschutzerklärung',
    sv: 'Integritetspolicy',
    fr: 'Politique de Confidentialité',
    it: 'Informativa sulla Privacy',
    da: 'Privatlivspolitik',
    nl: 'Privacybeleid',
    no: 'Personvernerklæring',
    pt: 'Política de Privacidade',
  },
  terms: {
    es: 'Términos y Condiciones',
    ca: 'Termes i Condicions',
    en: 'Terms and Conditions',
    de: 'Nutzungsbedingungen',
    sv: 'Användarvillkor',
    fr: 'Conditions Générales d\'Utilisation',
    it: 'Termini e Condizioni',
    da: 'Vilkår og Betingelser',
    nl: 'Algemene Voorwaarden',
    no: 'Vilkår og Betingelser',
    pt: 'Termos e Condições',
  },
  legal: {
    es: 'Aviso Legal',
    ca: 'Avís Legal',
    en: 'Legal Notice',
    de: 'Impressum',
    sv: 'Juridisk Meddelande',
    fr: 'Mentions Légales',
    it: 'Note Legali',
    da: 'Juridisk Meddelelse',
    nl: 'Juridische Mededeling',
    no: 'Juridisk Merknad',
    pt: 'Aviso Legal',
  },
};

const updatedLabels: Record<Lang, string> = {
  es: 'Última actualización: mayo de 2026',
  ca: 'Última actualització: maig de 2026',
  en: 'Last updated: May 2026',
  de: 'Letzte Aktualisierung: Mai 2026',
  sv: 'Senast uppdaterad: maj 2026',
  fr: 'Dernière mise à jour : mai 2026',
  it: 'Ultimo aggiornamento: maggio 2026',
  da: 'Sidst opdateret: maj 2026',
  nl: 'Laatst bijgewerkt: mei 2026',
  no: 'Sist oppdatert: mai 2026',
  pt: 'Última atualização: maio de 2026',
};

const backLabels: Record<Lang, string> = {
  es: '← Volver',
  ca: '← Tornar',
  en: '← Back',
  de: '← Zurück',
  sv: '← Tillbaka',
  fr: '← Retour',
  it: '← Indietro',
  da: '← Tilbage',
  nl: '← Terug',
  no: '← Tilbake',
  pt: '← Voltar',
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
  ca: [
    {
      heading: '1. Responsable del tractament',
      body: 'Anclora Group és el responsable del tractament de les dades personals recollides a través d\'aquest lloc web. Podeu contactar-nos a hola@anclora.com.',
    },
    {
      heading: '2. Dades que tractem',
      body: [
        'Nom, adreça de correu electrònic i número de telèfon.',
        'Tipologia de propietat buscada o en venda, zona geogràfica d\'interès i rang d\'inversió.',
        'Motivació de compra o venda i horitzó temporal.',
        'Dades de patrimoni o solvència únicament quan l\'usuari les facilita voluntàriament a través dels formularis del lloc.',
      ],
    },
    {
      heading: '3. Finalitats del tractament',
      body: [
        'Gestió de sol·licituds immobiliàries i pressupostos de valoració.',
        'Contacte personalitzat per part de l\'equip d\'Anclora Private Estates.',
        'Presentació d\'oportunitats immobiliàries adaptades al perfil de l\'usuari.',
        'Seguiment de converses i relacions comercials en curs.',
      ],
    },
    {
      heading: '4. Base jurídica',
      body: 'El tractament de les seves dades es realitza sobre la base del seu consentiment exprés atorgat en el moment d\'emplenar qualsevol dels formularis del lloc, de conformitat amb l\'article 6.1.a) del Reglament General de Protecció de Dades (RGPD).',
    },
    {
      heading: '5. Comunicació amb tercers',
      body: 'Les seves dades podran ser comunicades a advocats, notaris, assessors fiscals o relocation advisors col·laboradors d\'Anclora Group únicament quan vostè hagi atorgat el seu consentiment explícit per a aquesta comunicació. En cap cas les seves dades seran cedides a tercers amb fins publicitaris o comercials aliens a l\'operació immobiliària que gestioni.',
    },
    {
      heading: '6. Terminis de conservació',
      body: [
        'Dades de contacte: conservades durant 24 mesos des de l\'últim contacte actiu.',
        'Dades de valoració i anàlisi d\'actiu: conservades durant 36 mesos.',
        'Transcorreguts aquests terminis, les dades seran suprimides de forma segura llevat que existeixi obligació legal de conservació.',
      ],
    },
    {
      heading: '7. Cessió de dades',
      body: 'Les seves dades no seran cedides ni transmeses a tercers sense el seu consentiment previ, llevat que ho exigeixi una obligació legal vigent.',
    },
    {
      heading: '8. Prevenció del blanqueig de capitals',
      body: 'En les fases transaccionals d\'una operació immobiliària poden aplicar-se obligacions legals d\'identificació del client derivades de la normativa espanyola de prevenció del blanqueig de capitals. En aquest context, podrem estar obligats a recaptar documentació addicional d\'identificació.',
    },
    {
      heading: '9. Descàrrec de responsabilitat informativa',
      body: 'La informació publicada en aquest lloc web té caràcter merament orientatiu i no constitueix assessorament fiscal, legal ni financer vinculant. Per a decisions d\'inversió, li recomanem consultar a professionals degudament habilitats.',
    },
    {
      heading: '10. Drets RGPD',
      body: 'D\'acord amb la normativa europea de protecció de dades, vostè té dret a: accedir a les seves dades personals, rectificar-les, suprimir-les, limitar el seu tractament, oposar-se al mateix i sol·licitar la portabilitat de les seves dades. Per exercir qualsevol d\'aquests drets, dirigiu-vos a hola@anclora.com. Té dret a presentar una reclamació davant l\'Agència Espanyola de Protecció de Dades (aepd.es).',
    },
    {
      heading: '11. Contacte',
      body: 'Per a qualsevol qüestió relacionada amb el tractament de les seves dades, podeu contactar amb nosaltres a hola@anclora.com.',
    },
  ],
  sv: [
    {
      heading: '1. Personuppgiftsansvarig',
      body: 'Anclora Group är personuppgiftsansvarig för de personuppgifter som samlas in via denna webbplats. Du kan kontakta oss på hola@anclora.com.',
    },
    {
      heading: '2. Uppgifter vi behandlar',
      body: [
        'Namn, e-postadress och telefonnummer.',
        'Typ av fastighet som söks eller är till salu, geografiskt intresseområde och investeringsintervall.',
        'Motivering till köp eller försäljning och avsedd tidshorisont.',
        'Förmögenhets- eller kredituppgifter enbart när användaren frivilligt tillhandahåller dessa via webbplatsens formulär.',
      ],
    },
    {
      heading: '3. Ändamål med behandlingen',
      body: [
        'Hantering av fastighetsförfrågningar och värderingsbeställningar.',
        'Personlig uppföljning från Anclora Private Estates team.',
        'Presentation av fastighetsmöjligheter anpassade till användarens profil.',
        'Löpande hantering av kommersiella relationer.',
      ],
    },
    {
      heading: '4. Rättslig grund',
      body: 'Behandlingen av dina uppgifter grundar sig på ditt uttryckliga samtycke som ges när du fyller i något av webbplatsens formulär, i enlighet med artikel 6.1 a) i den allmänna dataskyddsförordningen (GDPR).',
    },
    {
      heading: '5. Kommunikation med tredje part',
      body: 'Dina uppgifter kan delas med advokater, notarier, skatterådgivare eller relocation advisors som samarbetar med Anclora Group, men enbart när du uttryckligen har samtyckt till sådan kommunikation. Dina uppgifter kommer aldrig att lämnas till tredje part för reklam- eller kommersiella ändamål som saknar samband med den fastighetsaffär som hanteras.',
    },
    {
      heading: '6. Lagringsperioder',
      body: [
        'Kontaktuppgifter: lagras i 24 månader från den senaste aktiva kontakten.',
        'Värderings- och tillgångsanalysuppgifter: lagras i 36 månader.',
        'Efter dessa perioder raderas uppgifterna på ett säkert sätt om det inte finns en laglig skyldighet att spara dem.',
      ],
    },
    {
      heading: '7. Dataöverföringar',
      body: 'Dina uppgifter kommer inte att överföras eller lämnas ut till tredje part utan ditt föregående samtycke, om det inte krävs enligt tillämplig lag.',
    },
    {
      heading: '8. Åtgärder mot penningtvätt',
      body: 'I de transaktionella faserna av en fastighetstransaktion kan juridiska skyldigheter för kundidentifiering enligt spanska regler om åtgärder mot penningtvätt gälla. I sådana fall kan vi vara skyldiga att inhämta ytterligare identifieringsdokumentation.',
    },
    {
      heading: '9. Friskrivning',
      body: 'Information som publiceras på denna webbplats är enbart vägledande och utgör inte bindande skatterättslig, juridisk eller finansiell rådgivning. Vid investeringsbeslut rekommenderar vi att konsultera behöriga fackexperter.',
    },
    {
      heading: '10. GDPR-rättigheter',
      body: 'Enligt europeisk dataskyddslagstiftning har du rätt att: få tillgång till dina personuppgifter, rätta dem, radera dem, begränsa behandlingen av dem, invända mot behandlingen och begära dataportabilitet. För att utöva dessa rättigheter kontaktar du hola@anclora.com. Du har också rätt att lämna in ett klagomål till den spanska dataskyddsmyndigheten (aepd.es).',
    },
    {
      heading: '11. Kontakt',
      body: 'Vid frågor om behandlingen av dina personuppgifter är du välkommen att kontakta oss på hola@anclora.com.',
    },
  ],
  fr: [
    {
      heading: '1. Responsable du traitement',
      body: 'Anclora Group est le responsable du traitement des données personnelles collectées via ce site web. Vous pouvez nous contacter à l\'adresse hola@anclora.com.',
    },
    {
      heading: '2. Données que nous traitons',
      body: [
        'Nom, adresse e-mail et numéro de téléphone.',
        'Type de bien recherché ou mis en vente, zone géographique d\'intérêt et fourchette d\'investissement.',
        'Motivation d\'achat ou de vente et horizon temporel envisagé.',
        'Données patrimoniales ou de solvabilité uniquement lorsque l\'utilisateur les fournit volontairement via les formulaires du site.',
      ],
    },
    {
      heading: '3. Finalités du traitement',
      body: [
        'Gestion des demandes immobilières et des demandes d\'évaluation.',
        'Suivi personnalisé par l\'équipe d\'Anclora Private Estates.',
        'Présentation d\'opportunités immobilières adaptées au profil de l\'utilisateur.',
        'Gestion des relations commerciales en cours.',
      ],
    },
    {
      heading: '4. Base juridique',
      body: 'Le traitement de vos données est fondé sur votre consentement explicite donné lors du remplissage de l\'un des formulaires du site, conformément à l\'article 6, paragraphe 1, point a) du Règlement général sur la protection des données (RGPD).',
    },
    {
      heading: '5. Communication à des tiers',
      body: 'Vos données peuvent être communiquées à des avocats, notaires, conseillers fiscaux ou relocation advisors collaborant avec Anclora Group, uniquement lorsque vous avez donné votre consentement explicite à cette communication. Vos données ne seront jamais transmises à des tiers à des fins publicitaires ou commerciales sans rapport avec l\'opération immobilière gérée.',
    },
    {
      heading: '6. Durées de conservation',
      body: [
        'Données de contact : conservées pendant 24 mois à compter du dernier contact actif.',
        'Données d\'évaluation et d\'analyse d\'actifs : conservées pendant 36 mois.',
        'À l\'issue de ces délais, les données seront supprimées de manière sécurisée, sauf obligation légale de conservation.',
      ],
    },
    {
      heading: '7. Transferts de données',
      body: 'Vos données ne seront pas transférées ni divulguées à des tiers sans votre consentement préalable, sauf si la loi applicable l\'exige.',
    },
    {
      heading: '8. Lutte contre le blanchiment de capitaux',
      body: 'Lors des phases transactionnelles d\'une opération immobilière, des obligations légales d\'identification du client découlant de la réglementation espagnole en matière de lutte contre le blanchiment de capitaux peuvent s\'appliquer. Dans ce cas, nous pouvons être tenus de recueillir des documents d\'identification supplémentaires.',
    },
    {
      heading: '9. Avertissement',
      body: 'Les informations publiées sur ce site web ont un caractère purement indicatif et ne constituent pas un conseil fiscal, juridique ou financier contraignant. Pour toute décision d\'investissement, nous vous recommandons de consulter des professionnels dûment qualifiés.',
    },
    {
      heading: '10. Droits RGPD',
      body: 'Conformément à la législation européenne sur la protection des données, vous disposez du droit d\'accéder à vos données personnelles, de les rectifier, de les effacer, d\'en limiter le traitement, de vous y opposer et d\'en demander la portabilité. Pour exercer l\'un de ces droits, contactez hola@anclora.com. Vous avez également le droit d\'introduire une réclamation auprès de l\'Agence espagnole de protection des données (aepd.es).',
    },
    {
      heading: '11. Contact',
      body: 'Pour toute question relative au traitement de vos données personnelles, veuillez nous contacter à hola@anclora.com.',
    },
  ],
  it: [
    {
      heading: '1. Titolare del trattamento',
      body: 'Anclora Group è il titolare del trattamento dei dati personali raccolti tramite questo sito web. Puoi contattarci all\'indirizzo hola@anclora.com.',
    },
    {
      heading: '2. Dati che trattiamo',
      body: [
        'Nome, indirizzo e-mail e numero di telefono.',
        'Tipologia di immobile ricercato o in vendita, area geografica di interesse e fascia di investimento.',
        'Motivazione di acquisto o vendita e orizzonte temporale previsto.',
        'Dati patrimoniali o di solvibilità solo quando l\'utente li fornisce volontariamente tramite i moduli del sito.',
      ],
    },
    {
      heading: '3. Finalità del trattamento',
      body: [
        'Gestione di richieste immobiliari e richieste di valutazione.',
        'Contatto personalizzato da parte del team di Anclora Private Estates.',
        'Presentazione di opportunità immobiliari adattate al profilo dell\'utente.',
        'Gestione delle relazioni commerciali in corso.',
      ],
    },
    {
      heading: '4. Base giuridica',
      body: 'Il trattamento dei tuoi dati si basa sul tuo consenso esplicito prestato al momento della compilazione di uno qualsiasi dei moduli del sito, ai sensi dell\'articolo 6, paragrafo 1, lettera a) del Regolamento generale sulla protezione dei dati (GDPR).',
    },
    {
      heading: '5. Comunicazione a terzi',
      body: 'I tuoi dati possono essere comunicati ad avvocati, notai, consulenti fiscali o relocation advisors che collaborano con Anclora Group, esclusivamente quando hai fornito il tuo consenso esplicito a tale comunicazione. I tuoi dati non saranno mai ceduti a terzi per finalità pubblicitarie o commerciali estranee all\'operazione immobiliare gestita.',
    },
    {
      heading: '6. Periodi di conservazione',
      body: [
        'Dati di contatto: conservati per 24 mesi dall\'ultimo contatto attivo.',
        'Dati di valutazione e analisi di attivi: conservati per 36 mesi.',
        'Trascorsi tali periodi, i dati saranno cancellati in modo sicuro salvo obbligo legale di conservazione.',
      ],
    },
    {
      heading: '7. Trasferimento di dati',
      body: 'I tuoi dati non saranno trasferiti né comunicati a terzi senza il tuo previo consenso, salvo ove richiesto dalla legge applicabile.',
    },
    {
      heading: '8. Antiriciclaggio',
      body: 'Nelle fasi transazionali di un\'operazione immobiliare possono applicarsi obblighi legali di identificazione del cliente derivanti dalla normativa spagnola in materia di prevenzione del riciclaggio di denaro. In tali casi potremmo essere tenuti a raccogliere documentazione di identificazione aggiuntiva.',
    },
    {
      heading: '9. Disclaimer',
      body: 'Le informazioni pubblicate su questo sito web hanno carattere meramente indicativo e non costituiscono consulenza fiscale, legale o finanziaria vincolante. Per decisioni di investimento, si raccomanda di consultare professionisti debitamente qualificati.',
    },
    {
      heading: '10. Diritti GDPR',
      body: 'Ai sensi della normativa europea sulla protezione dei dati, hai il diritto di: accedere ai tuoi dati personali, rettificarli, cancellarli, limitarne il trattamento, opporti al trattamento e richiederne la portabilità. Per esercitare uno qualsiasi di questi diritti, contatta hola@anclora.com. Hai inoltre il diritto di presentare un reclamo all\'Agenzia spagnola per la protezione dei dati (aepd.es).',
    },
    {
      heading: '11. Contatto',
      body: 'Per qualsiasi domanda relativa al trattamento dei tuoi dati personali, puoi contattarci all\'indirizzo hola@anclora.com.',
    },
  ],
  da: [
    {
      heading: '1. Dataansvarlig',
      body: 'Anclora Group er dataansvarlig for de personoplysninger, der indsamles via dette websted. Du kan kontakte os på hola@anclora.com.',
    },
    {
      heading: '2. Oplysninger vi behandler',
      body: [
        'Navn, e-mailadresse og telefonnummer.',
        'Type ejendom, der søges eller er til salg, geografisk interesseområde og investeringsramme.',
        'Motivation for køb eller salg og den tilsigtede tidshorisont.',
        'Formue- eller kreditoplysninger kun når brugeren frivilligt angiver dem via webstedets formularer.',
      ],
    },
    {
      heading: '3. Formål med behandlingen',
      body: [
        'Håndtering af ejendomsforespørgsler og vurderingsanmodninger.',
        'Personlig opfølgning fra Anclora Private Estates team.',
        'Præsentation af ejendomsmuligheder tilpasset brugerens profil.',
        'Løbende håndtering af kommercielle relationer.',
      ],
    },
    {
      heading: '4. Retsgrundlag',
      body: 'Behandlingen af dine oplysninger er baseret på dit udtrykkelige samtykke, som gives ved udfyldelse af en af webstedets formularer, i overensstemmelse med artikel 6, stk. 1, litra a) i den generelle forordning om databeskyttelse (GDPR).',
    },
    {
      heading: '5. Kommunikation med tredjeparter',
      body: 'Dine oplysninger kan deles med advokater, notarer, skatterådgivere eller relocation advisors, der samarbejder med Anclora Group, men kun når du udtrykkeligt har givet samtykke til sådan kommunikation. Dine oplysninger vil aldrig blive videregivet til tredjeparter til reklame- eller kommercielle formål, der er uden forbindelse til den ejendomstransaktion, der administreres.',
    },
    {
      heading: '6. Opbevaringsperioder',
      body: [
        'Kontaktoplysninger: opbevares i 24 måneder fra den seneste aktive kontakt.',
        'Vurderings- og aktivanalysoplysninger: opbevares i 36 måneder.',
        'Efter disse perioder slettes oplysningerne sikkert, medmindre der gælder en lovbestemt opbevaringspligt.',
      ],
    },
    {
      heading: '7. Dataoverførsler',
      body: 'Dine oplysninger vil ikke blive overført eller videregivet til tredjeparter uden dit forudgående samtykke, medmindre det kræves i henhold til gældende lovgivning.',
    },
    {
      heading: '8. Hvidvaskbekæmpelse',
      body: 'I de transaktionelle faser af en ejendomstransaktion kan der gælde lovbestemte kundentifikationsforpligtelser i henhold til spanske regler om hvidvaskbekæmpelse. I sådanne tilfælde kan vi være forpligtet til at indsamle yderligere identifikationsdokumentation.',
    },
    {
      heading: '9. Ansvarsfraskrivelse',
      body: 'Oplysninger offentliggjort på dette websted er udelukkende vejledende og udgør ikke bindende skatteretlig, juridisk eller finansiel rådgivning. Ved investeringsbeslutninger anbefaler vi at konsultere behørigt kvalificerede fagfolk.',
    },
    {
      heading: '10. GDPR-rettigheder',
      body: 'I henhold til europæisk databeskyttelseslovgivning har du ret til at: få adgang til dine personoplysninger, berigtige dem, slette dem, begrænse behandlingen af dem, gøre indsigelse mod behandlingen og anmode om dataportabilitet. For at udøve disse rettigheder kontakter du hola@anclora.com. Du har også ret til at indgive en klage til den spanske databeskyttelsesmyndighed (aepd.es).',
    },
    {
      heading: '11. Kontakt',
      body: 'Ved spørgsmål om behandlingen af dine personoplysninger er du velkommen til at kontakte os på hola@anclora.com.',
    },
  ],
  nl: [
    {
      heading: '1. Verwerkingsverantwoordelijke',
      body: 'Anclora Group is de verwerkingsverantwoordelijke voor de persoonsgegevens die via deze website worden verzameld. U kunt contact met ons opnemen via hola@anclora.com.',
    },
    {
      heading: '2. Gegevens die wij verwerken',
      body: [
        'Naam, e-mailadres en telefoonnummer.',
        'Type gezochte of te verkopen woning, geografisch interessegebied en investeringsbereik.',
        'Motivatie voor aankoop of verkoop en beoogde tijdshorizon.',
        'Vermogens- of kredietgegevens alleen wanneer de gebruiker deze vrijwillig via de formulieren op de site verstrekt.',
      ],
    },
    {
      heading: '3. Doeleinden van de verwerking',
      body: [
        'Beheer van vastgoedaanvragen en taxatieverzoeken.',
        'Persoonlijke opvolging door het team van Anclora Private Estates.',
        'Presentatie van vastgoedmogelijkheden die zijn afgestemd op het profiel van de gebruiker.',
        'Beheer van lopende zakelijke relaties.',
      ],
    },
    {
      heading: '4. Rechtsgrondslag',
      body: 'De verwerking van uw gegevens is gebaseerd op uw uitdrukkelijke toestemming die u geeft bij het invullen van een van de formulieren op de site, overeenkomstig artikel 6, lid 1, punt a) van de Algemene Verordening Gegevensbescherming (AVG).',
    },
    {
      heading: '5. Mededeling aan derden',
      body: 'Uw gegevens kunnen worden gedeeld met advocaten, notarissen, belastingadviseurs of relocation advisors die samenwerken met Anclora Group, maar alleen wanneer u uitdrukkelijk toestemming heeft gegeven voor een dergelijke mededeling. Uw gegevens worden nooit doorgegeven aan derden voor reclame- of commerciële doeleinden die geen verband houden met de beheerde vastgoedtransactie.',
    },
    {
      heading: '6. Bewaartermijnen',
      body: [
        'Contactgegevens: bewaard gedurende 24 maanden na het laatste actieve contact.',
        'Taxatie- en activaanalysegegevens: bewaard gedurende 36 maanden.',
        'Na deze perioden worden de gegevens veilig verwijderd, tenzij er een wettelijke bewaarplicht geldt.',
      ],
    },
    {
      heading: '7. Gegevensoverdrachten',
      body: 'Uw gegevens worden niet overgedragen of bekendgemaakt aan derden zonder uw voorafgaande toestemming, tenzij dit vereist is op grond van toepasselijk recht.',
    },
    {
      heading: '8. Antiwitwassen',
      body: 'In de transactionele fasen van een vastgoedtransactie kunnen wettelijke identificatieverplichtingen van klanten op grond van Spaanse antiwitwaswetgeving van toepassing zijn. In dergelijke gevallen kunnen wij verplicht zijn aanvullende identificatiedocumentatie te verzamelen.',
    },
    {
      heading: '9. Disclaimer',
      body: 'Informatie op deze website is uitsluitend bedoeld als algemene leidraad en vormt geen bindend fiscaal, juridisch of financieel advies. Voor investeringsbeslissingen raden wij aan gekwalificeerde professionals te raadplegen.',
    },
    {
      heading: '10. AVG-rechten',
      body: 'Op grond van de Europese gegevensbeschermingswetgeving heeft u het recht om: uw persoonsgegevens in te zien, te corrigeren, te wissen, de verwerking te beperken, bezwaar te maken tegen de verwerking en gegevensoverdraagbaarheid te verzoeken. Neem contact op met hola@anclora.com om deze rechten uit te oefenen. U heeft ook het recht een klacht in te dienen bij de Spaanse gegevensbeschermingsautoriteit (aepd.es).',
    },
    {
      heading: '11. Contact',
      body: 'Voor vragen over de verwerking van uw persoonsgegevens kunt u contact met ons opnemen via hola@anclora.com.',
    },
  ],
  no: [
    {
      heading: '1. Behandlingsansvarlig',
      body: 'Anclora Group er behandlingsansvarlig for personopplysningene som samles inn via dette nettstedet. Du kan kontakte oss på hola@anclora.com.',
    },
    {
      heading: '2. Opplysninger vi behandler',
      body: [
        'Navn, e-postadresse og telefonnummer.',
        'Type eiendom som søkes eller er til salgs, geografisk interesseområde og investeringsramme.',
        'Motivasjon for kjøp eller salg og tiltenkt tidshorisont.',
        'Formue- eller kreditopplysninger kun når brukeren frivillig oppgir disse via nettstedets skjemaer.',
      ],
    },
    {
      heading: '3. Formål med behandlingen',
      body: [
        'Håndtering av eiendomsforespørgsler og verdsettelsesforespørgsler.',
        'Personlig oppfølging fra Anclora Private Estates team.',
        'Presentasjon av eiendomsmuligheter tilpasset brukerens profil.',
        'Løpende håndtering av kommersielle relasjoner.',
      ],
    },
    {
      heading: '4. Rettslig grunnlag',
      body: 'Behandlingen av dine opplysninger er basert på ditt uttrykkelige samtykke som gis ved utfylling av et av nettstedets skjemaer, i henhold til artikkel 6 nr. 1 bokstav a) i den generelle personvernforordningen (GDPR).',
    },
    {
      heading: '5. Kommunikasjon med tredjeparter',
      body: 'Dine opplysninger kan deles med advokater, notarer, skatterådgivere eller relocation advisors som samarbeider med Anclora Group, men kun når du uttrykkelig har gitt samtykke til slik kommunikasjon. Dine opplysninger vil aldri bli videreformidlet til tredjeparter for reklame- eller kommersielle formål som er uten tilknytning til eiendomstransaksjonen som håndteres.',
    },
    {
      heading: '6. Oppbevaringsperioder',
      body: [
        'Kontaktopplysninger: oppbevares i 24 måneder fra siste aktive kontakt.',
        'Verdsettings- og aktivaanalyseopplysninger: oppbevares i 36 måneder.',
        'Etter disse periodene slettes opplysningene på en sikker måte med mindre det foreligger en lovfestet oppbevaringsplikt.',
      ],
    },
    {
      heading: '7. Dataoverføringer',
      body: 'Dine opplysninger vil ikke bli overført eller utlevert til tredjeparter uten ditt forutgående samtykke, med mindre dette kreves i henhold til gjeldende lov.',
    },
    {
      heading: '8. Hvitvaskingsbekjempelse',
      body: 'I de transaksjonelle fasene av en eiendomstransaksjon kan det gjelde lovfestede kundentifikasjonsforpliktelser i henhold til spanske regler om hvitvaskingsbekjempelse. I slike tilfeller kan vi være forpliktet til å innhente ytterligere identifikasjonsdokumentasjon.',
    },
    {
      heading: '9. Ansvarsfraskrivelse',
      body: 'Informasjon publisert på dette nettstedet er utelukkende veiledende og utgjør ikke bindende skatterettslig, juridisk eller finansiell rådgivning. Ved investeringsbeslutninger anbefaler vi å konsultere behørig kvalifiserte fagpersoner.',
    },
    {
      heading: '10. GDPR-rettigheter',
      body: 'I henhold til europeisk personvernlovgivning har du rett til å: få tilgang til dine personopplysninger, rette dem, slette dem, begrense behandlingen av dem, protestere mot behandlingen og be om dataportabilitet. For å utøve disse rettighetene kontakter du hola@anclora.com. Du har også rett til å sende inn en klage til den spanske datatilsynsmyndigheten (aepd.es).',
    },
    {
      heading: '11. Kontakt',
      body: 'For spørsmål om behandlingen av dine personopplysninger kan du kontakte oss på hola@anclora.com.',
    },
  ],
  pt: [
    {
      heading: '1. Responsável pelo tratamento',
      body: 'Anclora Group é o responsável pelo tratamento dos dados pessoais recolhidos através deste sítio web. Pode contactar-nos em hola@anclora.com.',
    },
    {
      heading: '2. Dados que tratamos',
      body: [
        'Nome, endereço de correio eletrónico e número de telefone.',
        'Tipologia de imóvel procurado ou à venda, zona geográfica de interesse e intervalo de investimento.',
        'Motivação de compra ou venda e horizonte temporal.',
        'Dados de património ou solvência apenas quando o utilizador os fornece voluntariamente através dos formulários do sítio.',
      ],
    },
    {
      heading: '3. Finalidades do tratamento',
      body: [
        'Gestão de pedidos imobiliários e orçamentos de avaliação.',
        'Contacto personalizado por parte da equipa da Anclora Private Estates.',
        'Apresentação de oportunidades imobiliárias adaptadas ao perfil do utilizador.',
        'Acompanhamento de relações comerciais em curso.',
      ],
    },
    {
      heading: '4. Base jurídica',
      body: 'O tratamento dos seus dados é realizado com base no seu consentimento expresso prestado no momento de preenchimento de qualquer um dos formulários do sítio, nos termos do artigo 6.º, n.º 1, alínea a) do Regulamento Geral sobre a Proteção de Dados (RGPD).',
    },
    {
      heading: '5. Comunicação a terceiros',
      body: 'Os seus dados poderão ser comunicados a advogados, notários, consultores fiscais ou relocation advisors colaboradores da Anclora Group, exclusivamente quando tiver prestado o seu consentimento explícito para essa comunicação. Em nenhum caso os seus dados serão cedidos a terceiros para fins publicitários ou comerciais alheios à operação imobiliária gerida.',
    },
    {
      heading: '6. Prazos de conservação',
      body: [
        'Dados de contacto: conservados durante 24 meses a partir do último contacto ativo.',
        'Dados de avaliação e análise de ativos: conservados durante 36 meses.',
        'Decorridos estes prazos, os dados serão eliminados de forma segura, salvo obrigação legal de conservação.',
      ],
    },
    {
      heading: '7. Transferência de dados',
      body: 'Os seus dados não serão transferidos nem transmitidos a terceiros sem o seu consentimento prévio, salvo quando exigido por obrigação legal aplicável.',
    },
    {
      heading: '8. Prevenção do branqueamento de capitais',
      body: 'Nas fases transacionais de uma operação imobiliária podem aplicar-se obrigações legais de identificação do cliente decorrentes da regulamentação espanhola de prevenção do branqueamento de capitais. Nesse contexto, poderemos ser obrigados a recolher documentação de identificação adicional.',
    },
    {
      heading: '9. Exclusão de responsabilidade informativa',
      body: 'A informação publicada neste sítio web tem caráter meramente orientativo e não constitui aconselhamento fiscal, legal nem financeiro vinculativo. Para decisões de investimento, recomendamos consultar profissionais devidamente habilitados.',
    },
    {
      heading: '10. Direitos RGPD',
      body: 'Nos termos da regulamentação europeia de proteção de dados, tem direito a: aceder aos seus dados pessoais, retificá-los, apagá-los, limitar o seu tratamento, opor-se ao mesmo e solicitar a portabilidade dos seus dados. Para exercer qualquer destes direitos, dirija-se a hola@anclora.com. Tem direito a apresentar uma reclamação junto da Agência Espanhola de Proteção de Dados (aepd.es).',
    },
    {
      heading: '11. Contacto',
      body: 'Para qualquer questão relacionada com o tratamento dos seus dados, pode contactar-nos em hola@anclora.com.',
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
  ca: [
    {
      heading: '1. Objecte',
      body: 'Les presents condicions regulen l\'ús del lloc web d\'Anclora Private Estates, la finalitat del qual és la presentació del servei d\'intermediació immobiliària discreta i premium operat per Anclora Group a Palma i el sud-oest de Mallorca.',
    },
    {
      heading: '2. Condicions d\'ús del lloc',
      body: 'L\'accés i l\'ús d\'aquest lloc web implica l\'acceptació de les presents condicions. El lloc està destinat a la consulta d\'informació i a la sol·licitud de contacte o serveis de valoració immobiliària. Queda prohibit qualsevol ús contrari a la llei, la moral o l\'ordre públic.',
    },
    {
      heading: '3. Responsabilitats de l\'usuari',
      body: 'L\'usuari es compromet a facilitar informació veraç, completa i actualitzada en els formularis de contacte i sol·licitud de serveis. Qualsevol informació inexacta proporcionada per l\'usuari serà de la seva exclusiva responsabilitat.',
    },
    {
      heading: '4. Limitacions del servei',
      body: [
        'Els preus, disponibilitat i condicions dels actius immobiliaris estan subjectes a confirmació i poden variar sense previ avís.',
        'Els renders, imatges, descripcions i projeccions presentades al lloc són de caràcter orientatiu i no constitueixen oferta vinculant.',
        'La intermediació immobiliària està condicionada a l\'acceptació mútua entre comprador i venedor.',
      ],
    },
    {
      heading: '5. Propietat intel·lectual',
      body: 'Tots els continguts d\'aquest lloc web — incloent textos, imatges, logotips, dissenys gràfics i codi — són propietat d\'Anclora Group o estan llicenciats al seu favor. Queda prohibida la seva reproducció, distribució o ús comercial sense autorització expressa i per escrit.',
    },
    {
      heading: '6. Exclusió de garanties',
      body: 'Anclora Private Estates presta un servei d\'intermediació immobiliària. La informació publicada en aquest lloc no constitueix assessorament legal, fiscal, financer ni d\'inversió. Anclora Group no assumeix cap responsabilitat per decisions adoptades exclusivament en base a la informació publicada en aquest lloc.',
    },
    {
      heading: '7. Limitació de responsabilitat',
      body: 'Anclora Group no serà responsable de danys directes o indirectes, pèrdues de dades, lucre cessant o altres perjudicis derivats de l\'ús o impossibilitat d\'ús d\'aquest lloc web, excepte en els casos en què la llei espanyola no permeti l\'exclusió de responsabilitat.',
    },
    {
      heading: '8. Modificacions',
      body: 'Anclora Group es reserva el dret de modificar les presents condicions en qualsevol moment. Les modificacions entraran en vigor des de la seva publicació al lloc web. L\'ús continuat del lloc després de la publicació de canvis implica la seva acceptació.',
    },
    {
      heading: '9. Contacte',
      body: 'Per a qualsevol consulta sobre les presents condicions, podeu contactar-nos a hola@anclora.com.',
    },
  ],
  sv: [
    {
      heading: '1. Syfte',
      body: 'Dessa villkor reglerar användningen av Anclora Private Estates webbplats, vars syfte är att presentera den diskreta och premiumbetonade fastighetsmäklartjänsten som drivs av Anclora Group i Palma och sydvästra Mallorca.',
    },
    {
      heading: '2. Användningsvillkor',
      body: 'Åtkomst till och användning av denna webbplats innebär acceptans av dessa villkor. Webbplatsen är avsedd för informationsinhämtning och inlämning av kontakt- eller fastighetsvärderingsförfrågningar. All användning som strider mot lag, moral eller allmän ordning är förbjuden.',
    },
    {
      heading: '3. Användarens ansvar',
      body: 'Användaren åtar sig att lämna sanningsenliga, fullständiga och aktuella uppgifter i kontakt- och tjänstebeställningsformulär. Alla felaktiga uppgifter som lämnas av användaren är uteslutande användarens ansvar.',
    },
    {
      heading: '4. Tjänstebegränsningar',
      body: [
        'Priser, tillgänglighet och villkor för fastighetstillgångar är föremål för bekräftelse och kan ändras utan föregående meddelande.',
        'Renderingar, bilder, beskrivningar och projektioner som visas på webbplatsen är enbart vägledande och utgör inte ett bindande erbjudande.',
        'Fastighetsmäkling är beroende av ömsesidig överenskommelse mellan köpare och säljare.',
      ],
    },
    {
      heading: '5. Immateriell äganderätt',
      body: 'Allt innehåll på denna webbplats — inklusive texter, bilder, logotyper, grafisk design och kod — ägs av Anclora Group eller licensieras till det. Reproduktion, distribution eller kommersiell användning utan uttryckligt skriftligt tillstånd är förbjuden.',
    },
    {
      heading: '6. Friskrivning från garantier',
      body: 'Anclora Private Estates tillhandahåller en fastighetsmäklartjänst. Informationen som publiceras på denna webbplats utgör inte juridisk, skattemässig, finansiell eller investeringsrådgivning. Anclora Group tar inget ansvar för beslut som fattas uteslutande på grundval av information som publiceras på denna webbplats.',
    },
    {
      heading: '7. Ansvarsbegränsning',
      body: 'Anclora Group är inte ansvarigt för direkta eller indirekta skador, dataförlust, utebliven vinst eller andra förluster som uppstår till följd av användning eller oförmåga att använda denna webbplats, utom i fall där spansk lag inte tillåter sådan begränsning.',
    },
    {
      heading: '8. Ändringar',
      body: 'Anclora Group förbehåller sig rätten att när som helst ändra dessa villkor. Ändringar träder i kraft vid publicering på webbplatsen. Fortsatt användning av webbplatsen efter publicering av ändringar innebär acceptans av dessa.',
    },
    {
      heading: '9. Kontakt',
      body: 'För frågor om dessa villkor är du välkommen att kontakta oss på hola@anclora.com.',
    },
  ],
  fr: [
    {
      heading: '1. Objet',
      body: 'Les présentes conditions régissent l\'utilisation du site web d\'Anclora Private Estates, dont l\'objet est la présentation du service d\'intermédiation immobilière discrète et premium exploité par Anclora Group à Palma et dans le sud-ouest de Majorque.',
    },
    {
      heading: '2. Conditions d\'utilisation du site',
      body: 'L\'accès à ce site web et sa navigation impliquent l\'acceptation des présentes conditions. Le site est destiné à la consultation d\'informations et à la soumission de demandes de contact ou de services d\'évaluation immobilière. Toute utilisation contraire à la loi, aux bonnes mœurs ou à l\'ordre public est interdite.',
    },
    {
      heading: '3. Responsabilités de l\'utilisateur',
      body: 'L\'utilisateur s\'engage à fournir des informations véridiques, complètes et actualisées dans les formulaires de contact et de demande de services. Toute information inexacte fournie par l\'utilisateur relève de sa seule responsabilité.',
    },
    {
      heading: '4. Limitations du service',
      body: [
        'Les prix, la disponibilité et les conditions des actifs immobiliers sont soumis à confirmation et peuvent varier sans préavis.',
        'Les rendus, images, descriptions et projections présentés sur le site sont indicatifs et ne constituent pas une offre contraignante.',
        'L\'intermédiation immobilière est conditionnée à l\'accord mutuel entre l\'acheteur et le vendeur.',
      ],
    },
    {
      heading: '5. Propriété intellectuelle',
      body: 'Tous les contenus de ce site web — y compris les textes, images, logos, designs graphiques et code — sont la propriété d\'Anclora Group ou lui sont licenciés. Leur reproduction, distribution ou utilisation commerciale sans autorisation expresse et écrite est interdite.',
    },
    {
      heading: '6. Exclusion de garanties',
      body: 'Anclora Private Estates fournit un service d\'intermédiation immobilière. Les informations publiées sur ce site ne constituent pas un conseil juridique, fiscal, financier ou en investissement. Anclora Group n\'assume aucune responsabilité pour les décisions prises exclusivement sur la base des informations publiées sur ce site.',
    },
    {
      heading: '7. Limitation de responsabilité',
      body: 'Anclora Group ne sera pas responsable des dommages directs ou indirects, des pertes de données, du manque à gagner ou d\'autres préjudices découlant de l\'utilisation ou de l\'impossibilité d\'utiliser ce site web, sauf dans les cas où le droit espagnol ne permet pas une telle exclusion.',
    },
    {
      heading: '8. Modifications',
      body: 'Anclora Group se réserve le droit de modifier les présentes conditions à tout moment. Les modifications entrent en vigueur à compter de leur publication sur le site web. L\'utilisation continue du site après la publication de modifications implique leur acceptation.',
    },
    {
      heading: '9. Contact',
      body: 'Pour toute question relative aux présentes conditions, veuillez nous contacter à hola@anclora.com.',
    },
  ],
  it: [
    {
      heading: '1. Oggetto',
      body: 'Le presenti condizioni regolano l\'utilizzo del sito web di Anclora Private Estates, il cui scopo è la presentazione del servizio di intermediazione immobiliare discreta e premium gestito da Anclora Group a Palma e nel sud-ovest di Maiorca.',
    },
    {
      heading: '2. Condizioni di utilizzo del sito',
      body: 'L\'accesso e l\'utilizzo di questo sito web implicano l\'accettazione delle presenti condizioni. Il sito è destinato alla consultazione di informazioni e alla presentazione di richieste di contatto o servizi di valutazione immobiliare. È vietato qualsiasi utilizzo contrario alla legge, alla morale o all\'ordine pubblico.',
    },
    {
      heading: '3. Responsabilità dell\'utente',
      body: 'L\'utente si impegna a fornire informazioni veritiere, complete e aggiornate nei moduli di contatto e richiesta di servizi. Qualsiasi informazione inesatta fornita dall\'utente è di sua esclusiva responsabilità.',
    },
    {
      heading: '4. Limitazioni del servizio',
      body: [
        'I prezzi, la disponibilità e le condizioni degli immobili sono soggetti a conferma e possono variare senza preavviso.',
        'I render, le immagini, le descrizioni e le proiezioni presentate nel sito sono di carattere indicativo e non costituiscono un\'offerta vincolante.',
        'L\'intermediazione immobiliare è condizionata all\'accordo reciproco tra acquirente e venditore.',
      ],
    },
    {
      heading: '5. Proprietà intellettuale',
      body: 'Tutti i contenuti di questo sito web — inclusi testi, immagini, loghi, design grafici e codice — sono di proprietà di Anclora Group o a essa concessi in licenza. È vietata la riproduzione, distribuzione o uso commerciale senza espressa autorizzazione scritta.',
    },
    {
      heading: '6. Esclusione di garanzie',
      body: 'Anclora Private Estates presta un servizio di intermediazione immobiliare. Le informazioni pubblicate su questo sito non costituiscono consulenza legale, fiscale, finanziaria né di investimento. Anclora Group non si assume alcuna responsabilità per decisioni adottate esclusivamente sulla base delle informazioni pubblicate su questo sito.',
    },
    {
      heading: '7. Limitazione di responsabilità',
      body: 'Anclora Group non sarà responsabile per danni diretti o indiretti, perdite di dati, mancato guadagno o altri pregiudizi derivanti dall\'utilizzo o dall\'impossibilità di utilizzo di questo sito web, salvo nei casi in cui la legge spagnola non consenta tale esclusione.',
    },
    {
      heading: '8. Modifiche',
      body: 'Anclora Group si riserva il diritto di modificare le presenti condizioni in qualsiasi momento. Le modifiche entrano in vigore dalla loro pubblicazione sul sito web. L\'uso continuato del sito dopo la pubblicazione delle modifiche implica la loro accettazione.',
    },
    {
      heading: '9. Contatto',
      body: 'Per qualsiasi domanda sulle presenti condizioni, puoi contattarci all\'indirizzo hola@anclora.com.',
    },
  ],
  da: [
    {
      heading: '1. Formål',
      body: 'Disse vilkår regulerer brugen af Anclora Private Estates websted, hvis formål er at præsentere den diskrete og premium ejendomsmæglertjeneste, der drives af Anclora Group i Palma og det sydvestlige Mallorca.',
    },
    {
      heading: '2. Betingelser for brug af webstedet',
      body: 'Adgang til og brug af dette websted indebærer accept af disse vilkår. Webstedet er beregnet til søgning af information og indsendelse af kontakt- eller ejendomsvurderingsanmodninger. Enhver brug i strid med loven, moralen eller den offentlige orden er forbudt.',
    },
    {
      heading: '3. Brugerens ansvar',
      body: 'Brugeren forpligter sig til at angive sandfærdige, fuldstændige og ajourførte oplysninger i kontakt- og serviceanmodningsformularer. Eventuelle unøjagtige oplysninger fra brugeren er udelukkende brugerens ansvar.',
    },
    {
      heading: '4. Servicebegrænsninger',
      body: [
        'Priser, tilgængelighed og betingelser for ejendomsaktiver er underlagt bekræftelse og kan ændres uden forudgående varsel.',
        'Renderinger, billeder, beskrivelser og projektioner vist på webstedet er udelukkende vejledende og udgør ikke et bindende tilbud.',
        'Ejendomsmægling er betinget af gensidig aftale mellem køber og sælger.',
      ],
    },
    {
      heading: '5. Intellektuel ejendomsret',
      body: 'Alt indhold på dette websted — herunder tekster, billeder, logoer, grafisk design og kode — tilhører Anclora Group eller er licenseret til det. Reproduktion, distribution eller kommerciel brug uden udtrykkeligt skriftligt tilladelse er forbudt.',
    },
    {
      heading: '6. Fraskrivelse af garantier',
      body: 'Anclora Private Estates leverer en ejendomsmæglertjeneste. Oplysningerne offentliggjort på dette websted udgør ikke juridisk, skattemæssig, finansiel eller investeringsrådgivning. Anclora Group påtager sig intet ansvar for beslutninger truffet udelukkende på grundlag af oplysninger offentliggjort på dette websted.',
    },
    {
      heading: '7. Ansvarsbegrænsning',
      body: 'Anclora Group er ikke ansvarlig for direkte eller indirekte skader, datatab, mistede avancer eller andre tab, der opstår som følge af brug eller manglende mulighed for at bruge dette websted, bortset fra tilfælde, hvor spansk lov ikke tillader en sådan begrænsning.',
    },
    {
      heading: '8. Ændringer',
      body: 'Anclora Group forbeholder sig ret til at ændre disse vilkår til enhver tid. Ændringer træder i kraft fra deres offentliggørelse på webstedet. Fortsat brug af webstedet efter offentliggørelse af ændringer indebærer accept heraf.',
    },
    {
      heading: '9. Kontakt',
      body: 'For spørgsmål om disse vilkår er du velkommen til at kontakte os på hola@anclora.com.',
    },
  ],
  nl: [
    {
      heading: '1. Doel',
      body: 'Deze voorwaarden regelen het gebruik van de website van Anclora Private Estates, waarvan het doel de presentatie is van de discrete en premium vastgoedmakelaardijdienst die door Anclora Group wordt uitgeoefend in Palma en het zuidwesten van Mallorca.',
    },
    {
      heading: '2. Gebruiksvoorwaarden van de website',
      body: 'Het bezoeken en gebruiken van deze website impliceert de aanvaarding van deze voorwaarden. De website is bedoeld voor het raadplegen van informatie en het indienen van contact- of vastgoedtaxatieverzoeken. Elk gebruik dat in strijd is met de wet, de moraal of de openbare orde is verboden.',
    },
    {
      heading: '3. Verantwoordelijkheden van de gebruiker',
      body: 'De gebruiker verbindt zich ertoe in de contact- en dienstaanvraagformulieren waarheidsgetrouwe, volledige en actuele informatie te verstrekken. Onjuiste informatie verstrekt door de gebruiker valt uitsluitend onder de verantwoordelijkheid van de gebruiker.',
    },
    {
      heading: '4. Beperkingen van de dienst',
      body: [
        'Prijzen, beschikbaarheid en voorwaarden van vastgoedactiva zijn onderhevig aan bevestiging en kunnen zonder voorafgaande kennisgeving wijzigen.',
        'Renders, afbeeldingen, beschrijvingen en projecties op de website zijn uitsluitend indicatief en vormen geen bindend aanbod.',
        'Vastgoedmakelaardij is afhankelijk van wederzijdse overeenstemming tussen koper en verkoper.',
      ],
    },
    {
      heading: '5. Intellectueel eigendom',
      body: 'Alle inhoud op deze website — inclusief teksten, afbeeldingen, logo\'s, grafische ontwerpen en code — is eigendom van Anclora Group of wordt aan haar in licentie gegeven. Reproductie, distributie of commercieel gebruik zonder uitdrukkelijke schriftelijke toestemming is verboden.',
    },
    {
      heading: '6. Uitsluiting van garanties',
      body: 'Anclora Private Estates levert een vastgoedmakelaardijdienst. De op deze website gepubliceerde informatie vormt geen juridisch, fiscaal, financieel of investeringsadvies. Anclora Group aanvaardt geen enkele verantwoordelijkheid voor beslissingen die uitsluitend zijn genomen op basis van op deze website gepubliceerde informatie.',
    },
    {
      heading: '7. Beperking van aansprakelijkheid',
      body: 'Anclora Group is niet aansprakelijk voor directe of indirecte schade, gegevensverlies, gederfde winst of andere verliezen die voortvloeien uit het gebruik of de onmogelijkheid om gebruik te maken van deze website, behalve in gevallen waarin het Spaanse recht een dergelijke uitsluiting niet toestaat.',
    },
    {
      heading: '8. Wijzigingen',
      body: 'Anclora Group behoudt zich het recht voor deze voorwaarden op elk moment te wijzigen. Wijzigingen treden in werking vanaf hun publicatie op de website. Voortgezet gebruik van de website na publicatie van wijzigingen impliceert aanvaarding ervan.',
    },
    {
      heading: '9. Contact',
      body: 'Voor vragen over deze voorwaarden kunt u contact met ons opnemen via hola@anclora.com.',
    },
  ],
  no: [
    {
      heading: '1. Formål',
      body: 'Disse vilkårene regulerer bruken av Anclora Private Estates nettsted, hvis formål er å presentere den diskrete og premium eiendomsmeglertjenesten som drives av Anclora Group i Palma og det sørvestlige Mallorca.',
    },
    {
      heading: '2. Vilkår for bruk av nettstedet',
      body: 'Tilgang til og bruk av dette nettstedet innebærer aksept av disse vilkårene. Nettstedet er beregnet for informasjonsinnhenting og innsending av kontakt- eller eiendomsvurderingsanmodninger. Enhver bruk i strid med loven, moralen eller den offentlige orden er forbudt.',
    },
    {
      heading: '3. Brukerens ansvar',
      body: 'Brukeren forplikter seg til å oppgi sanne, fullstendige og oppdaterte opplysninger i kontakt- og tjenesteanmodningsskjemaer. Eventuelle unøyaktige opplysninger fra brukeren er utelukkende brukerens ansvar.',
    },
    {
      heading: '4. Tjenstebegrensninger',
      body: [
        'Priser, tilgjengelighet og betingelser for eiendomsaktiva er underlagt bekreftelse og kan endres uten forhåndsvarsel.',
        'Renderinger, bilder, beskrivelser og projeksjoner vist på nettstedet er utelukkende veiledende og utgjør ikke et bindende tilbud.',
        'Eiendomsmegling er betinget av gjensidig avtale mellom kjøper og selger.',
      ],
    },
    {
      heading: '5. Immateriell eiendomsrett',
      body: 'Alt innhold på dette nettstedet — herunder tekster, bilder, logoer, grafisk design og kode — tilhører Anclora Group eller er lisensiert til det. Reproduksjon, distribusjon eller kommersiell bruk uten uttrykkelig skriftlig tillatelse er forbudt.',
    },
    {
      heading: '6. Fraskrivelse av garantier',
      body: 'Anclora Private Estates leverer en eiendomsmeglertjeneste. Informasjonen publisert på dette nettstedet utgjør ikke juridisk, skattemessig, finansiell eller investeringsrådgivning. Anclora Group påtar seg intet ansvar for beslutninger truffet utelukkende på grunnlag av informasjon publisert på dette nettstedet.',
    },
    {
      heading: '7. Ansvarsbegrensning',
      body: 'Anclora Group er ikke ansvarlig for direkte eller indirekte skader, tap av data, tapte inntekter eller andre tap som oppstår som følge av bruk eller manglende mulighet til å bruke dette nettstedet, bortsett fra tilfeller der spansk lov ikke tillater slik begrensning.',
    },
    {
      heading: '8. Endringer',
      body: 'Anclora Group forbeholder seg retten til å endre disse vilkårene når som helst. Endringer trer i kraft fra publisering på nettstedet. Fortsatt bruk av nettstedet etter publisering av endringer innebærer aksept av disse.',
    },
    {
      heading: '9. Kontakt',
      body: 'For spørsmål om disse vilkårene kan du kontakte oss på hola@anclora.com.',
    },
  ],
  pt: [
    {
      heading: '1. Objeto',
      body: 'As presentes condições regulam a utilização do sítio web da Anclora Private Estates, cuja finalidade é a apresentação do serviço de intermediação imobiliária discreta e premium operado pela Anclora Group em Palma e no sudoeste de Maiorca.',
    },
    {
      heading: '2. Condições de utilização do sítio',
      body: 'O acesso e utilização deste sítio web implica a aceitação das presentes condições. O sítio está destinado à consulta de informação e à solicitação de contacto ou serviços de valoração imobiliária. Fica proibida qualquer utilização contrária à lei, à moral ou à ordem pública.',
    },
    {
      heading: '3. Responsabilidades do utilizador',
      body: 'O utilizador compromete-se a fornecer informação verdadeira, completa e atualizada nos formulários de contacto e solicitação de serviços. Qualquer informação inexata fornecida pelo utilizador é da sua exclusiva responsabilidade.',
    },
    {
      heading: '4. Limitações do serviço',
      body: [
        'Os preços, disponibilidade e condições dos ativos imobiliários estão sujeitos a confirmação e podem variar sem aviso prévio.',
        'Os renders, imagens, descrições e projeções apresentadas no sítio são de carácter orientativo e não constituem oferta vinculativa.',
        'A intermediação imobiliária está condicionada à aceitação mútua entre comprador e vendedor.',
      ],
    },
    {
      heading: '5. Propriedade intelectual',
      body: 'Todos os conteúdos deste sítio web — incluindo textos, imagens, logótipos, designs gráficos e código — são propriedade da Anclora Group ou estão licenciados a seu favor. Fica proibida a sua reprodução, distribuição ou uso comercial sem autorização expressa e por escrito.',
    },
    {
      heading: '6. Exclusão de garantias',
      body: 'Anclora Private Estates presta um serviço de intermediação imobiliária. A informação publicada neste sítio não constitui aconselhamento legal, fiscal, financeiro nem de investimento. Anclora Group não assume qualquer responsabilidade por decisões adotadas exclusivamente com base na informação publicada neste sítio.',
    },
    {
      heading: '7. Limitação de responsabilidade',
      body: 'Anclora Group não será responsável por danos diretos ou indiretos, perdas de dados, lucros cessantes ou outros prejuízos derivados da utilização ou impossibilidade de utilização deste sítio web, exceto nos casos em que a lei espanhola não permita a exclusão de responsabilidade.',
    },
    {
      heading: '8. Modificações',
      body: 'Anclora Group reserva-se o direito de modificar as presentes condições em qualquer momento. As modificações entrarão em vigor desde a sua publicação no sítio web. A utilização continuada do sítio após a publicação de alterações implica a sua aceitação.',
    },
    {
      heading: '9. Contacto',
      body: 'Para qualquer consulta sobre as presentes condições, pode contactar-nos em hola@anclora.com.',
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
  ca: [
    {
      heading: '1. Titularitat',
      body: 'Anclora Private Estates és el servei d\'intermediació immobiliària premium operat per Anclora Group. Anclora Private Estates forma part de l\'ecosistema Anclora Group.',
    },
    {
      heading: '2. Ús permès',
      body: 'L\'accés i la navegació per aquest lloc web implica l\'acceptació de les condicions d\'ús aplicables. El lloc està destinat exclusivament a la presentació del servei i a la recepció de sol·licituds d\'informació. No es permet el seu ús amb fins contraris a la llei espanyola.',
    },
    {
      heading: '3. Propietat intel·lectual',
      body: 'Tots els continguts del lloc — incloent textos, imatges, logotips, composicions gràfiques, codi font i estructura — són de titularitat d\'Anclora Group o estan subjectes a llicència al seu favor. Qualsevol ús no autoritzat constituirà una infracció dels drets de propietat intel·lectual.',
    },
    {
      heading: '4. Responsabilitat sobre continguts',
      body: 'Anclora Group adopta les mesures raonables per mantenir la informació del lloc actualitzada i veraç. No obstant, no garanteix l\'exactitud, integritat o actualitat de tots els continguts. La informació publicada no substitueix l\'assessorament professional legal, fiscal o financer.',
    },
    {
      heading: '5. Marca i ecosistema',
      body: 'Anclora Private Estates forma part de l\'ecosistema Anclora Group. Els noms, logotips i senyals d\'identitat visuals d\'Anclora són propietat d\'Anclora Group. La seva reproducció o ús no autoritzat està expressament prohibit.',
    },
    {
      heading: '6. Legislació aplicable',
      body: 'El present avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia derivada de l\'ús d\'aquest lloc, les parts se sotmeten als jutjats i tribunals de Palma de Mallorca, amb renúncia expressa a qualsevol altre fur.',
    },
    {
      heading: '7. Contacte',
      body: 'Per a qualsevol consulta relacionada amb el present avís legal, podeu dirigir-vos a hola@anclora.com.',
    },
  ],
  sv: [
    {
      heading: '1. Operatör',
      body: 'Anclora Private Estates är den premiuminriktade fastighetsmäklartjänsten som drivs av Anclora Group. Anclora Private Estates är en del av Anclora Groups ekosystem.',
    },
    {
      heading: '2. Tillåten användning',
      body: 'Åtkomst till och surfning på denna webbplats innebär acceptans av tillämpliga användarvillkor. Webbplatsen är uteslutande avsedd för presentation av tjänsten och mottagande av informationsförfrågningar. Användning för ändamål som strider mot spansk lagstiftning är inte tillåten.',
    },
    {
      heading: '3. Immateriell äganderätt',
      body: 'Allt innehåll på webbplatsen — inklusive texter, bilder, logotyper, grafiska kompositioner, källkod och struktur — ägs av Anclora Group eller licensieras till det. All otillåten användning utgör ett intrång i immateriella rättigheter.',
    },
    {
      heading: '4. Ansvar för innehåll',
      body: 'Anclora Group vidtar rimliga åtgärder för att hålla webbplatsens information aktuell och korrekt. Det ges dock ingen garanti för noggrannheten, fullständigheten eller aktualiteten hos allt innehåll. Publicerad information ersätter inte professionell juridisk, skattemässig eller finansiell rådgivning.',
    },
    {
      heading: '5. Varumärke och ekosystem',
      body: 'Anclora Private Estates är en del av Anclora Groups ekosystem. Ancloras namn, logotyper och visuella identitetselement är Anclora Groups egendom. Deras obehöriga reproduktion eller användning är uttryckligen förbjuden.',
    },
    {
      heading: '6. Tillämplig lag',
      body: 'Detta juridiska meddelande regleras av spansk lag. Vid eventuella tvister som uppstår ur användningen av denna webbplats underkastar sig parterna domstolarna i Palma de Mallorca med uttryckligt avstående från alla andra jurisdiktioner.',
    },
    {
      heading: '7. Kontakt',
      body: 'För frågor om detta juridiska meddelande är du välkommen att skriva till hola@anclora.com.',
    },
  ],
  fr: [
    {
      heading: '1. Propriétaire',
      body: 'Anclora Private Estates est le service d\'intermédiation immobilière premium exploité par Anclora Group. Anclora Private Estates fait partie de l\'écosystème Anclora Group.',
    },
    {
      heading: '2. Utilisation autorisée',
      body: 'L\'accès à ce site web et sa navigation impliquent l\'acceptation des conditions d\'utilisation applicables. Le site est destiné exclusivement à la présentation du service et à la réception de demandes d\'information. Son utilisation à des fins contraires à la législation espagnole n\'est pas autorisée.',
    },
    {
      heading: '3. Propriété intellectuelle',
      body: 'Tous les contenus du site — y compris les textes, images, logos, compositions graphiques, code source et structure — sont la propriété d\'Anclora Group ou lui sont licenciés. Toute utilisation non autorisée constitue une violation des droits de propriété intellectuelle.',
    },
    {
      heading: '4. Responsabilité sur les contenus',
      body: 'Anclora Group prend des mesures raisonnables pour maintenir les informations du site à jour et exactes. Cependant, elle ne garantit pas l\'exactitude, l\'exhaustivité ou l\'actualité de tous les contenus. Les informations publiées ne se substituent pas aux conseils professionnels juridiques, fiscaux ou financiers.',
    },
    {
      heading: '5. Marque et écosystème',
      body: 'Anclora Private Estates fait partie de l\'écosystème Anclora Group. Les noms, logos et éléments d\'identité visuelle d\'Anclora sont la propriété d\'Anclora Group. Leur reproduction ou utilisation non autorisée est expressément interdite.',
    },
    {
      heading: '6. Loi applicable',
      body: 'Les présentes mentions légales sont régies par le droit espagnol. Pour tout litige découlant de l\'utilisation de ce site, les parties se soumettent aux tribunaux de Palma de Majorque, en renonçant expressément à tout autre for.',
    },
    {
      heading: '7. Contact',
      body: 'Pour toute question relative aux présentes mentions légales, veuillez écrire à hola@anclora.com.',
    },
  ],
  it: [
    {
      heading: '1. Titolarità',
      body: 'Anclora Private Estates è il servizio di intermediazione immobiliare premium gestito da Anclora Group. Anclora Private Estates fa parte dell\'ecosistema Anclora Group.',
    },
    {
      heading: '2. Uso consentito',
      body: 'L\'accesso e la navigazione su questo sito web implicano l\'accettazione delle condizioni d\'uso applicabili. Il sito è destinato esclusivamente alla presentazione del servizio e alla ricezione di richieste di informazioni. Non è consentito l\'utilizzo per fini contrari alla legge spagnola.',
    },
    {
      heading: '3. Proprietà intellettuale',
      body: 'Tutti i contenuti del sito — inclusi testi, immagini, loghi, composizioni grafiche, codice sorgente e struttura — sono di proprietà di Anclora Group o a essa concessi in licenza. Qualsiasi uso non autorizzato costituisce una violazione dei diritti di proprietà intellettuale.',
    },
    {
      heading: '4. Responsabilità sui contenuti',
      body: 'Anclora Group adotta misure ragionevoli per mantenere le informazioni del sito aggiornate e veritiere. Tuttavia, non garantisce l\'accuratezza, la completezza o l\'attualità di tutti i contenuti. Le informazioni pubblicate non sostituiscono la consulenza professionale legale, fiscale o finanziaria.',
    },
    {
      heading: '5. Marchio ed ecosistema',
      body: 'Anclora Private Estates fa parte dell\'ecosistema Anclora Group. I nomi, i loghi e gli elementi di identità visiva di Anclora sono di proprietà di Anclora Group. La loro riproduzione o uso non autorizzato è espressamente vietato.',
    },
    {
      heading: '6. Legge applicabile',
      body: 'La presente nota legale è disciplinata dalla legislazione spagnola. Per qualsiasi controversia derivante dall\'utilizzo di questo sito, le parti si sottomettono ai tribunali di Palma di Maiorca, rinunciando espressamente a qualsiasi altro foro.',
    },
    {
      heading: '7. Contatto',
      body: 'Per qualsiasi domanda relativa alla presente nota legale, puoi scrivere a hola@anclora.com.',
    },
  ],
  da: [
    {
      heading: '1. Ejer',
      body: 'Anclora Private Estates er den premium ejendomsmæglertjeneste, der drives af Anclora Group. Anclora Private Estates er en del af Anclora Group-økosystemet.',
    },
    {
      heading: '2. Tilladt brug',
      body: 'Adgang til og browsing på dette websted indebærer accept af de gældende brugsbetingelser. Webstedet er udelukkende beregnet til præsentation af tjenesten og modtagelse af informationsanmodninger. Brug til formål, der strider mod spansk lovgivning, er ikke tilladt.',
    },
    {
      heading: '3. Intellektuel ejendomsret',
      body: 'Alt indhold på webstedet — herunder tekster, billeder, logoer, grafiske kompositioner, kildekode og struktur — tilhører Anclora Group eller er licenseret til det. Enhver uautoriseret brug udgør en krænkelse af intellektuelle ejendomsrettigheder.',
    },
    {
      heading: '4. Ansvar for indhold',
      body: 'Anclora Group træffer rimelige foranstaltninger for at holde webstedets oplysninger opdaterede og korrekte. Der gives dog ingen garanti for nøjagtigheden, fuldstændigheden eller aktualiteten af alt indhold. Offentliggjorte oplysninger erstatter ikke professionel juridisk, skattemæssig eller finansiel rådgivning.',
    },
    {
      heading: '5. Mærke og økosystem',
      body: 'Anclora Private Estates er en del af Anclora Group-økosystemet. Ancloras navne, logoer og visuelle identitetselementer er Anclora Groups ejendom. Deres uautoriserede reproduktion eller brug er udtrykkeligt forbudt.',
    },
    {
      heading: '6. Gældende lovgivning',
      body: 'Denne juridiske meddelelse er underlagt spansk ret. For eventuelle tvister, der opstår som følge af brugen af dette websted, underkaster parterne sig domstolene i Palma de Mallorca med udtrykkelig afkald på enhver anden jurisdiktion.',
    },
    {
      heading: '7. Kontakt',
      body: 'For spørgsmål om denne juridiske meddelelse er du velkommen til at skrive til hola@anclora.com.',
    },
  ],
  nl: [
    {
      heading: '1. Eigenaar',
      body: 'Anclora Private Estates is de premium vastgoedmakelaardijdienst die wordt geëxploiteerd door Anclora Group. Anclora Private Estates maakt deel uit van het Anclora Group-ecosysteem.',
    },
    {
      heading: '2. Toegestaan gebruik',
      body: 'Het bezoeken en browsen op deze website impliceert de aanvaarding van de toepasselijke gebruiksvoorwaarden. De website is uitsluitend bestemd voor de presentatie van de dienst en de ontvangst van informatieverzoeken. Gebruik voor doeleinden die in strijd zijn met de Spaanse wetgeving is niet toegestaan.',
    },
    {
      heading: '3. Intellectueel eigendom',
      body: 'Alle inhoud op de website — inclusief teksten, afbeeldingen, logo\'s, grafische composities, broncode en structuur — is eigendom van Anclora Group of wordt aan haar in licentie gegeven. Elk ongeautoriseerd gebruik vormt een inbreuk op intellectuele eigendomsrechten.',
    },
    {
      heading: '4. Aansprakelijkheid voor inhoud',
      body: 'Anclora Group neemt redelijke maatregelen om de informatie op de website actueel en correct te houden. Er wordt echter geen garantie gegeven voor de nauwkeurigheid, volledigheid of actualiteit van alle inhoud. Gepubliceerde informatie vervangt geen professioneel juridisch, fiscaal of financieel advies.',
    },
    {
      heading: '5. Merk en ecosysteem',
      body: 'Anclora Private Estates maakt deel uit van het Anclora Group-ecosysteem. De namen, logo\'s en visuele identiteitselementen van Anclora zijn eigendom van Anclora Group. Ongeautoriseerde reproductie of gebruik ervan is uitdrukkelijk verboden.',
    },
    {
      heading: '6. Toepasselijk recht',
      body: 'Deze juridische mededeling wordt beheerst door het Spaanse recht. Voor eventuele geschillen die voortvloeien uit het gebruik van deze website onderwerpen de partijen zich aan de rechtbanken van Palma de Mallorca, met uitdrukkelijke afstand van elke andere jurisdictie.',
    },
    {
      heading: '7. Contact',
      body: 'Voor vragen over deze juridische mededeling kunt u schrijven naar hola@anclora.com.',
    },
  ],
  no: [
    {
      heading: '1. Eier',
      body: 'Anclora Private Estates er den premium eiendomsmeglertjenesten som drives av Anclora Group. Anclora Private Estates er en del av Anclora Group-økosystemet.',
    },
    {
      heading: '2. Tillatt bruk',
      body: 'Tilgang til og surfing på dette nettstedet innebærer aksept av gjeldende bruksvilkår. Nettstedet er utelukkende beregnet for presentasjon av tjenesten og mottak av informasjonsanmodninger. Bruk til formål som strider mot spansk lovgivning er ikke tillatt.',
    },
    {
      heading: '3. Immateriell eiendomsrett',
      body: 'Alt innhold på nettstedet — herunder tekster, bilder, logoer, grafiske komposisjoner, kildekode og struktur — tilhører Anclora Group eller er lisensiert til det. Enhver uautorisert bruk utgjør et inngrep i immaterielle rettigheter.',
    },
    {
      heading: '4. Ansvar for innhold',
      body: 'Anclora Group treffer rimelige tiltak for å holde nettstedets informasjon oppdatert og korrekt. Det gis imidlertid ingen garanti for nøyaktigheten, fullstendigheten eller aktualiteten til alt innhold. Publisert informasjon erstatter ikke profesjonell juridisk, skattemessig eller finansiell rådgivning.',
    },
    {
      heading: '5. Merke og økosystem',
      body: 'Anclora Private Estates er en del av Anclora Group-økosystemet. Ancloras navn, logoer og visuelle identitetselementer er Anclora Groups eiendom. Uautorisert reproduksjon eller bruk av disse er uttrykkelig forbudt.',
    },
    {
      heading: '6. Gjeldende lov',
      body: 'Dette juridiske merknaden er underlagt spansk rett. For eventuelle tvister som oppstår fra bruken av dette nettstedet underkaster partene seg domstolene i Palma de Mallorca med uttrykkelig avkall på enhver annen jurisdiksjon.',
    },
    {
      heading: '7. Kontakt',
      body: 'For spørsmål om dette juridiske merknaden kan du skrive til hola@anclora.com.',
    },
  ],
  pt: [
    {
      heading: '1. Titularidade',
      body: 'Anclora Private Estates é o serviço de intermediação imobiliária premium operado pela Anclora Group. Anclora Private Estates faz parte do ecossistema Anclora Group.',
    },
    {
      heading: '2. Uso permitido',
      body: 'O acesso e a navegação neste sítio web implica a aceitação das condições de utilização aplicáveis. O sítio está destinado exclusivamente à apresentação do serviço e à receção de solicitações de informação. Não é permitida a sua utilização para fins contrários à lei espanhola.',
    },
    {
      heading: '3. Propriedade intelectual',
      body: 'Todos os conteúdos do sítio — incluindo textos, imagens, logótipos, composições gráficas, código fonte e estrutura — são da titularidade da Anclora Group ou estão sujeitos a licença a seu favor. Qualquer uso não autorizado constituirá uma infração dos direitos de propriedade intelectual.',
    },
    {
      heading: '4. Responsabilidade sobre conteúdos',
      body: 'Anclora Group adota as medidas razoáveis para manter a informação do sítio atualizada e veraz. Não obstante, não garante a exatidão, integridade ou atualidade de todos os conteúdos. A informação publicada não substitui o aconselhamento profissional legal, fiscal ou financeiro.',
    },
    {
      heading: '5. Marca e ecossistema',
      body: 'Anclora Private Estates faz parte do ecossistema Anclora Group. Os nomes, logótipos e sinais de identidade visual da Anclora são propriedade da Anclora Group. A sua reprodução ou uso não autorizado está expressamente proibido.',
    },
    {
      heading: '6. Legislação aplicável',
      body: 'O presente aviso legal rege-se pela legislação espanhola. Para qualquer controvérsia derivada da utilização deste sítio, as partes submetem-se aos tribunais de Palma de Maiorca, com renúncia expressa a qualquer outro foro.',
    },
    {
      heading: '7. Contacto',
      body: 'Para qualquer consulta relacionada com o presente aviso legal, pode dirigir-se a hola@anclora.com.',
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

export function LegalPagePE({ kind, language }: LegalPagePEProps) {
  const lang = getLang(language);
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
