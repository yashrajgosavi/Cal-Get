import React from "react";
import { Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const ProgressChartComponent = ({ data, gradientColors, color }) => {
  const chartConfig = {
    backgroundGradientFrom: gradientColors[0],
    backgroundGradientTo: gradientColors[1],
    backgroundGradientFromOpacity: 0.1,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) =>
      `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
      )}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  return (
    <ProgressChart
      data={data}
      width={screenWidth}
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      hideLegend={false}
    />
  );
};

export default ProgressChartComponent;
