import { createContext, JSX, useLayoutEffect, useState } from 'react';
import { Theme, ThemeCntx } from '../types/Theme';

export const ThemeContext = createContext<ThemeCntx | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  useLayoutEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  function toggleTheme() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
