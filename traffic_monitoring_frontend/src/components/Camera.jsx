import React from "react";

const Camera = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Camera</h1>
      <div className="grid grid-cols-2 gap-6">
        {["Camera 1", "Camera 2", "Camera 3", "Camera 4"].map((camera, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-6 flex items-center justify-center h-48"
          >
            <span className="text-gray-600">{camera}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camera;
