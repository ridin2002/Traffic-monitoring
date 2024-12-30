import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Report = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedReport, setSelectedReport] = useState(""); // No default report selected
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility

  // Define report content based on the selected report type
  const renderReportContent = () => {
    if (!selectedReport) {
      return (
        <p className="text-gray-400">
          Select a report type to view available reports.
        </p>
      );
    }

    switch (selectedReport) {
      case "Traffic Violations Summary":
        return (
          <>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <span>🚫</span> Traffic Violations Summary
            </h3>
            <p className="text-gray-400 mb-4">
              Summary of all traffic violations including type distribution and severity analysis.
            </p>
          </>
        );
      case "Speed Analysis Report":
        return (
          <>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <span>🏎️</span> Speed Analysis Report
            </h3>
            <p className="text-gray-400 mb-4">
              Detailed analysis of vehicle speeds across different zones and time periods.
            </p>
          </>
        );
      case "Vehicle Occupancy Trends":
        return (
          <>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <span>👥</span> Vehicle Occupancy Trends
            </h3>
            <p className="text-gray-400 mb-4">
            Vehicle occupancy patterns and compliance with capacity regulations
            </p>
          </>
        );
      case "Traffic Congestion Analysis":
        return (
          <>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <span>🚦</span> Traffic Congestion Analysis
            </h3>
            <p className="text-gray-400 mb-4">
            Traffic flow analysis and congestion hotspot identification
            </p>
          </>
        );
      case "Environmental Impact":
        return (
          <>
            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
              <span>🌱</span> Environmental Impact
            </h3>
            <p className="text-gray-400 mb-4">
            Environmental metrics including air quality and noise levels
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Traffic Reports</h2>

      {/* Filters Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 mb-6">
        <div className="grid grid-cols-3 gap-4">
          {/* Report Type Dropdown */}
          <div className="col-span-1 relative">
            <label className="block text-gray-400 mb-2">Report Type</label>
            <div
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {selectedReport || "Select Report Type"}
            </div>
            {showDropdown && (
              <ul className="absolute mt-2 w-full bg-gray-700 text-white rounded-md shadow-lg z-10">
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReport("Traffic Violations Summary");
                    setShowDropdown(false);
                  }}
                >
                  🚫 Traffic Violations Summary
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReport("Speed Analysis Report");
                    setShowDropdown(false);
                  }}
                >
                  🏎️ Speed Analysis Report
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReport("Vehicle Occupancy Trends");
                    setShowDropdown(false);
                  }}
                >
                  👥 Vehicle Occupancy Trends
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReport("Traffic Congestion Analysis");
                    setShowDropdown(false);
                  }}
                >
                  🚦 Traffic Congestion Analysis
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => {
                    setSelectedReport("Environmental Impact");
                    setShowDropdown(false);
                  }}
                >
                  🌱 Environmental Impact
                </li>
              </ul>
            )}
          </div>

          {/* Date Range Input */}
          <div className="col-span-1">
            <label className="block text-gray-400 mb-2">Date Range</label>
            <div className="flex space-x-2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="End Date"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              />
            </div>
          </div>

          {/* Generate Report Button */}
          <div className="col-span-1 flex items-end">
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 flex items-center gap-2">
              <span>📄</span> Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        {renderReportContent()}
        {selectedReport && (
          <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 flex items-center gap-2 mt-4">
            <span>⬇️</span> Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default Report;
