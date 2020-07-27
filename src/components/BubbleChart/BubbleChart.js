import React from "react";
import { BubbleChart } from "@k2/d3-viz";

const BubbleChartComponent = () => {
  return (
    <BubbleChart
      data={[
        {
          color: "rgb(240, 114, 143)",
          name: "Europe",
          value: 50,
        },
        {
          color: "rgb(240, 114, 143, 0.8)",
          name: "America",
          value: 25,
        },
        {
          color: "rgb(240, 114, 143, 0.6)",
          name: "Africa",
          value: 16.7,
        },
        {
          color: "rgb(240, 114, 143, 0.4)",
          name: "Others",
          value: 8.3,
        },
      ]}
      legends={false}
      title={<span>Top Revenue By Region</span>}
    />
  );
};
export default BubbleChartComponent;
