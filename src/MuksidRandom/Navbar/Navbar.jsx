import { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import Toggle from "../Toggle/Toggle";

import lightLogo from "../../assets/images/logos/dark-mode-logo-w-text.png";
import darkLogo from "../../assets/images/logos/white-mode-logo-w-text.png";

import toggleLogoLight from "../../assets/images/logos/without-ui/light-logo-without-ui.png";
import toggleLogoDark from "../../assets/images/logos/without-ui/dark-logo-without-ui.png";

const logos = {
  light: darkLogo,
  dark: lightLogo,
};

const toggleLogos = {
  light: toggleLogoDark,
  dark: toggleLogoLight,
};

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute z-10 w-[100%] top-0 backdrop-blur-md   pl-10 pr-10 dark:text-white dark:backdrop-blur-xs">
      <div className="flex justify-between p-2">
        <ul className="flex gap-10 items-center">
          <li className=" p-0">
            <img
              className="w-[150px] h-[100px] p-0 object-contain cursor-pointer"
              src={logos[theme]}
              alt="logo-image"
            />
          </li>
          <li className="text-xl font-semibold tracking-widest cursor-pointer">
            <h1>Documentation</h1>
          </li>
        </ul>
        <ul className="flex gap-2 items-center">
          <Toggle toggleLogos={toggleLogos} theme={theme} />
          <Searchbar />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
