import React, { useState } from "react";

const NavBar = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Title */}
      <h1 className="text-2xl font-bold">Traffic Monitoring Dashboard</h1>
      
      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white outline-none placeholder-gray-400"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <span className="text-sm">Admin</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};
export default NavBar;