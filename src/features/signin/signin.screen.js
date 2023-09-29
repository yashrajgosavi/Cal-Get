import React, { useContext } from "react";
import {
  AccountBackground,
  AccountButton,
  AccountCard,
  AccountDivider,
  AccountScrollView,
  AccountTextInput,
} from "../styles/account.styles";
import { Text } from "../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { WindowContext } from "../../services/window/window.context";
import { AuthContext } from "../../services/authentication/authentication.context";

const SignInScreen = () => {
  const windowDimensions = useContext(WindowContext);
  const {
    email,
    pwd,
    icons,
    setEmail,
    setPwd,
    nameError,
    emailError,
    pwdError,
    validateSignInForm,
  } = useContext(AuthContext);

  const handleSubmit = () => {
    if (validateSignInForm()) {
      console.log("Form is valid");
      // handle form submission
    }
  };

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

          {nameError ? <Text variant="error">{nameError}</Text> : null}
          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Email"
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
            left={<TextInput.Icon icon={icons.email} />}
          />
          {emailError ? <Text variant="error">{emailError}</Text> : null}

          <AccountTextInput
            width={windowDimensions.width}
            label="Enter Password"
            value={pwd}
            onChangeText={(newPwd) => setPwd(newPwd)}
            left={<TextInput.Icon icon={icons.pwd} />}
          />
          {pwdError ? <Text variant="error">{pwdError}</Text> : null}
          <AccountButton onPress={() => handleSubmit()}>Submit</AccountButton>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignInScreen;
