import React from 'react';

const StaticNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-orange-500 via-amber-600 to-yellow-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white/30 rounded-full" />
            <h1 className="text-xl sm:text-2xl font-bold">chaiUI</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 text-sm sm:text-base font-semibold">
            <a href="#" className="hover:text-gray-100 transition">About</a>
            <a href="#" className="hover:text-gray-100 transition">Contact</a>
            <a href="#" className="hover:text-gray-100 transition">GitHub</a>
          </div>

          {/* Search bar */}
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 bg-white/20 placeholder-white/70 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none text-2xl">☰</button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default StaticNavbar;
