import React from "react";
import Chart from "react-apexcharts";

const ReportChart = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    toolbar: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 45, 50, 49],
    },
  ];
  return (
    <>
      <Chart options={options} series={series} type="bar" width={"65%"} />
    </>
  );
};

export default ReportChart;
