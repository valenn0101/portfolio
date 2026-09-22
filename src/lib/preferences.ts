export type Language = "es" | "en";
export type Theme = "light" | "dark";

// Legacy keys also stored automatic choices. These keys only store an explicit
// selection, so browser preferences remain the default.
export const LANGUAGE_KEY = "portfolio.language";
export const THEME_KEY = "portfolio.theme";

export function isLanguage(value: unknown): value is Language {
  return value === "es" || value === "en";
}

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function resolveLanguage(languages: readonly string[], preference?: string | null): Language {
  if (isLanguage(preference)) return preference;
  for (const locale of languages) {
    const language = locale.toLowerCase().split(/[-_]/)[0];
    if (isLanguage(language)) return language;
  }
  return "en";
}

export function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  return resolveLanguage(navigator.languages?.length ? navigator.languages : [navigator.language]);
}

export function readPreference(key: string): string | null {
  try { return window.localStorage.getItem(key); }
  catch { return null; }
}

export function writePreference(key: string, value: string): void {
  try { window.localStorage.setItem(key, value); }
  catch { /* Controls still work when persistent storage is blocked. */ }
}
