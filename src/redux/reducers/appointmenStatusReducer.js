import { createSlice } from "@reduxjs/toolkit";
export const statusSlice = createSlice({
  name: "appointmentStatus",
  initialState: {
    value: "",
  },
  reducers: {
    sendAppointmentStatusData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { sendAppointmentStatusData } = statusSlice.actions;
export default statusSlice.reducer;
