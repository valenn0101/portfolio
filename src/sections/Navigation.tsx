import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

export function Navigation() {
  const { language, setLanguage, content } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#main">{content.a11y.skip}</a>
      <nav className="notebook-nav" aria-label={content.nav.label}>
        <a className="brand" href="#about" aria-label={content.a11y.home}>
          <span className="monogram" aria-hidden="true">vc_</span><span>~/valentin</span>
        </a>
        <div className="nav-actions">
          <a href="#about">{content.nav.about}</a><a href="#experience">{content.nav.experience}</a>
          <div className="language-picker" role="group" aria-label={content.nav.language}>
            <button type="button" lang="es" aria-label="Ver en español" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>ES</button>
            <button type="button" lang="en" aria-label="View in English" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? content.nav.switchToLight : content.nav.switchToDark}>
            {theme === "dark" ? <Sun size={15} aria-hidden="true" /> : <Moon size={15} aria-hidden="true" />}<span>{content.nav[theme]}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
