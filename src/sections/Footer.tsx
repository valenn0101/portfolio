import { useLanguage } from "@/hooks/useLanguage";
import { Github, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/valenn0101",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/vcvalentin/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Valentín Caceres</span>
        </div>

        {/* Made with */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{t("footer.madeWith")}</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
