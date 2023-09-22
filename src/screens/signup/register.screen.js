import { Dimensions, Text } from "react-native";
import React from "react";
import { AccountBackground, AccountScrollView } from "../account.styles";

const RegisterScreen = () => {
  return (
    <AccountScrollView>
      <AccountBackground>
        <Text>RegisterScreen {Dimensions.get("screen").height} </Text>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default RegisterScreen;
