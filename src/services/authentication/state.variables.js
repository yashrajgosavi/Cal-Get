export const initialState = {
  userDetailState: {
    name: "",
    email: "",
    pwd: "",
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
  apiResponseBody: {
    status: "",
    messages: "",
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
        apiResponseBody: { ...state.apiResponseBody, ...action.body },
      };
    case "SET_STATUS":
      return {
        ...state,
        apiResponseBody: { ...state.apiResponseBody, status: action.status },
      };

    case "SET_MESSAGES":
      return {
        ...state,
        apiResponseBody: {
          ...state.apiResponseBody,
          messages: action.messages,
        },
      };

    case "SET_DATA":
      return {
        ...state,
        apiResponseBody: { ...state.apiResponseBody, data: action.data },
      };
    case "RESET_STATE":
      if (action.stateName) {
        const resetValue =
          typeof state[action.stateName][
            Object.keys(state[action.stateName])[0]
          ] === "string"
            ? ""
            : {};
        return {
          ...state,
          [action.stateName]: resetValue,
        };
      } else {
        return initialState;
      }

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
  setNameError: (nameError) => ({
    type: "SET_NAME_ERROR",
    nameError,
  }),
  setEmailError: (emailError) => ({
    type: "SET_EMAIL_ERROR",
    emailError,
  }),
  setPwdError: (pwdError) => ({
    type: "SET_PWD_ERROR",
    pwdError,
  }),
  setConfirmPwdError: (confirmPwdError) => ({
    type: "SET_CONFIRM_PWD_ERROR",
    confirmPwdError,
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
  setStatus: (status) => ({
    type: "SET_STATUS",
    status,
  }),

  setMessages: (messages) => ({
    type: "SET_MESSAGES",
    messages,
  }),

  setData: (data) => ({
    type: "SET_DATA",
    data,
  }),
  resetState: (stateName) => ({
    type: "RESET_STATE",
    stateName,
  }),
};

export default actions;
