import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Settings, Cloud } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

function SkillCard({ icon, title, description, gradient }: SkillCardProps) {
  return (
    <Card className="group border-border/50 bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-chill cursor-default overflow-hidden">
      <CardContent className="p-6">
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl transition-transform duration-500 group-hover:scale-110 ${gradient}`}
        >
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2 text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: t('skills.frontend.title'),
      description: t('skills.frontend.desc'),
      gradient: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: <Settings className="w-6 h-6 text-green-600 dark:text-green-400" />,
      title: t('skills.backend.title'),
      description: t('skills.backend.desc'),
      gradient: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: t('skills.cloud.title'),
      description: t('skills.cloud.desc'),
      gradient: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 theme-transition">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-foreground">
          {t('skills.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
