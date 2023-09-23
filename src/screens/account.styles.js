import { Button, Dimensions } from "react-native";
import { Card, Divider, TextInput } from "react-native-paper";
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

export const AccountCard = styled(Card)`
  background-color: wheat;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
  max-width: 500px; // 500 is the maximum width
  height: auto;
  margin-top: ${(props) => props.marginTop}px;
`;

export const AccountDivider = styled(Divider)`
  border: 1px;
  margin: 10px;
`;

const windowWidth = Dimensions.get("window").width;

export const AccountTextInput = styled(TextInput)`
  background-color: transparent;
  margin: 10px;
  font-size: ${windowWidth < 500 ? "14px" : "16px"};
  width: ${windowWidth < 500 ? 300 : 400}px;
`;

export const AccountButton = styled(Button)``;
