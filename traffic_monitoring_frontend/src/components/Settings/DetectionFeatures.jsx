import React, { useState } from "react";

const DetectionFeatures = () => {
  const [features, setFeatures] = useState([
    { id: 1, name: "Model Detection", enabled: true },
    { id: 2, name: "License Plate Recognition", enabled: false },
    { id: 3, name: "Seat Belt Detection", enabled: true },
  ]);

  const toggleFeature = (id) => {
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) =>
        feature.id === id ? { ...feature, enabled: !feature.enabled } : feature
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Detection Features</h2>
      <ul>
        {features.map((feature) => (
          <li
            key={feature.id}
            className="bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center"
          >
            <span>{feature.name}</span>
            <button
              onClick={() => toggleFeature(feature.id)}
              className={`px-4 py-2 rounded-lg ${
                feature.enabled
                  ? "bg-green-600 hover:bg-green-500"
                  : "bg-red-600 hover:bg-red-500"
              } text-white`}
            >
              {feature.enabled ? "Enabled" : "Disabled"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetectionFeatures;
