import React from "react";
import { PieChart } from "@k2/rv-viz";
import Numeral from "numeral";

import { pieChartData } from "../../Utils/mockData";

const PieChartComponent = () => {
  return (
    <PieChart
      colors={{
        dark: ["#5579ae", "#7793be", "#99aece", "#bbc9df"],
        light: ["#1790c8", "#45a6d3", "#8ac7e3", "#d0e9f4"],
      }}
      title="Top Revenue By Region"
      radial={{ innerRadius: 0.75 }} // To create donut
      data={pieChartData}
      centerLabel={(tick) => {
        return Numeral(tick.total).format("0a");
      }}
      legends={false}
    />
  );
};

export default PieChartComponent;
