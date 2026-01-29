import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { t } = useLanguage();

  const skills = [
    'React/Next.js',
    'Node.js',
    'AWS/Cloud',
    'Product',
  ];

  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 text-sm font-mono text-primary mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span>{t('hero.status')}</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            <span className="block text-muted-foreground">{t('hero.greeting')}</span>
            <span className="block text-primary mt-2">{t('hero.name')}</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {t('hero.description')}
          </p>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge 
                key={skill}
                variant="secondary"
                className="px-3 py-1.5 text-xs font-mono rounded-full bg-secondary hover:bg-secondary/80 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              className="rounded-full px-6 py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 transform hover:scale-[1.02] hover:shadow-chill"
            >
              <a href="#contact">{t('hero.cta')}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-6 py-3 h-auto border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <a href="#blog">{t('hero.blog')}</a>
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Decorative blob background */}
            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
            
            {/* Photo container with blob shape */}
            <div className="relative w-full h-full overflow-hidden blob-shape border-4 border-background shadow-chill-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback si la imagen no existe
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces';
                }}
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-background px-4 py-2 rounded-2xl shadow-chill border border-border animate-bounce">
              <span className="text-2xl">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
