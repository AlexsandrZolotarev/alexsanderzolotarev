export type Theme = 'dark' | 'light';

export type ThemeCntx = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
  toggleTheme: () => void;
};
