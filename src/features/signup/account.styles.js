import {
  ImageBackground,
  Platform,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import styled from "styled-components/native";

export const AccountScrollView = styled(ScrollView)`
  flex: auto;
  scroll-behavior: smooth;
`;

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: auto;
  height: ${({ height }) => height}px;
  align-items: center;
  justify-content: flex-start;
`;

export const AccountCard = styled(View)`
  background-color: wheat;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width * 0.9}px;
  max-width: 500px;
  height: auto;
  margin-top: ${Platform.OS === "web"
    ? ({ marginTop }) => marginTop * 0.2
    : ({ marginTop }) => marginTop * 0.15}px;
`;

export const AccountDivider = styled(View)`
  height: 2px;
  width: 80%;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const AccountTextInput = styled(TextInput)`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  padding-left: 30px; /* Add space for the icon */
  background-color: transparent;
  font-size: ${({ width }) => (width < 500 ? 14 : 16)}px;
  width: ${({ width }) => (width < 500 ? 300 : 400)}px;
`;
