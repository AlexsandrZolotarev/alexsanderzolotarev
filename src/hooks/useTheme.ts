import { useContext } from 'react';
import { ThemeCntx } from '../types/Theme';
import { ThemeContext } from '../theme/ThemeProvider';

export function useTheme(): ThemeCntx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
