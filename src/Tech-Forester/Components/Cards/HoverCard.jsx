import React, { useState } from 'react';

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform cursor-pointer"
      style={{
        transform: isHovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: isHovered
          ? '0 20px 25px -5px rgba(209, 104, 0, 0.1), 0 10px 10px -5px rgba(209, 104, 0, 0.05)'
          : ''
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Hover Card</h3>
        <p className="text-gray-600">
          An interactive card with dynamic hover effects and scaling animation.
        </p>
      </div>
      <div className="bg-amber-50 px-6 py-4">
        <code className="text-amber-700 text-sm">
          &lt;HoverCard&gt;...&lt;/HoverCard&gt;
        </code>
      </div>
    </div>
  );
};

export default HoverCard;
