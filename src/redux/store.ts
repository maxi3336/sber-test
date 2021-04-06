import { configureStore } from "@reduxjs/toolkit";
import keepsReducer from "./reducers/keepsReducer";

const store = configureStore({
  reducer: {
    keeps: keepsReducer,
  },
});

export default store;
