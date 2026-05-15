import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import playersReducer from "../reducers/playersReducer";

const rootReducer = combineReducers({
  favorites: favouritesReducer,

  player: playersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
