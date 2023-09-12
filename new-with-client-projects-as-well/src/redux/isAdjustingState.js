import { createSlice } from "@reduxjs/toolkit";

const isAdjustingSlice = createSlice({
  name: "adjustingState",
  initialState: {
    isAdjusting: false,
  },
  reducers: {
    setIsAdjusting: (state, action) => {
      state.isAdjusting = action.payload;
    },
  },
});

export const { setIsAdjusting } = isAdjustingSlice.actions;
export default isAdjustingSlice.reducer;
