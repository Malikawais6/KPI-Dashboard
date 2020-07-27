import React from "react";
import { ColumnChart } from "@k2/rv-viz";
import Numeral from "numeral";
import { doubleColumnChartData } from "../../Utils/mockData";

const DoubleColumnChart = () => {
  return (
    <ColumnChart
      animate
      barWidth={0.1}
      data={doubleColumnChartData}
      xAxis={{
        tickSize: 0,
      }}
      horizontalGridLines={{
        height: 10,
        innerHeight: 0.5,
        style: {
          strokeWidth: 0.5,
        },
        // tickTotal: 4,
        tickValues: ["0000", "10000", "20000"],
      }}
      verticalGridLines={false}
      yAxis={{
        hideLine: true,
        tickValues: ["0000", "10000", "20000"],
        tickFormat: (tick) => Numeral(tick).format("0a"),
        left: 10,
      }}
      title={<span>Brand Engagement By Region</span>}
    />
  );
};

export default DoubleColumnChart;
