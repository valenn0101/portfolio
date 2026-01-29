import { useLanguage } from '@/hooks/useLanguage';
import { Badge } from '@/components/ui/badge';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="p-8 md:p-12 rounded-3xl gradient-chill dark:gradient-chill-dark border border-border/50 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <Badge 
            variant="secondary" 
            className="mb-4 px-3 py-1 text-xs font-medium bg-primary/10 text-primary border-0"
          >
            {t('services.badge')}
          </Badge>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            {t('services.title')}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('services.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
