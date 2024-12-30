import React from "react";
import { Line, Bar } from "react-chartjs-2"; // Assuming Chart.js is installed
import "chart.js/auto"; // Automatically registers Chart.js components

const CameraAnalytics = () => {
  // Data for charts
  const lineChartData = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    datasets: [
      {
        label: "No Helmet",
        data: [3, 5, 7, 8, 12, 9],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "No Seatbelt",
        data: [2, 4, 6, 7, 10, 8],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension: 0.4,
      },
      {
        label: "Speed Violation",
        data: [1, 3, 5, 7, 10, 7],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ["0-20", "21-40", "41-60", "61-80", "81-100", "100+"],
    datasets: [
      {
        label: "Vehicle Count",
        data: [10, 25, 80, 50, 20, 5],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {/* Header Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Vehicles", value: "1,234", change: "+12.5%", icon: "🚗", color: "green" },
          { label: "Active Violations", value: "42", change: "-4.3%", icon: "⚠️", color: "red" },
          { label: "Average Speed", value: "45 km/h", change: "+2.1%", icon: "⛵", color: "orange" },
          { label: "Road Occupancy", value: "68%", change: "+5.7%", icon: "👥", color: "green" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-4 flex items-center justify-between text-white"
          >
            <div>
              <h4 className="text-gray-400 font-medium">{stat.label}</h4>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p
                className={`text-sm ${
                  stat.color === "green" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change} vs last week
              </p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Violations Over Time */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-4">
          <h4 className="text-gray-400 font-medium mb-4">Violations Over Time</h4>
          <Line data={lineChartData} />
          <div className="mt-4 flex justify-between text-sm text-gray-400">
            <span className="text-red-500">No Helmet</span>
            <span className="text-orange-500">No Seatbelt</span>
            <span className="text-blue-500">Speed Violation</span>
          </div>
        </div>

        {/* Speed Distribution */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-4">
          <h4 className="text-gray-400 font-medium mb-4">Speed Distribution</h4>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default CameraAnalytics;
