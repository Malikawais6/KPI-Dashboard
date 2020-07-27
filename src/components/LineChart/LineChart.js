import React from "react";
import { LineChart } from "@k2/rv-viz";
import Numeral from "numeral";

import { lineChartData } from "../../Utils/mockData";
import { getNumberFromString } from "../../Utils/helpers";

const LineChartComponent = () => {
  return (
    <LineChart
      data={lineChartData}
      xyPlot={{
        xType: "ordinal",
      }}
      title="Revenue Trend By Region"
      verticalGridLines={false}
      horizontalGridLines={{
        tickValues: ["2000", "3000", "4000", "5000"],
      }}
      xAxis={{
        style: {
          fontSize: "12px",
          strokeWidth: 0.6,
        },
        tickFormat: (tick) => {
          const xAxisValues = getNumberFromString(tick);
          return xAxisValues && xAxisValues;
        },
        tickPadding: 15,
        tickSize: 0,
        // tickTotal: 7,
      }}
      yAxis={{
        hideLine: true,
        style: {
          fontSize: "12px",
        },
        tickPadding: 15,
        tickSize: 0,
        tickValues: ["2000", "3000", "4000", "5000"],
        tickFormat: (tick) => Numeral(tick).format("0a"),
        left: 10,
      }}
    />
  );
};

export default LineChartComponent;
