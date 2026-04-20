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
    color: "teal",
    titles: {
      fr: "Faire les courses",
      en: "Grocery shopping",
      es: "Hacer la compra",
      ar: "التسوق للبقالة",
      "ar-ma": "شري الماكلة",
      "ar-dz": "نشري الماكلة",
      "ar-tn": "نشري الماكلة",
      "ar-eg": "التسوق",
      zh: "购物"
    },
    tips: [
      {
        titles: { fr: "Supermarchés économiques", en: "Budget supermarkets", es: "Supermercados baratos", ar: "محلات اقتصادية", "ar-ma": "حوانت رخاص", "ar-dz": "حوانت رخاص", "ar-tn": "حوانت رخاص", "ar-eg": "سوبر ماركت رخيص", zh: "便宜超市" },
        texts: {
          fr: "Lidl, Aldi et Ed sont les moins chers. Franprix est pratique mais plus cher. Carrefour City et Monoprix sont partout dans Paris.",
          en: "Lidl, Aldi and Ed are the cheapest. Franprix is convenient but more expensive. Carrefour City and Monoprix are everywhere in Paris.",
          es: "Lidl, Aldi y Ed son los más baratos. Franprix es práctico pero más caro. Carrefour City y Monoprix están por todo París.",
          ar: "ليدل وألدي وإد هي الأرخص. فرانبري عملي لكن أغلى. كارفور سيتي ومونوبري في كل مكان في باريس.",
          "ar-ma": "ليدل وألدي هما الأرخص. فرانبري مزيان بلاصا خايبة غالي. كارفور ومونوبري كاينين فكل بلاصا فباريس.",
          "ar-dz": "ليدل وألدي الأرخص. فرانبري مريح ولكن غالي. كارفور ومونوبري فكل بلاصة فباريس.",
          "ar-tn": "ليدل وألدي هوما الأرخص. فرانبري مرتاح أما أغلى. كارفور ومونوبري في كل بلاصة في باريس.",
          "ar-eg": "ليدل وألدي هما الأرخص. فرانبري مريح بس أغلى. كارفور سيتي ومونوبري في كل حتة في باريس.",
          zh: "Lidl、Aldi 和 Ed 最便宜。Franprix 方便但较贵。Carrefour City 和 Monoprix 遍布巴黎。"
        }
      },
      {
        titles: { fr: "Marchés en plein air", en: "Open-air markets", es: "Mercados al aire libre", ar: "الأسواق المفتوحة", "ar-ma": "السواق", "ar-dz": "السواق", "ar-tn": "السواق", "ar-eg": "الأسواق", zh: "露天市场" },
        texts: {
          fr: "Le marché d'Aligre (12e, mar-dim), Belleville (11e-20e, mar et ven), Bastille (11e, jeu et dim). Légumes frais et moins chers qu'en supermarché.",
          en: "Aligre market (12th, Tue-Sun), Belleville (11th-20th, Tue and Fri), Bastille (11th, Thu and Sun). Fresh vegetables cheaper than supermarkets.",
          es: "Mercado de Aligre (12º, mar-dom), Belleville (11º-20º, mar y vie), Bastille (11º, jue y dom). Verduras frescas más baratas que en supermercados.",
          ar: "سوق أليغر (الدائرة 12، ثلاثاء-أحد)، بلفيل (11-20، ثلاثاء وجمعة)، الباستيل (11، خميس وأحد). خضار طازجة أرخص من السوبرماركت.",
          "ar-ma": "سوق أليغر (الدائرة 12 التلات للحد)، بلفيل (تلات وجمعة)، الباستيل (خميس وحد). خضرة فريسكا أرخص من السوبرماركت.",
          "ar-dz": "سوق أليغر (التلاتة للحد)، بلفيل (تلاتة وجمعة)، الباستيل (خميس وحد). خضرة طرية وأرخص من السوبرماركت.",
          "ar-tn": "سوق أليغر (الثلاثاء للأحد)، بلفيل (ثلاثاء وجمعة)، الباستيل (خميس وحد). خضرة طازة وأرخص من السوبرماركت.",
          "ar-eg": "سوق أليغر (تلات-حد)، بلفيل (تلات وجمعة)، الباستيل (خميس وحد). خضار طازة وأرخص من السوبر ماركت.",
          zh: "Aligre 市场（12区，周二-日），Belleville（11-20区，周二和周五），Bastille（11区，周四和周日）。新鲜蔬菜比超市便宜。"
        }
      },
      {
        titles: { fr: "Horaires", en: "Opening hours", es: "Horarios", ar: "أوقات العمل", "ar-ma": "الأوقات", "ar-dz": "الساعات", "ar-tn": "الأوقات", "ar-eg": "مواعيد العمل", zh: "营业时间" },
        texts: {
          fr: "Les supermarchés ferment souvent à 21h-22h. Le dimanche, peu d'enseignes sont ouvertes. Vérifie l'appli avant de te déplacer.",
          en: "Supermarkets usually close at 9-10pm. On Sundays, few stores are open. Check the app before going.",
          es: "Los supermercados suelen cerrar a las 21-22h. Los domingos, pocos están abiertos. Revisa la app antes de ir.",
          ar: "تُغلق السوبرماركت عادة من 9 إلى 10 ليلاً. يوم الأحد قليل من المحلات مفتوحة. تحقق من التطبيق قبل الذهاب.",
          "ar-ma": "السوبرماركت كيسدو فالتسعود والعشر دليل. نهار الحد قليل ديال الحوانت كيكونو مفتوحين. شوف التطبيق قبل ما تمشي.",
          "ar-dz": "السوبرماركت يسكرو في التسعة ولا العشرة بالليل. نهار الحد قليل لي يحلو. شوف التطبيق قبل ما تروح.",
          "ar-tn": "السوبرماركت يسكروا في التسعة ولا العشرة بالليل. نهار الأحد قليل لي يحلوا. شوف التطبيق قبل ما تمشي.",
          "ar-eg": "السوبر ماركت بيقفلوا عادة الساعة 9-10 بالليل. يوم الأحد قليل محلات بتكون فاتحة. اتأكد من التطبيق قبل ما تروح.",
          zh: "超市通常在晚上9-10点关门。周日很少商店开门。出门前查看应用程序。"
        }
      },
      {
        titles: { fr: "Carte de fidélité", en: "Loyalty card", es: "Tarjeta de fidelidad", ar: "بطاقة الولاء", "ar-ma": "كارت الفيديليتي", "ar-dz": "كارت الوفاء", "ar-tn": "كارت الولاء", "ar-eg": "كارت الولاء", zh: "会员卡" },
        texts: {
          fr: "Ouvre un compte sur l'appli Carrefour, Lidl Plus ou Intermarché. Tu cumules des remises immédiatement, sans carte physique.",
          en: "Open an account on Carrefour, Lidl Plus or Intermarché apps. Get discounts immediately, no physical card needed.",
          es: "Abre una cuenta en la app de Carrefour, Lidl Plus o Intermarché. Acumula descuentos al instante, sin tarjeta física.",
          ar: "افتح حسابًا على تطبيق كارفور أو ليدل بلس أو إنترماركت. تحصل على خصومات فورية دون بطاقة.",
          "ar-ma": "حل حساب فتطبيق كارفور ولا ليدل بلس. كتجمع تخفيضات بلا كارت.",
          "ar-dz": "حل حساب في تطبيق كارفور ولا ليدل بلس. تلقى تخفيضات بلا كارت.",
          "ar-tn": "افتح حساب في تطبيق كارفور ولا ليدل بلس. تلقى تخفيضات بلا كارت.",
          "ar-eg": "افتح حساب في تطبيق كارفور أو ليدل بلس. هتلاقي خصومات على طول من غير كارت.",
          zh: "在家乐福、Lidl Plus 或 Intermarché 应用上注册。无需实体卡即可获得折扣。"
        }
      }
    ]
  },
  {
    id: "banque",
    icon: "🏦",
    color: "amber",
    titles: {
      fr: "Ouvrir un compte",
      en: "Open a bank account",
      es: "Abrir una cuenta",
      ar: "فتح حساب بنكي",
      "ar-ma": "حل حساب بنكي",
      "ar-dz": "نحل حساب بنكي",
      "ar-tn": "فتح حساب بنكي",
      "ar-eg": "فتح حساب بنكي",
      zh: "开银行账户"
    },
    tips: [
      {
        titles: { fr: "Banques en ligne recommandées", en: "Recommended online banks", es: "Bancos online recomendados", ar: "بنوك إلكترونية موصى بها", "ar-ma": "بنوك أونلاين منصوحة", "ar-dz": "بنوك أونلاين منصوحة", "ar-tn": "بنوك أونلاين منصوحة", "ar-eg": "بنوك أونلاين منصوح بها", zh: "推荐的网上银行" },
        texts: {
          fr: "Boursorama, Hello Bank ou Fortuneo acceptent plus facilement les étrangers. Moins de paperasse que les banques traditionnelles.",
          en: "Boursorama, Hello Bank or Fortuneo accept foreigners more easily. Less paperwork than traditional banks.",
          es: "Boursorama, Hello Bank o Fortuneo aceptan más fácilmente a extranjeros. Menos papeleo que los bancos tradicionales.",
          ar: "بورسوراما وهيلو بنك وفورتينيو تقبل الأجانب بسهولة. أوراق أقل من البنوك التقليدية.",
          "ar-ma": "بورسوراما وهيلو بنك كيقبلو اللجانب بسهولة. ورق قليل بالنسبة للبنوك العادية.",
          "ar-dz": "بورسوراما وهيلو بنك يقبلو الأجانب بسهولة. ورق قليل من البنوك التقليدية.",
          "ar-tn": "بورسوراما وهيلو بنك يقبلوا الأجانب بسهولة. أوراق قليلة بالنسبة للبنوك التقليدية.",
          "ar-eg": "بورسوراما وهيلو بنك بيقبلوا الأجانب بسهولة. ورق أقل من البنوك التقليدية.",
          zh: "Boursorama、Hello Bank 或 Fortuneo 更容易接受外国人。比传统银行文件少。"
        }
      },
      {
        titles: { fr: "Documents nécessaires", en: "Required documents", es: "Documentos necesarios", ar: "المستندات المطلوبة", "ar-ma": "الوثائق المطلوبة", "ar-dz": "الوثائق اللي تحتاجها", "ar-tn": "الوثائق اللي تحتاجها", "ar-eg": "المستندات المطلوبة", zh: "所需文件" },
        texts: {
          fr: "Passeport/CNI, justificatif de domicile (quittance ou attestation d'hébergement), titre de séjour si hors UE.",
          en: "Passport/ID, proof of address (rent receipt or host certificate), residence permit if non-EU.",
          es: "Pasaporte/DNI, comprobante de domicilio (recibo o certificado de alojamiento), permiso de residencia si eres extracomunitario.",
          ar: "جواز السفر أو الهوية، إثبات السكن (إيصال أو شهادة استضافة)، تصريح الإقامة لغير الأوروبيين.",
          "ar-ma": "الپاسبور ولا البطاقة، ورقة السكن، كارت الإقامة إذا ما كنتيش أوروبي.",
          "ar-dz": "الباسبور ولا البطاقة، وثيقة السكن، كارت الإقامة إذا ما كنتش أوروبي.",
          "ar-tn": "الباسبور ولا الكارط، ورقة السكن، كارط الإقامة إذا ما كنتش أوروبي.",
          "ar-eg": "الباسبور أو البطاقة، إثبات سكن (إيصال أو إثبات استضافة)، إقامة لو مش أوروبي.",
          zh: "护照/身份证、居住证明（租金收据或寄宿证明）、非欧盟居留证。"
        }
      },
      {
        titles: { fr: "Compte sans domicile fixe", en: "Account without fixed address", es: "Cuenta sin domicilio fijo", ar: "حساب بدون عنوان ثابت", "ar-ma": "حساب بلا سكن قار", "ar-dz": "حساب بلا عنوان", "ar-tn": "حساب بلا عنوان", "ar-eg": "حساب بدون عنوان ثابت", zh: "无固定住址账户" },
        texts: {
          fr: "La Banque Postale est obligée d'ouvrir un compte à toute personne sans banque en France (droit au compte). Demande à la Banque de France.",
          en: "La Banque Postale must open an account for anyone without a bank in France (right to account). Ask the Banque de France.",
          es: "La Banque Postale debe abrir una cuenta a quien no tenga banco en Francia (derecho a cuenta). Pregunta al Banco de Francia.",
          ar: "لا بانك بوسطال ملزمة بفتح حساب لأي شخص لا يملك بنكًا في فرنسا. اطلب من بنك فرنسا.",
          "ar-ma": "لا بانك بوسطال ملزمة تفتح حساب لأي واحد بلا بنك فرنسا. طلب من بنك فرنسا.",
          "ar-dz": "لا بانك بوسطال مجبورة تحل حساب لأي واحد بلا بنك فرنسا. أطلب من بنك فرنسا.",
          "ar-tn": "لا بانك بوسطال مجبورة تفتح حساب لأي واحد بلا بنك في فرنسا. اطلب من بنك فرنسا.",
          "ar-eg": "لا بانك بوسطال مجبورة تفتح حساب لأي حد من غير بنك في فرنسا. اسأل بنك فرنسا.",
          zh: "Banque Postale 必须为在法国无银行的人开户（账户权）。向法兰西银行询问。"
        }
      },
      {
        titles: { fr: "CB internationale", en: "International card", es: "Tarjeta internacional", ar: "بطاقة دولية", "ar-ma": "كارت دولي", "ar-dz": "كارت دولي", "ar-tn": "كارت دولي", "ar-eg": "كارت دولي", zh: "国际银行卡" },
        texts: {
          fr: "Revolut et Wise sont utiles pour les virements internationaux et voyages. Pas de frais de change.",
          en: "Revolut and Wise are useful for international transfers and travel. No exchange fees.",
          es: "Revolut y Wise son útiles para transferencias internacionales y viajes. Sin comisiones de cambio.",
          ar: "ريفولوت ووايز مفيدتان للتحويلات الدولية والسفر. بلا رسوم صرف.",
          "ar-ma": "ريفولوت ووايز مفيدين للتحويلات الدولية والسفر. بلا مصاريف الصرف.",
          "ar-dz": "ريفولوت ووايز مفيدين للتحويلات الدولية والسفر. بلا مصاريف الصرف.",
          "ar-tn": "ريفولوت ووايز مفيدين للتحويلات الدولية والسفر. بلا مصاريف صرف.",
          "ar-eg": "ريفولوت ووايز مفيدين للتحويلات الدولية والسفر. بدون عمولة صرف.",
          zh: "Revolut 和 Wise 适用于国际转账和旅行，无手续费。"
        }
      }
    ]
  },
  {
    id: "logement",
    icon: "🏠",
    color: "navy",
    titles: {
      fr: "Trouver un logement",
      en: "Find housing",
      es: "Encontrar alojamiento",
      ar: "إيجاد سكن",
      "ar-ma": "لقيان السكن",
      "ar-dz": "لقيان السكن",
      "ar-tn": "لقيان السكن",
      "ar-eg": "إيجاد سكن",
      zh: "找住所"
    },
    tips: [
      {
        titles: { fr: "Sites de recherche", en: "Search websites", es: "Sitios de búsqueda", ar: "مواقع البحث", "ar-ma": "مواقع البحث", "ar-dz": "مواقع البحث", "ar-tn": "مواقع البحث", "ar-eg": "مواقع البحث", zh: "搜索网站" },
        texts: {
          fr: "SeLoger, LeBonCoin, PAP (sans agence), Laforet. Pour les étudiants : Lokaviz (CROUS), ImmoJeune, Studapart.",
          en: "SeLoger, LeBonCoin, PAP (no agency), Laforet. For students: Lokaviz (CROUS), ImmoJeune, Studapart.",
          es: "SeLoger, LeBonCoin, PAP (sin agencia), Laforet. Para estudiantes: Lokaviz (CROUS), ImmoJeune, Studapart.",
          ar: "سي لوجيه، لو بون كوان، PAP (بدون وكيل)، لافوريه. للطلاب: لوكافيز، إيمو جون، ستودابار.",
          "ar-ma": "سي لوجيه، لو بون كوان، PAP بلا وكيل، لافوريه. للطلبة: لوكافيز، إيمو جون، ستودابار.",
          "ar-dz": "سي لوجيه، لو بون كوان، PAP بلا وكيل، لافوريه. للطلبة: لوكافيز، إيمو جون، ستودابار.",
          "ar-tn": "سي لوجيه، لو بون كوان، PAP بلا وكيل، لافوريه. للطلبة: لوكافيز، إيمو جون، ستودابار.",
          "ar-eg": "سي لوجيه، لو بون كوان، PAP (من غير وكيل)، لافوريه. للطلبة: لوكافيز، إيمو جون، ستودابار.",
          zh: "SeLoger、LeBonCoin、PAP（无中介）、Laforet。学生：Lokaviz（CROUS）、ImmoJeune、Studapart。"
        }
      },
      {
        titles: { fr: "Documents garant", en: "Guarantor documents", es: "Documentos del avalista", ar: "وثائق الضامن", "ar-ma": "وثائق الضامن", "ar-dz": "وثائق الضامن", "ar-tn": "وثائق الضامن", "ar-eg": "مستندات الضامن", zh: "担保人文件" },
        texts: {
          fr: "Les propriétaires demandent souvent un garant français. Sans garant, utilise Visale (garantie gratuite de l'État via Action Logement).",
          en: "Landlords often require a French guarantor. Without one, use Visale (free state guarantee via Action Logement).",
          es: "Los propietarios suelen pedir un avalista francés. Sin él, usa Visale (garantía gratuita del Estado vía Action Logement).",
          ar: "الملاك يطلبون ضامنًا فرنسيًا عادة. بدون ضامن استخدم فيزال (ضمان مجاني من الدولة).",
          "ar-ma": "الملاك كيطلبو ضامن فرنسي. بلا ضامن استعمل فيزال (ضمان مجاني من الدولة).",
          "ar-dz": "الملاك يطلبو ضامن فرنسي. بلا ضامن استعمل فيزال (ضمان مجاني من الدولة).",
          "ar-tn": "الملاك يطلبوا ضامن فرنسي. بلا ضامن استعمل فيزال (ضمان مجاني من الدولة).",
          "ar-eg": "الملاك بيطلبوا ضامن فرنسي. من غير ضامن استخدم فيزال (ضمان مجاني من الدولة).",
          zh: "房东经常要求法国担保人。没有的话，使用 Visale（国家免费担保）。"
        }
      },
      {
        titles: { fr: "CAF - Aide au logement", en: "CAF - Housing aid", es: "CAF - Ayuda a la vivienda", ar: "CAF - مساعدة السكن", "ar-ma": "CAF - مساعدة السكن", "ar-dz": "CAF - مساعدة السكن", "ar-tn": "CAF - مساعدة السكن", "ar-eg": "CAF - مساعدة السكن", zh: "CAF - 住房补贴" },
        texts: {
          fr: "Fais ta demande d'APL dès la signature du bail sur caf.fr. L'aide peut aller de 50 à 400€/mois selon tes revenus.",
          en: "Apply for APL as soon as you sign the lease on caf.fr. Aid can range from €50 to €400/month depending on income.",
          es: "Solicita el APL en cuanto firmes el contrato en caf.fr. La ayuda va de 50 a 400€/mes según tus ingresos.",
          ar: "تقدم بطلب APL فور توقيع العقد على caf.fr. المساعدة من 50 إلى 400 يورو شهريًا حسب الدخل.",
          "ar-ma": "دير طلب APL من داك ما توقع العقد على caf.fr. المساعدة بين 50 و400 يورو فالشهر.",
          "ar-dz": "دير طلب APL كي توقع الكونترا على caf.fr. المساعدة ما بين 50 و400 يورو في الشهر.",
          "ar-tn": "اعمل طلب APL كيف تمضي الكونترا على caf.fr. المساعدة ما بين 50 و400 يورو في الشهر.",
          "ar-eg": "قدم طلب APL أول ما تمضي العقد على caf.fr. المساعدة من 50 ل400 يورو في الشهر حسب دخلك.",
          zh: "签租约后立即在 caf.fr 申请 APL。根据收入，补贴每月 50-400 欧元。"
        }
      },
      {
        titles: { fr: "Zones moins chères", en: "Cheaper areas", es: "Zonas más baratas", ar: "مناطق أرخص", "ar-ma": "مناطق رخاص", "ar-dz": "مناطق أرخص", "ar-tn": "مناطق أرخص", "ar-eg": "مناطق أرخص", zh: "便宜地区" },
        texts: {
          fr: "Saint-Denis, Montreuil, Ivry, Vitry sont accessibles en RER/métro et 30-40% moins chers que Paris intramuros.",
          en: "Saint-Denis, Montreuil, Ivry, Vitry are accessible by RER/metro and 30-40% cheaper than inner Paris.",
          es: "Saint-Denis, Montreuil, Ivry, Vitry son accesibles en RER/metro y 30-40% más baratos que el centro de París.",
          ar: "سان دوني ومونتروي وإيفري وفيتري متاحة عبر RER/المترو وأرخص بـ30-40% من وسط باريس.",
          "ar-ma": "سان دوني ومونتروي وإيفري وفيتري كتوصل بالRER/المترو وأرخص ب30-40% من وسط باريس.",
          "ar-dz": "سان دوني ومونتروي وإيفري وفيتري توصلهم بالRER/المترو وأرخص ب30-40% من وسط باريس.",
          "ar-tn": "سان دوني ومونتروي وإيفري وفيتري توصلهم بالRER/المترو وأرخص ب30-40% من وسط باريس.",
          "ar-eg": "سان دوني ومونتروي وإيفري وفيتري بتوصلهم بال RER/المترو وأرخص ب30-40% من وسط باريس.",
          zh: "Saint-Denis、Montreuil、Ivry、Vitry 可乘 RER/地铁到达，比巴黎市中心便宜 30-40%。"
        }
      }
    ]
  },
  {
    id: "sante",
    icon: "🏥",
    color: "coral",
    titles: {
      fr: "Santé & Sécu",
      en: "Health & Insurance",
      es: "Salud & Seguro",
      ar: "الصحة والتأمين",
      "ar-ma": "الصحة والضمان",
      "ar-dz": "الصحة والضمان",
      "ar-tn": "الصحة والضمان",
      "ar-eg": "الصحة والتأمين",
      zh: "健康与保险"
    },
    tips: [
      {
        titles: { fr: "Sécurité sociale", en: "Social Security", es: "Seguridad social", ar: "الضمان الاجتماعي", "ar-ma": "الضمان الاجتماعي", "ar-dz": "الضمان الاجتماعي", "ar-tn": "الضمان الاجتماعي", "ar-eg": "التأمين الاجتماعي", zh: "社会保险" },
        texts: {
          fr: "Inscris-toi sur ameli.fr dès ton arrivée. Le numéro de sécu est attribué sous 1-3 mois. Conserve bien tes justificatifs.",
          en: "Register on ameli.fr upon arrival. Social security number is issued within 1-3 months. Keep all your documents.",
          es: "Regístrate en ameli.fr al llegar. El número de seguridad social se asigna en 1-3 meses. Guarda tus justificantes.",
          ar: "سجل على ameli.fr فور وصولك. يُمنح رقم الضمان الاجتماعي خلال 1-3 أشهر. احتفظ بوثائقك.",
          "ar-ma": "سجل فـameli.fr من داك ما توصل. كيعطيك رقم الضمان فـ1-3 أشهر. حتفظ بالوثائق ديالك.",
          "ar-dz": "سجل في ameli.fr كي توصل. يعطيك رقم الضمان في 1-3 أشهر. خلي الوثائق معاك.",
          "ar-tn": "سجل في ameli.fr كيف توصل. يعطيك رقم الضمان في 1-3 أشهر. خلي الوثائق عندك.",
          "ar-eg": "سجل على ameli.fr أول ما توصل. رقم التأمين بيطلع في 1-3 شهور. احتفظ بمستنداتك.",
          zh: "到达后在 ameli.fr 注册。社保号 1-3 个月内发放。保管好所有文件。"
        }
      },
      {
        titles: { fr: "Médecin traitant", en: "Family doctor", es: "Médico de cabecera", ar: "الطبيب المعالج", "ar-ma": "الطبيب المعالج", "ar-dz": "الطبيب المعالج", "ar-tn": "الطبيب المعالج", "ar-eg": "الطبيب المعالج", zh: "家庭医生" },
        texts: {
          fr: "Déclare un médecin traitant sur ameli.fr pour être mieux remboursé (70% au lieu de 30%). Doctolib facilite la prise de RDV.",
          en: "Declare a family doctor on ameli.fr for better reimbursement (70% vs 30%). Doctolib makes booking appointments easy.",
          es: "Declara un médico de cabecera en ameli.fr para mejor reembolso (70% en vez de 30%). Doctolib facilita las citas.",
          ar: "صرح بطبيب معالج على ameli.fr لتعويض أفضل (70% بدل 30%). دوكتوليب يسهل الحجز.",
          "ar-ma": "صرح بطبيب معالج على ameli.fr باش يرجع ليك فلوس أكثر (70% بلاصا 30%). دوكتوليب كيسهل الحجز.",
          "ar-dz": "صرح بطبيب معالج على ameli.fr باش تاخد فلوس أكثر (70% بدل 30%). دوكتوليب يسهل الحجز.",
          "ar-tn": "صرح بطبيب معالج في ameli.fr باش تاخد فلوس أكثر (70% بدل 30%). دوكتوليب يسهل الحجز.",
          "ar-eg": "سجل دكتور معالج على ameli.fr عشان تاخد فلوس أكتر (70% بدل 30%). دوكتوليب بيسهل الحجز.",
          zh: "在 ameli.fr 声明家庭医生可获得更好报销（70% 而非 30%）。Doctolib 方便预约。"
        }
      },
      {
        titles: { fr: "Pharmacie", en: "Pharmacy", es: "Farmacia", ar: "الصيدلية", "ar-ma": "الفارماسيان", "ar-dz": "الفارماسيان", "ar-tn": "الفارماسيان", "ar-eg": "الصيدلية", zh: "药店" },
        texts: {
          fr: "Les pharmacies (croix verte) délivrent certains soins sans ordonnance et peuvent orienter pour des urgences légères.",
          en: "Pharmacies (green cross) dispense some treatments without prescription and can advise on minor emergencies.",
          es: "Las farmacias (cruz verde) ofrecen algunos tratamientos sin receta y orientan en urgencias leves.",
          ar: "الصيدليات (الصليب الأخضر) تقدم بعض العلاجات بدون وصفة ويمكنها توجيهك في الحالات الخفيفة.",
          "ar-ma": "الفارماسيان (الصليب الأخضر) كتعطي بعض الدوا بلا وصفة وكتوجهك فالحالات الخفيفة.",
          "ar-dz": "الفارماسيان (الصليب الأخضر) تعطي بعض الدوا بلا وصفة وتوجهك في الحالات الخفيفة.",
          "ar-tn": "الفارماسيان (الصليب الأخضر) تعطي بعض الدوا بلا وصفة وتوجهك في الحالات الخفيفة.",
          "ar-eg": "الصيدليات (الصليب الأخضر) بتديك بعض الدوا من غير روشتة وبتوجهك في الحالات البسيطة.",
          zh: "药店（绿十字）可不凭处方提供部分治疗，并对轻微紧急情况提供建议。"
        }
      },
      {
        titles: { fr: "Urgences", en: "Emergencies", es: "Emergencias", ar: "الطوارئ", "ar-ma": "الأوروجنس", "ar-dz": "الأوروجنس", "ar-tn": "الأوروجنس", "ar-eg": "الطوارئ", zh: "紧急情况" },
        texts: {
          fr: "SAMU : 15 | Police : 17 | Pompiers : 18 | Numéro européen : 112. Les urgences hospitalières sont gratuites avec la Sécu.",
          en: "SAMU: 15 | Police: 17 | Firefighters: 18 | European number: 112. Hospital emergencies are free with Social Security.",
          es: "SAMU: 15 | Policía: 17 | Bomberos: 18 | Número europeo: 112. Urgencias hospitalarias gratis con Seguridad Social.",
          ar: "الإسعاف: 15 | الشرطة: 17 | الإطفاء: 18 | الرقم الأوروبي: 112. الطوارئ مجانية بالضمان.",
          "ar-ma": "الإسعاف: 15 | البوليس: 17 | الإطفاء: 18 | الرقم الأوروبي: 112. الأوروجنس فاللوبيطار مجانية بالضمان.",
          "ar-dz": "الإسعاف: 15 | البوليس: 17 | الإطفاء: 18 | الرقم الأوروبي: 112. الأوروجنس في الصبيطار مجانية بالضمان.",
          "ar-tn": "الإسعاف: 15 | البوليس: 17 | الإطفاء: 18 | الرقم الأوروبي: 112. الأوروجنس في السبيطار مجانية بالضمان.",
          "ar-eg": "الإسعاف: 15 | الشرطة: 17 | الإطفاء: 18 | الرقم الأوروبي: 112. الطوارئ في المستشفى مجانية بالتأمين.",
          zh: "急救: 15 | 警察: 17 | 消防: 18 | 欧洲号码: 112。凭社保医院急诊免费。"
        }
      }
    ]
  },
  {
    id: "mobile",
    icon: "📱",
    color: "teal",
    titles: {
      fr: "Téléphone & Internet",
      en: "Phone & Internet",
      es: "Teléfono e Internet",
      ar: "الهاتف والإنترنت",
      "ar-ma": "التليفون والأنترنيت",
      "ar-dz": "التليفون والأنترنيت",
      "ar-tn": "التليفون والأنترنيت",
      "ar-eg": "التليفون والإنترنت",
      zh: "电话与网络"
    },
    tips: [
      {
        titles: { fr: "Opérateurs pas chers", en: "Cheap operators", es: "Operadores baratos", ar: "مشغلون رخيصون", "ar-ma": "أوبيراتور رخاص", "ar-dz": "أوبيراتور أرخص", "ar-tn": "أوبيراتور أرخص", "ar-eg": "شركات رخيصة", zh: "便宜运营商" },
        texts: {
          fr: "Free Mobile à 9,99€/mois (100Go) ou Bouygues/SFR avec promos. Free est souvent le moins cher avec un bon réseau.",
          en: "Free Mobile at €9.99/month (100GB) or Bouygues/SFR with promos. Free is often cheapest with good network.",
          es: "Free Mobile a 9,99€/mes (100GB) o Bouygues/SFR con promociones. Free suele ser el más barato con buena cobertura.",
          ar: "فري موبايل بـ9.99 يورو/شهر (100 جيغا) أو بوييغ/SFR بعروض. فري غالبًا الأرخص بشبكة جيدة.",
          "ar-ma": "فري موبايل ب9.99 يورو/الشهر (100 جيغا) أو بوييغ/SFR بعروض. فري غالبًا الأرخص برازو مزيان.",
          "ar-dz": "فري موبايل ب9.99 يورو/الشهر (100 جيغا) أو بوييغ/SFR بعروض. فري غالبًا الأرخص بريزو مزيان.",
          "ar-tn": "فري موبايل ب9.99 يورو/الشهر (100 جيغا) أو بوييغ/SFR بعروض. فري غالبًا الأرخص بريزو باهي.",
          "ar-eg": "فري موبايل ب9.99 يورو/الشهر (100 جيجا) أو بوييغ/SFR بعروض. فري غالبًا الأرخص وبشبكة كويسة.",
          zh: "Free Mobile 每月 9.99 欧元（100GB），或 Bouygues/SFR 促销。Free 通常最便宜，网络好。"
        }
      },
      {
        titles: { fr: "Box internet", en: "Internet box", es: "Router internet", ar: "صندوق الإنترنت", "ar-ma": "بوكس الأنترنيت", "ar-dz": "بوكس الأنترنيت", "ar-tn": "بوكس الأنترنيت", "ar-eg": "راوتر الإنترنت", zh: "网络盒子" },
        texts: {
          fr: "Free Fibre à 29,99€/mois est très compétitif. Orange et SFR proposent aussi des offres. Prévoir 2-3 semaines d'installation.",
          en: "Free Fibre at €29.99/month is very competitive. Orange and SFR also have offers. Plan 2-3 weeks for installation.",
          es: "Free Fibre a 29,99€/mes es muy competitivo. Orange y SFR también tienen ofertas. Planea 2-3 semanas para instalar.",
          ar: "فري فيبر بـ29.99 يورو/شهر منافس جدًا. أورانج وSFR لديهم عروض. خطط لـ2-3 أسابيع للتركيب.",
          "ar-ma": "فري فيبر ب29.99 يورو/الشهر رخيص بزاف. أورانج وSFR عندهم عروض. تنصاب فـ2-3 سيمانات.",
          "ar-dz": "فري فيبر ب29.99 يورو/الشهر منافس. أورانج وSFR عندهم عروض. تنصاب في 2-3 سيمانات.",
          "ar-tn": "فري فيبر ب29.99 يورو/الشهر منافس. أورانج وSFR عندهم عروض. تنصاب في 2-3 جمع.",
          "ar-eg": "فري فيبر ب29.99 يورو/الشهر سعر كويس. أورانج وSFR عندهم عروض. التركيب بياخد 2-3 أسابيع.",
          zh: "Free Fibre 每月 29.99 欧元很实惠。Orange 和 SFR 也有套餐。安装需 2-3 周。"
        }
      },
      {
        titles: { fr: "SIM prépayée à l'arrivée", en: "Prepaid SIM on arrival", es: "SIM prepago al llegar", ar: "شريحة مسبقة الدفع", "ar-ma": "شريطة بريبي", "ar-dz": "شريطة بريبي", "ar-tn": "شريطة بريبي", "ar-eg": "شريحة بريبيد", zh: "预付费SIM卡" },
        texts: {
          fr: "Achète une SIM prépayée à La Poste ou en tabac dès ton arrivée. Lyca Mobile et Lebara proposent des forfaits internationaux abordables.",
          en: "Buy a prepaid SIM at La Poste or tobacco shops upon arrival. Lyca Mobile and Lebara offer affordable international plans.",
          es: "Compra una SIM prepago en La Poste o estanco al llegar. Lyca Mobile y Lebara tienen planes internacionales asequibles.",
          ar: "اشترِ شريحة مسبقة الدفع من La Poste أو التبغ فور وصولك. ليكا موبايل وليبارا لديها عروض دولية ميسورة.",
          "ar-ma": "شري شريطة بريبي من La Poste ولا التاباك من داك ما توصل. ليكا موبايل وليبارا عندهم عروض دولية رخاص.",
          "ar-dz": "شري شريطة بريبي من La Poste ولا التاباك كي توصل. ليكا موبايل وليبارا عندهم عروض دولية أرخص.",
          "ar-tn": "اشري شريطة بريبي من La Poste ولا التاباك كيف توصل. ليكا موبايل وليبارا عندهم عروض دولية رخاص.",
          "ar-eg": "اشتري شريحة بريبيد من La Poste أو التباك أول ما توصل. ليكا موبايل وليبارا عندهم عروض دولية رخيصة.",
          zh: "到达后在 La Poste 或烟草店购买预付卡。Lyca Mobile 和 Lebara 提供便宜国际套餐。"
        }
      }
    ]
  },
  {
    id: "loisirs",
    icon: "🎭",
    color: "amber",
    titles: {
      fr: "Sorties & Loisirs",
      en: "Outings & Leisure",
      es: "Salidas y Ocio",
      ar: "الخروج والترفيه",
      "ar-ma": "الخرجات والترفيه",
      "ar-dz": "الخرجات والترفيه",
      "ar-tn": "الخرجات والترفيه",
      "ar-eg": "الخروج والترفيه",
      zh: "外出与休闲"
    },
    tips: [
      {
        titles: { fr: "Musées gratuits", en: "Free museums", es: "Museos gratuitos", ar: "متاحف مجانية", "ar-ma": "متاحف مجانية", "ar-dz": "متاحف مجانية", "ar-tn": "متاحف مجانية", "ar-eg": "متاحف مجانية", zh: "免费博物馆" },
        texts: {
          fr: "1er dimanche du mois : Louvre, Orsay, Pompidou, Quai Branly... gratuits ! Moins de 26 ans : entrée gratuite dans tous les musées nationaux.",
          en: "1st Sunday of the month: Louvre, Orsay, Pompidou, Quai Branly... free! Under 26: free entry to all national museums.",
          es: "1er domingo del mes: Louvre, Orsay, Pompidou, Quai Branly... gratis! Menores de 26: entrada gratis a museos nacionales.",
          ar: "أول أحد من الشهر: اللوفر وأورسيه وبومبيدو وكيه برانلي... مجانية! أقل من 26: دخول مجاني لكل المتاحف الوطنية.",
          "ar-ma": "اللول نهار الحد من الشهر: اللوفر وأورسيه وبومبيدو... مجانية! أقل من 26: دخول مجاني فكل المتاحف الوطنية.",
          "ar-dz": "اللول نهار الحد من الشهر: اللوفر وأورسيه وبومبيدو... مجانية! أقل من 26: دخول مجاني في كل المتاحف الوطنية.",
          "ar-tn": "اللول نهار الأحد من الشهر: اللوفر وأورسيه وبومبيدو... مجانية! أقل من 26: دخول مجاني في كل المتاحف الوطنية.",
          "ar-eg": "أول أحد من الشهر: اللوفر وأورسيه وبومبيدو وكيه برانلي... مجانًا! أقل من 26 سنة: دخول مجاني لكل المتاحف الوطنية.",
          zh: "每月第一个周日：卢浮宫、奥赛、蓬皮杜、盖布朗利...免费！26 岁以下：所有国家博物馆免费入场。"
        }
      },
      {
        titles: { fr: "Bibliothèques", en: "Libraries", es: "Bibliotecas", ar: "المكتبات", "ar-ma": "المكتبات", "ar-dz": "المكتبات", "ar-tn": "المكتبات", "ar-eg": "المكتبات", zh: "图书馆" },
        texts: {
          fr: "La BPI (Centre Pompidou) est gratuite et ouverte jusqu'à 22h. Les bibliothèques municipales (carte gratuite) offrent aussi livres, films, musique.",
          en: "BPI (Centre Pompidou) is free and open until 10pm. Municipal libraries (free card) also offer books, films, music.",
          es: "La BPI (Centro Pompidou) es gratis y abre hasta las 22h. Las bibliotecas municipales (tarjeta gratis) ofrecen libros, películas, música.",
          ar: "مكتبة BPI (بومبيدو) مجانية ومفتوحة حتى 22:00. المكتبات البلدية (بطاقة مجانية) تقدم كتب وأفلام وموسيقى.",
          "ar-ma": "مكتبة BPI فبومبيدو مجانية ومفتوحة حتى 10 ليل. المكتبات البلدية بكارت مجاني فيها كتب وأفلام وموسيقى.",
          "ar-dz": "مكتبة BPI في بومبيدو مجانية ومفتوحة حتى 10 الليل. المكتبات البلدية بكارت مجاني فيها كتب وأفلام وموسيقى.",
          "ar-tn": "مكتبة BPI في بومبيدو مجانية ومفتوحة حتى 10 الليل. المكتبات البلدية بكارط مجاني فيها كتب وأفلام وموسيقى.",
          "ar-eg": "مكتبة BPI (بومبيدو) مجانية ومفتوحة لحد 10 بالليل. المكتبات البلدية (كارت مجاني) فيها كتب وأفلام وموسيقى.",
          zh: "BPI（蓬皮杜中心）免费，开放至晚10点。市立图书馆（免费卡）也提供书籍、电影、音乐。"
        }
      },
      {
        titles: { fr: "Paris à pied", en: "Paris on foot", es: "París a pie", ar: "باريس سيرًا", "ar-ma": "باريس على الرجلين", "ar-dz": "باريس على الرجلين", "ar-tn": "باريس على الرجلين", "ar-eg": "باريس مشي", zh: "步行巴黎" },
        texts: {
          fr: "Les bords de Seine, le Canal Saint-Martin, Montmartre, le Marais : Paris se découvre à pied. Télécharge l'appli Géovélo pour les pistes cyclables.",
          en: "Seine banks, Canal Saint-Martin, Montmartre, Marais: Paris is best discovered on foot. Download Géovélo app for bike paths.",
          es: "Orillas del Sena, Canal Saint-Martin, Montmartre, Marais: París se descubre a pie. Descarga Géovélo para carriles bici.",
          ar: "ضفاف السين وقناة سان مارتان ومونمارتر والماريه: اكتشف باريس سيرًا. نزل تطبيق Géovélo لمسارات الدراجات.",
          "ar-ma": "ضفاف السين وقناة سان مارتان ومونمارتر والماريه: اكتشف باريس على الرجلين. نزل تطبيق Géovélo للدراجات.",
          "ar-dz": "ضفاف السين وقناة سان مارتان ومونمارتر والماريه: اكتشف باريس على الرجلين. نزل تطبيق Géovélo للدراجات.",
          "ar-tn": "ضفاف السين وقناة سان مارتان ومونمارتر والماريه: اكتشف باريس على الرجلين. نزل تطبيق Géovélo للدراجات.",
          "ar-eg": "كورنيش السين وقناة سان مارتان ومونمارتر والماريه: اكتشف باريس مشي. نزل تطبيق Géovélo للدراجات.",
          zh: "塞纳河畔、圣马丁运河、蒙马特、玛黑区：步行发现巴黎。下载 Géovélo 应用查自行车道。"
        }
      },
      {
        titles: { fr: "Cinéma", en: "Cinema", es: "Cine", ar: "السينما", "ar-ma": "السينما", "ar-dz": "السينما", "ar-tn": "السينما", "ar-eg": "السينما", zh: "电影" },
        texts: {
          fr: "Le mercredi est le jour de sortie des films. UGC/MK2 proposent des cartes illimitées (~22€/mois). Beaucoup de salles indépendantes avec des tarifs à 5€.",
          en: "Wednesday is movie release day. UGC/MK2 offer unlimited cards (~€22/month). Many indie theaters with €5 tickets.",
          es: "Los miércoles salen las películas. UGC/MK2 ofrecen tarjetas ilimitadas (~22€/mes). Muchas salas indie con entradas a 5€.",
          ar: "الأربعاء هو يوم إصدار الأفلام. UGC/MK2 لديها بطاقات غير محدودة (~22 يورو/شهر). صالات مستقلة بـ5 يورو.",
          "ar-ma": "الأربعاء هو نهار الأفلام الجديدة. UGC/MK2 عندهم كارت بلا حدود (~22 يورو/الشهر). سينمات صغار ب5 يورو.",
          "ar-dz": "الأربعاء نهار الأفلام الجديدة. UGC/MK2 عندهم كارت بلا حدود (~22 يورو/الشهر). سينمات صغار ب5 يورو.",
          "ar-tn": "الأربعاء نهار الأفلام الجديدة. UGC/MK2 عندهم كارط بلا حدود (~22 يورو/الشهر). سينمات صغار ب5 يورو.",
          "ar-eg": "الأربع يوم نزول الأفلام. UGC/MK2 عندهم كارت مفتوح (~22 يورو/الشهر). سينمات صغيرة بـ5 يورو.",
          zh: "周三是电影上映日。UGC/MK2 提供无限卡（约 22 欧元/月）。许多独立影院票价 5 欧元。"
        }
      }
    ]
  }
];

export const phrases = {
  metro: [
    { fr: "Un ticket, s'il vous plaît.", translations: { en: "One ticket, please.", es: "Un billete, por favor.", ar: "تذكرة واحدة، من فضلك.", "ar-ma": "واحد تيكي، عافاك.", "ar-dz": "تيكي واحد، من فضلك.", "ar-tn": "تذكرة واحدة، برشا.", "ar-eg": "تذكرة واحدة، من فضلك.", zh: "请给我一张票。" }},
    { fr: "Ce train s'arrête à... ?", translations: { en: "Does this train stop at...?", es: "¿Este tren para en...?", ar: "هل يتوقف هذا القطار في...؟", "ar-ma": "واش هاد التران كيوقف فـ...؟", "ar-dz": "واش هاذا التران يوقف فـ...؟", "ar-tn": "هاذا التران يوقف فـ...؟", "ar-eg": "العربية دي بتوقف في...؟", zh: "这班车停...站吗？" }},
    { fr: "Excusez-moi, je sors.", translations: { en: "Excuse me, I'm getting off.", es: "Perdón, yo me bajo.", ar: "عذراً، أنا نازل.", "ar-ma": "سمح لي، أنا نازل.", "ar-dz": "سامحني، أنا نازل.", "ar-tn": "سامحني، أنا نازل.", "ar-eg": "لو سمحت، أنا نازل.", zh: "对不起，我要下车。" }},
    { fr: "C'est quelle ligne pour aller à... ?", translations: { en: "Which line goes to...?", es: "¿Qué línea va a...?", ar: "ما هو الخط للذهاب إلى...؟", "ar-ma": "أشنو هو الليني باش نمشي لـ...؟", "ar-dz": "أنهي ليني تروح لـ...؟", "ar-tn": "أنهي خط يروح لـ...؟", "ar-eg": "أنهي خط يروح لـ...؟", zh: "去...坐哪条线？" }},
    { fr: "Le prochain train est dans combien de temps ?", translations: { en: "When is the next train?", es: "¿Cuándo es el próximo tren?", ar: "متى القطار القادم؟", "ar-ma": "فقداش غادي يجي التران الجاي؟", "ar-dz": "وقتاش يجي التران الجاي؟", "ar-tn": "وقتاش يجي التران الجاي؟", "ar-eg": "امتى العربية الجاية؟", zh: "下一班车什么时候来？" }},
    { fr: "Où est la sortie ?", translations: { en: "Where is the exit?", es: "¿Dónde está la salida?", ar: "أين المخرج؟", "ar-ma": "فين هي الخرجة؟", "ar-dz": "وين هو الخروج؟", "ar-tn": "وين هو المخرج؟", "ar-eg": "فين المخرج؟", zh: "出口在哪里？" }}
  ],
  quotidien: [
    { fr: "Bonjour, je voudrais...", translations: { en: "Hello, I would like...", es: "Buenos días, quisiera...", ar: "صباح الخير، أريد...", "ar-ma": "صباح الخير، بغيت...", "ar-dz": "صباح الخير، حاب...", "ar-tn": "صباح الخير، نحب...", "ar-eg": "صباح الخير، عايز...", zh: "您好，我想要..." }},
    { fr: "C'est combien ?", translations: { en: "How much is it?", es: "¿Cuánto cuesta?", ar: "بكم هذا؟", "ar-ma": "بشحال هادا؟", "ar-dz": "بقداش هذا؟", "ar-tn": "بقداش هذا؟", "ar-eg": "بكام ده؟", zh: "多少钱？" }},
    { fr: "Pouvez-vous répéter, s'il vous plaît ?", translations: { en: "Could you repeat that, please?", es: "¿Puede repetir, por favor?", ar: "هل يمكنك التكرار، من فضلك؟", "ar-ma": "عافاك عاود مرة أخرى؟", "ar-dz": "من فضلك عاود؟", "ar-tn": "من فضلك عاود مرة أخرى؟", "ar-eg": "ممكن تعيد تاني لو سمحت؟", zh: "请再说一遍。" }},
    { fr: "Je ne comprends pas.", translations: { en: "I don't understand.", es: "No entiendo.", ar: "أنا لا أفهم.", "ar-ma": "ما فهمتش.", "ar-dz": "ما فهمتش.", "ar-tn": "ما فهمتش.", "ar-eg": "مش فاهم.", zh: "我听不懂。" }},
    { fr: "Parlez-vous anglais ?", translations: { en: "Do you speak English?", es: "¿Habla usted inglés?", ar: "هل تتحدث الإنجليزية؟", "ar-ma": "كتهضر بالانجليزية؟", "ar-dz": "تحكي انجليزي؟", "ar-tn": "تعرف تحكي إنجليزي؟", "ar-eg": "بتتكلم إنجليزي؟", zh: "您会说英语吗？" }},
    { fr: "Où sont les toilettes ?", translations: { en: "Where are the toilets?", es: "¿Dónde están los aseos?", ar: "أين دورة المياه؟", "ar-ma": "فين هي البيت ماء؟", "ar-dz": "وين هي الحمام؟", "ar-tn": "وين هو الحمام؟", "ar-eg": "فين الحمام؟", zh: "洗手间在哪里？" }},
    { fr: "J'ai besoin d'aide.", translations: { en: "I need help.", es: "Necesito ayuda.", ar: "أحتاج مساعدة.", "ar-ma": "محتاج مساعدة.", "ar-dz": "محتاج مساعدة.", "ar-tn": "محتاج مساعدة.", "ar-eg": "محتاج مساعدة.", zh: "我需要帮助。" }},
    { fr: "Avez-vous une carte en anglais ?", translations: { en: "Do you have a menu in English?", es: "¿Tienen carta en inglés?", ar: "هل لديكم قائمة بالإنجليزية؟", "ar-ma": "عندكم منيو بالانجليزية؟", "ar-dz": "عندكم قائمة بالإنجليزية؟", "ar-tn": "عندكم منيو بالإنجليزية؟", "ar-eg": "عندكم منيو بالإنجليزي؟", zh: "有英文菜单吗？" }}
  ],
  urgences: [
    { fr: "Appelez le SAMU, s'il vous plaît ! (15)", translations: { en: "Call emergency services, please! (15)", es: "¡Llame al SAMU, por favor! (15)", ar: "اتصلوا بالإسعاف، من فضلكم! (15)", "ar-ma": "عيط على الإسعاف عافاك! (15)", "ar-dz": "اتصل بالإسعاف من فضلك! (15)", "ar-tn": "اتصل بالإسعاف من فضلك! (15)", "ar-eg": "اتصل بالإسعاف من فضلك! (15)", zh: "请呼叫急救！(15)" }},
    { fr: "J'ai perdu mon passeport.", translations: { en: "I lost my passport.", es: "He perdido mi pasaporte.", ar: "لقد فقدت جواز سفري.", "ar-ma": "ضيعت الپاسبور ديالي.", "ar-dz": "ضيعت جواز سفري.", "ar-tn": "ضيعت جواز سفري.", "ar-eg": "ضيعت جواز سفري.", zh: "我丢失了护照。" }},
    { fr: "Où est l'hôpital le plus proche ?", translations: { en: "Where is the nearest hospital?", es: "¿Dónde está el hospital más cercano?", ar: "أين أقرب مستشفى؟", "ar-ma": "فين هو لوبيطار القريب؟", "ar-dz": "وين هو أقرب مستشفى؟", "ar-tn": "وين هو أقرب مستشفى؟", "ar-eg": "فين أقرب مستشفى؟", zh: "最近的医院在哪里？" }}
  ]
};

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ar-ma", label: "Darija 🇲🇦", flag: "🇲🇦" },
  { code: "ar-dz", label: "Darija 🇩🇿", flag: "🇩🇿" },
  { code: "ar-tn", label: "Tunisien 🇹🇳", flag: "🇹🇳" },
  { code: "ar-eg", label: "Masri 🇪🇬", flag: "🇪🇬" },
  { code: "zh", label: "中文", flag: "🇨🇳" }
];
