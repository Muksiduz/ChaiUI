import React from 'react';

const FlipCard = () => {
  return (
    <div className="w-64 h-40 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        <div className="absolute w-full h-full bg-blue-500 text-white rounded-xl flex items-center justify-center text-xl backface-hidden">
          Front
        </div>
        <div className="absolute w-full h-full bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl backface-hidden [transform:rotateY(180deg)]">
          Back
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
