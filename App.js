import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <SafeArea>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeArea>
      <ExpoStatusBar style="autp" />
    </>
  );
}
