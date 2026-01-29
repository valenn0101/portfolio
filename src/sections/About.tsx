import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  description: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

function ExperienceCard({ exp, isLast }: { exp: Experience; isLast: boolean }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-14 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
      )}
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-3 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center z-10 md:left-1/2 md:-translate-x-1/2 ${
        exp.isCurrent ? 'bg-primary' : 'bg-muted-foreground'
      }`}>
        {exp.isCurrent && <span className="w-2 h-2 rounded-full bg-primary-foreground" />}
      </div>

      {/* Content */}
      <div className={`md:grid md:grid-cols-2 md:gap-8 ${isLast ? '' : 'pb-8'}`}>
        {/* Left side - Date (desktop) */}
        <div className={`hidden md:block md:text-right ${exp.id % 2 === 0 ? 'md:order-2 md:text-left' : ''}`}>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{exp.startDate} — {exp.isCurrent ? t('about.present') : exp.endDate}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{exp.duration}</p>
        </div>

        {/* Right side - Content */}
        <div className={exp.id % 2 === 0 ? 'md:order-1 md:text-right' : ''}>
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            {/* Header - Always visible */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
            </div>

            {/* Meta info */}
            <div className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3 ${exp.id % 2 === 0 ? 'md:justify-end' : ''}`}>
              <Badge variant="secondary" className="text-xs font-normal">
                {exp.type}
              </Badge>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {exp.location}
              </span>
              {/* Mobile date */}
              <span className="md:hidden flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {exp.startDate} — {exp.isCurrent ? t('about.present') : exp.endDate}
              </span>
            </div>

            {/* Expand/Collapse Button */}
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`group px-0 hover:bg-transparent text-muted-foreground hover:text-foreground ${exp.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <span className="text-sm font-medium">
                  {isOpen ? t('about.showLess') : t('about.showMore')}
                </span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${exp.id % 2 === 0 ? 'md:ml-0 md:mr-1' : ''}`} />
              </Button>
            </CollapsibleTrigger>

            {/* Collapsible Content */}
            <CollapsibleContent className="CollapsibleContent">
              <div className="pt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className={`flex items-start gap-2 text-sm text-muted-foreground ${exp.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className={`flex flex-wrap gap-2 pt-2 ${exp.id % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export function About() {
  const { t, language } = useLanguage();

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'We Make Footballers',
      role: 'Software Engineer',
      type: language === 'es' ? 'Tiempo completo' : 'Full-time',
      location: language === 'es' ? 'Barnet, UK · Remoto' : 'Barnet, UK · Remote',
      startDate: 'Jun 2025',
      endDate: '',
      duration: language === 'es' ? '8 meses' : '8 mos',
      description: language === 'es' 
        ? 'Enfocado en la mejora continua y estabilidad del ecosistema de aplicaciones. Trabajo en un ciclo continuo de entrega y mantenimiento, resolviendo incidentes técnicos y desarrollando nuevas funcionalidades.'
        : 'Focused on the continuous improvement and stability of the application ecosystem. I work in an ongoing delivery and maintenance cycle, resolving technical incidents and developing new features.',
      highlights: language === 'es' ? [
        'Diagnóstico y corrección de issues en producción (hotfixes), mejorando estabilidad',
        'Desarrollo de nuevas features con PHP/Laravel y Next.js',
        'Participación activa en code reviews para mantener altos estándares',
        'Propuesta de mejoras arquitectónicas para prevenir deuda técnica',
        'Uso de herramientas de IA para optimizar workflows'
      ] : [
        'Diagnosed and fixed production issues (hotfixes), improving system stability',
        'Delivered new features using PHP/Laravel and Next.js',
        'Actively participated in code reviews to maintain high standards',
        'Proposed architectural improvements to prevent technical debt',
        'Leveraged AI tools to optimize workflows'
      ],
      skills: ['Laravel', 'Next.js', 'WordPress', 'PHP', 'AI Tools'],
      isCurrent: true,
    },
    {
      id: 2,
      company: 'Bigger',
      role: 'Software Developer',
      type: language === 'es' ? 'Tiempo completo' : 'Full-time',
      location: language === 'es' ? 'Australia · Remoto' : 'Australia · Remote',
      startDate: 'Aug 2023',
      endDate: 'Jun 2025',
      duration: language === 'es' ? '1 año 11 meses' : '1 yr 11 mos',
      description: language === 'es'
        ? 'Desarrollador Full-Stack trabajando con JavaScript/TypeScript usando frameworks como NestJS y Next.js, así como PHP con Laravel. Apliqué herramientas como Docker y AWS para construir entornos escalables.'
        : 'As a Full-Stack Developer, I worked with JavaScript/TypeScript using frameworks such as NestJS and Next.js, as well as PHP with Laravel. I applied tools like Docker and AWS to build scalable environments.',
      highlights: language === 'es' ? [
        'Configuración de entornos usando AWS (CodeBuild, CodePipeline, Amplify, EC2)',
        'Contribución a MVPs y plataformas de alto tráfico',
        'Optimización de performance mejorando tiempos de carga',
        'Trabajo bajo metodologías Agile',
        'Implementación de arquitectura hexagonal y principios SOLID'
      ] : [
        'Set up environments using AWS (CodeBuild, CodePipeline, Amplify, EC2)',
        'Contributed to both MVPs and high-traffic platforms',
        'Delivered meaningful improvements in load times',
        'Worked under Agile methodologies',
        'Implemented hexagonal architecture and SOLID principles'
      ],
      skills: ['TypeScript', 'NestJS', 'Next.js', 'AWS', 'Docker', 'Stripe'],
    },
    {
      id: 3,
      company: 'YPF SA',
      role: language === 'es' ? 'Becario' : 'Intern',
      type: language === 'es' ? 'Pasantía' : 'Apprenticeship',
      location: language === 'es' ? 'Argentina · Remoto' : 'Argentina · Remote',
      startDate: 'Mar 2020',
      endDate: 'Jan 2023',
      duration: language === 'es' ? '2 años 11 meses' : '2 yrs 11 mos',
      description: language === 'es'
        ? 'Participé en cursos y charlas de desarrollo profesional. Colaboré en ideathons trabajando en equipo para desarrollar soluciones a desafíos técnicos y sociales.'
        : 'Participated in courses and talks on professional development. Collaborated in ideathons working as a team to develop solutions to technical and social challenges.',
      highlights: language === 'es' ? [
        'Investigación y análisis de problemas para abordar desafíos',
        'Colaboración con profesionales de diversos backgrounds',
        'Generación de ideas innovadoras durante ideathons',
        'Participación activa en charlas fortaleciendo comunicación'
      ] : [
        'Conducted research to approach challenges',
        'Worked with professionals from diverse backgrounds',
        'Generated innovative ideas during ideathons',
        'Actively participated in talks strengthening communication skills'
      ],
      skills: ['Research', 'Teamwork', 'Critical Thinking'],
    },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
          {t('about.title')}
        </h2>
        <p className="text-muted-foreground">{t('about.subtitle')}</p>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
          {t('about.intro')}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={exp.id} 
            exp={exp} 
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
