import { createSelector } from "@reduxjs/toolkit";

export const selectDayryState = state => state.dayryReducer;

export const selectItems = createSelector(
    selectDayryState,
    state => state.items
);

export const selectComments = createSelector(
    selectDayryState,
    state => state.comments
);