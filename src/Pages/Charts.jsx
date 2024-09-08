import React from "react";

import { AgCharts } from "ag-charts-react";

import { DB } from "../DATABASE";
import { getTopStreams } from "../utils";
import { Box, Flex, Grid } from "@chakra-ui/react";

const Charts = () => {
  console.log(getTopStreams());

  const myTheme = {
    palette: {
      fills: ["#01FFFF", "#021c1c"],
    },
  };

  const pieChart = {
    theme: myTheme,
    data: DB.revenue,
    title: {
      text: "Revenue",
    },
    background: {
      visible: false,
    },
    series: [
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "type",
      },
    ],
  };
  const barChart = {
    theme: myTheme,
    data: getTopStreams(),
    title: {
      text: "Top 5 streamed music",
    },
    background: {
      visible: false,
    },
    series: [
      {
        type: "bar",
        xKey: "music",
        yKey: "stream",
        yName: "stream count",
      },
    ],
  };
  const lineChart = {
    theme: myTheme,
    data: DB.userGrowthData,
    title: {
      text: "User Growth",
    },
    background: {
      visible: false,
    },
    series: [
      {
        type: "line",
        xKey: "id",
        xName: "id",
        yKey: "activeUsers",
        yName: "Active Users",
        interpolation: { type: "smooth" },
      },
      {
        type: "line",
        xKey: "id",
        xName: "id",
        yKey: "users",
        yName: "Users",
        interpolation: { type: "smooth" },
      },
    ],
  };
  return (
    <Box>
      <Grid templateColumns={{
        base:"repeat(1,1fr)",
        lg: "repeat(2,1fr)"
      }} w={"100%"}>
        <AgCharts options={lineChart} />
        <AgCharts options={pieChart} />
      </Grid>

      <AgCharts style={{ width: "100%", height: "400px" }} options={barChart} />
    </Box>
  );
};

export default Charts;
