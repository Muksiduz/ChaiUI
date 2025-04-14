import React from 'react';

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-300 shadow-md flex justify-between items-center px-8">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="" alt="our logo" className="w-8 h-8 bg-white rounded-full" />
        <h3 className="text-2xl font-bold text-white drop-shadow">chaiUI</h3>
      </div>

      {/* Links */}
      <div className="flex gap-12 font-semibold text-white">
        <h3 className="hover:text-gray-100 cursor-pointer transition">About Us</h3>
        <h3 className="hover:text-gray-100 cursor-pointer transition">Contact Us</h3>
        <h3 className="hover:text-gray-100 cursor-pointer transition">GitHub</h3>
      </div>

      {/* Search Box */}
      <div>
      <input
  type="text"
  placeholder="Type here..."
  className="bg-transparent font-semibold leading-loose text-white placeholder-white/60 border-b border-white/30 px-2 py-1 focus:outline-none"
/>
      </div>

    </div>
  );
};

export default Navbar;

