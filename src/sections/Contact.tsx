import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics/react";

export function Contact() {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "missing"
  >("idle");
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as
    | string
    | undefined;
  const subject =
    language === "es"
      ? "Nuevo contacto desde el portfolio"
      : "New contact from the portfolio";

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
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left side - Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              {t("contact.social")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => track("social_link_clicked", { platform: link.label })}
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
        <form
          className="space-y-5"
          action={formspreeEndpoint}
          method="POST"
          onSubmit={async (event) => {
            event.preventDefault();
            if (!formspreeEndpoint) {
              setStatus("missing");
              return;
            }

            const form = event.currentTarget;
            const data = new FormData(form);

            if (data.get("_gotcha")) {
              setStatus("success");
              form.reset();
              return;
            }

            try {
              setStatus("sending");
              const response = await fetch(formspreeEndpoint, {
                method: "POST",
                body: data,
                headers: {
                  Accept: "application/json",
                },
              });

              if (response.ok) {
                setStatus("success");
                track("contact_form_submitted");
                form.reset();
              } else {
                setStatus("error");
              }
            } catch {
              setStatus("error");
            }
          }}
        >
          <input type="hidden" name="_subject" value={subject} />
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t("contact.form.name")}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t("contact.form.email")}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              autoComplete="email"
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              {t("contact.form.message")}
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tu mensaje..."
              rows={4}
              className="rounded-xl border-border/50 bg-card focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-chill"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                {t("contact.form.sending")}
              </>
            ) : (
              t("contact.form.send")
            )}
          </Button>

          {status !== "idle" && (
            <p
              className={`text-sm ${
                status === "success"
                  ? "text-primary"
                  : status === "missing" || status === "error"
                    ? "text-destructive"
                    : "text-muted-foreground"
              }`}
              aria-live="polite"
            >
              {status === "success" && t("contact.form.success")}
              {status === "error" && t("contact.form.error")}
              {status === "missing" && t("contact.form.missing")}
              {status === "sending" && t("contact.form.sending")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
