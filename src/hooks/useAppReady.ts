import { ContextAppReady } from '@/Providers/ContextAppReady';
import { useContext } from 'react';

export function useAppReady() {
  const ctx = useContext(ContextAppReady);
  if (!ctx) throw new Error('useAppReady must be used within <AppReadyProvider>');
  return ctx;
}
