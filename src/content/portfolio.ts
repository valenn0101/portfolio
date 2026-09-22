import type { Language } from "@/lib/preferences";

const spanish = {
  "nav": {
    "label": "Navegación personal",
    "about": "sobre mí",
    "experience": "recorrido",
    "language": "Idioma de la página",
    "light": "claro",
    "dark": "oscuro",
    "switchToLight": "Cambiar a tema claro",
    "switchToDark": "Cambiar a tema oscuro"
  },
  "hero": {
    "filename": "01 / persona.md",
    "kicker": "un poco sobre mí",
    "role": "Software Engineer.",
    "intro": "Me gusta entender el problema, construir una solución y seguir cómo funciona en producción. Mi trabajo combina",
    "conjunction": "y",
    "noteNames": {
      "endtoend": "ownership de producto",
      "architecture": "arquitectura limpia",
      "ai": "agentes de IA"
    },
    "hint": "Las frases subrayadas tienen notas al margen.",
    "meta": "Full-stack / ingeniería de producto",
    "interests": "[ intereses ] producto · sistemas · IA"
  },
  "notes": {
    "now": {
      "label": "// ahora",
      "title": "We Make Footballers",
      "text": "Ssr Software Engineer desde mayo de 2026. Desarrollo y evolución del área de padres, la plataforma de administración y los sitios de franquicias, con foco en producto, confiabilidad y automatización.",
      "meta": "Laravel · Next.js · IA"
    },
    "architecture": {
      "label": "[2] / arquitectura limpia",
      "title": "Sistemas que se dejan entender.",
      "text": "Responsabilidades separadas, límites claros y código que se pueda cambiar sin perder de vista el resto del sistema. Arquitectura hexagonal, SOLID y APIs como herramientas para mantener esa claridad.",
      "meta": "Diseño modular · APIs · Mantenimiento"
    },
    "endtoend": {
      "label": "[1] / ownership de producto",
      "title": "El trabajo sigue después del deploy.",
      "text": "Una funcionalidad empieza con una necesidad y sigue evolucionando en producción. El recorrido incluye planificación, desarrollo y seguimiento con analítica para entender su uso y orientar las próximas mejoras.",
      "meta": "Del problema inicial al uso real"
    },
    "ai": {
      "label": "[3] / agentes de IA",
      "title": "IA dentro del trabajo cotidiano.",
      "text": "Flujos multiagente para automatizar soporte y procesos internos, junto con un agente de ingeniería que ayuda en desarrollo, pruebas y análisis de código. Automatización aplicada a tareas concretas del equipo.",
      "meta": "Automatización · Desarrollo · Pruebas"
    }
  },
  "experience": {
    "title": "Mi recorrido",
    "filename": "02 / changelog",
    "more": "Ver detalles",
    "less": "Ver menos",
    "entries": [
      {
        "id": "wmf",
        "company": "We Make Footballers",
        "period": "Jun 2025 → hoy",
        "role": "Software Engineer → Ssr Software Engineer · may 2026",
        "summary": "Desarrollo y evolución del ecosistema de aplicaciones para padres, administradores y franquicias, combinando nuevas funcionalidades con el mantenimiento de plataformas en producción.",
        "contributions": [
          {
            "title": "Producto y funcionalidades.",
            "text": "Entrega de flujos de onboarding, herramientas de administración y un sistema de consentimiento y términos, desde la planificación y el diseño hasta el despliegue."
          },
          {
            "title": "Analítica.",
            "text": "Implementación de infraestructura de analítica de producto y uso de datos del flujo de reservas para orientar mejoras de conversión."
          },
          {
            "title": "Confiabilidad.",
            "text": "Diagnóstico y resolución de incidentes en reservas, checkout y pagos; revisiones de código y refactorizaciones para mejorar el mantenimiento y prevenir problemas recurrentes."
          },
          {
            "title": "Backend.",
            "text": "Desarrollo de funcionalidades y permisos en la API principal, junto con la evolución de las interfaces."
          },
          {
            "title": "Accesibilidad.",
            "text": "Auditorías y corrección de barreras de uso, además de funcionalidades de consentimiento y tratamiento de datos."
          },
          {
            "title": "Automatización.",
            "text": "Desarrollo de un agente interno de ingeniería para apoyar al equipo en programación, pruebas y soporte."
          }
        ],
        "stack": "Laravel · Next.js · PHP · WordPress · IA"
      },
      {
        "id": "lumation",
        "company": "Lumation Services LLC",
        "period": "Oct 2024 → Jul 2026",
        "role": "Backend Developer",
        "summary": "Responsabilidad integral sobre el desarrollo del backend de una plataforma para lavaderos de autos, con membresías, pagos individuales y herramientas para campañas y promociones.",
        "contributions": [
          {
            "title": "Servicios y API.",
            "text": "Desarrollo y mantenimiento del backend con NestJS, desde la organización de módulos y endpoints hasta la lógica de negocio de las funcionalidades."
          },
          {
            "title": "Membresías y pagos.",
            "text": "Implementación de funcionalidades de membresía y pagos individuales para los servicios del lavadero."
          },
          {
            "title": "Campañas y promociones.",
            "text": "Desarrollo de las reglas y funcionalidades del backend para acompañar las acciones comerciales del producto."
          }
        ],
        "stack": "NestJS · Membresías · Pagos · Campañas · Promociones"
      },
      {
        "id": "bigger",
        "company": "Bigger",
        "period": "Ago 2023 → Jun 2025",
        "role": "Software Developer",
        "summary": "Desarrollo full-stack en equipos de Australia, tanto para MVPs como para plataformas consolidadas con alto tráfico.",
        "contributions": [
          {
            "title": "Aplicaciones y APIs.",
            "text": "Desarrollo con Next.js, NestJS y Laravel, diseño y consumo de APIs REST y trabajo con bases de datos MySQL."
          },
          {
            "title": "Pagos.",
            "text": "Integraciones con Stripe, PayPal y GoCardless para incorporar soluciones de cobro a las plataformas."
          },
          {
            "title": "Infraestructura.",
            "text": "Configuración de entornos de desarrollo y producción con Docker y AWS, incluyendo CodeBuild, CodePipeline, Amplify y EC2."
          },
          {
            "title": "Calidad y rendimiento.",
            "text": "Pruebas end-to-end, mejoras en tiempos de carga y aplicación de arquitectura hexagonal y principios SOLID."
          }
        ],
        "stack": "TypeScript · Next.js · NestJS · Laravel · MySQL · AWS · Docker"
      },
      {
        "id": "ypf",
        "company": "YPF",
        "period": "Mar 2020 → Ene 2023",
        "role": "Becario",
        "summary": "Participación en un programa de formación y desarrollo profesional, con estudiantes y profesionales de distintas disciplinas.",
        "contributions": [
          {
            "title": "Investigación e ideathons.",
            "text": "Análisis de problemas y desarrollo de propuestas en equipo para desafíos técnicos, ambientales y sociales."
          },
          {
            "title": "Formación y colaboración.",
            "text": "Cursos, charlas y actividades orientadas a la comunicación, el pensamiento crítico y el trabajo interdisciplinario."
          }
        ],
        "stack": null
      }
    ]
  },
  "education": {
    "title": "Lo que sigo aprendiendo",
    "filename": "03 / formación",
    "degree": "Ingeniería en Sistemas · Universidad de la Marina Mercante",
    "period": "2023–2028 · Estudios en curso"
  },
  "footer": "/* siempre en construcción */",
  "a11y": {
    "skip": "Saltar al contenido",
    "readNote": "Leer nota sobre",
    "marginNote": "Nota al margen",
    "back": "← volver a ahora",
    "home": "Inicio"
  },
  "description": "Software Engineer. Desarrollo full-stack, ownership de producto, arquitectura limpia y agentes de IA."
};

export type PortfolioContent = typeof spanish;
export type NoteId = keyof PortfolioContent["notes"];

export const portfolio: Record<Language, PortfolioContent> = {
  es: spanish,
  en: {
  "nav": {
    "label": "Personal navigation",
    "about": "about",
    "experience": "experience",
    "language": "Page language",
    "light": "light",
    "dark": "dark",
    "switchToLight": "Switch to light theme",
    "switchToDark": "Switch to dark theme"
  },
  "hero": {
    "filename": "01 / about.md",
    "kicker": "a little about me",
    "role": "Software Engineer.",
    "intro": "I like understanding the problem, building a solution and seeing how it works in production. My work brings together",
    "conjunction": "and",
    "noteNames": {
      "endtoend": "product ownership",
      "architecture": "clean architecture",
      "ai": "AI agents"
    },
    "hint": "The underlined phrases open margin notes.",
    "meta": "Full-stack / product engineering",
    "interests": "[ interests ] product · systems · AI"
  },
  "notes": {
    "now": {
      "label": "// now",
      "title": "We Make Footballers",
      "text": "Semi Senior Software Engineer since May 2026. Development of the Parent Area, Admin platform and franchise websites, with a focus on product, reliability and automation.",
      "meta": "Laravel · Next.js · AI"
    },
    "architecture": {
      "label": "[2] / clean architecture",
      "title": "Systems that are easy to follow.",
      "text": "Clear responsibilities, explicit boundaries and code that can change without losing sight of the wider system. Hexagonal architecture, SOLID principles and APIs provide tools to maintain that clarity.",
      "meta": "Modular design · APIs · Maintainability"
    },
    "endtoend": {
      "label": "[1] / product ownership",
      "title": "The work continues after deployment.",
      "text": "A feature starts with a need and continues to evolve in production. Planning, development and product analytics help understand how it is used and inform the next improvements.",
      "meta": "From the initial problem to real-world use"
    },
    "ai": {
      "label": "[3] / AI agents",
      "title": "AI in everyday engineering.",
      "text": "Multi-agent workflows for support and internal processes, alongside an engineering agent that helps with development, testing and code analysis. Automation applied to practical team tasks.",
      "meta": "Automation · Development · Testing"
    }
  },
  "experience": {
    "title": "My experience",
    "filename": "02 / changelog",
    "more": "View details",
    "less": "Show less",
    "entries": [
      {
        "id": "wmf",
        "company": "We Make Footballers",
        "period": "Jun 2025 → present",
        "role": "Software Engineer → Semi Senior Software Engineer · May 2026",
        "summary": "Development of the application ecosystem for parents, administrators and franchises, combining new features with the maintenance of production platforms.",
        "contributions": [
          {
            "title": "Product and features.",
            "text": "Delivery of onboarding flows, admin tools and a consent and terms system, from planning and design through deployment."
          },
          {
            "title": "Analytics.",
            "text": "Implementation of product analytics infrastructure and use of booking funnel data to guide conversion improvements."
          },
          {
            "title": "Reliability.",
            "text": "Diagnosis and resolution of booking, checkout and payment incidents; code reviews and refactoring to improve maintainability and prevent recurring issues."
          },
          {
            "title": "Backend.",
            "text": "Feature and permissions development in the core API, alongside ongoing interface development."
          },
          {
            "title": "Accessibility.",
            "text": "Audits and remediation of accessibility barriers, plus consent and data-handling features."
          },
          {
            "title": "Automation.",
            "text": "Development of an internal engineering agent to support the team with coding, testing and support."
          }
        ],
        "stack": "Laravel · Next.js · PHP · WordPress · AI"
      },
      {
        "id": "lumation",
        "company": "Lumation Services LLC",
        "period": "Oct 2024 → Jul 2026",
        "role": "Backend Developer",
        "summary": "Full responsibility for backend development of a car wash platform, covering memberships, one-off payments, campaigns and promotions.",
        "contributions": [
          {
            "title": "Services and APIs.",
            "text": "Backend development and maintenance with NestJS, from module and endpoint structure to feature business logic."
          },
          {
            "title": "Memberships and payments.",
            "text": "Implementation of membership features and one-off payments for car wash services."
          },
          {
            "title": "Campaigns and promotions.",
            "text": "Development of backend rules and features supporting the product’s marketing campaigns and promotions."
          }
        ],
        "stack": "NestJS · Memberships · Payments · Campaigns · Promotions"
      },
      {
        "id": "bigger",
        "company": "Bigger",
        "period": "Aug 2023 → Jun 2025",
        "role": "Software Developer",
        "summary": "Full-stack development with teams in Australia, working on both MVPs and established high-traffic platforms.",
        "contributions": [
          {
            "title": "Applications and APIs.",
            "text": "Development with Next.js, NestJS and Laravel, REST API design and integration, and work with MySQL databases."
          },
          {
            "title": "Payments.",
            "text": "Integrations with Stripe, PayPal and GoCardless to add payment capabilities to the platforms."
          },
          {
            "title": "Infrastructure.",
            "text": "Development and production environments using Docker and AWS, including CodeBuild, CodePipeline, Amplify and EC2."
          },
          {
            "title": "Quality and performance.",
            "text": "End-to-end testing, load time improvements, and application of hexagonal architecture and SOLID principles."
          }
        ],
        "stack": "TypeScript · Next.js · NestJS · Laravel · MySQL · AWS · Docker"
      },
      {
        "id": "ypf",
        "company": "YPF",
        "period": "Mar 2020 → Jan 2023",
        "role": "Intern",
        "summary": "Participation in a professional development program alongside students and professionals from different disciplines.",
        "contributions": [
          {
            "title": "Research and ideathons.",
            "text": "Problem analysis and collaborative proposals addressing technical, environmental and social challenges."
          },
          {
            "title": "Learning and collaboration.",
            "text": "Courses, talks and activities focused on communication, critical thinking and interdisciplinary teamwork."
          }
        ],
        "stack": null
      }
    ]
  },
  "education": {
    "title": "Still learning",
    "filename": "03 / education",
    "degree": "Systems Engineering · Universidad de la Marina Mercante",
    "period": "2023–2028 · In progress"
  },
  "footer": "/* always a work in progress */",
  "a11y": {
    "skip": "Skip to content",
    "readNote": "Read the note on",
    "marginNote": "Margin note",
    "back": "← back to now",
    "home": "Home"
  },
  "description": "Software Engineer. Full-stack development, product ownership, clean architecture and AI agents."
}
};
