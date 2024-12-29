import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("userManagement");

  // States for User Management
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  // States for Camera Configuration
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [cameras, setCameras] = useState([]);
  const [newCamera, setNewCamera] = useState({
    name: "",
    location: "",
    status: "Active",
    url: "",
  });

  // States for Detection Features
  const [confidence, setConfidence] = useState(0.5);
  const [helmetDetection, setHelmetDetection] = useState(true);
  const [otherFeatures, setOtherFeatures] = useState(false);

  // Handlers for User Management
  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({ name: "", email: "" });
  };

  // Handlers for Camera Configuration
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
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("userManagement")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "userManagement"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          User Management
        </button>
        <button
          onClick={() => setActiveTab("cameraConfiguration")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "cameraConfiguration"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Camera Configuration
        </button>
        <button
          onClick={() => setActiveTab("detectionFeatures")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "detectionFeatures"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          Detection Features
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "userManagement" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            <form onSubmit={handleAddUser} className="mb-6">
              <div className="mb-4">
                <label htmlFor="userName" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userEmail" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
              >
                Add User
              </button>
            </form>

            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between"
                >
                  <span>
                    {user.name} - {user.email}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "cameraConfiguration" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Camera Configuration</h2>
            <button
              onClick={() => setIsCameraModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white mb-6"
            >
              Add Camera
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cameras.map((camera) => (
                <div
                  key={camera.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-lg font-semibold">{camera.name}</h2>
                  <p className="text-sm text-gray-400">
                    Location: {camera.location}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      camera.status === "Active"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    Status: {camera.status}
                  </p>
                  <p className="text-sm text-gray-400 truncate">
                    Stream URL: {camera.url}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal for Adding Camera */}
            {isCameraModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-gray-900 p-6 rounded-lg w-3/4 md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Add New Camera</h2>
                  <form onSubmit={handleAddCamera}>
                    <div className="mb-4">
                      <label htmlFor="cameraName" className="block text-sm font-medium mb-2">
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
                      <label htmlFor="cameraLocation" className="block text-sm font-medium mb-2">
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
                      <label htmlFor="cameraStatus" className="block text-sm font-medium mb-2">
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
                      <label htmlFor="cameraUrl" className="block text-sm font-medium mb-2">
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
        )}

        {activeTab === "detectionFeatures" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Detection Features</h2>
            <div className="mb-6">
              <label htmlFor="confidence" className="block text-sm font-medium mb-2">
                Confidence Level
              </label>
              <input
                type="range"
                id="confidence"
                value={confidence}
                min="0"
                max="1"
                step="0.01"
                onChange={(e) => setConfidence(parseFloat(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-400">Confidence: {confidence}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="helmetDetection" className="block text-sm font-medium mb-2">
                Helmet Detection
              </label>
              <input
                type="checkbox"
                id="helmetDetection"
                checked={helmetDetection}
                onChange={(e) => setHelmetDetection(e.target.checked)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="otherFeatures" className="block text-sm font-medium mb-2">
                Other Features
              </label>
              <input
                type="checkbox"
                id="otherFeatures"
                checked={otherFeatures}
                onChange={(e) => setOtherFeatures(e.target.checked)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
