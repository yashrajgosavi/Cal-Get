import React, { createContext, useReducer } from "react";

import actions, { initialState, reducer } from "./state.variables";
import { validateSignInForm, validateSignupForm } from "./form.validations";
import { signInUser, signUpUser } from "./api.calls";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSignup = () => {
    try {
      dispatch(actions.resetState("errorState"));
      if (!validateSignupForm(state, dispatch, actions)) {
        console.log("SignIn Form is invalid");
        return;
      }
      console.log("SignIn Form is valid");
      signUpUser(state, dispatch, actions);
    } catch (error) {
      console.error("Error during signin: ", error);
    }
  };

  const handleSignin = () => {
    try {
      dispatch(actions.resetState("errorState"));
      if (!validateSignInForm(state, dispatch, actions)) {
        console.log("SignIn Form is invalid");
        return;
      }
      console.log("SignIn Form is valid");
      signInUser(state, dispatch, actions);
    } catch (error) {
      console.error("Error during signin: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, dispatch, actions, handleSignup, handleSignin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
