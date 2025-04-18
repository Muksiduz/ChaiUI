import { useState, useEffect } from "react";
import heroLogo from "../../assets/images/logos/white-mode-logo.png";
import heroLogosecond from "../../assets/images/logos/dark-mode-logo.png";

const HeroLogos = {
  light: heroLogo,
  dark: heroLogosecond,
};

const Searchbar = () => {
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
    <div>
      <input
        className="relative w-[250px] h-[40px] rounded-3xl text-black dark:text-white
             bg-[linear-gradient(to_bottom,_#fe7301,_#ffffff)] 
             dark:bg-[linear-gradient(to_bottom,_rgba(173,78,0,1),_rgba(0,0,0,1))] 
             placeholder:text-gray-500 
             placeholder:italic 
             placeholder:tracking-wide 
             placeholder:text-sm 
             py-2 px-4 dark:placeholder:text-gray-300"
        type="text"
        placeholder="Search (Ctrl + K)"
      />
      <button className="absolute top-10 right-15 cursor-pointer">
        <img className=" w-[35px] h-[35px]" src={HeroLogos[theme]} alt="" />
      </button>
    </div>
  );
};

export default Searchbar;
