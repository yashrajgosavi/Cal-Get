import React, { createContext, useEffect, useReducer } from "react";
import actions, { initialState, reducer } from "./variables";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AuthContext.Provider>
  );
}

// dispatch(actions.setName("New Name"));
// dispatch(actions.setEmail("newemail@gmail.com"));
// dispatch(actions.setPwd("newpassword"));
// dispatch(actions.setConfirmPwd("newconfirmpassword"));
// dispatch(actions.setIsLoggedIn(true));
// dispatch(actions.setToken("newtoken"));
// dispatch(actions.setBody({ key: "value" }));
// dispatch(actions.setData({ key: "value" }));
