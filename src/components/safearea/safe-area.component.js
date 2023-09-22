import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

export const SafeAreaContainer = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeArea>{children}</SafeArea>
    </SafeAreaProvider>
  );
};
