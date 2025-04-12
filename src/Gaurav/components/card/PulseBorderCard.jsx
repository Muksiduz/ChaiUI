import React from 'react';

const PulseBorderCard = () => {
  return (
    <div className="p-6 w-64 bg-white rounded-xl border-4 border-pink-500 animate-pulse shadow-md">
      <h2 className="font-bold text-lg">Pulsing Border</h2>
      <p className="text-gray-600">Constant animated pulse.</p>
    </div>
  );
};

export default PulseBorderCard;
