import { LangContext } from '@/lang/LangContext';
import { LangCntx } from '@/types/Lang';
import { useContext } from 'react';

export function useLang(): LangCntx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangContext>');
  return ctx;
}
