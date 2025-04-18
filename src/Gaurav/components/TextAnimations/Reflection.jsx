import React from 'react';

const Reflection = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-black">
      <div className="text-center">
        {/* Main text */}
        <h1 className="text-white text-6xl font-bold">ChaiUI</h1>

        {/* Reflection */}
        <h1 className="text-white text-6xl font-bold opacity-30 transform scale-y-[-1] mt-1 mask-gradient">
          ChaiUI
        </h1>
      </div>
    </div>
  );
};

export default Reflection;
