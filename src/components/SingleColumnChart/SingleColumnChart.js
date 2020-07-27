import React from "react";
import { ColumnChart } from "@k2/rv-viz";
import { singleColumnChartData } from "../../Utils/mockData";

const SingleColumnChart = () => {
  return (
    <ColumnChart
      barWidth={0.1}
      data={singleColumnChartData}
      yAxis={false}
      xAxis={{
        tickSize: 0,
      }}
      horizontalGridLines={false}
      verticalGridLines={false}
      title={<span>Brand Engagement Overview</span>}
      legends={false}
    />
  );
};

export default SingleColumnChart;
