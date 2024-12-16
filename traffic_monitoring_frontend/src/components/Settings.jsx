import React from "react";

const Settings = () => {
  return (
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
  );
};

export default Settings;
