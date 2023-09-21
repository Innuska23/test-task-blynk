import { createSlice, nanoid } from '@reduxjs/toolkit';
import { generateItemId } from '../../utils';

const initialState = {
  items: [],
  comments: {},
  selectedItem: null
};

export const dayrySlice = createSlice({
  name: 'dayry',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push({ id: generateItemId(), title: action.payload });
    },
    removesItems: (state, action) => {
      if (action.payload === state.selectedItem) {
        state.selectedItem = null;
      }

      if (state.comments[action.payload]) {
        delete state.comments[action.payload];
      }

      state.items = state.items.filter(
        current => current.id !== action.payload
      );
    },

    addComments: (state, action) => {
      const newComment = { id: nanoid(), ...action.payload.data };

      if (!state.comments[action.payload.itemId]) {
        state.comments[action.payload.itemId] = [newComment];
        return;
      }

      state.comments[action.payload.itemId].push(newComment);
    },
    removesComments: (state, action) => {
      state.comments[action.payload.itemId] = state.comments.filter(
        current => current.id !== action.payload.commentId
      );
    },

    selectedItem: (state, action) => {
      state.selectedItem = action.payload
    }
  }
});

export const dayrySliceActions = dayrySlice.actions;
export default dayrySlice.reducer;
