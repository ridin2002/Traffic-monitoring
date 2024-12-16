import React from "react";

const CameraAnalytics = () => {
  return (
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
  );
};

export default CameraAnalytics;
