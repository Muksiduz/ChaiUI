import React from 'react';

const LiftButton = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={handleClick}
        className={`
          px-8 py-4 
          bg-blue-600 text-white 
          font-semibold text-lg rounded-xl 
          transition-all duration-300 ease-in-out
          shadow-[0_4px_10px_rgba(0,0,0,0.2)] 
          hover:-translate-y-2 
          hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] 
          active:translate-y-0 active:shadow-[0_4px_10px_rgba(0,0,0,0.2)] 
          focus:outline-none focus:ring-2 focus:ring-blue-400
        `}
      >
        Lift Me Up 🚀
      </button>
    </div>
  );
};

export default LiftButton;
