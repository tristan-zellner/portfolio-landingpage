export interface UI {
  locale: string;
  masthead: {
    editionLabel: string;
    authorPrefix: string;
    editionPrefix: string;
    countryCode: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    personal: string;
    contact: string;
  };
  sections: {
    about: {
      title: string;
      metaLabel: string;
      metaUnit: string;
    };
    experience: {
      title: string;
      stationsUnit: string;
      sinceLabel: string;
    };
    projects: {
      title: string;
      metaUnit: string;
    };
    skills: {
      title: string;
      meta: string;
    };
    personal: {
      title: string;
      meta: string;
    };
    contact: {
      title: string;
      meta: string;
      fieldLocation: string;
      fieldEmail: string;
      fieldLinkedIn: string;
      fieldGitHub: string;
      fieldXing: string;
    };
  };
  footer: {
    label: string;
    sign: string;
  };
}

export interface Project {
  period: string;
  title: string;
  bullets: string[];
}

export interface Principle {
  label: string;
  text: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Hobby {
  label: string;
  note: string;
}

export interface Portfolio {
  ui: UI;
  name: string;
  roles: string[];
  location: string;
  tagline: string;
  yearsExperience: string;
  manageRecord: string;
  experienceSince: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    chips: string[];
    lead: string;
    portraitYear: string;
  };
  about: {
    principles: Principle[];
    paragraph: string;
  };
  projects: Project[];
  experience: Experience[];
  education: {
    school: string;
    degree: string;
    period: string;
  };
  skills: SkillGroup[];
  hobbies: Hobby[];
  contact: {
    location: string;
    headline: string;
    email: string;
    emailUrl: string;
    linkedin: string;
    linkedinUrl: string;
    github: string;
    githubUrl: string;
    xing: string;
    xingUrl: string;
  };
}

export const PORTFOLIO: Portfolio = {
  ui: {
    locale: "de-DE",
    masthead: {
      editionLabel: "Dossier",
      authorPrefix: "Von",
      editionPrefix: "Edition",
      countryCode: "DE",
    },
    nav: {
      about: "Über",
      experience: "Werdegang",
      projects: "Projekte",
      skills: "Fähigkeiten",
      personal: "Persönlich",
      contact: "Kontakt",
    },
    sections: {
      about: {
        title: "Was mir wichtig ist",
        metaLabel: "Prinzipien",
        metaUnit: "Punkte",
      },
      experience: {
        title: "Werdegang",
        stationsUnit: "Stationen",
        sinceLabel: "seit",
      },
      projects: {
        title: "Auswahl an erfolgreichen Projekten",
        metaUnit: "Projekte",
      },
      skills: {
        title: "Fähigkeiten",
        meta: "Stack & Methoden",
      },
      personal: {
        title: "Persönlich",
        meta: "Außerhalb der Arbeit",
      },
      contact: {
        title: "Kontakt",
        meta: "Sprechen wir",
        fieldLocation: "Standort",
        fieldEmail: "E-Mail",
        fieldLinkedIn: "LinkedIn",
        fieldGitHub: "GitHub",
        fieldXing: "Xing",
      },
    },
    footer: {
      label: "Portfolio",
      sign: "Fin.",
    },
  },

  name: "Tristan Zellner",
  roles: ["Software Engineer", "Gründer", "Geschäftsführer"],
  location: "Münster, Nordrhein-Westfalen",
  tagline:
    "Software Engineer mit über zehn Jahren Erfahrung in Full-Stack-Entwicklung, technischer Führung und dem Aufbau von Teams.",
  yearsExperience: "10+",
  manageRecord: "15",
  experienceSince: "2007",

  meta: {
    title: "Tristan Zellner — Portfolio",
    description:
      "Software Engineer, Gründer und Geschäftsführer aus Münster mit über 10 Jahren Erfahrung in Full-Stack-Entwicklung und technischer Führung.",
  },

  hero: {
    chips: ["Engineering Leadership", "Ruby on Rails"],
    lead: "Klarheit, Einfachheit und Zielstrebigkeit. Als Software Engineer, CTO und heute als Gründer baue ich Produkte, Teams und Strukturen, die halten.",
    portraitYear: "2025",
  },

  about: {
    principles: [
      {
        label: "Klarheit",
        text: "Eindeutige Strukturen, klare Sprache, nachvollziehbare Entscheidungen.",
      },
      {
        label: "Einfachheit",
        text: "Komplexität reduzieren, das Wesentliche herausarbeiten, fokussiert umsetzen.",
      },
      {
        label: "Zielstrebigkeit",
        text: "Konsequent auf das Ergebnis hinarbeiten. Pragmatisch, nicht dogmatisch.",
      },
      {
        label: "Miteinander",
        text: "Freundlicher Umgang auch in schwierigen Situationen, ohne kritische Worte zu scheuen.",
      },
    ],
    paragraph:
      "Klarheit, Einfachheit und zielstrebiges Arbeiten sind für mich grundlegende Prinzipien. Dabei ist mir ein freundliches Miteinander wichtig – auch in schwierigen Projektsituationen, ohne dabei das klare, offene und manchmal auch kritische Wort zu verlieren, wenn notwendig.",
  },

  projects: [
    {
      period: "ab 2024",
      title: "Gründung und Entwicklung travelbuddy",
      bullets: [
        "Vollständige Konzeption und Neuentwicklung einer Software zur Verwaltung von Gruppenreisen für KMU",
        "Erarbeitung von Prozesses und Design",
        "KI-unterstützte Entwicklung mit Claude Code und Cursor",
        "Deployment und Betrieb auf selbst verwalteten Virtual Private Server",
        "Abdeckung des kompletten Software Development Lifecycles",
      ],
    },
    {
      period: "ab 2022",
      title: "Leitung Multi-Tenant SaaS im Banking",
      bullets: [
        "Leitung eines bis zu 15-köpfigen Entwicklerteams einer Multi-Tenant Software-as-a-Service-Anwendung",
        "Planung der Roadmap und personellen Kapazitäten",
        "Refactoring von Legacy Code und Modularisierung einzelner Codebestandteile zur Verbesserung der Multi-Tenant-Fähigkeiten",
        "Teilnahme an Akquise- und Salesterminen als technischer Ansprechpartner",
        "Anforderungs- und Realisierungsmanagement mit Kunden",
      ],
    },
    {
      period: "2021",
      title: "Leitung und Entwicklung eines Architektur-Refactorings",
      bullets: [
        "Refactoring einer Fullstack Ruby on Rails Anwendung in eine SPA-API-Architektur (Rails Backend + React Frontend + React Native Mobile)",
        "Komplette Planung und Steuerung des Refactoring-Projekts inklusive aktiver Backend-Entwicklung",
      ],
    },
  ],

  experience: [
    {
      company: "travelbuddy",
      role: "Gründer & Geschäftsführer",
      period: "Nov 2024 – heute",
      duration: "1 Jahr 7 Monate",
      location: "Münster · Hybrid",
      type: "Vollzeit",
      summary:
        "All-in-One-Plattform für professionelle Gruppenreisenanbieter – Unterkünfte, Buchungen, Teilnehmer und Rechnungen an einem Ort.",
      bullets: [
        "Fullstack Ruby on Rails Anwendung zur Verwaltung von Gruppenreisen",
        "Selbstständige Durchführung von Konzeption, Design, Prozessen und Umsetzung",
        "KI-gestützte Entwicklung mit Claude Code und Cursor",
        "Deployment mit Kamal auf eigenen Hetzner VPS",
        "Backup-Strategie mit restic",
      ],
      tags: ["Ruby on Rails", "Kamal", "Hetzner", "Claude Code", "Cursor"],
    },
    {
      company: "finstreet",
      role: "CTO / Head of Software Development",
      period: "Juli 2022 – Aug 2024",
      duration: "2 Jahre 2 Monate",
      location: "Münster",
      type: "Vollzeit",
      summary:
        "Leitung der gesamten Softwareentwicklung als technischer und strategischer Sparringspartner der Geschäftsführung.",
      bullets: [
        "Strategische Ausrichtung von Technologien, Personal und Prozessen",
        "Aufbau eines internen Entwicklungsteams – Hiring, Onboarding, interne Strukturen",
        "Steuerung externer Dienstleister inkl. Qualitätsmanagement und Krisenintervention",
        "Personalverantwortung für bis zu 15 Personen – 1:1, Entwicklung, Gehälter",
        "Akquise und Sales-Termine als technischer Ansprechpartner",
      ],
      tags: ["Leadership", "Hiring", "Strategie", "Sales", "Operations"],
    },
    {
      company: "finstreet",
      role: "Software Engineer",
      period: "Juni 2018 – Juli 2022",
      duration: "4 Jahre 2 Monate",
      location: "Münster",
      type: "Vollzeit",
      summary:
        "Full-Stack-Entwicklung sowie technischer Product Owner für mehrere Bank- und Finanzprodukte.",
      bullets: [
        "Entwicklung digitaler Antragsstrecken für Bankprodukte",
        "Technischer Product Owner – Schnittstelle zwischen Fachlichkeit und Entwicklung",
        "REST-API-Entwicklung für ein Finanzanalyseprodukt mit Ruby on Rails",
        "Refactoring einer Fullstack-Rails-Anwendung in eine SPA/API-Architektur (Rails + React + React Native)",
        "Leitung eines bis zu 15-köpfigen Teams einer Multi-Tenant-SaaS-Anwendung",
        "Modularisierung und Refactoring von Legacy Code",
      ],
      tags: ["Ruby on Rails", "React", "React Native", "REST API", "Product Owner"],
    },
    {
      company: "Fiducia & GAD IT AG",
      role: "Werkstudent · Java-Entwicklung",
      period: "Feb 2016 – Apr 2018",
      duration: "2 Jahre 3 Monate",
      location: "Münster",
      type: "Werkstudent",
      summary: "Java-Entwicklung im IT-Dienstleister der genossenschaftlichen Finanzgruppe.",
      bullets: [],
      tags: ["Java"],
    },
    {
      company: "Deutsche Telekom",
      role: "Auszubildender · IT-Systemkaufmann",
      period: "Sept 2007 – Feb 2010",
      duration: "2 Jahre 6 Monate",
      location: "Münster",
      type: "Ausbildung",
      summary: "Ausbildung zum IT-Systemkaufmann.",
      bullets: [],
      tags: [],
    },
    {
      company: "FH Münster",
      role: "Bachelor of Science · Informatik",
      period: "2014 – 2018",
      duration: "4 Jahre",
      location: "Münster",
      type: "Studium",
      summary: "",
      bullets: [],
      tags: [],
    },
  ],

  education: {
    school: "FH Münster",
    degree: "Bachelor of Science · Informatik",
    period: "2014 – 2018",
  },

  skills: [
    {
      group: "Leadership",
      items: [
        "Team-Aufbau",
        "Hiring & Onboarding",
        "1:1 & Feedback",
        "Stakeholder-Management",
      ],
    },
    {
      group: "Produkt & Prozess",
      items: [
        "Technischer Product Owner",
        "Roadmap-Planung",
        "Anforderungsmanagement",
        "Akquise & Sales",
        "Krisenintervention",
      ],
    },
    {
      group: "Backend",
      items: ["Ruby on Rails", "REST APIs", "PostgreSQL", "Multi-Tenant SaaS"],
    },
    {
      group: "Frontend",
      items: ["HTML / CSS", "JavaScript", "Hotwire (Turbo/Stimulus)"],
    },
    {
      group: "KI-gestützte Entwicklung",
      items: ["Claude Code", "Cursor"],
    },
    {
      group: "DevOps & Tools",
      items: ["Docker", "Linux", "Kamal", "restic", "CI / CD"],
    }
  ],

  hobbies: [
    { label: "Sport", note: "Ausgleich, Disziplin, Routine" },
    { label: "Fußball", note: "Mannschaftssport, Strategie, Spaß" },
    { label: "Familie", note: "Wurzel und Ankerpunkt" },
  ],

  contact: {
    location: "Münster, Deutschland",
    headline:
      "Auf der Suche nach einem Engineering Lead, CTO oder Head of Engineering?",
    email: "tristan.zellner@posteo.de",
    emailUrl: "mailto:tristan.zellner@posteo.de",
    linkedin: "linkedin.com/in/tristan-zellner-378469187",
    linkedinUrl: "https://www.linkedin.com/in/tristan-zellner-378469187/",
    github: "github.com/tristan-zellner",
    githubUrl: "https://github.com/tristan-zellner",
    xing: "xing.com/profile/Tristan_Zellner",
    xingUrl: "https://www.xing.com/profile/Tristan_Zellner/",
  },
};
