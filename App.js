import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaContainer } from "./src/components/safearea/safe-area.component";
import RegisterScreen from "./src/screens/signup/register.screen";

export default function App() {
  return (
    <>
      <SafeAreaContainer>
        <RegisterScreen />
      </SafeAreaContainer>
      <ExpoStatusBar style="auto" backgroundColor="#c2ccce" />
    </>
  );
}
