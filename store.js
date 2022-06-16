import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./src/reducers/cardsReducer";
const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
