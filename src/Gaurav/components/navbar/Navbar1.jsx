import React from 'react';

const Navbar1 = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-b from-amber-700 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-20">

          {/* Left side: Logo */}
          <div className="flex items-center gap-3">
            <img src="" alt="our logo" className="h-8 w-8" />
            <h3 className="text-2xl font-bold leading-loose text-amber-300">chaiUI</h3>
          </div>

          {/* Center nav links */}
          <div className="hidden md:flex gap-8 font-semibold">
            <h3 className="hover:text-amber-400 transition-all duration-300 cursor-pointer">About Us</h3>
            <h3 className="hover:text-amber-400 transition-all duration-300 cursor-pointer">Contact Us</h3>
            <h3 className="hover:text-amber-400 transition-all duration-300 cursor-pointer">GitHub</h3>
          </div>

          {/* Right side: Search bar */}
          <div className="hidden sm:block">
            <input
              className="bg-transparent font-semibold leading-loose text-white placeholder-white/60 border-b border-white/30 px-2 py-1 focus:outline-none"
              type="text"
              placeholder="Search here..."
            />
          </div>

          {/* Mobile Hamburger (optional functionality) */}
          <div className="block md:hidden text-white text-2xl">
            <button>☰</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar1;
