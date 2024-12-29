import React, { useState } from "react";

const Settings = () => {
  // State to control active tab
  const [activeTab, setActiveTab] = useState("userPreferences");

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "userPreferences":
        return (
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">User Preferences</h2>
            <p className="text-gray-400">
              Customize your preferences, including themes and notifications.
            </p>
          </div>
        );
      case "accountSettings":
        return (
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <p className="text-gray-400">
              Manage your account details, passwords, and privacy settings.
            </p>
          </div>
        );
      case "systemUpdates":
        return (
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4">System Updates</h2>
            <p className="text-gray-400">
              Check for system updates and enable auto-updates.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">System Settings</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-6 mb-6">
        <button
          onClick={() => setActiveTab("userPreferences")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "userPreferences"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          User Preferences
        </button>
        <button
          onClick={() => setActiveTab("accountSettings")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "accountSettings"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Account Settings
        </button>
        <button
          onClick={() => setActiveTab("systemUpdates")}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            activeTab === "systemUpdates"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          System Updates
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">{renderTabContent()}</div>
    </div>
  );
};

export default Settings;
