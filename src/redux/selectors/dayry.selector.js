import { createSelector } from "@reduxjs/toolkit";

export const selectDayryState = state => state.dayryReducer;

export const selectItems = createSelector(
    selectDayryState,
    state => state.items
);

export const selectComments = (itemId) => createSelector(
    selectDayryState,
    state => state.comments[itemId] || []
);

export const selectCommentsCount = (itemId) => createSelector(
    selectDayryState,
    state => state.comments[itemId]?.length || 0
);


export const selectSelectedItem = createSelector(
    selectDayryState,
    state => state.selectedItem || ''
);