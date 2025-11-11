import { AppReadyCtx } from '@/types/AppReady';
import { createContext } from 'react';

export const ContextAppReady = createContext<AppReadyCtx | null>(null);
