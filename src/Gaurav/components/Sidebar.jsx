import React from 'react';
import { FaHome, FaFileAlt, FaChartBar, FaShieldAlt, FaBug, FaUserShield, FaLock, FaDatabase } from 'react-icons/fa';
import { MdOutlineExpandMore } from 'react-icons/md';
import { useState } from 'react';

import {toggleDarkMode} from '../../MuksidRandom/Toggle/toggleLogic'


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
   

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

//     const [isDark, setIsDark] = useState(true);

//   const darkMode = () => {
//     setIsDark(!isDark);
//   };

  return (
    <div className="absolute top-0 left-0 min-h-screen w-64 bg-white text-black dark:bg-[#111827] dark:text-white  shadow-lg flex flex-col justify-between">
      
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">chaiUI</h1>

        <button onClick={toggleDarkMode} className="text-sm bg-gray-700 px-2 py-1 rounded">🌓</button>
      </div>

      {/* Navigation */}
      <div className="px-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFileAlt />
            <span>Docs</span>
          </div>
        </div>

        {/* Section Divider */}
        <hr className="my-6 border-gray-600" />

        {/* ORGANISATION */}
        <div>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <span>COMPONENTS</span>
            <button onClick={toggle}>
            <MdOutlineExpandMore />
            </button>

          </div>

<div className={`${isOpen ? 'block' : 'hidden'} mt-4`}>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-white">
              <FaChartBar />
              <span>Overview</span>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt />
              <span>Risk Profile</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBug />
              <span>Remediation</span>
            </li>
            <li className="flex items-center gap-2">
              <FaDatabase />
              <span>Domains</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBug />
              <span>Vulnerabilities</span>
            </li>
            <li className="flex items-center gap-2">
              <FaUserShield />
              <span>Identity breaches</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLock />
              <span>Data leaks</span>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt />
              <span>Security profile</span>
            </li>
          </ul>
        </div>

  </div>


        {/* Another Section Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Vendors */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>VENDORS</span>
          <MdOutlineExpandMore />
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Managed Service */}
        <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
          <span>MANAGED SERVICE</span>
          <MdOutlineExpandMore />
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex items-center gap-3 border-t border-gray-700">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">Alicia Vikander</p>
          <p className="text-xs text-gray-400">alicia@sisyphus.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
