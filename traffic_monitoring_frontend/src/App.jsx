import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CameraAnalytics from "./components/CameraAnalytics";
import Camera from "./components/Camera";
import LiveCameras from "./components/LiveCameras";
import Violations from "./components/Violations";
import Settings from "./components/Settings";

const App = () => {
  const [activeSection, setActiveSection] = useState("cameraAnalytics");

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-auto">
        {activeSection === "cameraAnalytics" && <CameraAnalytics />}
        {activeSection === "camera" && <LiveCameras />}
        {activeSection === "violations" && <Violations />}
        {activeSection === "settings" && <Settings />}
      </main>
    </div>
  );
};

export default App;
