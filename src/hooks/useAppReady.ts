import { useContext } from 'react';
import { ContextAppReady } from '../Providers/AppReadyProvider';

export function useAppReady() {
  const ctx = useContext(ContextAppReady);
  if (!ctx) throw new Error('useAppReady must be used within <AppReadyProvider>');
  return ctx;
}
