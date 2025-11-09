import type { Lang, LangCntx, Messages } from '@/types/Lang';
import { useEffect, useMemo, useState, type JSX } from 'react';
import { LangContext } from './LangContext';

function detectInitialLang(): Lang {
  const ls = localStorage.getItem('lang');
  if (ls === 'ru' || ls === 'en') return ls as Lang;
  const nav = (navigator.language || '').toLowerCase();
  return nav.startsWith('ru') ? 'ru' : 'en';
}

function LangProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [lang, setLang] = useState<Lang>(detectInitialLang);
  const [dict, setDict] = useState<Messages | null>(null);

  useEffect(() => {
    let isCancelled = false;

    async function load() {
      try {
        const mod =
          lang === 'ru' ? await import('../lang/ru.json') : await import('../lang/en.json');
        const messages: Messages = mod.default ?? mod;

        if (!isCancelled) {
          setDict(messages);
          document.documentElement.lang = messages['app.langCode'] ?? lang;
          document.documentElement.dir = messages['app.dir'] ?? 'ltr';
          localStorage.setItem('lang', lang);
        }
      } catch (e) {
        console.error('Failed to load locale', lang, e);
        if (!isCancelled) setDict(null);
      }
    }
    load();
    return () => {
      isCancelled = true;
    };
  }, [lang]);

  function toggleLang() {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  }

  function translate(key: string, params?: Record<string, string | number>): string {
    const source = dict?.[key] ?? key;
    if (!params) return source;
    return Object.keys(params).reduce((acc, k) => {
      const val = String(params[k]);
      return acc.replaceAll(`{${k}}`, val);
    }, source);
  }

  const value = useMemo<LangCntx>(
    () => ({
      lang,
      setLang,
      toggleLang,
      translate,
      dict,
    }),
    [lang, dict],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export default LangProvider;
