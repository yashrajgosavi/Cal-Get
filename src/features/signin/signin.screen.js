import React, { useContext } from "react";
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
import { Button, TextInput } from "react-native-paper";
import { WindowContext } from "../../services/window/window.context";
import { AuthContext } from "../../services/authentication/authentication.context";
import { View } from "react-native";

const SignInScreen = ({ navigation }) => {
  const windowDimensions = useContext(WindowContext);

  const { state, dispatch, clearInputFields, handleSignin, clearErrorFields } =
    useContext(AuthContext);

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
          {state.body.message && state.body.status === "SUCCESS" ? (
            <Text variant="success">{state.body.message}</Text>
          ) : (
            <Text variant="error">{state.body.message}</Text>
          )}
          <AccountButtonView>
            <AccountButton onPress={() => handleSignin()}>Submit</AccountButton>
            <AccountButton onPress={() => clearInputFields()}>
              Clear
            </AccountButton>
          </AccountButtonView>
          <View>
            <Text variant="caption">Don't have account?</Text>
            <Button
              onPress={() => {
                navigation.navigate("SignUp");
                clearErrorFields();
              }}
            >
              SignUp
            </Button>
          </View>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignInScreen;
