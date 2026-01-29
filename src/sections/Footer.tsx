import { useLanguage } from '@/hooks/useLanguage';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-sm text-muted-foreground flex items-center gap-1">
          <span>© {new Date().getFullYear()} Alex Developer.</span>
          <span className="hidden sm:inline">{t('footer.rights')}</span>
        </div>

        {/* Made with */}
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{t('footer.madeWith')}</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
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
