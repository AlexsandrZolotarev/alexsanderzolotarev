import { LangCntx } from '@/types/Lang';
import { createContext } from 'react';

export const LangContext = createContext<LangCntx | null>(null);
