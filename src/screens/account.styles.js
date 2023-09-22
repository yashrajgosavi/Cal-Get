import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const AccountScrollView = styled.ScrollView`
  flex: auto;
`;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../assets/home_bg.jpg"),
})`
  flex: auto;
  height: ${Dimensions.get("screen").height}px;
  align-items: center;
  justify-self: flex-start;
`;
