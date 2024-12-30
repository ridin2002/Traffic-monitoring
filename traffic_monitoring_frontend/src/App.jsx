import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CameraAnalytics from "./components/analytics/CameraAnalytics";

import NavBar from "./components/NavBar";
import LiveCameras from "./components/LiveCameras";
import Violations from "./components/Violations";
//import Settings from "./components/Settings";
import Reports from "./components/Reports";
import Settings from "./components/Settings/Settings";


const App = () => {
  const [activeSection, setActiveSection] = useState("cameraAnalytics");

  return (
    <div className="h-screen w-screen flex flex-col flex overflow-hidden">
      {/* NavBar */}
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-auto">
        {activeSection === "cameraAnalytics" && <CameraAnalytics />}
        {activeSection === "liveCameras" && <LiveCameras />}
        {activeSection === "violations" && <Violations />}
        {activeSection === "settings" && <Settings />}
        {activeSection === "reports" && <Reports />}
        
      </main>
      </div>
    </div>
  );
};

export default App;
