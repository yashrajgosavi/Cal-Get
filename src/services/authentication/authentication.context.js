import axios from "axios";
import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";

export const AuthContext = createContext();

const initialState = {
  token: "",
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
  icons: {
    fullName: "account",
    email: "email",
    pwd: "lock",
    confirmPwd: "lock-question",
  },
  nameError: "",
  emailError: "",
  pwdError: "",
  confirmPwdError: "",
  body: {
    status: "",
    message: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_NAME":
      return { ...state, name: action.name };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_PWD":
      return { ...state, pwd: action.pwd };
    case "SET_CONFIRM_PWD":
      return { ...state, confirmPwd: action.confirmPwd };
    case "SET_NAME_ERROR":
      return { ...state, nameError: action.nameError };
    case "SET_EMAIL_ERROR":
      return { ...state, emailError: action.emailError };
    case "SET_PWD_ERROR":
      return { ...state, pwdError: action.pwdError };
    case "SET_CONFIRM_PWD_ERROR":
      return { ...state, confirmPwdError: action.confirmPwdError };
    case "SET_BODY":
      return { ...state, body: action.body };
    case "SET_ICONS":
      return { ...state, icons: action.icons };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearFields = useCallback(() => {
    dispatch({ type: "SET_NAME", name: "" });
    dispatch({ type: "SET_EMAIL", email: "" });
    dispatch({ type: "SET_PWD", pwd: "" });
    dispatch({ type: "SET_CONFIRM_PWD", confirmPwd: "" });
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
  }, [dispatch]);

  const handleSignup = useCallback(async () => {
    const validateSignupForm = () => {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      dispatch({ type: "SET_NAME_ERROR", nameError: "" });
      dispatch({ type: "SET_EMAIL_ERROR", emailError: "" });
      dispatch({ type: "SET_PWD_ERROR", pwdError: "" });
      dispatch({ type: "SET_CONFIRM_PWD_ERROR", confirmPwdError: "" });
      let isValid = true;
      let nameError = state.name ? "" : "Name is required";
      let emailError = emailRegex.test(state.email)
        ? ""
        : "Invalid email format";

      let pwdError =
        state.pwd.length >= 8 && state.pwd.length <= 20
          ? ""
          : "Password should be min 8 char and max 20 char";
      let confirmPwdError =
        state.pwd === state.confirmPwd
          ? ""
          : "Password and confirm password should be same";

      if (nameError || emailError || pwdError || confirmPwdError) {
        dispatch({ type: "SET_NAME_ERROR", nameError });
        dispatch({ type: "SET_EMAIL_ERROR", emailError });
        dispatch({ type: "SET_PWD_ERROR", pwdError });
        dispatch({ type: "SET_CONFIRM_PWD_ERROR", confirmPwdError });
        isValid = false;
      }

      return isValid;
    };

    if (validateSignupForm()) {
      console.log("Form is valid");
      try {
        const response = await axios.post(
          "https://inspired-friendly-cougar.ngrok-free.app/api/user/signup",
          {
            name: state.name,
            email: state.email,
            password: state.pwd,
          }
        );
        const data = response.data;
        if (response.status === 200) {
          console.log(data);
          dispatch({
            type: "SET_BODY",
            body: data,
          });
          // handle successful signup
        } else {
          console.log(data);
          dispatch({
            type: "SET_BODY",
            body: data,
          });
          // handle unsuccessful signup
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
    }
  }, [state, dispatch]);

  useEffect(() => {}, [state.body, state.token]);

  const handleSignin = useCallback(async () => {
    const validateSignInForm = () => {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      dispatch({ type: "SET_NAME_ERROR", nameError: "" });
      dispatch({ type: "SET_EMAIL_ERROR", emailError: "" });
      dispatch({ type: "SET_PWD_ERROR", pwdError: "" });
      dispatch({ type: "SET_CONFIRM_PWD_ERROR", confirmPwdError: "" });
      let isValid = true;
      let emailError = emailRegex.test(state.email)
        ? ""
        : "Invalid email format";
      let pwdError =
        state.pwd.length >= 8 && state.pwd.length <= 20
          ? ""
          : "Password should be min 8 char and max 20 char";

      if (emailError || pwdError) {
        dispatch({ type: "SET_EMAIL_ERROR", emailError });
        dispatch({ type: "SET_PWD_ERROR", pwdError });
        isValid = false;
      }

      return isValid;
    };

    if (validateSignInForm()) {
      console.log("Form is valid");
      try {
        const response = await axios.post(
          "https://inspired-friendly-cougar.ngrok-free.app/api/user/signin",
          {
            email: state.email,
            password: state.pwd,
          }
        );
        dispatch({
          type: "SET_BODY",
          body: response.data,
        });

        if (response.status === 200) {
          dispatch({
            type: "SET_TOKEN",
            token: response.data.token,
          });
          // handle successful signin
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
    }
  }, [state, dispatch]);

  return (
    <AuthContext.Provider
      value={[state, dispatch, clearFields, handleSignin, handleSignup]}
    >
      {children}
    </AuthContext.Provider>
  );
};
