import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "TestCategory",
  initialState: {
    value: "",
  },
  reducers: {
    sendTestCategoryData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { sendTestCategoryData } = categorySlice.actions;
export default categorySlice.reducer;
