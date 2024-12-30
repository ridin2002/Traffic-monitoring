
import React from 'react';
import {
  FaTachometerAlt,
  FaCamera,
  FaExclamationTriangle,
  FaFileAlt,
  FaCogs,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => (
<div className="bg-sidebarBg text-textPrimary w-60 h-screen flex flex-col shadow-lg overflow-auto">
<div className="flex flex-wrap p-4">
    <h2 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
      Traffic Monitoring
    </h2>
    <nav className="flex-grow mt-4">
      <ul className="space-y-2">
        <li
          className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
            activeSection === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('cameraAnalytics')}
        >
          <FaTachometerAlt className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
          <span className="group-hover:font-medium">Dashboard</span>
        </li>
        <li
          className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
            activeSection === 'liveCameras' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('liveCameras')}
        >
          <FaCamera className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
          <span className="group-hover:font-medium">Live Cameras</span>
        </li>
        <li
          className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
            activeSection === 'violations' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('violations')}
        >
          <FaExclamationTriangle className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
          <span className="group-hover:font-medium">Violations</span>
        </li>
        <li
          className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
            activeSection === 'reports' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('reports')}
        >
          <FaFileAlt className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
          <span className="group-hover:font-medium">Reports</span>
        </li>
        <li
          className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
            activeSection === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'
          }`}
          onClick={() => setActiveSection('settings')}
        >
          <FaCogs className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
          <span className="group-hover:font-medium">Settings</span>
        </li>
      </ul>
    </nav>
    {/* <div className="mt-auto px-6 py-4 hover:bg-tableHover flex items-center cursor-pointer rounded-md">
      <FaSignOutAlt className="mr-3 text-gray-400" />
      <span>Logout</span>
    </div> */}
    </div>
  </div>
);

export default Sidebar;
