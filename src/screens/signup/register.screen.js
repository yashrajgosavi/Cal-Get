import React, { useEffect, useState } from "react";
import {
  AccountBackground,
  AccountButton,
  AccountCard,
  AccountDivider,
  AccountScrollView,
  AccountTextInput,
} from "../account.styles";
import { Button, Text, TextInput } from "react-native-paper";
import { Dimensions, Platform } from "react-native";

export default function RegisterScreen() {
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get("window")
  );

  useEffect(() => {
    function handleResize({ window }) {
      setWindowDimensions(window);
    }

    const subscription = Dimensions.addEventListener("change", handleResize);
    return () => subscription.remove();
  }, []);

  const cardWidth = Math.min(windowDimensions.width * 0.9, 500); // 500 is the maximum width
  const marginTop =
    Platform.OS === "web"
      ? windowDimensions.height * 0.2
      : windowDimensions.height * 0.15; // 20% of the window's height

  const [email, setEmail] = React.useState("");

  return (
    <AccountScrollView>
      <AccountBackground>
        <AccountCard width={cardWidth} marginTop={marginTop}>
          <AccountCard.Content>
            <Text variant="displaySmall">Signup {email}</Text>
            <AccountDivider />
            <AccountTextInput
              mode="outlined"
              label="Enter Email"
              value={email}
              onChangeText={(email) => setEmail(email)}
              left={<TextInput.Icon icon="mail" />}
            />
            <AccountTextInput
              mode="outlined"
              label="Enter Password"
              value={email}
              onChangeText={(email) => setEmail(email)}
              left={<TextInput.Icon icon="lock" />}
            />
            <AccountTextInput
              mode="outlined"
              label="Confirm Password"
              value={email}
              onChangeText={(email) => setEmail(email)}
              left={<TextInput.Icon icon="lock" />}
            />
          </AccountCard.Content>
          <AccountCard.Actions>
            <AccountButton>Cancel</AccountButton>
          </AccountCard.Actions>
        </AccountCard>
      </AccountBackground>
    </AccountScrollView>
  );
}
