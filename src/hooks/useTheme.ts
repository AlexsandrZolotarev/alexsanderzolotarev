import { useContext } from 'react';

import type { ThemeCntx } from '@/types/Theme';
import { ThemeContext } from '@/theme/ThemeContext';

export function useTheme(): ThemeCntx {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
