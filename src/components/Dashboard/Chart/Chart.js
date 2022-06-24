import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = () => {
  let showdate = new Date();
  let displaytodaysdate =
    showdate.getDate() +
    "/" +
    showdate.getMonth() +
    "/" +
    showdate.getFullYear();
  return (
    <div className="w-[67vw] text-white  bg-transparent p-6">
      <h1 className="text-center text-3xl font-bold text-white">
        {" "}
        <span className="text-red-500">COVID-19</span> UPDATE CHART OF{" "}
        <span className="text-cyan-400"> {displaytodaysdate}</span>
      </h1>
      <Line
        className="text-white"
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "New Infected",

              data: [12, 34, 56, 102, 676, 98, 46],
              borderColor: "#00ff7f",

              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Recovery",
              data: [105, 134, 156, 102, 276, 8, 26],
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
              label: "Deth",
              data: [105, 14, 56, 502, 376, 22, 26],
              borderColor: "red",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              // position: 'top' as const,
            },
            title: {
              display: true,
              text: "",
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
