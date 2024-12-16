import React, { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("cameraAnalytics");

  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {/* Camera Analytics Section */}
        {activeSection === "cameraAnalytics" && (
          <div className="h-full w-full flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">
              Camera Analytics
            </h1>
            <div className="bg-white rounded shadow flex-1 p-6 flex justify-center items-center">
              <div className="w-full h-96 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">[Dummy Graph]</span>
              </div>
            </div>
          </div>
        )}

        {/* Camera Section */}
        {activeSection === "camera" && (
          <div className="h-full w-full flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Camera</h1>
            <div className="grid grid-cols-2 gap-6">
              {["Camera 1", "Camera 2", "Camera 3", "Camera 4"].map(
                (camera, index) => (
                  <div
                    key={index}
                    className="bg-white rounded shadow p-6 flex items-center justify-center h-48"
                  >
                    <span className="text-gray-600">{camera}</span>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Violations Section */}
        {activeSection === "violations" && (
          <div className="h-full w-full flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Violations</h1>
            <div className="bg-white rounded shadow flex-1 p-6">
              <p className="text-gray-600 mb-4">Filter violations:</p>
              <select
                className="p-2 border border-gray-300 rounded"
                onChange={(e) => console.log("Filter selected:", e.target.value)}
              >
                <option value="">Select Violation Type</option>
                <option value="speeding">Speeding</option>
                <option value="seatbelt">Seatbelt Violation</option>
                <option value="wrongParking">Wrong Parking</option>
              </select>
              <div className="bg-gray-200 h-64 mt-4 flex items-center justify-center rounded">
                <span className="text-gray-500">[Violations List Placeholder]</span>
              </div>
            </div>
          </div>
        )}

        {/* Settings Section */}
        {activeSection === "settings" && (
          <div className="h-full w-full flex flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Settings</h1>
            <div className="bg-white rounded shadow flex-1 p-6">
              <p className="text-gray-600 mb-6">Adjust your settings below:</p>
              <div className="space-y-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
                  Change Theme
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
                  Update Profile
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
                  Reset Data
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
