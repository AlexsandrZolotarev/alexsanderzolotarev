import { createContext, useMemo, useState } from 'react';
import { AppReadyCtx } from '../types/AppReady';

export const ContextAppReady = createContext<AppReadyCtx | null>(null);

export const AppReadyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appReady, setAppReady] = useState(false);
  const value = useMemo(() => ({ appReady, setAppReady }), [appReady]);
  return <ContextAppReady.Provider value={value}>{children}</ContextAppReady.Provider>;
};
