import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  comments: {},
};

export const dayrySlice = createSlice({
  name: 'dayry',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removesItems: (state, action) => {
      state.items = state.items.filter(
        current => current.id !== action.payload.id
      );
    },
    addComments: (state, action) => {
      state.comments.push(action.payload);
    },
    removesComments: (state, action) => {
      state.comments = state.comments.filter(
        current => current.id !== action.payload.id
      );
    },
  }
});

export const dayrySliceActions = dayrySlice.actions;
export default dayrySlice.reducer;
