import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import lightLogo from "../assets/images/logos/white-mode-logo.png";
import darkLogo from "../assets/images/logos/dark-mode-logo.png";
const NavbarCompo = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
        <Link to="/">
          <img
            src={theme === "light" ? lightLogo : darkLogo}
            alt="logo"
            className="w-10 h-auto transition-all duration-300"
          />
        </Link>

        <ul className="flex gap-8 items-center text-sm font-semibold text-gray-700 dark:text-gray-200">
          <li className="hover:text-orange-500 transition">
            <Link to="/dipti">Dipti</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/gaurav">Gaurav</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/muksid">Muksid</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/ritesh">Ritesh</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/satya">satya</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/swapnil">swapnil</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/swapnil">Ritesh</Link>
          </li>
          <li className="hover:text-orange-500 transition">
            <Link to="/techFoster">Tech Foster</Link>
          </li>
          <button
            onClick={toggleTheme}
            className="bg-orange-500 dark:bg-yellow-400 text-white px-4 py-2 rounded-full hover:scale-105 transition transform duration-200">
            {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavbarCompo;
