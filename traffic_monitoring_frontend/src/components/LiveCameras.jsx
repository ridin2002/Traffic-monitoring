import React, { useState } from "react";

const LiveCameras = () => {
  const cameras = [
    { id: 1, name: "In gate camera 1", location: "Gec gate camera", status: "Active" },
    { id: 2, name: "Out gate camera1", location: "Gec gate camera", status: "Active" },
    { id: 3, name: "Civil Juction", location: "Civil dept", status: "Active" },
    { id: 4, name: "In gate camera 2", location: "Gec gate camera", status: "Active" },
    { id: 5, name: "In gate camera 3", location: "Gec gate camera", status: "Active" },
    { id: 6, name: "Civil Juction", location: "Civil dept", status: "Active" },
    { id: 7, name: "Civil Juction", location: "Civil dept", status: "Inactive" },
  ];

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamera, setSelectedCamera] = useState(null);

  // Function to open the modal with the selected camera feed
  const handleViewLive = (camera) => {
    setSelectedCamera(camera);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCamera(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">Live Traffic Cameras</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              {/* Placeholder for the live feed or preview image */}
              <span className="text-gray-500 text-sm">Live Feed Unavailable</span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-white">{camera.name}</h2>
              <p className="text-sm text-gray-400">{camera.location}</p>
              <div className="mt-4 flex justify-between items-center">
                <p
                  className={`text-sm font-medium ${
                    camera.status === "Active" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {camera.status}
                </p>
                <button
                  onClick={() => handleViewLive(camera)}
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
                >
                  View Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying camera feed */}
      {isModalOpen && selectedCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-3/4 md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-white">
                Live Feed - {selectedCamera.name}
              </h2>
              <button
                onClick={closeModal}
                className="text-white bg-red-600 hover:bg-red-500 rounded-full p-2"
              >
                X
              </button>
            </div>
            <div className="relative pb-[56.25%] bg-gray-700">
              {/* Placeholder for camera feed, this can be replaced with an actual video stream */}
              <span className="absolute inset-0 text-center text-gray-500">
                Live Feed Unavailable
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveCameras;
