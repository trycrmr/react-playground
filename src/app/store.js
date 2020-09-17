import { configureStore } from "@reduxjs/toolkit";
import userTrackerReducer from "../features/UserTracker/userTrackerSlice";
import authReducer from "../authSlice";
export default configureStore({
  reducer: {
    userTracker: userTrackerReducer,
    auth: authReducer,
  },
});
