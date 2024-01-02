import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { WindowSizeProvider } from "./src/services/window/window.context";
import AuthProvider from "./src/services/authentication/authentication.context";
import SignInScreen from "./src/features/signin/signin.screen";

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
    <ThemeProvider theme={theme}>
      <SafeArea>
        <WindowSizeProvider>
          <AuthProvider>
            <SignInScreen />
            <ExpoStatusBar
              style="auto"
              backgroundColor={theme.colors.statusbar.signup}
            />
          </AuthProvider>
        </WindowSizeProvider>
      </SafeArea>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
