import React from "react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li
            className={`p-2 rounded cursor-pointer ${
              activeSection === "cameraAnalytics" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("cameraAnalytics")}
          >
            <span className="block text-lg">Camera Analytics</span>
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeSection === "camera" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("camera")}
          >
            <span className="block text-lg">Camera</span>
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeSection === "violations" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("violations")}
          >
            <span className="block text-lg">Violations</span>
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeSection === "settings" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("settings")}
          >
            <span className="block text-lg">Settings</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
