import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/authentication.context";
import { Button } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
import { View } from "react-native";
import { removeASData } from "../../services/authentication/store.function";

const Dashboard = () => {
  const { dispatch, actions } = useContext(AuthContext);
  return (
    <View>
      <Text variant="title">Dashboard</Text>
      <Button
        icon="door"
        mode="outlined"
        onPress={() => {
          removeASData("userResponse");
          dispatch(actions.resetState());
        }}
      >
        Logout
      </Button>
    </View>
  );
};

export default Dashboard;
