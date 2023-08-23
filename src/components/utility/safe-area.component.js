import React from "react";
import {
  SafeAreaView as AnotherSafeAreaView,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(AnotherSafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const SafeAreaContainer = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeArea>{children}</SafeArea>
    </SafeAreaProvider>
  );
};
