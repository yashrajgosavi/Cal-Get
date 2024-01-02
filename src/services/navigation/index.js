import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";

const AppNav = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};

export default AppNav;
