import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';
import { Sun, Moon } from 'lucide-react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#blog', label: t('nav.blog') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 glass-nav border-b border-border/50 theme-transition">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="font-mono text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">~/</span>
          dev
          <span className="text-primary">.name</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-secondary"
            aria-label="Toggle language"
          >
            <span 
              className={language === 'es' ? 'font-bold text-foreground' : 'text-muted-foreground'}
            >
              ES
            </span>
            <span className="text-muted-foreground">·</span>
            <span 
              className={language === 'en' ? 'font-bold text-foreground' : 'text-muted-foreground'}
            >
              EN
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
