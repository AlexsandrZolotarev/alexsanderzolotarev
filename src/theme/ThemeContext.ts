import { ThemeCntx } from '@/types/Theme';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeCntx | null>(null);
