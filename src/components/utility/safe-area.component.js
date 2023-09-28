import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  /* background-color: ${({ theme }) => theme.colors.statusbar.signup}; */
  margin-top: ${StatusBar.currentHeight}px;
`;
