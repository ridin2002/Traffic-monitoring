import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => setActiveTab("userManagement")}
        className={`px-4 py-2 rounded-lg ${
          activeTab === "userManagement"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-400"
        }`}
      >
        User Management
      </button>
      <button
        onClick={() => setActiveTab("cameraConfiguration")}
        className={`px-4 py-2 rounded-lg ${
          activeTab === "cameraConfiguration"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-400"
        }`}
      >
        Camera Configuration
      </button>
      <button
        onClick={() => setActiveTab("detectionFeatures")}
        className={`px-4 py-2 rounded-lg ${
          activeTab === "detectionFeatures"
            ? "bg-blue-600 text-white"
            : "bg-gray-800 text-gray-400"
        }`}
      >
        Detection Features
      </button>
    </div>
  );
};

export default Tabs;
