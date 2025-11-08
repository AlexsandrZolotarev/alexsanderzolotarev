import { useContext } from 'react';
import { LangCntx } from '../types/Lang';
import { LangContext } from '../lang/LangProvider';

export function useLang(): LangCntx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangContext>');
  return ctx;
}
