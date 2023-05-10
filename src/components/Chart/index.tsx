import React from "react";
import { VictoryChart, VictoryLine } from "victory-native";

type Props = {
  temperature: number[];
};

const Chart: React.FC<Props> = ({ temperature }): JSX.Element => {
  return (
    <VictoryChart>
      <VictoryLine
        data={temperature.map((temp, i) => ({ x: i, y: temp }))}
        interpolation="natural"
        style={{
          data: {
            stroke: "#6b65c9",
            strokeWidth: 3,
          },
        }}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </VictoryChart>
  );
};

export default Chart;
