import React from "react";
import { AreaChart } from "@k2/rv-viz";
import Numeral from "numeral";

import { areaChartData } from "../../Utils/mockData";
import StaticLegends from "./StaticLegend";
import { getNumberFromString } from "../../Utils/helpers";

const SalesAreaChart = () => {
  return (
    <React.Fragment key=".0">
      <AreaChart
        crosshair={{
          xFormatter: function S() {},
        }}
        data={areaChartData}
        horizontalGridLines={{
          tickValues: ["2000", "3000", "4000", "5000"],
        }}
        verticalGridLines={false}
        title={<span>Sales Overview</span>}
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
        xyPlot={{
          margin: {
            bottom: 50,
            left: 30,
            top: 30,
          },
          // yDomain: [0, 200],
          xType: "ordinal",
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
        zone={{
          axis: "x",
          domain: [1595397801330, 1595398161330],
          id: "test",
          legendComponent: <StaticLegends />,
          range: [
            {
              color: "#e7352b",
              end: 1595397921330,
            },
            {
              color: "#1790c8",
              end: 1595398041330,
            },
          ],
        }}
      />
    </React.Fragment>
  );
};

export default SalesAreaChart;
