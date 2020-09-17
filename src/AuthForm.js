import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitAuthForm } from "./authSlice";
const initialState = {
  username: "",
  password: "",
  rememberMe: false,
};

const AuthForm = () => {
  const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitAuthForm(state));
        }}
      >
        <p>Log In!</p>
        <label>
          Email:
          <input
            value={state.username}
            type="text"
            placeholder="Enter your email."
            onChange={(e) => {
              setstate({ ...state, username: e.target.value });
            }}
          ></input>
        </label>
        <br />
        <label>
          Password:
          <input
            value={state.password}
            type="password"
            placeholder="Enter your password."
            autoComplete="false"
            onChange={(e) => {
              setstate({ ...state, password: e.target.value });
            }}
          ></input>
        </label>
        <br />
        <label>
          Remember me:{" "}
          <input
            type="checkbox"
            checked={state.rememberMe}
            onChange={(e) => {
              setstate({ ...state, rememberMe: !state.rememberMe });
            }}
          ></input>
        </label>
        <br />
        <button>Yeet!</button>
      </form>
    </>
  );
};

export default AuthForm;
