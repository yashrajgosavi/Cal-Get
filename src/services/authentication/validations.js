export const validateSignupForm = (state, dispatch) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  let nameError = state.name ? "" : "Name is required";
  let emailError = emailRegex.test(state.email) ? "" : "Invalid email format";
  let pwdError =
    state.pwd.length >= 8 && state.pwd.length <= 20
      ? ""
      : "Password should be min 8 char and max 20 char";
  let confirmPwdError =
    state.pwd === state.confirmPwd
      ? ""
      : "Password and confirm password should be same";

  if (nameError || emailError || pwdError || confirmPwdError) {
    isValid = false;
    dispatch({ type: "SET_NAME_ERROR", nameError });
    dispatch({ type: "SET_EMAIL_ERROR", emailError });
    dispatch({ type: "SET_PWD_ERROR", pwdError });
    dispatch({ type: "SET_CONFIRM_PWD_ERROR", confirmPwdError });
  }

  return isValid;
};

export const validateSignInForm = (state, dispatch) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  let emailError = emailRegex.test(state.email) ? "" : "Invalid email format";
  let pwdError =
    state.pwd.length >= 8 && state.pwd.length <= 20
      ? ""
      : "Password should be min 8 char and max 20 char";

  if (emailError || pwdError) {
    isValid = false;
    dispatch({ type: "SET_EMAIL_ERROR", emailError });
    dispatch({ type: "SET_PWD_ERROR", pwdError });
  }

  return isValid;
};
