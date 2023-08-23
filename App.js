import React from "react";
import { Text, View } from "react-native";
import { SafeAreaContainer } from "./src/components/utility/safe-area.component";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastucture/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaContainer>
          <View>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </SafeAreaContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" backgroundColor={theme.colors.bg.primary} />
    </>
  );
}
