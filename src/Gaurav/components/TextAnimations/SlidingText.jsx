import React from "react";

const SlidingText = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="overflow-hidden relative w-full">
        <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 animate-slide">
          <h1 className="whitespace-nowrap">ChaiUI Sliding Text Animation</h1>
        </div>
      </div>

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          .animate-slide {
            animation: slide 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default SlidingText;
