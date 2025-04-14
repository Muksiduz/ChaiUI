import React from 'react';

const GlowLiftCard = () => {
  return (
    <div className="p-6 w-64 bg-white rounded-xl transition-all duration-300 shadow-md hover:shadow-2xl hover:ring-2 hover:ring-blue-400 hover:-translate-y-2">
      <h2 className="font-bold text-lg">Glow Lift</h2>
      <p className="text-gray-600">Hover to see glow and lift effect.</p>
    </div>
  );
};

export default GlowLiftCard;
