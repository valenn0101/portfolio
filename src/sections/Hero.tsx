import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Server,
  Database,
  Cloud,
  Sparkles,
  MapPin,
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const eyesRef = useRef<HTMLDivElement>(null);

  // Seguimiento del mouse para los ojos
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calcular posición de las pupilas
  const calculatePupilPosition = () => {
    if (!eyesRef.current) return { x: 0, y: 0 };

    const rect = eyesRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);
    const distance = Math.min(8, Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 30);

    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  const pupilPos = calculatePupilPosition();

  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8">
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
              {/* Badge fijo: Remote Argentina */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-chill text-sm font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Remote · Argentina</span>
              </div>

              {/* Personaje Blob que sigue el mouse */}
              <div className="absolute -bottom-6 -right-6">
                <div className="relative animate-bounce-slow">
                  {/* Cuerpo/Cabeza del blob */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-primary/90 to-accent/90 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-chill-lg flex flex-col items-center justify-center border-2 border-background">
                    {/* Ojos */}
                    <div ref={eyesRef} className="flex gap-3 mb-2 mt-2">
                      {/* Ojo izquierdo */}
                      <div className="relative w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div
                          className="w-3 h-3 bg-gray-900 rounded-full transition-transform duration-100 ease-out"
                          style={{
                            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`
                          }}
                        >
                          {/* Brillo en la pupila */}
                          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                      {/* Ojo derecho */}
                      <div className="relative w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                        <div
                          className="w-3 h-3 bg-gray-900 rounded-full transition-transform duration-100 ease-out"
                          style={{
                            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`
                          }}
                        >
                          {/* Brillo en la pupila */}
                          <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Boca sonriente */}
                    <div className="w-10 h-4 border-b-3 border-white rounded-full opacity-80" />

                    {/* Brazo izquierdo */}
                    <div className="absolute -left-4 top-10 w-6 h-2 bg-primary/80 rounded-full origin-right animate-wave" />

                    {/* Brazo derecho */}
                    <div
                      className="absolute -right-4 top-10 w-6 h-2 bg-primary/80 rounded-full origin-left animate-wave"
                      style={{ animationDelay: '0.3s' }}
                    />
                  </div>

                  {/* Sombra del personaje */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-foreground/10 rounded-full blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
