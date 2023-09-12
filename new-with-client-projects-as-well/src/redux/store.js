import { configureStore } from "@reduxjs/toolkit";
import isAdjustingState from "./isAdjustingState.js";

const store = configureStore({
  reducer: {
    isAdjusting: isAdjustingState,
  },
});

export default store;
