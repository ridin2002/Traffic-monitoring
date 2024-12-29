import React, { useState } from "react";
import Tabs from "./Tabs";
import UserManagement from "./UserManagement";
import CameraConfiguration from "./CameraConfiguration";
import DetectionFeatures from "./DetectionFeatures";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("userManagement");

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "userManagement" && <UserManagement />}
      {activeTab === "cameraConfiguration" && <CameraConfiguration />}
      {activeTab === "detectionFeatures" && <DetectionFeatures />}
    </div>
  );
};

export default Settings;
