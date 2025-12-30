// Données centralisées pour les universités et filières

export interface University {
  id: string;
  name: string;
  shortName: string;
  location: string;
  type: "Publique" | "Privée";
  description: string;
  founded: number;
  website: string;
  email: string;
  phone: string;
  imageUrl?: string;
  domains: string[];
  diplomas: string[];
  courseTypes: string[];
  programs: string[];
  facilities: string[];
  accreditations: string[];
}

export interface Program {
  id: string;
  name: string;
  domain: string;
  level: string;
  duration: string;
  description: string;
  objectives: string[];
  skills: string[];
  universities: string[];
  careers: Career[];
  admissionRequirements: string[];
  curriculum: string[];
}

export interface Career {
  title: string;
  description: string;
  salaryRange: string;
  demandLevel: "Élevée" | "Moyenne" | "Faible";
}

export const universities: University[] = [
  {
    id: "ufhb",
    name: "Université Félix Houphouët-Boigny",
    shortName: "UFHB",
    location: "Abidjan, Cocody",
    type: "Publique",
    description: "La plus grande université de Côte d'Ivoire, offrant une large gamme de formations dans tous les domaines académiques. Fondée en 1964, elle est le pilier de l'enseignement supérieur ivoirien.",
    founded: 1964,
    website: "www.univ-fhb.edu.ci",
    email: "contact@univ-fhb.edu.ci",
    phone: "+225 22 44 08 00",
    imageUrl: "/UFHB.jpg",
    domains: ["Sciences et Technologies", "Sciences de la Santé", "Sciences Juridiques et Politiques", "Sciences Économiques et de Gestion", "Lettres, Arts et Sciences Humaines", "Sciences de l'Homme et de la Société"],
    diplomas: ["Licence (LMD)", "Master", "Doctorat", "DUT", "BTS"],
    courseTypes: ["Cours magistraux", "Travaux dirigés", "Travaux pratiques", "Stages", "Mémoires et thèses"],
    programs: ["informatique-genie-logiciel", "medecine", "droit des affaires", "sciences-economiques"],
    facilities: ["Bibliothèque centrale", "Laboratoires de recherche", "Résidences universitaires", "Restaurants universitaires", "Complexe sportif"],
    accreditations: ["CAMES", "UNESCO"]
  },
  {
    id: "inp-hb",
    name: "Institut National Polytechnique Félix Houphouët-Boigny",
    shortName: "INP-HB",
    location: "Yamoussoukro",
    type: "Publique",
    description: "École d'excellence en ingénierie et sciences appliquées, l'INP-HB forme les ingénieurs et techniciens supérieurs de demain. Reconnu internationalement pour la qualité de ses formations.",
    founded: 1996,
    website: "www.inphb.ci",
    email: "info@inphb.ci",
    phone: "+225 30 64 66 66",
    imageUrl: "/INP.jpg",
    domains: ["Génie Civil", "Génie Électrique", "Génie Mécanique", "Génie Chimique", "Informatique et Télécommunications", "Agronomie"],
    diplomas: ["Diplôme d'Ingénieur", "Master", "Doctorat", "DUT", "Licence Professionnelle"],
    courseTypes: ["Cours théoriques", "Travaux pratiques intensifs", "Projets d'ingénierie", "Stages en entreprise", "Projets de fin d'études"],
    programs: ["informatique-genie-logiciel", "genie-civil", "genie-electrique"],
    facilities: ["Ateliers techniques", "Laboratoires modernes", "Centre de calcul", "Ferme expérimentale", "Incubateur d'entreprises"],
    accreditations: ["CAMES", "CTI (France)", "EUR-ACE"]
  },
  {
    id: "uao",
    name: "Université Alassane Ouattara",
    shortName: "UAO",
    location: "Bouaké",
    type: "Publique",
    description: "Université moderne au cœur de la Côte d'Ivoire, l'UAO offre des formations diversifiées et de qualité. Elle joue un rôle majeur dans le développement de la région du centre.",
    founded: 1992,
    website: "www.univ-ao.edu.ci",
    email: "contact@univ-ao.edu.ci",
    phone: "+225 31 63 59 00",
    imageUrl: "/UAO.png",
    domains: ["Sciences Juridiques", "Sciences Économiques", "Lettres et Sciences Humaines", "Sciences Fondamentales", "Communication"],
    diplomas: ["Licence (LMD)", "Master", "Doctorat"],
    courseTypes: ["Cours magistraux", "Travaux dirigés", "Séminaires", "Stages", "Recherche"],
    programs: ["gestion-entreprise", "droit", "communication"],
    facilities: ["Bibliothèque moderne", "Amphithéâtres climatisés", "Centre informatique", "Résidences universitaires"],
    accreditations: ["CAMES"]
  },
  {
    id: "esatic",
    name: "ESATIC",
    shortName: "ESATIC",
    location: "Abidjan",
    type: "Publique",
    description: "École Supérieure Africaine des Technologies de l'Information et de la Communication, spécialisée en informatique et télécommunications. Forme les experts en technologies numériques de demain.",
    founded: 2012,
    website: "www.esatic.ci",
    email: "contact@esatic.ci",
    phone: "+225 22 44 00 00",
    imageUrl: "/ESATIC.png",
    domains: ["Informatique", "Télécommunications", "Réseaux", "Cybersécurité", "Développement Logiciel"],
    diplomas: ["Licence Professionnelle", "Master", "Ingénieur"],
    courseTypes: ["Cours théoriques", "Travaux pratiques", "Projets", "Stages en entreprise"],
    programs: ["informatique-genie-logiciel"],
    facilities: ["Laboratoires informatiques", "Salles de réseaux", "Centre de recherche", "Bibliothèque spécialisée"],
    accreditations: ["CAMES"]
  },
  {
    id: "pigier",
    name: "PIGIER Côte d'Ivoire",
    shortName: "PIGIER",
    location: "Abidjan",
    type: "Privée",
    description: "École privée d'excellence offrant des formations professionnelles en commerce, gestion et informatique. Reconnue pour son approche pratique et son insertion professionnelle.",
    founded: 2000,
    website: "www.pigier.ci",
    email: "info@pigier.ci",
    phone: "+225 22 40 00 00",
    imageUrl: "/PIGIER.jpg",
    domains: ["Commerce", "Gestion", "Informatique", "Marketing", "Comptabilité"],
    diplomas: ["BTS", "Licence Professionnelle", "Master"],
    courseTypes: ["Cours théoriques", "Travaux pratiques", "Stages", "Projets professionnels"],
    programs: ["gestion-entreprise"],
    facilities: ["Salles de cours modernes", "Laboratoires informatiques", "Bibliothèque", "Espace coworking"],
    accreditations: ["Ministère de l'Enseignement Supérieur"]
  },
  {
    id: "escae",
    name: "École Supérieure de Commerce (ESCAE)",
    shortName: "ESCAE",
    location: "Abidjan",
    type: "Privée",
    description: "École de commerce reconnue formant les futurs managers et entrepreneurs dans les domaines du commerce, finance et marketing. Excellence académique et professionnelle.",
    founded: 1995,
    website: "www.escae.ci",
    email: "contact@escae.ci",
    phone: "+225 22 41 00 00",
    imageUrl: "/ESCAE.png",
    domains: ["Commerce", "Finance", "Marketing", "Management", "Entrepreneuriat"],
    diplomas: ["Licence", "Master", "MBA"],
    courseTypes: ["Cours magistraux", "Études de cas", "Stages", "Projets entrepreneuriaux"],
    programs: ["gestion-entreprise"],
    facilities: ["Amphithéâtres", "Salles de conférence", "Bibliothèque", "Incubateur d'entreprises"],
    accreditations: ["Ministère de l'Enseignement Supérieur"]
  },
  {
    id: "iua",
    name: "Institut Universitaire d'Abidjan (IUA)",
    shortName: "IUA",
    location: "Abidjan",
    type: "Publique",
    description: "Institution universitaire publique offrant une large gamme de formations dans les domaines des sciences, lettres et droit. Excellence académique et recherche.",
    founded: 2005,
    website: "www.iua.ci",
    email: "contact@iua.ci",
    phone: "+225 22 42 00 00",
    imageUrl: "/IUA.jpg",
    domains: ["Informatique", "Droit des affaires", "Sciences Économiques"],
    diplomas: ["Licence (LMD)", "Master", "Doctorat"],
    courseTypes: ["Cours magistraux", "Travaux dirigés", "Séminaires", "Recherche"],
    programs: ["droit"],
    facilities: ["Bibliothèque", "Laboratoires", "Amphithéâtres", "Centre de recherche"],
    accreditations: ["CAMES"]
  },
  {
    id: "univ-man",
    name: "Université de Man",
    shortName: "Université de Man",
    location: "Man",
    type: "Publique",
    description:
      "Université publique située à Man, au cœur de l’Ouest ivoirien, offrant des formations en sciences, ingénierie, gestion et environnement.",
    founded: 2014,
    website: "www.univ-man.ci",
    email: "contact@univ-man.ci",
    phone: "+225 27 00 00 00",
    imageUrl: "/UNIV_MAN.jpg", 
    domains: [
      "Sciences et Technologies",
      "Ingénierie",
      "Sciences Économiques",
      "Environnement",
    ],
    diplomas: ["Licence (LMD)", "Master"],
    courseTypes: [
      "Cours magistraux",
      "Travaux dirigés",
      "Travaux pratiques",
      "Stages",
    ],
    programs: [
      "genie-civil",
      "comptabilite-et-finance",
      "science-economique",
    ],
    facilities: [
      "Bibliothèque universitaire",
      "Laboratoires scientifiques",
      "Amphithéâtres modernes",
      "Résidences universitaires",
    ],
    accreditations: ["CAMES"],
  },
    {
    id: "iipea",
    name: "Institut International Polytechnique des Élites d'Abidjan",
    shortName: "IIPEA",
    location: "Cocody, Abidjan",
    type: "Privée",
    description:
      "Établissement privé spécialisé dans les formations polytechniques et professionnelles, orienté vers l’employabilité et l’excellence.",
    founded: 2015,
    website: "www.iipea.ci",
    email: "info@iipea.ci",
    phone: "+225 27 22 00 00",
    imageUrl: "/IIPEA.jpg",
    domains: [
      "Informatique",
      "Commerce et Gestion",
      "Comptabilité",
      "Réseaux et Télécoms",
    ],
    diplomas: ["BTS", "Licence Professionnelle"],
    courseTypes: ["Cours théoriques", "Travaux pratiques", "Stages en entreprise"],
    programs: [
      "informatique-genie-logiciel",
      "marketing-digital",
      "comptabilite-et-finance",
    ],
    facilities: [
      "Laboratoires informatiques",
      "Salles multimédias",
      "Bibliothèque",
      "Centre de carrières",
    ],
    accreditations: ["Ministère de l'Enseignement Supérieur"],
  },
    {
    id: "iit",
    name: "Institut Ivoirien de Technologie de Grand-Bassam",
    shortName: "IIT",
    location: "Grand-Bassam",
    type: "Privée",
    description:
      "Institut axé sur les technologies de l’information, l’entrepreneuriat et l’innovation, avec une forte ouverture internationale.",
    founded: 2018,
    website: "www.iit.ci",
    email: "contact@iit.ci",
    phone: "+225 27 21 00 00",
    imageUrl: "/IIT.jpg",
    domains: [
      "Informatique",
      "Data Science",
      "Entrepreneuriat",
      "Innovation",
    ],
    diplomas: ["Licence", "Master"],
    courseTypes: [
      "Cours magistraux",
      "Projets pratiques",
      "Hackathons",
      "Stages en entreprise",
    ],
    programs: [
      "informatique-genie-logiciel",
      "data-science",
      "gestion-entreprise",
    ],
    facilities: [
      "Labs informatiques modernes",
      "Espace d’incubation",
      "Bibliothèque numérique",
      "Salles de conférence",
    ],
    accreditations: ["CAMES"],
  },
];

export const programs: Program[] = [
  {
    id: "informatique-genie-logiciel",
    name: "Informatique et Génie Logiciel",
    domain: "Technologie",
    level: "Licence",
    duration: "3 ans",
    description: "Formation complète en développement logiciel, programmation et systèmes informatiques. Prépare les étudiants aux métiers du numérique en forte demande.",
    objectives: [
      "Maîtriser les langages de programmation modernes",
      "Concevoir et développer des applications web et mobiles",
      "Comprendre l'architecture des systèmes informatiques",
      "Gérer des projets informatiques"
    ],
    skills: [
      "Programmation (Python, Java, JavaScript)",
      "Développement web (HTML, CSS, React, Node.js)",
      "Bases de données (SQL, NoSQL)",
      "Gestion de projet Agile",
      "Cybersécurité de base"
    ],
    universities: ["ufhb", "inp-hb", "iua", "iit", "iipea", "univ-man"],
    careers: [
      {
        title: "Développeur Full Stack",
        description: "Conception et développement d'applications web complètes",
        salaryRange: "400,000 - 1,200,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Ingénieur Logiciel",
        description: "Développement de solutions logicielles complexes",
        salaryRange: "500,000 - 1,500,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Administrateur Systèmes",
        description: "Gestion des infrastructures informatiques",
        salaryRange: "350,000 - 900,000 FCFA/mois",
        demandLevel: "Moyenne"
      },
      {
        title: "Data Analyst",
        description: "Analyse et exploitation des données d'entreprise",
        salaryRange: "450,000 - 1,100,000 FCFA/mois",
        demandLevel: "Élevée"
      }
    ],
    admissionRequirements: [
      "Baccalauréat scientifique (C, D, E) ou technique",
      "Bonnes bases en mathématiques",
      "Motivation pour l'informatique",
      "Dossier de candidature"
    ],
    curriculum: [
      "Algorithmique et structures de données",
      "Programmation orientée objet",
      "Développement web et mobile",
      "Réseaux et systèmes",
      "Bases de données",
      "Génie logiciel"
    ]
  },
  {
    id: "medecine",
    name: "Médecine",
    domain: "Santé",
    level: "Doctorat",
    duration: "7 ans",
    description: "Formation médicale complète pour devenir médecin. Cursus rigoureux alliant théorie et pratique hospitalière pour former les professionnels de santé de demain.",
    objectives: [
      "Acquérir les connaissances médicales fondamentales",
      "Développer les compétences cliniques",
      "Maîtriser le diagnostic et le traitement des pathologies",
      "Pratiquer une médecine éthique et responsable"
    ],
    skills: [
      "Diagnostic médical",
      "Techniques chirurgicales de base",
      "Communication avec les patients",
      "Gestion des urgences",
      "Recherche médicale"
    ],
    universities: ["ufhb"],
    careers: [
      {
        title: "Médecin Généraliste",
        description: "Prise en charge globale de la santé des patients",
        salaryRange: "500,000 - 1,500,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Médecin Spécialiste",
        description: "Expertise dans un domaine médical spécifique",
        salaryRange: "800,000 - 3,000,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Chirurgien",
        description: "Interventions chirurgicales et soins post-opératoires",
        salaryRange: "1,000,000 - 4,000,000 FCFA/mois",
        demandLevel: "Moyenne"
      },
      {
        title: "Chercheur Médical",
        description: "Recherche et développement de nouveaux traitements",
        salaryRange: "600,000 - 2,000,000 FCFA/mois",
        demandLevel: "Moyenne"
      }
    ],
    admissionRequirements: [
      "Baccalauréat scientifique (C ou D) avec mention",
      "Excellentes notes en sciences (SVT, Chimie, Physique)",
      "Concours d'entrée très sélectif",
      "Aptitude physique et mentale"
    ],
    curriculum: [
      "Anatomie et physiologie",
      "Biochimie et biologie cellulaire",
      "Pharmacologie",
      "Pathologie et sémiologie",
      "Stages hospitaliers",
      "Spécialisation médicale"
    ]
  },
    {
    id: "droit-des-affaires",
    name: "Droit des Affaires",
    domain: "Droit",
    level: "Master",
    duration: "5 ans",
    description:
      "Formation spécialisée en droit des sociétés, contrats, fiscalité et régulation des activités économiques. Prépare aux métiers juridiques en entreprise ou en cabinet.",
    objectives: [
      "Maîtriser les bases du droit civil et du droit des obligations",
      "Comprendre le fonctionnement juridique des entreprises",
      "Savoir rédiger et analyser des contrats commerciaux",
      "Appréhender les enjeux fiscaux et sociaux liés à l’entreprise",
    ],
    skills: [
      "Analyse et rédaction de contrats",
      "Conseil juridique aux entreprises",
      "Connaissance du droit des sociétés",
      "Notions de droit fiscal et social",
      "Capacité de veille juridique",
    ],
    universities: ["ufhb", "uao", "iua"],
    careers: [
      {
        title: "Juriste d’Entreprise",
        description: "Conseil juridique interne sur les contrats, risques et obligations de l’entreprise.",
        salaryRange: "500,000 - 1,800,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Avocat en Droit des Affaires",
        description: "Assistance et représentation des entreprises en matière commerciale et fiscale.",
        salaryRange: "700,000 - 3,000,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Conseiller Juridique",
        description: "Accompagnement des dirigeants et entrepreneurs sur le cadre légal de leurs activités.",
        salaryRange: "500,000 - 2,000,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
    ],
    admissionRequirements: [
      "Licence en droit ou diplôme équivalent",
      "Bon niveau en expression écrite et orale",
      "Intérêt pour le monde des affaires et de l’entreprise",
    ],
    curriculum: [
      "Droit des sociétés",
      "Droit commercial",
      "Droit des contrats",
      "Droit fiscal",
      "Droit du travail",
      "Contentieux des affaires",
    ],
  },
  {
    id: "genie-civil",
    name: "Génie Civil",
    domain: "Ingénierie",
    level: "Licence",
    duration: "3 ans",
    description: "Formation en conception et construction d'infrastructures. Prépare les ingénieurs à bâtir les routes, ponts et bâtiments de demain.",
    objectives: [
      "Maîtriser les techniques de construction",
      "Concevoir des structures résistantes et durables",
      "Gérer des chantiers de construction",
      "Respecter les normes environnementales"
    ],
    skills: [
      "Calcul de structures",
      "Dessin technique et CAO",
      "Gestion de chantier",
      "Étude des matériaux",
      "Topographie"
    ],
    universities: ["inp-hb", "ufhb", "iua", "iipea"],
    careers: [
      {
        title: "Ingénieur BTP",
        description: "Conception et supervision de projets de construction",
        salaryRange: "500,000 - 1,800,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Conducteur de Travaux",
        description: "Coordination des équipes et suivi des chantiers",
        salaryRange: "400,000 - 1,200,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Ingénieur Études",
        description: "Analyse technique et dimensionnement des ouvrages",
        salaryRange: "450,000 - 1,400,000 FCFA/mois",
        demandLevel: "Moyenne"
      },
      {
        title: "Urbaniste",
        description: "Planification et aménagement des espaces urbains",
        salaryRange: "500,000 - 1,500,000 FCFA/mois",
        demandLevel: "Moyenne"
      }
    ],
    admissionRequirements: [
      "Baccalauréat scientifique ou technique",
      "Solides bases en mathématiques et physique",
      "Concours d'entrée à l'INP-HB",
      "Bonne condition physique"
    ],
    curriculum: [
      "Résistance des matériaux",
      "Mécanique des sols",
      "Béton armé et charpente métallique",
      "Hydraulique",
      "Routes et ouvrages d'art",
      "Gestion de projet BTP"
    ]
  },
  {
    id: "comptabilite-et-finance",
    name: "Comptabilité et Finance",
    domain: "Commerce et Gestion",
    level: "Licence",
    duration: "3 ans",
    description:
      "Formation orientée vers la gestion comptable et financière des entreprises. Prépare aux métiers de la comptabilité, de l’audit et du contrôle de gestion.",
    objectives: [
      "Maîtriser les principes de la comptabilité générale et analytique",
      "Comprendre les états financiers d’une entreprise",
      "Acquérir les bases de la fiscalité",
      "Savoir utiliser les outils de gestion financière",
    ],
    skills: [
      "Tenue et révision de comptes",
      "Analyse des états financiers",
      "Élaboration de budgets et de tableaux de bord",
      "Utilisation de logiciels comptables",
      "Notions de droit fiscal et social",
    ],
    universities: ["pigier", "escae", "ufhb", "iipea"],
    careers: [
      {
        title: "Comptable",
        description:
          "Tenue de la comptabilité, préparation des états financiers et déclarations fiscales.",
        salaryRange: "300,000 - 900,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Auditeur Junior",
        description:
          "Contrôle des comptes et procédures financières pour des cabinets ou grandes entreprises.",
        salaryRange: "400,000 - 1,200,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Contrôleur de Gestion",
        description:
          "Suivi des performances, analyse des écarts entre prévisions et réalisations.",
        salaryRange: "450,000 - 1,500,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
    ],
    admissionRequirements: [
      "Baccalauréat (de préférence série G, économie ou scientifique)",
      "Intérêt pour les chiffres et la gestion",
      "Bon sens de l’organisation et de la rigueur",
    ],
    curriculum: [
      "Comptabilité générale",
      "Comptabilité analytique",
      "Fiscalité",
      "Finance d’entreprise",
      "Contrôle de gestion",
      "Droit des affaires",
    ],
  },
  {
    id: "arts-graphiques",
    name: "Arts Graphiques",
    domain: "Arts et Culture",
    level: "BTS",
    duration: "2 ans",
    description:
      "Formation orientée vers la création visuelle, le design graphique et la communication visuelle. Prépare aux métiers créatifs très demandés dans la publicité, le web et les médias.",
    objectives: [
      "Maîtriser les bases du design graphique et de la composition visuelle",
      "Savoir utiliser les principaux logiciels de création (Photoshop, Illustrator, InDesign, etc.)",
      "Concevoir des identités visuelles (logos, chartes graphiques)",
      "Créer des supports de communication print et digitaux",
    ],
    skills: [
      "Graphisme et mise en page",
      "Illustration numérique",
      "Conception d’affiches, flyers, brochures",
      "Création de contenus pour les réseaux sociaux",
      "Notions d’UX/UI design",
    ],
    universities: ["pigier", "escae"],
    careers: [
      {
        title: "Graphiste",
        description: "Conception de supports visuels pour la communication d'une marque ou d'une organisation.",
        salaryRange: "300,000 - 800,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Designer Graphique",
        description: "Création d’identités visuelles complètes (logos, chartes graphiques, univers de marque).",
        salaryRange: "400,000 - 1,200,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Directeur Artistique Junior",
        description: "Pilotage de projets créatifs au sein d’agences de communication ou de studios.",
        salaryRange: "500,000 - 1,500,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
    ],
    admissionRequirements: [
      "Baccalauréat toutes séries (scientifique, littéraire, technique ou artistique)",
      "Forte motivation pour la création visuelle",
      "Portfolio conseillé (dessins, créations personnelles, etc.)",
    ],
    curriculum: [
      "Histoire de l’art et du graphisme",
      "Typographie et mise en page",
      "Illustration numérique",
      "Techniques d’impression et pré‑presse",
      "Graphisme web et réseaux sociaux",
      "Projet de fin d’études",
    ],
  },
  {
    id: "biologie",
    name: "Biologie",
    domain: "Sciences et Technologies",
    level: "Licence",
    duration: "3 ans",
    description:
      "Formation de base en sciences du vivant : cellules, organismes, écosystèmes. Prépare à des spécialisations en biotechnologie, santé, environnement ou recherche.",
    objectives: [
      "Acquérir les notions fondamentales de biologie cellulaire et moléculaire",
      "Comprendre le fonctionnement des organismes vivants",
      "Initier aux techniques de laboratoire en biologie",
      "Sensibiliser aux enjeux de santé et d’environnement",
    ],
    skills: [
      "Observation et expérimentation en laboratoire",
      "Manipulation de matériel biologique",
      "Analyse et interprétation de résultats scientifiques",
      "Rigueur scientifique et démarche expérimentale",
    ],
    universities: ["ufhb", "uao"],
    careers: [
      {
        title: "Technicien de Laboratoire",
        description:
          "Réalisation d’analyses et d’expériences en laboratoire de recherche ou de diagnostic.",
        salaryRange: "300,000 - 800,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Assistant de Recherche",
        description:
          "Participation à des projets de recherche en biologie, santé ou environnement.",
        salaryRange: "350,000 - 1,000,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
      {
        title: "Conseiller en Éducation à la Santé / Environnement",
        description:
          "Sensibilisation du public aux questions de santé, hygiène ou protection de l’environnement.",
        salaryRange: "300,000 - 900,000 FCFA/mois",
        demandLevel: "Moyenne",
      },
    ],
    admissionRequirements: [
      "Baccalauréat scientifique (C, D ou équivalent)",
      "Bon niveau en SVT, chimie et physique",
      "Intérêt pour les sciences du vivant",
    ],
    curriculum: [
      "Biologie cellulaire",
      "Biologie animale et végétale",
      "Génétique",
      "Biochimie",
      "Écologie et environnement",
      "Techniques de laboratoire",
    ],
  },
  {
    id: "marketing-digital",
    name: "Marketing Digital",
    domain: "Commerce et Gestion",
    level: "Licence",
    duration: "3 ans",
    description:
      "Formation centrée sur les stratégies de communication et de vente en ligne. Idéale pour ceux qui veulent travailler dans le e‑commerce, la publicité digitale et les réseaux sociaux.",
    objectives: [
      "Comprendre les fondamentaux du marketing et du marketing digital",
      "Maîtriser les outils de communication sur le web et les réseaux sociaux",
      "Savoir concevoir et piloter des campagnes publicitaires en ligne",
      "Analyser les performances (statistiques, KPI) pour optimiser les actions",
    ],
    skills: [
      "Stratégie de communication digitale",
      "Gestion des réseaux sociaux",
      "Rédaction web et content marketing",
      "Publicité en ligne (Facebook Ads, Google Ads, etc.)",
      "Analyse de données (Google Analytics, métriques social media)",
    ],
    universities: ["pigier", "escae", "uao", "iipea"],
    careers: [
      {
        title: "Community Manager",
        description: "Animation des communautés sur les réseaux sociaux pour une marque ou une organisation.",
        salaryRange: "300,000 - 900,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Chef de Projet Digital",
        description: "Conception et pilotage de campagnes web (sites, réseaux sociaux, emailings, etc.).",
        salaryRange: "400,000 - 1,200,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Spécialiste SEO/SEA",
        description:
          "Optimisation du référencement naturel et payant pour améliorer la visibilité des sites web.",
        salaryRange: "450,000 - 1,300,000 FCFA/mois",
        demandLevel: "Élevée",
      },
    ],
    admissionRequirements: [
      "Baccalauréat toutes séries",
      "Intérêt pour le commerce, le marketing et le numérique",
      "Bonne capacité de communication écrite et orale",
    ],
    curriculum: [
      "Fondamentaux du marketing",
      "Marketing digital et réseaux sociaux",
      "E‑commerce et stratégies de vente en ligne",
      "Rédaction web et storytelling",
      "Publicité en ligne et analytics",
      "Projet digital (campagne réelle ou simulée)",
    ],
  },
    {
    id: "data-science",
    name: "Data Science",
    domain: "Sciences et Technologies",
    level: "Master",
    duration: "5 ans",
    description:
      "Formation avancée sur l’analyse de données, les statistiques et l’intelligence artificielle. Prépare aux métiers de la donnée très recherchés.",
    objectives: [
      "Maîtriser les méthodes statistiques avancées",
      "Savoir collecter, nettoyer et analyser de grandes quantités de données",
      "Utiliser des outils de machine learning pour créer des modèles prédictifs",
      "Communiquer les résultats de manière claire pour aider à la décision",
    ],
    skills: [
      "Programmation (Python, R)",
      "Manipulation de données (Pandas, SQL)",
      "Statistiques et probabilités",
      "Machine learning supervisé et non supervisé",
      "Visualisation de données (Matplotlib, Power BI, etc.)",
    ],
    universities: ["ufhb", "inp-hb"],
    careers: [
      {
        title: "Data Scientist",
        description:
          "Conception de modèles d’analyse et de prédiction pour aider les entreprises à prendre des décisions.",
        salaryRange: "600,000 - 2,000,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Data Analyst",
        description:
          "Analyse de données et création de tableaux de bord pour suivre la performance.",
        salaryRange: "450,000 - 1,300,000 FCFA/mois",
        demandLevel: "Élevée",
      },
      {
        title: "Machine Learning Engineer",
        description:
          "Déploiement et optimisation de modèles d’IA dans des applications réelles.",
        salaryRange: "700,000 - 2,500,000 FCFA/mois",
        demandLevel: "Élevée",
      },
    ],
    admissionRequirements: [
      "Licence en informatique, mathématiques, statistiques ou domaine proche",
      "Solides bases en programmation et mathématiques",
      "Intérêt pour l’analyse de données et l’IA",
    ],
    curriculum: [
      "Statistiques avancées",
      "Programmation pour la data science",
      "Apprentissage automatique (machine learning)",
      "Big Data et bases de données",
      "Visualisation de données",
      "Projet de fin d’études en data science",
    ],
  },
  {
    id: "science-economique",
    name: "Science Economique",
    domain: "Commerce",
    level: "Master",
    duration: "5 ans",
    description: "Formation en management et gestion des organisations. Prépare les futurs managers et entrepreneurs à diriger efficacement les entreprises.",
    objectives: [
      "Comprendre le fonctionnement des organisations",
      "Maîtriser les outils de gestion et de finance",
      "Développer des compétences en leadership",
      "Élaborer des stratégies d'entreprise"
    ],
    skills: [
      "Management d'équipes",
      "Analyse financière",
      "Marketing stratégique",
      "Gestion de projets",
      "Négociation commerciale"
    ],
    universities: ["ufhb", "uao", "iua", "iipea"],
    careers: [
      {
        title: "Manager d'Entreprise",
        description: "Direction et coordination des activités d'une entreprise",
        salaryRange: "600,000 - 2,500,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Consultant en Management",
        description: "Conseil aux entreprises pour améliorer leur performance",
        salaryRange: "500,000 - 2,000,000 FCFA/mois",
        demandLevel: "Moyenne"
      },
      {
        title: "Directeur Commercial",
        description: "Gestion de la stratégie commerciale et des ventes",
        salaryRange: "700,000 - 2,500,000 FCFA/mois",
        demandLevel: "Élevée"
      },
      {
        title: "Entrepreneur",
        description: "Création et développement de sa propre entreprise",
        salaryRange: "Variable",
        demandLevel: "Élevée"
      }
    ],
    admissionRequirements: [
      "Baccalauréat toutes séries",
      "Bonnes capacités d'analyse",
      "Aptitude au travail en équipe",
      "Motivation pour le monde de l'entreprise"
    ],
    curriculum: [
      "Économie d'entreprise",
      "Comptabilité et finance",
      "Marketing",
      "Ressources humaines",
      "Droit des affaires",
      "Stratégie d'entreprise"
    ]
  }
];

export const getUniversityById = (id: string): University | undefined => {
  return universities.find(uni => uni.id === id);
};

export const getProgramById = (id: string): Program | undefined => {
  return programs.find(prog => prog.id === id);
};

export const getUniversitiesByProgram = (programId: string): University[] => {
  const program = getProgramById(programId);
  return universities.filter((uni) => {
    const referencedByProgram = !!program && program.universities.includes(uni.id);
    const referencedByUniversity = uni.programs.includes(programId);
    return referencedByProgram || referencedByUniversity;
  });
};

export const getProgramsByUniversity = (universityId: string): Program[] => {
  const university = getUniversityById(universityId);
  return programs.filter((prog) => {
    const referencedByUniversity = !!university && university.programs.includes(prog.id);
    const referencedByProgram = prog.universities.includes(universityId);
    return referencedByUniversity || referencedByProgram;
  });
};