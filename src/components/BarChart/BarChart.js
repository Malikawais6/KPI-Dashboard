import React from "react";
import { BarChart } from "@k2/rv-viz";
import { barChartData } from "../../Utils/mockData";

const BarChartComponent = () => {
  return (
    <BarChart
      barWidth={0.5}
      classes={{
        barSeries: "barseries-bar",
        chart: "chart-bar",
        header: "header-bar",
        label: "label-bar",
        legends: "legends-bar",
        root: "root-bar",
        title: "title-bar",
        tooltip: "tooltip-bar",
        xAxis: "xAxis-bar",
        yAxis: "yAxis-bar",
      }}
      colors={{
        dark: ["#6098f3"],
        light: ["#6098f3"],
      }}
      data={barChartData}
      legends={false}
      title={<span>Top 5 Best Sellers</span>}
      xAxis={{
        style: {
          strokeWidth: 0.5,
        },
        tickFormat: (tick) => {
          return `${tick}%`;
        },
        tickSize: 0,
        tickTotal: 100,
        tickValues: [0, 20, 40, 60, 80, 100],
      }}
      label={(label) => {
        return `${label.data.x}%`;
      }}
      xyPlot={{
        margin: {
          left: 50,
          right: 30,
        },
        xDomain: [0.5, 100],
      }}
      yAxis={{
        hideLine: true,
        tickSize: 0,
      }}
      horizontalGridLines={false}
      verticalGridLines={false}
    />
  );
};
export default BarChartComponent;
