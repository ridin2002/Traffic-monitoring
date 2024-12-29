import React, { useState } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    role: "Officer",
    badgeNumber: "",
    department: "",
    permissions: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setNewUser({
      name: "",
      role: "Officer",
      badgeNumber: "",
      department: "",
      permissions: [],
    });
    setIsModalOpen(false); // Close the modal after adding the user
  };

  const handlePermissionChange = (permission) => {
    setNewUser((prevUser) => {
      const { permissions } = prevUser;
      if (permissions.includes(permission)) {
        return {
          ...prevUser,
          permissions: permissions.filter((p) => p !== permission),
        };
      } else {
        return {
          ...prevUser,
          permissions: [...permissions, permission],
        };
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white mb-6"
      >
        Add User
      </button>

      {/* Table to display users */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-b text-center">ID</th>
              <th className="px-4 py-2 border-r border-b text-center">Name</th>
              <th className="px-4 py-2 border-r border-b text-center">Role</th>
              <th className="px-4 py-2 border-r border-b text-center">Badge Number</th>
              <th className="px-4 py-2 border-r border-b text-center">Department</th>
              <th className="px-4 py-2 border-b text-center">Permissions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border-r border-b text-center">{user.id}</td>
                <td className="px-4 py-2 border-r border-b text-center">{user.name}</td>
                <td className="px-4 py-2 border-r border-b text-center">{user.role}</td>
                <td className="px-4 py-2 border-r border-b text-center">{user.badgeNumber}</td>
                <td className="px-4 py-2 border-r border-b text-center">{user.department}</td>
                <td className="px-4 py-2 border-b text-center">
                  {user.permissions.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding a new user */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-3/4 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Add New User</h2>
            <form onSubmit={handleAddUser}>
              <div className="mb-4">
                <label htmlFor="userName" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="userName"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userRole" className="block text-sm font-medium mb-2">
                  Role *
                </label>
                <select
                  id="userRole"
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  required
                >
                  <option value="Officer">Officer</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="badgeNumber"
                  className="block text-sm font-medium mb-2"
                >
                  Badge Number
                </label>
                <input
                  type="text"
                  id="badgeNumber"
                  value={newUser.badgeNumber}
                  onChange={(e) => setNewUser({ ...newUser, badgeNumber: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="Enter badge number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="department"
                  className="block text-sm font-medium mb-2"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  value={newUser.department}
                  onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                  className="w-full p-2 bg-gray-800 text-white rounded"
                  placeholder="Enter department"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Permissions</label>
                <div className="flex gap-4">
                  {["view", "Manage", "Edit Settings", "Manage users"].map((permission) => (
                    <label key={permission} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={permission}
                        checked={newUser.permissions.includes(permission)}
                        onChange={() => handlePermissionChange(permission)}
                        className="mr-2"
                      />
                      {permission}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-400 mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
