import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { useFonts } from "expo-font";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WindowSizeProvider } from "./src/services/window/window.context";
import AuthProvider from "./src/services/authentication/authentication.context";
import AppNav from "./src/services/navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular: require("./assets/fonts/Oswald-Regular.ttf"),
    Lato_400Regular: require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
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
              <AppNav />
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
