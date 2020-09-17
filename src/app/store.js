import { configureStore } from "@reduxjs/toolkit";
import userTrackerReducer from "../features/UserTracker/userTrackerSlice";

export default configureStore({
  reducer: {
    userTracker: userTrackerReducer,
  },
});
