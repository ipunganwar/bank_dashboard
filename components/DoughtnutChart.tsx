"use client";

import React from "react";
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);

const DoughtnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountName = accounts?.map((a) => a?.name);
  const balances = accounts?.map((a) => a?.currentBalance);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: balances,
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountName,
  };
  return (
    <Doughnut
      data={data}
      options={{ cutout: "60%", plugins: { legend: { display: false } } }}
    />
  );
};

export default DoughtnutChart;
