import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../features/signin/signin.screen";
import SignupScreen from "../../features/signup/signup.screen";
import React from "react";

export const CreateStackNav = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <>
      <CreateStackNav.Navigator>
        <CreateStackNav.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: false,
          }}
        />
        <CreateStackNav.Screen
          name="SignUp"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
      </CreateStackNav.Navigator>
    </>
  );
};
