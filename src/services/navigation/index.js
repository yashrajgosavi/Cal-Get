import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account.navigator";
import { AuthContext } from "../authentication/authentication.context";
import { getASData } from "../authentication/store.function";
import { getAuth } from "../authentication/api.calls";
import UserNavigator from "./user.navigation";

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
      {!state.authState.isLoggedIn ? <AccountNavigator /> : <UserNavigator />}
    </NavigationContainer>
  );
};

export default AppNav;
