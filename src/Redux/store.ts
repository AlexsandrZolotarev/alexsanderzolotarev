import { configureStore } from '@reduxjs/toolkit';
import visibilitySlice from './visibilitySlice';

export const store = configureStore({
  reducer: { visibilitySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
