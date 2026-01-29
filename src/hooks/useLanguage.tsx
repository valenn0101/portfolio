import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Traducciones
const translations = {
  es: {
    // Navegación
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.blog": "Blog",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",

    // Hero
    "hero.status": "Disponible para trabajar",
    "hero.tagline": "Full-Stack Developer",
    "hero.name": "Valentín Caceres",
    "hero.description":
      "Full-stack enfocado en arquitectura limpia y entregas end-to-end. Construyo productos escalables con React/Next.js, Node/NestJS, PostgreSQL y AWS.",
    "hero.experience": "4+ años exp.",
    "hero.location": "Argentina · Remoto",
    "hero.cta": "Contactar",
    "hero.blog": "Ver Blog",

    // About
    "about.title": "Experiencia",
    "about.subtitle": "Trayectoria profesional",
    "about.intro":
      "Hola, soy Valentín, Full-Stack Developer. Me gusta construir software escalable y mantenible aplicando clean architecture, clean code y diseño modular. He trabajado en MVPs y plataformas en producción, entregando features end-to-end con React/Next.js, Node/NestJS, PostgreSQL y AWS (además de Laravel y Django).",
    "about.experience": "Experiencia",
    "about.present": "Actualidad",
    "about.showMore": "Ver más detalles",
    "about.showLess": "Ver menos",

    // Skills
    "skills.title": "Stack Tecnológico",
    "skills.frontend.title": "Frontend",
    "skills.frontend.desc":
      "Interfaces modernas con React/Next.js y TypeScript. Foco en UX, performance y accesibilidad.",
    "skills.backend.title": "Backend",
    "skills.backend.desc":
      "APIs robustas con Node.js, NestJS y Laravel. Lógica de negocio clara e integraciones.",
    "skills.cloud.title": "DevOps",
    "skills.cloud.desc":
      "Infraestructura cloud con AWS, Docker y CI/CD. Deploys automatizados y observabilidad.",
    "skills.arch.title": "Arquitectura & IA",
    "skills.arch.desc":
      "Diseño de sistemas, SOLID y clean architecture. Automatización con herramientas de IA.",

    // Blog
    "blog.title": "Últimos Posts",
    "blog.subtitle": "Reflexiones sobre desarrollo y producto",
    "blog.all": "Ver todos →",
    "blog.readTime": "min de lectura",

    // Posts
    "post.1.title": "Aprendiendo Cloud: Mi camino desde cero",
    "post.1.desc":
      "Documentando el proceso de aprender arquitectura en la nube mientras trabajo en proyectos reales...",
    "post.2.title": "Pensando como Product Engineer",
    "post.2.desc":
      "La diferencia entre codear y construir productos que la gente realmente usa...",
    "post.3.title": "TypeScript: Más allá de los tipos básicos",
    "post.3.desc":
      "Patrones avanzados y técnicas para escribir código más seguro y mantenible...",
    "post.4.title": "El arte del code review",
    "post.4.desc": "Cómo dar y recibir feedback constructivo en equipo...",

    // Services
    "services.badge": "Próximamente",
    "services.title": "Servicios de Consultoría",
    "services.desc":
      "Estoy preparando un stack de servicios para ayudar a startups y empresas con desarrollo frontend, arquitectura cloud y estrategia de producto digital.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? Hablemos.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar mensaje",
    "contact.social": "O encuentrame en",

    // Footer
    "footer.rights": "Hecho con calma en Argentina",
    "footer.madeWith": "Hecho con",
  },
  en: {
    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.blog": "Blog",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.home": "Home",

    // Hero
    "hero.status": "Open to work",
    "hero.tagline": "Full-Stack Developer",
    "hero.name": "Valentín Caceres",
    "hero.description":
      "Full-stack focused on clean architecture and end-to-end delivery. I build scalable products with React/Next.js, Node/NestJS, PostgreSQL, and AWS.",
    "hero.experience": "4+ yrs exp.",
    "hero.location": "Argentina · Remote",
    "hero.cta": "Contact",
    "hero.blog": "View Blog",

    // About
    "about.title": "Experience",
    "about.subtitle": "Professional journey",
    "about.intro":
      "Hi, I’m Valentín, a Full-Stack Developer. I enjoy building scalable, maintainable software and applying clean architecture, clean code, and modular design. I’ve worked on MVPs and production platforms, delivering end-to-end features with React/Next.js, Node/NestJS, PostgreSQL, and AWS (plus Laravel and Django).",
    "about.experience": "Experience",
    "about.present": "Present",
    "about.showMore": "View details",
    "about.showLess": "Show less",

    // Skills
    "skills.title": "Tech Stack",
    "skills.frontend.title": "Frontend",
    "skills.frontend.desc":
      "Modern interfaces with React/Next.js and TypeScript. Focused on UX, performance, and accessibility.",
    "skills.backend.title": "Backend",
    "skills.backend.desc":
      "Robust APIs with Node.js, NestJS and Laravel. Clear business logic and integrations.",
    "skills.cloud.title": "DevOps",
    "skills.cloud.desc":
      "Cloud infrastructure with AWS, Docker and CI/CD. Automated deployments and observability.",
    "skills.arch.title": "Architecture & AI",
    "skills.arch.desc":
      "System design, SOLID, and clean architecture. Automation with AI tooling.",

    // Blog
    "blog.title": "Latest Posts",
    "blog.subtitle": "Thoughts on development and product",
    "blog.all": "View all →",
    "blog.readTime": "min read",

    // Posts
    "post.1.title": "Learning Cloud: My journey from scratch",
    "post.1.desc":
      "Documenting the process of learning cloud architecture while working on real projects...",
    "post.2.title": "Thinking like a Product Engineer",
    "post.2.desc":
      "The difference between coding and building products that people actually use...",
    "post.3.title": "TypeScript: Beyond basic types",
    "post.3.desc":
      "Advanced patterns and techniques for writing safer and more maintainable code...",
    "post.4.title": "The art of code review",
    "post.4.desc": "How to give and receive constructive feedback in a team...",

    // Services
    "services.badge": "Coming soon",
    "services.title": "Consulting Services",
    "services.desc":
      "Preparing a suite of services to help startups and companies with frontend development, cloud architecture, and digital product strategy.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "contact.social": "Or find me on",

    // Footer
    "footer.rights": "Made with calm in Argentina",
    "footer.madeWith": "Made with",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved && (saved === "es" || saved === "en")) return saved;
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "es" ? "en" : "es"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
