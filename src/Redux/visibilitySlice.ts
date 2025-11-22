import { createSlice } from '@reduxjs/toolkit';

type visibilityState = {
  isTextVisible: boolean;
};
const initialState: visibilityState = { isTextVisible: false };
export const visibilitySlice = createSlice({
  name: 'visible',
  initialState,
  reducers: {
    toggleVisible: (state) => {
      state.isTextVisible = !state.isTextVisible;
    },
  },
});

export const { toggleVisible } = visibilitySlice.actions;

export default visibilitySlice.reducer;
