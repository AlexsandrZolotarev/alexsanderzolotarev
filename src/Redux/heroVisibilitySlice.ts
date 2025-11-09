import { createSlice } from '@reduxjs/toolkit';

type HeroVisibilityState = {
  isTextVisible: boolean;
};
const initialState: HeroVisibilityState = { isTextVisible: false };
export const heroVisibilitySlice = createSlice({
  name: 'heroVisible',
  initialState,
  reducers: {
    toggleVisible: (state) => {
      state.isTextVisible = !state.isTextVisible;
    },
  },
});

export const { toggleVisible } = heroVisibilitySlice.actions;

export default heroVisibilitySlice.reducer;
