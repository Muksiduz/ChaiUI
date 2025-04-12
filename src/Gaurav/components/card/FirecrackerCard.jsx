import React, { useState } from 'react';

const FirecrackerCard = () => {
  const [animate, setAnimate] = useState(false);

  const startAnimation = () => setAnimate(true);
  const stopAnimation = () => setAnimate(false);

  return (
    <div className="relative w-[300px] h-[200px] mx-auto mt-10">
      <div
        className={`relative w-full h-full rounded-xl border-2 border-orange-500 bg-white shadow-xl flex flex-col items-center justify-center p-4 text-black transition-all duration-300 ${
          animate ? 'shadow-lg' : ''
        }`}
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
      >
        <h2 className="text-xl font-bold mb-2">Firecracker Card</h2>
        <p className="text-sm text-center mb-4">Click below to start the firework show!</p>

        <button
          onClick={startAnimation}
          className="px-6 py-2 bg-orange-500 hover:bg-orange-400 rounded-full text-white font-semibold"
        >
          Ignite Fireworks
        </button>

        {/* Multiple Sparks */}
        {animate && (
          <>
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker1" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker2" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker3" />
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-firecracker4" />
          </>
        )}
      </div>

      {/* Keyframe Animations for Firecracker Movement */}
      <style>
        {`
          @keyframes firecracker1 {
            0%   { top: 0; left: 0; }
            25%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 100%; left: 0; transform: translate(0, -100%); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker2 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            50%  { top: 100%; left: 0; transform: translate(0, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker3 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 0; transform: translate(0, -100%); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          @keyframes firecracker4 {
            0%   { top: 0; left: 0; }
            25%  { top: 100%; left: 0; transform: translate(0, -100%); }
            50%  { top: 100%; left: 100%; transform: translate(-100%, -100%); }
            75%  { top: 0; left: 100%; transform: translate(-100%, 0); }
            100% { top: 0; left: 0; }
          }

          .animate-firecracker1 {
            animation: firecracker1 2s linear infinite;
          }

          .animate-firecracker2 {
            animation: firecracker2 2s linear infinite;
          }

          .animate-firecracker3 {
            animation: firecracker3 2s linear infinite;
          }

          .animate-firecracker4 {
            animation: firecracker4 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default FirecrackerCard;
