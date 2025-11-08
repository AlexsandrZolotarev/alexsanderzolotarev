export type Lang = 'en' | 'ru';

export type Messages = Record<string, string>;

export type LangCntx = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
  toggleLang: () => void;
  translate: (key: string, params?: Record<string, string | number>) => string;
  dict: Messages | null;
};
