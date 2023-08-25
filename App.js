import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastucture/theme";
import { SafeAreaContainer } from "./src/components/utility/safe-area.component";
import { Text } from "./src/components/typography/text.component";
import ThemeScreen from "./src/features/settings/screens/theme.screen";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    if (oswaldLoaded && latoLoaded) {
      setIsFontsLoaded(true);
    }
  }, [oswaldLoaded, latoLoaded]);

  if (!isFontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.brand.primary} />
      </View>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaContainer>
          <ThemeScreen />
        </SafeAreaContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" backgroundColor={theme.colors.bg.primary} />
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
