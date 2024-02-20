import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./reducers/categoryReducer";
import appointmenStatusReducer from "./reducers/appointmenStatusReducer";
export default configureStore({
  reducer: {
    testCategory: categoryReducer,
    appointmentStatus: appointmenStatusReducer,
  },
});
