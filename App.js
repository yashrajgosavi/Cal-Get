import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import SignupScreen from "./src/features/signup/signup.screen";
import { WindowSizeProvider } from "./src/services/window/window.context";
import { AuthProvider } from "./src/services/authentication/authentication.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.brand.primary} />
      </View>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <WindowSizeProvider>
            <AuthProvider>
              <SignupScreen />
            </AuthProvider>
          </WindowSizeProvider>
        </SafeArea>
        <ExpoStatusBar
          style="auto"
          backgroundColor={theme.colors.statusbar.signup}
        />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
