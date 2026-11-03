import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ReadingTheme = "daylight" | "evening";

interface ThemeContextValue {
  theme: ReadingTheme;
  toggleTheme: () => void;
  setTheme: (theme: ReadingTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "juals-reading-atmosphere";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ReadingTheme>(() => {
    if (typeof window === "undefined") return "daylight";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "evening" ? "evening" : "daylight";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "evening") {
      root.setAttribute("data-theme", "evening");
    } else {
      root.removeAttribute("data-theme");
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "daylight" ? "evening" : "daylight"));
  };

  const setTheme = (next: ReadingTheme) => {
    setThemeState(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
