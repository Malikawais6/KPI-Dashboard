import React from "react";
import { SankeyChart } from "@k2/d3-viz";
import { sankeyChartData } from "../../Utils/mockData";

const SankyChartComponent = () => {
  return (
    <SankeyChart
      data={sankeyChartData}
      linkProps={{
        color: "#30b1d9",
        mode: "default",
      }}
      nodeProps={{
        colorScheme: ["#f6f6f6"],
        shape: "rect",
        width: 25,
      }}
      title={<span>Basic SankeyChart</span>}
    />
  );
};
export default SankyChartComponent;
