import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      error: null,
      isLoggedIn: false,
      username: null,
    },
  },
  reducers: {
    logIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = { ...state.value, isLoggedIn: true, ...action.payload };
    },
    logOut: (state, action) => {
      state.value.clicks = [...state.value.clicks, action.payload];
    },
    setError: (state, action) => {
      state.value.error = action.payload; // error
    },
  },
});

export const { logIn, logOut, setError } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const checkAuthCredentials = (credentials) => (dispatch) => {
  if (credentials.username && credentials.password) {
    dispatch(logIn(credentials));
  } else {
    dispatch(
      setError(new Error("Auth credentials were incorrect.").toString())
    );
  }
};

export const submitAuthForm = (credentials) => (dispatch) => {
  dispatch(checkAuthCredentials(credentials));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = (state) => state.counter.value;

export default authSlice.reducer;
