import { configureStore } from '@reduxjs/toolkit';
import heroVisibilitySlice from './heroVisibilitySlice';

export const store = configureStore({
  reducer: { heroVisibilitySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
