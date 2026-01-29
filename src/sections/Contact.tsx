import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left side - Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">{t('contact.social')}</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-3 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t('contact.form.name')}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t('contact.form.email')}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t('contact.form.message')}
            </Label>
            <Textarea
              id="message"
              placeholder="Tu mensaje..."
              rows={4}
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-chill"
          >
            {t('contact.form.send')}
          </Button>
        </form>
      </div>
    </section>
  );
}
