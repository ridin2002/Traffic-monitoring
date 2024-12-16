import React from "react";

const Violations = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Violations</h1>
      <div className="bg-white rounded shadow flex-1 p-6">
        <p className="text-gray-600 mb-4">Filter violations:</p>
        <select
          className="p-2 border border-gray-300 rounded"
          onChange={(e) => console.log("Filter selected:", e.target.value)}
        >
          <option value="">Select Violation Type</option>
          <option value="speeding">Speeding</option>
          <option value="seatbelt">Seatbelt Violation</option>
          <option value="wrongParking">Wrong Parking</option>
        </select>
        <div className="bg-gray-200 h-64 mt-4 flex items-center justify-center rounded">
          <span className="text-gray-500">[Violations List Placeholder]</span>
        </div>
      </div>
    </div>
  );
};

export default Violations;
