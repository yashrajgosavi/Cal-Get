import React, { useContext, useEffect } from "react";
import { Button, TextInput } from "react-native-paper";
import { View } from "react-native";

import {
  AccountScrollView,
  AccountBackground,
  AccountCard,
  AccountDivider,
  AccountTextInput,
  AccountButtonView,
  AccountButton,
} from "../styles/account.styles";
import { WindowContext } from "../../services/window/window.context";
import { Text } from "../../components/typography/text.component";
import { Warning } from "../../components/warning/warning.component";
import { AuthContext } from "../../services/authentication/authentication.context";

const SignupScreen = ({ navigation }) => {
  const windowDimensions = useContext(WindowContext);

  const { state, dispatch, actions } = useContext(AuthContext);

  useEffect(() => {
    let newIcons = {};

    if (!state.userDetailState.confirmPwd) {
      newIcons = {
        fullName: "account",
        email: "email",
        pwd: "lock",
        confirmPwd: "lock-question",
      };
    } else if (state.userDetailState.pwd === state.userDetailState.confirmPwd) {
      newIcons = {
        fullName: "account",
        email: "email",
        pwd: "lock",
        confirmPwd: "lock-open-check",
      };
    } else {
      newIcons = {
        fullName: "account",
        email: "email",
        pwd: "lock",
        confirmPwd: "lock-alert",
      };
    }

    if (JSON.stringify(newIcons) !== JSON.stringify(state.iconState.icons)) {
      dispatch(actions.setIcons(newIcons));
    }
  }, [state, actions, dispatch]);

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
          <Text variant="heading">Signup Screen</Text>
          <AccountDivider />
          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Full Name"
            value={state.userDetailState.name}
            onChangeText={(newName) => dispatch(actions.setName(newName))}
            left={<TextInput.Icon icon={state.iconState.icons.fullName} />}
          />

          <Warning
            condition={state.errorState.nameError}
            status="error"
            message={state.errorState.nameError}
          />

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

          <AccountTextInput
            width={windowDimensions.width}
            label="Confirm Password"
            value={state.userDetailState.confirmPwd}
            onChangeText={(newConfirmPassword) =>
              dispatch(actions.setConfirmPwd(newConfirmPassword))
            }
            left={<TextInput.Icon icon={state.iconState.icons.confirmPwd} />}
          />

          <Warning
            condition={state.errorState.confirmPwdError}
            status="error"
            message={state.errorState.confirmPwdError}
          />

          <Warning
            condition={
              state.apiResponseState.body.message &&
              state.apiResponseState.body.status === "SUCCESS"
            }
            status="success"
            message={state.apiResponseState.body.message}
          />

          <Warning
            condition={
              state.apiResponseState.body.message &&
              state.apiResponseState.body.status !== "SUCCESS"
            }
            status="error"
            message={state.apiResponseState.body.message}
          />

          <AccountButtonView>
            <AccountButton>Submit</AccountButton>
            <AccountButton>Clear</AccountButton>
          </AccountButtonView>
          <View>
            <Text variant="caption">Already have a account?</Text>
            <Button onPress={() => navigation.goBack()}>Login</Button>
          </View>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignupScreen;
