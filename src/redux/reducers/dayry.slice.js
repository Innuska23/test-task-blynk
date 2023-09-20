import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const dayrySlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {}
});

export const dayrySliceActions = dayrySlice.actions;
export default dayrySlice.reducer;
