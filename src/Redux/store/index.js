import { configureStore } from "@reduxjs/toolkit";

import favouritesReducer from "../reducers/favouritesReducer";

export const store = configureStore({
  reducer: favouritesReducer,
});
