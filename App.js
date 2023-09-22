import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaContainer } from "./src/components/safearea/safe-area.component";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastucture/theme";
import { colors } from "./src/infrastucture/theme/colors";
import RegisterScreen from "./src/screens/signup/register.screen";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaContainer>
          <RegisterScreen />
        </SafeAreaContainer>
        <ExpoStatusBar style="auto" backgroundColor={colors.statusbar.signup} />
      </ThemeProvider>
    </>
  );
}
