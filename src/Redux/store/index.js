import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../reducers/favoritesReducer";

export const store = configureStore({
  reducer: favoritesReducer,
});