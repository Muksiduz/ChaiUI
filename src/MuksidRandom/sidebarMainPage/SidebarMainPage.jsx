import React from "react";
import {
  FaHome,
  FaFileAlt,
  FaChartBar,
  FaShieldAlt,
  FaBug,
  FaUserShield,
  FaLock,
  FaDatabase,
} from "react-icons/fa";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

import { toggleDarkMode } from "../../MuksidRandom/Toggle/toggleLogic";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-auto pt-5 left-0 min-h-screen w-64 bg-white text-black dark:bg-[#111827] dark:text-white  shadow-lg flex flex-col justify-between">
      {/* Navigation */}
      <div className="px-6">
        {/* <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaHome />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFileAlt />
            <span>Docs</span>
          </div>
        </div> */}
        {/* Section Divider
        <hr className="my-6 border-gray-600" /> */}
        {/* ORGANISATION */}
        <div>
          <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
            <span>INSTALLATION</span>
            <button onClick={toggle}>
              <MdOutlineExpandMore />
            </button>
          </div>

          <div className={`${isOpen ? "block" : "hidden"} mt-4`}>
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
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Link to={"/muksid"}>
              <span>Hero Sections</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
