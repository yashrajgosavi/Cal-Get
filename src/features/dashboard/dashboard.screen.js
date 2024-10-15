import React, { useContext } from "react";
import { AuthContext } from "../../services/authentication/authentication.context";
import { Button } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
import { Dimensions, View } from "react-native";
import { removeASData } from "../../services/authentication/store.function";
import ProgressChartComponent from "../../components/charts/progress.chart.component";
import { BarChart } from "react-native-chart-kit";

const Dashboard = () => {
  const { dispatch, actions } = useContext(AuthContext);

  const screenWidth = Dimensions.get("window").width;
  const data2 = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [20, 45, 27, 13, 4],
      },
    ],
  };

  return (
    <View>
      <Text variant="title">Dashboard</Text>
      <ProgressChartComponent
        data={{
          labels: ["Swim", "Bike", "Run"],
          data: [0.4, 0.6, 0.8],
        }}
        gradientColors={["#ff0000", "#0000ff"]}
        color="#00ff00"
      />

      <BarChart
        data={data2}
        width={screenWidth}
        height={220}
        yAxisLabel={"$"}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
