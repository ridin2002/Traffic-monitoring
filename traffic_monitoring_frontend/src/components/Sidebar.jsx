// import React from "react";

// const Sidebar = ({ activeSection, setActiveSection }) => {
//   return (
//     <aside className="w-64 bg-gray-800 text-white flex flex-col">
//       <div className="p-6 text-2xl font-bold border-b border-grey-700">
//         Dashboard
//       </div>
//       <nav className="flex-1 px-4 py-6">
//         <ul className="space-y-4">
//           <li
//             className={`p-2 rounded cursor-pointer ${
//               activeSection === "cameraAnalytics" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => setActiveSection("cameraAnalytics")}
//           >
//             <span className="block text-lg">Camera Analytics</span>
//           </li>
//           <li
//             className={`p-2 rounded cursor-pointer ${
//               activeSection === "camera" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => setActiveSection("camera")}
//           >
//             <span className="block text-lg">Camera</span>
//           </li>
//           <li
//             className={`p-2 rounded cursor-pointer ${
//               activeSection === "violations" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => setActiveSection("violations")}
//           >
//             <span className="block text-lg">Violations</span>
//           </li>
//           <li
//             className={`p-2 rounded cursor-pointer ${
//               activeSection === "settings" ? "bg-gray-700" : "hover:bg-gray-700"
//             }`}
//             onClick={() => setActiveSection("settings")}
//           >
//             <span className="block text-lg">Settings</span>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;



// import React from "react";
// import {
//   FaTachometerAlt,
//   FaCamera,
//   FaExclamationTriangle,
//   FaFileAlt,
//   FaCogs,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Sidebar = ({ activeSection, setActiveSection }) => (
//   <div className="bg-sidebarBg text-textPrimary w-60 h-screen flex flex-col shadow-lg">
//     <h2 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
//       Traffic Monitoring
//     </h2>
//     <nav className="flex-grow mt-4">
//       <ul className="space-y-2">
//         <li
//           className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
//             activeSection === "dashboard"
//               ? "bg-tableHover text-buttonPrimary"
//               : "hover:bg-tableHover"
//           }`}
//           onClick={() => setActiveSection("dashboard")}
//         >
//           <FaTachometerAlt
//             className={`mr-3 ${
//               activeSection === "dashboard"
//                 ? "text-buttonPrimary"
//                 : "text-gray-400 group-hover:text-buttonPrimary"
//             }`}
//           />
//           <span>Dashboard</span>
//         </li>
//         <li
//           className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
//             activeSection === "camera"
//               ? "bg-tableHover text-buttonPrimary"
//               : "hover:bg-tableHover"
//           }`}
//           onClick={() => setActiveSection("camera")}
//         >
//           <FaCamera
//             className={`mr-3 ${
//               activeSection === "liveCameras"
//                 ? "text-buttonPrimary"
//                 : "text-gray-400 group-hover:text-buttonPrimary"
//             }`}
//           />
//           <span>Live Cameras</span>
//         </li>
//         <li
//           className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
//             activeSection === "violations"
//               ? "bg-tableHover text-buttonPrimary"
//               : "hover:bg-tableHover"
//           }`}
//           onClick={() => setActiveSection("violations")}
//         >
//           <FaExclamationTriangle
//             className={`mr-3 ${
//               activeSection === "violations"
//                 ? "text-buttonPrimary"
//                 : "text-gray-400 group-hover:text-buttonPrimary"
//             }`}
//           />
//           <span>Violations</span>
//         </li>
//         <li
//           className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
//             activeSection === "reports"
//               ? "bg-tableHover text-buttonPrimary"
//               : "hover:bg-tableHover"
//           }`}
//           onClick={() => setActiveSection("reports")}
//         >
//           <FaFileAlt
//             className={`mr-3 ${
//               activeSection === "reports"
//                 ? "text-buttonPrimary"
//                 : "text-gray-400 group-hover:text-buttonPrimary"
//             }`}
//           />
//           <span>Reports</span>
//         </li>
//         <li
//           className={`group px-6 py-3 flex items-center rounded-md cursor-pointer ${
//             activeSection === "settings"
//               ? "bg-tableHover text-buttonPrimary"
//               : "hover:bg-tableHover"
//           }`}
//           onClick={() => setActiveSection("settings")}
//         >
//           <FaCogs
//             className={`mr-3 ${
//               activeSection === "settings"
//                 ? "text-buttonPrimary"
//                 : "text-gray-400 group-hover:text-buttonPrimary"
//             }`}
//           />
//           <span>Settings</span>
//         </li>
//       </ul>
//     </nav>
//     <div
//       className="px-6 py-4 hover:bg-tableHover flex items-center cursor-pointer rounded-md"
//       onClick={() => console.log("Logout clicked")}
//     >
//       <FaSignOutAlt className="mr-3 text-gray-400 group-hover:text-buttonPrimary" />
//       <span>Logout</span>
//     </div>
//   </div>
// );

// export default Sidebar;


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
          onClick={() => setActiveSection('dashboard')}
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
