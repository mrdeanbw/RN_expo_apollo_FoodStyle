import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cards: [],
};

export const rootSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    updateCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCards } = rootSlice.actions;

export default rootSlice.reducer;
