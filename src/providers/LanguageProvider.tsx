import { useEffect, useState, type ReactNode } from "react";
import { track } from "@vercel/analytics/react";
import { portfolio } from "@/content/portfolio";
import { LanguageContext } from "@/hooks/useLanguage";
import { getBrowserLanguage, isLanguage, LANGUAGE_KEY, readPreference, writePreference, type Language } from "@/lib/preferences";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Language | null>(() => {
    const stored = readPreference(LANGUAGE_KEY);
    return isLanguage(stored) ? stored : null;
  });
  const [browserLanguage, setBrowserLanguage] = useState(getBrowserLanguage);
  const language = preference ?? browserLanguage;
  const content = portfolio[language];

  useEffect(() => {
    const onLanguageChange = () => setBrowserLanguage(getBrowserLanguage());
    window.addEventListener("languagechange", onLanguageChange);
    return () => window.removeEventListener("languagechange", onLanguageChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.description);
  }, [language, content.description]);

  function setLanguage(next: Language) {
    setPreference(next);
    writePreference(LANGUAGE_KEY, next);
    if (next !== language) track("language_changed", { from: language, to: next });
  }

  return <LanguageContext.Provider value={{ language, setLanguage, content }}>{children}</LanguageContext.Provider>;
}
