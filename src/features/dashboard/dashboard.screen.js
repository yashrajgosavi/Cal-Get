import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/authentication.context";
import { Button } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
import { View } from "react-native-web";

const Dashboard = () => {
  const [state, dispatch] = useContext(AuthContext);
  return (
    <View>
      <Text variant="title">Dashboard</Text>
      <Button
        icon="door"
        mode="contained"
        onPress={() => dispatch({ type: "SET_TOKEN", token: "" })}
      >
        Logout
      </Button>
    </View>
  );
};

export default Dashboard;

