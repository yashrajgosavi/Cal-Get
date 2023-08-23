import React from "react";
import { SafeAreaContainer } from "./src/components/utility/safe-area.component";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";
import { View } from "react-native";
import { Text } from "./src/components/typography/text.component";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaContainer>
          <View>
            <Text>App.js</Text>
          </View>
        </SafeAreaContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" backgroundColor={theme.colors.bg.primary} />
    </>
  );
}
