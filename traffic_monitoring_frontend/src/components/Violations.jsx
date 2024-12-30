import React, { useState } from 'react';
import violationsData from '../data/Violation.json'; // Ensure this is correctly located

const Violations = () => {
  const [violations, setViolations] = useState(
    violationsData.map((violation) => ({
      ...violation,
      status: 'Pending', // Default status
    }))
  );

  const updateStatus = (index, newStatus) => {
    const updatedViolations = [...violations];
    updatedViolations[index].status = newStatus;
    setViolations(updatedViolations);
  };

  const [filters, setFilters] = useState({
    status: '',
    violationType: '',
    vehicleId: '',
    startDate: '',
    endDate: '',
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredData = violations.filter((violation) => {
    const matchesStatus = filters.status ? violation.status.includes(filters.status) : true;
    const matchesViolationType = filters.violationType
      ? violation.violation.includes(filters.violationType)
      : true;
    const matchesVehicleId = filters.vehicleId ? violation.vehicle.includes(filters.vehicleId) : true;

    // Date range filtering logic
    const violationDate = new Date(violation.time);
    const matchesStartDate = filters.startDate ? violationDate >= new Date(filters.startDate) : true;
    const matchesEndDate = filters.endDate ? violationDate <= new Date(filters.endDate) : true;

    return matchesStatus && matchesViolationType && matchesVehicleId && matchesStartDate && matchesEndDate;
  });

  return (
    <div className="p-6 bg-gray-900 text-white h-screen">
      <h2 className="text-2xl font-bold mb-4">Traffic Violations</h2>
      {/* Filters Section */}
      <div className="bg-gray-800 shadow rounded-lg p-4 mb-4">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Status</label>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Filter by status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Violation Type</label>
            <select
              name="violationType"
              value={filters.violationType}
              onChange={handleFilterChange}
              className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Filter by type</option>
              <option value="NO_HELMET">No Helmet</option>
              <option value="NO_SEATBELT">No Seatbelt</option>
              <option value="OVERCROWDED">Overcrowded</option>
              <option value="SPEED_VIOLATION">Speed Violation</option>
              <option value="RED_LIGHT">Red Light</option>
              <option value="WRONG_WAY">Wrong Way</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Vehicle ID</label>
            <input
              type="text"
              name="vehicleId"
              value={filters.vehicleId}
              onChange={handleFilterChange}
              placeholder="Search by vehicle ID"
              className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="mt-1 block w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="text-right mt-4">
          <button
            onClick={() =>
              setFilters({
                status: '',
                violationType: '',
                vehicleId: '',
                startDate: '',
                endDate: '',
              })
            }
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Reset Filters
          </button>
        </div>
      </div>
      {/* Table Section */}
      <div className="bg-gray-800 shadow rounded-lg">
        <table className="table-auto w-full text-left text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">Time</th>
              <th className="p-3">Vehicle</th>
              <th className="p-3">Violation</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((violation, index) => (
              <tr key={index} className="border-b border-gray-600 hover:bg-gray-700">
                <td className="p-3">{violation.time}</td>
                <td className="p-3">{violation.vehicle}</td>
                <td className="p-3">{violation.violation}</td>
                <td className="p-3">{violation.status}</td>
                <td className="p-3 flex gap-2">
                  <button
                    className="text-green-400 hover:text-green-600"
                    onClick={() => updateStatus(index, 'Resolved')}
                  >
                    ✔
                  </button>
                  <button
                    className="text-red-400 hover:text-red-600"
                    onClick={() => updateStatus(index, 'In Progress')}
                  >
                    ⚠
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Violations;
