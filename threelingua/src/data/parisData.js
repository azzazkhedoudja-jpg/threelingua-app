export const metroLines = [
  {
    id: "1",
    number: "1",
    color: "#FFCD00",
    textColor: "#333",
    direction: "La Défense ↔ Château de Vincennes",
    keyStations: ["La Défense", "Charles de Gaulle-Étoile", "Champs-Élysées", "Louvre-Rivoli", "Châtelet", "Gare de Lyon", "Vincennes"],
    tip: "Ligne automatique, fonctionne 24h/24 les nuits de vendredi et samedi. Parfaite pour visiter le centre de Paris.",
    type: "metro"
  },
  {
    id: "2",
    number: "2",
    color: "#003CA6",
    textColor: "#fff",
    direction: "Porte Dauphine ↔ Nation",
    keyStations: ["Porte Dauphine", "Étoile", "Pigalle", "Anvers", "Barbès", "Jaurès", "Nation"],
    tip: "Suit le Boulevard des Maréchaux au nord de Paris. Utile pour rejoindre Montmartre.",
    type: "metro"
  },
  {
    id: "4",
    number: "4",
    color: "#A0006E",
    textColor: "#fff",
    direction: "Montrouge ↔ Clignancourt",
    keyStations: ["Montrouge", "Montparnasse", "Saint-Michel", "Châtelet", "Les Halles", "Gare du Nord", "Clignancourt"],
    tip: "Ligne nord-sud essentielle. Dessert la Gare du Nord (Eurostar, RER B pour CDG).",
    type: "metro"
  },
  {
    id: "6",
    number: "6",
    color: "#6ECA97",
    textColor: "#fff",
    direction: "Charles de Gaulle-Étoile ↔ Nation",
    keyStations: ["Charles de Gaulle-Étoile", "Trocadéro", "Bir-Hakeim", "Montparnasse", "Bercy", "Nation"],
    tip: "Passe devant la Tour Eiffel ! Le trajet aérien entre Passy et Javel offre une vue exceptionnelle.",
    type: "metro"
  },
  {
    id: "13",
    number: "13",
    color: "#6EC4E8",
    textColor: "#0a3a54",
    direction: "Saint-Denis/Asnières ↔ Châtillon",
    keyStations: ["Saint-Denis", "Carrefour Pleyel", "Saint-Lazare", "Champs-Élysées", "Invalides", "Montparnasse", "Châtillon"],
    tip: "Attention : la ligne se divise au nord (Saint-Denis et Asnières). Vérifie toujours la destination en tête de rame.",
    type: "metro"
  },
  {
    id: "14",
    number: "14",
    color: "#662483",
    textColor: "#fff",
    direction: "Olympiades ↔ Saint-Denis Pleyel",
    keyStations: ["Olympiades", "Bibliothèque F. Mitterrand", "Châtelet", "Gare du Lyon", "Gare de Lyon", "Madeleine", "Saint-Denis Pleyel"],
    tip: "Ligne automatique ultra-rapide. Prolongée jusqu'à Saint-Denis pour les JO 2024. Dessert l'aéroport Orly.",
    type: "metro"
  },
  {
    id: "RER-A",
    number: "A",
    color: "#E2231A",
    textColor: "#fff",
    direction: "Cergy/Poissy ↔ Marne-la-Vallée",
    keyStations: ["Cergy", "La Défense", "Charles de Gaulle-Étoile", "Châtelet-Les-Halles", "Gare de Lyon", "Nation", "Disneyland"],
    tip: "Le RER le plus fréquenté d'Europe ! Idéal pour aller à Disneyland ou à La Défense depuis le centre.",
    type: "rer"
  },
  {
    id: "RER-B",
    number: "B",
    color: "#5191CD",
    textColor: "#fff",
    direction: "CDG/Mitry ↔ Robinson/Saint-Rémy",
    keyStations: ["Aéroport CDG", "Gare du Nord", "Châtelet-Les-Halles", "Saint-Michel", "Luxembourg", "Denfert-Rochereau", "Robinson"],
    tip: "Essentiel pour aller à l'aéroport Charles de Gaulle. Compte 35-40 min depuis Châtelet. Billet spécial CDG requis.",
    type: "rer"
  }
];

export const navigoInfo = {
  monthly: "86,40 €",
  annual: "949,80 €",
  zones: "Toutes zones (1-5) incluses",
  tip: "Le pass mensuel se renouvelle au 1er de chaque mois. Charge-le entre le 20 et la fin du mois pour le suivant.",
  ticketUnit: "2,15 €",
  ticketCarnet10: "17,35 €"
};

export const dailyCategories = [
  {
    id: "courses",
    icon: "🛒",
    title: "Faire les courses",
    color: "teal",
    tips: [
      { title: "Supermarchés économiques", text: "Lidl, Aldi et Ed sont les moins chers. Franprix est pratique mais plus cher. Carrefour City et Monoprix sont partout dans Paris." },
      { title: "Marchés en plein air", text: "Le marché d'Aligre (12e, mar-dim), Belleville (11e-20e, mar et ven), Bastille (11e, jeu et dim). Légumes frais et moins chers qu'en supermarché." },
      { title: "Horaires", text: "Les supermarchés ferment souvent à 21h-22h. Le dimanche, peu d'enseignes sont ouvertes. Vérifie l'appli avant de te déplacer." },
      { title: "Carte de fidélité", text: "Ouvre un compte sur l'appli Carrefour, Lidl Plus ou Intermarché. Tu cumules des remises immédiatement, sans carte physique." }
    ]
  },
  {
    id: "banque",
    icon: "🏦",
    title: "Ouvrir un compte",
    color: "amber",
    tips: [
      { title: "Banques en ligne recommandées", text: "Boursorama, Hello Bank ou Fortuneo acceptent plus facilement les étrangers. Moins de paperasse que les banques traditionnelles." },
      { title: "Documents nécessaires", text: "Passeport/CNI, justificatif de domicile (quittance ou attestation d'hébergement), titre de séjour si hors UE." },
      { title: "Compte sans domicile fixe", text: "La Banque Postale est obligée d'ouvrir un compte à toute personne sans banque en France (droit au compte). Demande à la Banque de France." },
      { title: "CB internationale", text: "Revolut et Wise sont utiles pour les virements internationaux et voyages. Pas de frais de change." }
    ]
  },
  {
    id: "logement",
    icon: "🏠",
    title: "Trouver un logement",
    color: "navy",
    tips: [
      { title: "Sites de recherche", text: "SeLoger, LeBonCoin, PAP (sans agence), Laforet. Pour les étudiants : Lokaviz (CROUS), ImmoJeune, Studapart." },
      { title: "Documents garant", text: "Les propriétaires demandent souvent un garant français. Sans garant, utilise Visale (garantie gratuite de l'État via Action Logement)." },
      { title: "CAF - Aide au logement", text: "Fais ta demande d'APL dès la signature du bail sur caf.fr. L'aide peut aller de 50 à 400€/mois selon tes revenus." },
      { title: "Zones moins chères", text: "Saint-Denis, Montreuil, Ivry, Vitry sont accessibles en RER/métro et 30-40% moins chers que Paris intramuros." }
    ]
  },
  {
    id: "sante",
    icon: "🏥",
    title: "Santé & Sécu",
    color: "coral",
    tips: [
      { title: "Sécurité sociale", text: "Inscris-toi sur ameli.fr dès ton arrivée. Le numéro de sécu est attribué sous 1-3 mois. Conserve bien tes justificatifs." },
      { title: "Médecin traitant", text: "Déclare un médecin traitant sur ameli.fr pour être mieux remboursé (70% au lieu de 30%). Doctolib facilite la prise de RDV." },
      { title: "Pharmacie", text: "Les pharmacies (croix verte) délivrent certains soins sans ordonnance et peuvent orienter pour des urgences légères." },
      { title: "Urgences", text: "SAMU : 15 | Police : 17 | Pompiers : 18 | Numéro européen : 112. Les urgences hospitalières sont gratuites avec la Sécu." }
    ]
  },
  {
    id: "mobile",
    icon: "📱",
    title: "Téléphone & Internet",
    color: "teal",
    tips: [
      { title: "Opérateurs pas chers", text: "Free Mobile à 9,99€/mois (100Go) ou Bouygues/SFR avec promos. Free est souvent le moins cher avec un bon réseau." },
      { title: "Box internet", text: "Free Fibre à 29,99€/mois est très compétitif. Orange et SFR proposent aussi des offres. Prévoir 2-3 semaines d'installation." },
      { title: "SIM prépayée à l'arrivée", text: "Achète une SIM prépayée à La Poste ou en tabac dès ton arrivée. Lyca Mobile et Lebara proposent des forfaits internationaux abordables." }
    ]
  },
  {
    id: "loisirs",
    icon: "🎭",
    title: "Sorties & Loisirs",
    color: "amber",
    tips: [
      { title: "Musées gratuits", text: "1er dimanche du mois : Louvre, Orsay, Pompidou, Quai Branly... gratuits ! Moins de 26 ans : entrée gratuite dans tous les musées nationaux." },
      { title: "Bibliothèques", text: "La BPI (Centre Pompidou) est gratuite et ouverte jusqu'à 22h. Les bibliothèques municipales (carte gratuite) offrent aussi livres, films, musique." },
      { title: "Paris à pied", text: "Les bords de Seine, le Canal Saint-Martin, Montmartre, le Marais : Paris se découvre à pied. Télécharge l'appli Géovélo pour les pistes cyclables." },
      { title: "Cinéma", text: "Le mercredi est le jour de sortie des films. UGC/MK2 proposent des cartes illimitées (~22€/mois). Beaucoup de salles indépendantes avec des tarifs à 5€." }
    ]
  }
];

export const phrases = {
  metro: [
    { fr: "Un ticket, s'il vous plaît.", translations: { en: "One ticket, please.", es: "Un billete, por favor.", ar: "تذكرة واحدة، من فضلك.", zh: "请给我一张票。" }},
    { fr: "Ce train s'arrête à... ?", translations: { en: "Does this train stop at...?", es: "¿Este tren para en...?", ar: "هل يتوقف هذا القطار في...؟", zh: "这班车停...站吗？" }},
    { fr: "Excusez-moi, je sors.", translations: { en: "Excuse me, I'm getting off.", es: "Perdón, yo me bajo.", ar: "عذراً، أنا نازل.", zh: "对不起，我要下车。" }},
    { fr: "C'est quelle ligne pour aller à... ?", translations: { en: "Which line goes to...?", es: "¿Qué línea va a...?", ar: "ما هو الخط للذهاب إلى...؟", zh: "去...坐哪条线？" }},
    { fr: "Le prochain train est dans combien de temps ?", translations: { en: "When is the next train?", es: "¿Cuándo es el próximo tren?", ar: "متى القطار القادم؟", zh: "下一班车什么时候来？" }},
    { fr: "Où est la sortie ?", translations: { en: "Where is the exit?", es: "¿Dónde está la salida?", ar: "أين المخرج؟", zh: "出口在哪里？" }}
  ],
  quotidien: [
    { fr: "Bonjour, je voudrais...", translations: { en: "Hello, I would like...", es: "Buenos días, quisiera...", ar: "صباح الخير، أريد...", zh: "您好，我想要..." }},
    { fr: "C'est combien ?", translations: { en: "How much is it?", es: "¿Cuánto cuesta?", ar: "بكم هذا؟", zh: "多少钱？" }},
    { fr: "Pouvez-vous répéter, s'il vous plaît ?", translations: { en: "Could you repeat that, please?", es: "¿Puede repetir, por favor?", ar: "هل يمكنك التكرار، من فضلك؟", zh: "请再说一遍。" }},
    { fr: "Je ne comprends pas.", translations: { en: "I don't understand.", es: "No entiendo.", ar: "أنا لا أفهم.", zh: "我听不懂。" }},
    { fr: "Parlez-vous anglais ?", translations: { en: "Do you speak English?", es: "¿Habla usted inglés?", ar: "هل تتحدث الإنجليزية؟", zh: "您会说英语吗？" }},
    { fr: "Où sont les toilettes ?", translations: { en: "Where are the toilets?", es: "¿Dónde están los aseos?", ar: "أين دورة المياه؟", zh: "洗手间在哪里？" }},
    { fr: "J'ai besoin d'aide.", translations: { en: "I need help.", es: "Necesito ayuda.", ar: "أحتاج مساعدة.", zh: "我需要帮助。" }},
    { fr: "Avez-vous une carte en anglais ?", translations: { en: "Do you have a menu in English?", es: "¿Tienen carta en inglés?", ar: "هل لديكم قائمة بالإنجليزية؟", zh: "有英文菜单吗？" }}
  ],
  urgences: [
    { fr: "Appelez le SAMU, s'il vous plaît ! (15)", translations: { en: "Call emergency services, please! (15)", es: "¡Llame al SAMU, por favor! (15)", ar: "اتصلوا بالإسعاف، من فضلكم! (15)", zh: "请呼叫急救！(15)" }},
    { fr: "J'ai perdu mon passeport.", translations: { en: "I lost my passport.", es: "He perdido mi pasaporte.", ar: "لقد فقدت جواز سفري.", zh: "我丢失了护照。" }},
    { fr: "Où est l'hôpital le plus proche ?", translations: { en: "Where is the nearest hospital?", es: "¿Dónde está el hospital más cercano?", ar: "أين أقرب مستشفى؟", zh: "最近的医院在哪里？" }}
  ]
};

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh", label: "中文", flag: "🇨🇳" }
];