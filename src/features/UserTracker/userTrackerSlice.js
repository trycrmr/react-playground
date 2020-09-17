import { createSlice } from "@reduxjs/toolkit";

export const userTrackerSlice = createSlice({
  name: "userTracker",
  initialState: {
    value: {
      sessionId: null,
      clicks: [],
    },
  },
  reducers: {
    setSessionId: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value.sessionId) {
        console.info("sessionId is already set to ", state.value.sessionId);
      } else {
        state.value.sessionId = action.payload;
      }
    },
    addClick: (state, action) => {
      state.value.clicks = [...state.value.clicks, action.payload];
    },
  },
});

export const { setSessionId, addClick } = userTrackerSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default userTrackerSlice.reducer;
