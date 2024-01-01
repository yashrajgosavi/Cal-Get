export const initialState = {
  userDetailState: {
    name: "",
    email: "user1@gmail.com",
    pwd: "12345678",
    confirmPwd: "",
  },
  errorState: {
    nameError: "",
    emailError: "",
    pwdError: "",
    confirmPwdError: "",
  },
  iconState: {
    icons: {
      fullName: "account",
      email: "email",
      pwd: "lock",
      confirmPwd: "lock-question",
    },
  },
  authState: {
    isLoggedIn: false,
    token: null,
  },
  apiResponseState: {
    body: {},
    data: {},
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        userDetailState: { ...state.userDetailState, name: action.name },
      };
    case "SET_EMAIL":
      return {
        ...state,
        userDetailState: { ...state.userDetailState, email: action.email },
      };
    case "SET_PWD":
      return {
        ...state,
        userDetailState: { ...state.userDetailState, pwd: action.pwd },
      };
    case "SET_CONFIRM_PWD":
      return {
        ...state,
        userDetailState: {
          ...state.userDetailState,
          confirmPwd: action.confirmPwd,
        },
      };
    case "SET_NAME_ERROR":
      return {
        ...state,
        errorState: { ...state.errorState, nameError: action.nameError },
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        errorState: { ...state.errorState, emailError: action.emailError },
      };
    case "SET_PWD_ERROR":
      return {
        ...state,
        errorState: { ...state.errorState, pwdError: action.pwdError },
      };
    case "SET_CONFIRM_PWD_ERROR":
      return {
        ...state,
        errorState: {
          ...state.errorState,
          confirmPwdError: action.confirmPwdError,
        },
      };
    case "SET_ICONS":
      return {
        ...state,
        iconState: { ...state.iconState, icons: action.icons },
      };
    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        authState: { ...state.authState, isLoggedIn: action.isLoggedIn },
      };
    case "SET_TOKEN":
      return {
        ...state,
        authState: { ...state.authState, token: action.token },
      };
    case "SET_BODY":
      return {
        ...state,
        apiResponseState: { ...state.apiResponseState, body: action.body },
      };
    case "SET_BODY_DATA":
      return {
        ...state,
        apiResponseState: { ...state.apiResponseState, data: action.data },
      };
    default:
      return state;
  }
};

// Action Creators
const actions = {
  setName: (name) => ({
    type: "SET_NAME",
    name,
  }),
  setEmail: (email) => ({
    type: "SET_EMAIL",
    email,
  }),
  setPwd: (pwd) => ({
    type: "SET_PWD",
    pwd,
  }),
  setConfirmPwd: (confirmPwd) => ({
    type: "SET_CONFIRM_PWD",
    confirmPwd,
  }),
  setIcons: (icons) => ({
    type: "SET_ICONS",
    icons,
  }),
  setIsLoggedIn: (isLoggedIn) => ({
    type: "SET_IS_LOGGED_IN",
    isLoggedIn,
  }),
  setToken: (token) => ({
    type: "SET_TOKEN",
    token,
  }),
  setBody: (body) => ({
    type: "SET_BODY",
    body,
  }),
  setData: (data) => ({
    type: "SET_BODY_DATA",
    data,
  }),
};

export default actions;
