import { createContext, useContext } from "react";
import type { PortfolioContent } from "@/content/portfolio";
import type { Language } from "@/lib/preferences";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  content: PortfolioContent;
} | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage requires LanguageProvider");
  return context;
}
