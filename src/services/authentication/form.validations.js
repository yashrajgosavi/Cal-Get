export const validateSignupForm = (state, dispatch, actions) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  let nameError = state.userDetailState.name ? "" : "Name is required";
  let emailError = emailRegex.test(state.userDetailState.email)
    ? ""
    : "Invalid email format";
  let pwdError =
    state.userDetailState.pwd.length >= 8 &&
    state.userDetailState.pwd.length <= 20
      ? ""
      : "Password should be min 8 char and max 20 char";
  let confirmPwdError =
    state.userDetailState.pwd === state.userDetailState.confirmPwd
      ? ""
      : "Password and confirm password should be same";

  if (nameError || emailError || pwdError || confirmPwdError) {
    isValid = false;
    dispatch(actions.setNameError(nameError));
    dispatch(actions.setEmailError(emailError));
    dispatch(actions.setPwdError(pwdError));
    dispatch(actions.setConfirmPwdError(confirmPwdError));
  }

  return isValid;
};

export const validateSignInForm = async (state, dispatch, actions) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  let emailError = emailRegex.test(state.userDetailState.email)
    ? ""
    : "Invalid email format";
  let pwdError =
    state.userDetailState.pwd.length >= 8 &&
    state.userDetailState.pwd.length <= 20
      ? ""
      : "Password should be min 8 char and max 20 char";

  if (emailError || pwdError) {
    isValid = false;
    dispatch(actions.setEmailError(emailError));
    dispatch(actions.setPwdError(pwdError));
  }

  return isValid;
};
