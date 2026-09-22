import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "@/hooks/useTheme";
import { isTheme, readPreference, THEME_KEY, writePreference, type Theme } from "@/lib/preferences";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Theme | null>(() => {
    const stored = readPreference(THEME_KEY);
    return isTheme(stored) ? stored : null;
  });
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const theme = preference ?? systemTheme;

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => setSystemTheme(event.matches ? "dark" : "light");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setPreference(next);
    writePreference(THEME_KEY, next);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
