import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  Sparkles,
} from "lucide-react";

const techStack = [
  { name: "React", icon: Code2, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "PostgreSQL", icon: Database, color: "text-purple-500" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "AI", icon: Sparkles, color: "text-pink-500" },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8">
          {/* Location */}
          <p className="text-sm text-muted-foreground font-medium">
            {t("hero.location")}
          </p>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground font-medium">
              {t("hero.tagline")}
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              {t("hero.name")}
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
            {t("hero.description")}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <tech.icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-sm font-medium text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-chill group"
            >
              <a href="#contact">
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Photo / Visual */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/40 to-primary/20 rounded-full blur-3xl scale-110 animate-pulse-soft" />

            {/* Main image container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-chill-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/profile.png"
                  alt="Valentín Caceres"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces";
                  }}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-2xl shadow-chill border border-border">
                <Layers className="w-6 h-6 text-primary" />
              </div>

              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-chill text-sm font-medium">
                {t("hero.experience")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
