import React, { useContext } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountButton,
  AccountButtonView,
  AccountCard,
  AccountDivider,
  AccountScrollView,
  AccountTextInput,
} from "../styles/account.styles";
import { Text } from "../../components/typography/text.component";
import { WindowContext } from "../../services/window/window.context";
import { AuthContext } from "../../services/authentication/authentication.context";
import { Warning } from "../../components/warning/warning.component";

const SignInScreen = ({ navigation }) => {
  const windowDimensions = useContext(WindowContext);

  const { state, dispatch, actions, handleSignin } = useContext(AuthContext);

  return (
    <AccountScrollView width={windowDimensions.width}>
      <AccountBackground
        width={windowDimensions.width}
        height={windowDimensions.height}
      >
        <AccountCard
          width={windowDimensions.width}
          marginTop={windowDimensions.height}
        >
          <Text variant="heading">SignIn</Text>

          <AccountDivider />

          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Email"
            value={state.userDetailState.email}
            onChangeText={(newEmail) => dispatch(actions.setEmail(newEmail))}
            left={<TextInput.Icon icon={state.iconState.icons.email} />}
          />

          <Warning
            condition={state.errorState.emailError}
            status="error"
            message={state.errorState.emailError}
          />

          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Password"
            value={state.userDetailState.pwd}
            onChangeText={(newPwd) => dispatch(actions.setPwd(newPwd))}
            left={<TextInput.Icon icon={state.iconState.icons.pwd} />}
          />

          <Warning
            condition={state.errorState.pwdError}
            status="error"
            message={state.errorState.pwdError}
          />

          <Warning
            condition={state.apiResponseBody.status === "SUCCESS"}
            status="success"
            message={state.apiResponseBody.messages}
          />

          <Warning
            condition={state.apiResponseBody.status === "FAILED"}
            status="error"
            message={state.apiResponseBody.messages}
          />

          <AccountButtonView>
            <AccountButton onPress={() => handleSignin()}>Submit</AccountButton>
            <AccountButton onPress={() => dispatch(actions.resetState())}>
              Clear
            </AccountButton>
          </AccountButtonView>
          <View>
            <Text variant="caption">Don't have account?</Text>
            <Button onPress={() => navigation.navigate("SignUp")}>
              SignUp
            </Button>
          </View>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignInScreen;
