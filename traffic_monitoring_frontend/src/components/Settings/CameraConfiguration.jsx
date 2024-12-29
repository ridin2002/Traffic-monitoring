import React, { useState } from "react";

const CameraConfiguration = () => {
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [cameras, setCameras] = useState([]);
  const [newCamera, setNewCamera] = useState({
    name: "",
    location: "",
    status: "Active",
    url: "",
  });

  const handleCameraInputChange = (e) => {
    const { name, value } = e.target;
    setNewCamera({ ...newCamera, [name]: value });
  };

  const handleAddCamera = (e) => {
    e.preventDefault();
    setCameras([...cameras, { ...newCamera, id: cameras.length + 1 }]);
    setNewCamera({ name: "", location: "", status: "Active", url: "" });
    setIsCameraModalOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Camera Configuration</h2>
      <button
        onClick={() => setIsCameraModalOpen(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white mb-6"
      >
        Add Camera
      </button>

      {/* Table to display cameras */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-b text-center">Camera Name</th>
              <th className="px-4 py-2 border-r border-b text-center">Location</th>
              <th className="px-4 py-2 border-r border-b text-center">Status</th>
              <th className="px-4 py-2 border-b text-center">Stream URL</th>
            </tr>
          </thead>
          <tbody>
            {cameras.map((camera) => (
              <tr key={camera.id}>
                <td className="px-4 py-2 border-r border-b text-center">{camera.name}</td>
                <td className="px-4 py-2 border-r border-b text-center">{camera.location}</td>
                <td className="px-4 py-2 border-r border-b text-center">
                  <span
                    className={`${
                      camera.status === "Active"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {camera.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center truncate">{camera.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Camera */}
      {isCameraModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-3/4 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Add New Camera</h2>
            <form onSubmit={handleAddCamera}>
              <div className="mb-4">
                <label
                  htmlFor="cameraName"
                  className="block text-sm font-medium mb-2"
                >
                  Camera Name
                </label>
                <input
                  type="text"
                  id="cameraName"
                  name="name"
                  value={newCamera.name}
                  onChange={handleCameraInputChange}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cameraLocation"
                  className="block text-sm font-medium mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="cameraLocation"
                  name="location"
                  value={newCamera.location}
                  onChange={handleCameraInputChange}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cameraStatus"
                  className="block text-sm font-medium mb-2"
                >
                  Status
                </label>
                <select
                  id="cameraStatus"
                  name="status"
                  value={newCamera.status}
                  onChange={handleCameraInputChange}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cameraUrl"
                  className="block text-sm font-medium mb-2"
                >
                  Stream URL
                </label>
                <input
                  type="url"
                  id="cameraUrl"
                  name="url"
                  value={newCamera.url}
                  onChange={handleCameraInputChange}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsCameraModalOpen(false)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
                >
                  Add Camera
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraConfiguration;
