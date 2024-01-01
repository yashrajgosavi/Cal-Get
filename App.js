import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { Text, View } from "react-native";
import { WindowSizeProvider } from "./src/services/window/window.context";
import AuthProvider from "./src/services/authentication/authentication.context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeArea>
        <WindowSizeProvider>
          <AuthProvider>
            <View>
              <Text>Open up App.js to start working on your app!</Text>
              <ExpoStatusBar
                style="auto"
                backgroundColor={theme.colors.statusbar.signup}
              />
            </View>
          </AuthProvider>
        </WindowSizeProvider>
      </SafeArea>
    </ThemeProvider>
  );
}
