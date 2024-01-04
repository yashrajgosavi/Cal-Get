import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import Dashboard from "../../features/dashboard/dashboard.screen";
import ThemeScreen from "../../features/theme.screen";

export const CreateDrawerNav = createDrawerNavigator();

const UserNavigator = () => {
  return (
    <CreateDrawerNav.Navigator>
      <CreateDrawerNav.Screen name="Dashboard" component={Dashboard} />
      <CreateDrawerNav.Screen name="ThemeScreen" component={ThemeScreen} />
    </CreateDrawerNav.Navigator>
  );
};

export default UserNavigator;
