import React from "react";
import { Theme } from "@k2/utils";
import { Card, GridLayout } from "@k2/ui";

import { themeInterface } from "../../Utils/helpers";
import SalesAreaChart from "../../components/AreaChart";
import ColumnChartComponent from "../../components/SingleColumnChart/SingleColumnChart";
import DoubleColumnChart from "../../components/DoubleColumnChart/DoubleColumnChart";
import PieChartComponent from "../../components/PieChart";
import LineChartComponent from "../../components/LineChart";
import SankyChartComponent from "../../components/SankyChart";
import BubbleChartComponent from "../../components/BubbleChart";
import BarChartComponent from "../../components/BarChart";
import ForceDirectedGraph from "../../components/ClockGraph";
import Header from "../../components/Header";

export const Dashboard = (props) => {
  return (
    <Theme.ThemeProvider theme={themeInterface}>
      <Header />

      <GridLayout
        rowHeight={300}
        isResponsive={true}
        width="100%"
        isDraggable={false}
        noOfCols={3}
      >
        <Card widthUnits={2}>
          <SalesAreaChart />
        </Card>
        <Card widthUnits={1} heightUnits={1}>
          <ForceDirectedGraph />
        </Card>
        <Card widthUnits={1}>
          <ColumnChartComponent />
        </Card>
        <Card widthUnits={2}>
          <DoubleColumnChart />
        </Card>
        <Card widthUnits={1}>
          <PieChartComponent />
        </Card>
        <Card widthUnits={2}>
          <LineChartComponent />
        </Card>
        <Card widthUnits={2} heightUnits={2}>
          <SankyChartComponent />
        </Card>
        <Card widthUnits={1}>
          <BubbleChartComponent />
        </Card>
        <Card widthUnits={1}>
          <BarChartComponent />
        </Card>
      </GridLayout>
    </Theme.ThemeProvider>
  );
};
export default Dashboard;
