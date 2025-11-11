import { useMemo, useState } from 'react';
import { ContextAppReady } from './ContextAppReady';

export const AppReadyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appReady, setAppReady] = useState(false);
  const value = useMemo(() => ({ appReady, setAppReady }), [appReady]);
  return <ContextAppReady.Provider value={value}>{children}</ContextAppReady.Provider>;
};
