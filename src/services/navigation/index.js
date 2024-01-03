import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account.navigator";
import { AuthContext } from "../authentication/authentication.context";
import { getASData } from "../authentication/store.function";
import Dashboard from "../../features/dashboard/dashboard.screen";
import { getAuth } from "../authentication/api.calls";

const AppNav = () => {
  const { state, dispatch, actions } = useContext(AuthContext);

  useEffect(() => {
    const checkAuth = async () => {
      let data = await getASData("userResponse");
      if (data !== null) {
        if (getAuth(data)) {
          dispatch(actions.setToken(data.token));
          dispatch(actions.setIsLoggedIn(true));
        }
      }
    };
    checkAuth();
  }, [state.apiResponseBody.data, actions, dispatch]);

  return (
    <NavigationContainer>
      {!state.authState.isLoggedIn ? <AccountNavigator /> : <Dashboard />}
    </NavigationContainer>
  );
};

export default AppNav;
