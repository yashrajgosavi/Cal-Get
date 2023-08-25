import { StyleSheet, View } from "react-native";
import React from "react";
import { Mybutton, Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ThemeScreen = () => {
  return (
    <View style={styles.container}>
      <Spacer size="medium" />
      <Text variant="body">Body</Text>
      <Spacer size="large" />
      <Text>Default</Text>
      <Spacer size="xl" />
      <Text variant="caption">Caption</Text>
      <Spacer size="xxl" />
      <Text variant="hint">Hint</Text>
      <Spacer size="medium" />
      <Text variant="error">Error</Text>
      <Spacer size="large" />
      <Text variant="label">Label Lato_400Regular</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemeScreen;
