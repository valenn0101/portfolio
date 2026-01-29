import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Language = 'es' | 'en';

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
    'nav.about': 'Sobre mí',
    'nav.blog': 'Blog',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.status': 'Disponible para proyectos',
    'hero.greeting': 'Hola, soy',
    'hero.name': 'Alex Developer',
    'hero.description': 'Software Engineer especializado en construir experiencias digitales robustas. Combino Frontend y Backend con prácticas de Cloud y pensamiento de Producto para crear soluciones que escalan.',
    'hero.cta': 'Hablemos',
    'hero.blog': 'Ver Blog',
    
    // Skills
    'skills.title': 'Stack & Especialidades',
    'skills.frontend.title': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, Tailwind CSS. Interfaces de usuario accesibles y performantes.',
    'skills.backend.title': 'Backend',
    'skills.backend.desc': 'Node.js, Python, APIs REST/GraphQL. Arquitectura limpia y mantenible.',
    'skills.cloud.title': 'Cloud & Product',
    'skills.cloud.desc': 'AWS, Docker, CI/CD. Enfoque en producto: desde la idea hasta el deployment.',
    
    // Blog
    'blog.title': 'Últimos Posts',
    'blog.subtitle': 'Reflexiones sobre desarrollo y producto',
    'blog.all': 'Ver todos →',
    'blog.readTime': 'min de lectura',
    
    // Posts
    'post.1.title': 'Aprendiendo Cloud: Mi camino desde cero',
    'post.1.desc': 'Documentando el proceso de aprender arquitectura en la nube mientras trabajo en proyectos reales...',
    'post.2.title': 'Pensando como Product Engineer',
    'post.2.desc': 'La diferencia entre codear y construir productos que la gente realmente usa...',
    'post.3.title': 'TypeScript: Más allá de los tipos básicos',
    'post.3.desc': 'Patrones avanzados y técnicas para escribir código más seguro y mantenible...',
    'post.4.title': 'El arte del code review',
    'post.4.desc': 'Cómo dar y recibir feedback constructivo en equipo...',
    
    // Services
    'services.badge': 'Próximamente',
    'services.title': 'Servicios de Consultoría',
    'services.desc': 'Estoy preparando un stack de servicios para ayudar a startups y empresas con desarrollo frontend, arquitectura cloud y estrategia de producto digital.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? Hablemos.',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.social': 'O encuentrame en',
    
    // Footer
    'footer.rights': 'Hecho con calma',
    'footer.madeWith': 'Hecho con',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.status': 'Open to work',
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Alex Developer',
    'hero.description': 'Software Engineer specialized in building robust digital experiences. Combining Frontend and Backend with Cloud practices and Product thinking to create scalable solutions.',
    'hero.cta': "Let's talk",
    'hero.blog': 'View Blog',
    
    // Skills
    'skills.title': 'Stack & Skills',
    'skills.frontend.title': 'Frontend',
    'skills.frontend.desc': 'React, Next.js, TypeScript, Tailwind CSS. Accessible and performant user interfaces.',
    'skills.backend.title': 'Backend',
    'skills.backend.desc': 'Node.js, Python, REST/GraphQL APIs. Clean and maintainable architecture.',
    'skills.cloud.title': 'Cloud & Product',
    'skills.cloud.desc': 'AWS, Docker, CI/CD. Product-focused: from idea to deployment.',
    
    // Blog
    'blog.title': 'Latest Posts',
    'blog.subtitle': 'Thoughts on development and product',
    'blog.all': 'View all →',
    'blog.readTime': 'min read',
    
    // Posts
    'post.1.title': 'Learning Cloud: My journey from scratch',
    'post.1.desc': 'Documenting the process of learning cloud architecture while working on real projects...',
    'post.2.title': 'Thinking like a Product Engineer',
    'post.2.desc': 'The difference between coding and building products that people actually use...',
    'post.3.title': 'TypeScript: Beyond basic types',
    'post.3.desc': 'Advanced patterns and techniques for writing safer and more maintainable code...',
    'post.4.title': 'The art of code review',
    'post.4.desc': 'How to give and receive constructive feedback in a team...',
    
    // Services
    'services.badge': 'Coming soon',
    'services.title': 'Consulting Services',
    'services.desc': 'Preparing a suite of services to help startups and companies with frontend development, cloud architecture, and digital product strategy.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.social': 'Or find me on',
    
    // Footer
    'footer.rights': 'Made with calm',
    'footer.madeWith': 'Made with',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'es' || saved === 'en')) return saved;
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
