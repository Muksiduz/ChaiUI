import React from 'react';

const GradientBorderCard = () => {
  return (
    <div className="relative p-[2px] w-64 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-[gradientMove_4s_linear_infinite]">
      <div className="bg-white p-6 rounded-xl">
        <h2 className="font-bold text-lg">Animated Gradient</h2>
        <p className="text-gray-600">Moving gradient border.</p>
      </div>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
};

export default GradientBorderCard;
