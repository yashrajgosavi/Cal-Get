import React, { useContext, useState } from "react";
import {
  AccountBackground,
  AccountCard,
  AccountDivider,
  AccountScrollView,
  AccountTextInput,
} from "./account.styles";
import { WindowContext } from "../../services/window/window.context";
import { Text } from "../../components/typography/text.component";
import { AuthContext } from "../../services/authentication/authentication.context";

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
  } = useContext(AuthContext);

  const [icons, setIcons] = useState({
    fullName: "account",
    email: "email",
    pwd: "lock",
    confirmPwd: "lock-question",
  });

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
          <Text variant="title">Signup</Text>
          <AccountDivider />
          <AccountTextInput
            width={windowDimensions.width}
            mode="outlined"
            label="Enter Full Name"
            value={name}
            onChangeText={(newName) => setName(newName)}
          />
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
};

export default SignupScreen;
