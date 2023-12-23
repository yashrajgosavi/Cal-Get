import React, { useContext, useEffect } from "react";
import {
  AccountBackground,
  AccountButton,
  AccountButtonView,
  AccountCard,
  AccountDivider,
  AccountScrollView,
  AccountTextInput,
} from "../styles/account.styles";
import { WindowContext } from "../../services/window/window.context";
import { Text } from "../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { AuthContext } from "../../services/authentication/authentication.context";

const SignupScreen = () => {
  const windowDimensions = useContext(WindowContext);

  const [state, dispatch, clearFields, handleSignin, handleSignup] =
    useContext(AuthContext);

  useEffect(() => {
    let newIcons = {};

    if (!state.confirmPwd) {
      newIcons = {
        fullName: "account",
        email: "email",
        pwd: "lock",
        confirmPwd: "lock-question",
      };
    } else if (state.pwd === state.confirmPwd) {
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

    if (JSON.stringify(newIcons) !== JSON.stringify(state.icons)) {
      dispatch({ type: "SET_ICONS", icons: newIcons });
    }
  }, [state, dispatch, handleSignin]);

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
            value={state.name}
            onChangeText={(newName) =>
              dispatch({ type: "SET_NAME", name: newName })
            }
            left={<TextInput.Icon icon={state.icons.fullName} />}
          />
          {state.nameError ? (
            <Text variant="error">{state.nameError}</Text>
          ) : null}
          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Email"
            value={state.email}
            onChangeText={(newEmail) =>
              dispatch({ type: "SET_EMAIL", email: newEmail })
            }
            left={<TextInput.Icon icon={state.icons.email} />}
          />
          {state.emailError ? (
            <Text variant="error">{state.emailError}</Text>
          ) : null}

          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Password"
            value={state.pwd}
            onChangeText={(newPwd) =>
              dispatch({ type: "SET_PWD", pwd: newPwd })
            }
            left={<TextInput.Icon icon={state.icons.pwd} />}
          />
          {state.pwdError ? (
            <Text variant="error">{state.pwdError}</Text>
          ) : null}
          <AccountTextInput
            width={windowDimensions.width}
            label="Confirm Password"
            value={state.confirmPwd}
            onChangeText={(newConfirmPwd) =>
              dispatch({ type: "SET_CONFIRM_PWD", confirmPwd: newConfirmPwd })
            }
            left={<TextInput.Icon icon={state.icons.confirmPwd} />}
          />
          {state.confirmPwdError ? (
            <Text variant="error">{state.confirmPwdError}</Text>
          ) : null}
          {state.body.message && state.body.status === "SUCCESS" ? (
            <Text variant="success">{state.body.message}</Text>
          ) : (
            <Text variant="error">{state.body.message}</Text>
          )}
          <AccountButtonView>
            <AccountButton onPress={() => handleSignup()}>Submit</AccountButton>
            <AccountButton onPress={() => clearFields()}>Clear</AccountButton>
          </AccountButtonView>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignupScreen;
