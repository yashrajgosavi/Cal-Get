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
import { AuthContext } from "../../services/authentication/authentication.context";
import { TextInput } from "react-native-paper";

const SignupScreen = () => {
  const windowDimensions = useContext(WindowContext);

  const {
    name,
    email,
    pwd,
    confirmPwd,

    setName,
    setEmail,
    setPwd,
    setConfirmPwd,

    icons,
    setIcons,

    nameError,
    emailError,
    pwdError,
    confirmPwdError,

    body,

    clearFields,
    handleSignup,
  } = useContext(AuthContext);

  useEffect(() => {
    if (!confirmPwd) {
      setIcons((prevIcons) => ({
        ...prevIcons,
        confirmPwd: "lock-question",
      }));
    } else if (pwd === confirmPwd) {
      setIcons((prevIcons) => ({
        ...prevIcons,
        confirmPwd: "lock-open-check",
      }));
    } else {
      setIcons((prevIcons) => ({ ...prevIcons, confirmPwd: "lock-alert" }));
    }
  }, [pwd, confirmPwd, setIcons]);

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
            value={name}
            onChangeText={(newName) => setName(newName)}
            left={<TextInput.Icon icon={icons.fullName} />}
          />
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
          <AccountTextInput
            width={windowDimensions.width}
            label="Confirm Password"
            value={confirmPwd}
            onChangeText={(newConfirmPwd) => setConfirmPwd(newConfirmPwd)}
            left={<TextInput.Icon icon={icons.confirmPwd} />}
          />
          {confirmPwdError ? (
            <Text variant="error">{confirmPwdError}</Text>
          ) : null}
          {body.message && body.status === "SUCCESS" ? (
            <Text variant="success">{body.message}</Text>
          ) : (
            <Text variant="error">{body.message}</Text>
          )}
          <AccountButtonView>
            <AccountButton onPress={() => handleSignup()}>Submit</AccountButton>
            <AccountButton onPress={clearFields}>Clear</AccountButton>
          </AccountButtonView>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignupScreen;
