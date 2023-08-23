import { View } from "react-native";
import React from "react";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const ThemeScreen = () => {
  return (
    <View>
      <Text variant="title">Title Oswald_400Regular</Text>
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

export default ThemeScreen;
