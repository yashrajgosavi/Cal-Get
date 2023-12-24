import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { initialState, reducer } from "./variables";
import { validateSignInForm, validateSignupForm } from "./validations";
import { signInUser, signUpUser } from "./api.calls";
import { getASData } from "./store.function";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const checkAuth = async () => {
      let userResponseData = await getASData("userResponse");
      if (userResponseData !== null) {
        dispatch({
          type: "GET_AUTH",
          getAuth: {
            isLoggedIn: true,
            token: userResponseData.token,
          },
        });
      } else {
        dispatch({
          type: "GET_AUTH",
          getAuth: {
            isLoggedIn: false,
            token: null,
          },
        });
      }
    };
    checkAuth();
  }, [state.getAuth]);

  const clearInputFields = () => {
    dispatch({ type: "SET_NAME", name: "" });
    dispatch({ type: "SET_EMAIL", email: "" });
    dispatch({ type: "SET_PWD", pwd: "" });
    dispatch({ type: "SET_CONFIRM_PWD", confirmPwd: "" });
  };

  const clearErrorFields = () => {
    dispatch({ type: "SET_NAME_ERROR", nameError: "" });
    dispatch({ type: "SET_EMAIL_ERROR", emailError: "" });
    dispatch({ type: "SET_PWD_ERROR", pwdError: "" });
    dispatch({ type: "SET_CONFIRM_PWD_ERROR", confirmPwdError: "" });
    dispatch({
      type: "SET_BODY",
      body: {
        status: "",
        message: "",
      },
    });
  };

  const handleSignup = useCallback(async () => {
    clearErrorFields();
    if (validateSignupForm(state, dispatch)) {
      console.log("Form is valid");
      if (signUpUser(state, dispatch)) {
      }
    }
  }, [state, dispatch]);

  const handleSignin = useCallback(async () => {
    clearErrorFields();
    if (validateSignInForm(state, dispatch)) {
      console.log("Form is valid");
      if (signInUser(state, dispatch)) {
      }
    }
  }, [state, dispatch]);
  return (
    <AuthContext.Provider
      value={[
        state,
        dispatch,
        clearInputFields,
        handleSignin,
        handleSignup,
        clearErrorFields,
      ]}
    >
      {children}
    </AuthContext.Provider>
  );
}
