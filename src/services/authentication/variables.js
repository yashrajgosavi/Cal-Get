export const initialState = {
  token: "",
  name: "",
  email: "user1@gmail.com",
  pwd: "12345678",
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
  data: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
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
    case "SET_BODY_DATA":
      return { ...state, data: action.data };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_ICONS":
      return { ...state, icons: action.icons };
    default:
      return state;
  }
};
