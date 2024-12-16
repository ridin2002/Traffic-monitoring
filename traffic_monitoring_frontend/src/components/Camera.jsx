import React, { useState } from "react";

const Camera = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);

  const cameraNames = [
    "Pallimoola Junction Camera",
    "City Center Camera",
    "Highway Exit Camera",
    "North Gate Camera",
    "South Park Camera",
    "East Square Camera",
  ];

  const openPopup = (camera) => {
    setSelectedCamera(camera);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedCamera(null);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Camera</h1>
      <div className="grid grid-cols-3 gap-6">
        {cameraNames.map((name, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Vertical Card */}
            <div
              className="bg-white rounded shadow w-64 h-80 flex flex-col border border-gray-300 overflow-hidden cursor-pointer hover:shadow-lg"
              onClick={() => openPopup(name)}
            >
              {/* Upper Section */}
              <div className="flex-1 flex items-center justify-center bg-blue-100">
                <span className="text-gray-400 text-lg font-medium">
                  Camera {index + 1}
                </span>
              </div>
              {/* Horizontal Line */}
              <div className="w-full border-t border-gray-300"></div>
              {/* Bottom Section */}
              <div className="h-16 flex items-center justify-center bg-gray-50">
                <span className="text-black font-semibold text-center">
                  {name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Video Window */}
      {showPopup && selectedCamera && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-lg overflow-hidden relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={closePopup}
            >
              Close
            </button>
            <div className="w-full h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-800 p-4 border-b">
                {selectedCamera} - Live Video
              </h2>
              <div className="flex-1 bg-black flex items-center justify-center">
                <video className="w-full h-full" controls autoPlay>
                  {/* Updated video source path */}
                  <source src="/sample.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Camera;
