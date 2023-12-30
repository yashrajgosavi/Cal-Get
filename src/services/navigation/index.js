import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../authentication/authentication.context";
import Dashboard from "../../features/dashboard/dashboard.screen";
import { AccountNavigator } from "./account.navigator";

const AppNav = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.getAuth.isLoggedIn ? <Dashboard /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default AppNav;
