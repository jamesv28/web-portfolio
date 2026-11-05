import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// The site defaults to dark (the DESIGN.md palette). "light" is opt-in and is
// applied as data-theme="light" on <html>; index.html sets it before first paint.
const readInitial = () =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage may be unavailable (private mode); the toggle still works for this visit.
    }
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((current) => (current === "light" ? "dark" : "light")),
    [],
  );

  return { theme, toggle };
};
