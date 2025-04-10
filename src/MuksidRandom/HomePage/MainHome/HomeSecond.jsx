import { useState, useEffect } from "react";
import Button from "../../ComponentsShow/Components/Button/Button";
import { motion } from "motion/react";
import WaveAnimation from "../../WaveAnimation/WaveAnimation";

import heroLogo from "../../../assets/images/logos/white-mode-logo.png";
import heroLogosecond from "../../../assets/images/logos/dark-mode-logo.png";

const HeroLogos = {
  light: heroLogo,
  dark: heroLogosecond,
};

import { Link } from "react-router-dom";

const Home = () => {
  const [theme, setTheme] = useState("light");
  const [isShaking, setIsShaking] = useState(false);
  const [key, setKey] = useState(0); // To re-trigger animation

  const handleToggle = () => {
    setIsShaking(true);
    setKey((prev) => prev + 1); // re-trigger motion animation
    setTimeout(() => setIsShaking(false), 400);
  };

  const shake = {
    x: [0, -6, 6, -6, 6, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  };

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
    <>
      <div className="pl-18 pr-18 bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))] w-full h-screen flex align-middle items-center justify-center  dark:bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(0,0,0,1))]">
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, ease: "easeIn" }}
          className=" flex flex-col items-center relative z-10">
          <h1 className="text-semihero-second tracking-widest dark:text-white">
            Sweet, Minimalistic & Snacky
          </h1>
          <h1 className="relative text-hero-second tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42] dark:text-white dark:drop-shadow-[2px_2px_1px_#653818]">
            Chai
            <span className=" text-chai dark:text-chai-dark drop-shadow-[3px_3px_1px_#b07a42]">
              UI{" "}
              <motion.div
                animate={{ y: ["100%", "-100%"] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeOut",
                }}
                className="  absolute top-0 right-4 w-[30px] h-[30px] rounded-full
                  bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))]
                  dark:bg-[linear-gradient(360deg,_rgba(141,64,2,1),_rgba(255,255,255,1))]
                  "></motion.div>
            </span>
          </h1>
          {/* random testing  */}

          {/* random testing  */}
          <h1 className="text-semihero-second tracking-widest dark:text-white">
            take a sip of our componenet’s
          </h1>

          <div>
            {/* get the button component  */}
            <Button width={"250px"} height={"60px"} text={"18px"} />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -25, y: 45, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="relative z-10  flex items-center justify-end w-[50%]">
          {/* shake animation and image  */}

          <motion.img
            key={key}
            onClick={handleToggle}
            animate={isShaking ? shake : {}}
            whileHover={{ scale: 1.25 }}
            className="w-[70%] h-[70%] cursor-pointer"
            src={HeroLogos[theme]}
            alt="hero"
          />

          {/* shake animation and image  */}
        </motion.div>
      </div>
      {/* for the wave animation  */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 6, ease: "easeIn" }}
        className="absolute w-full h-[70%] top-[40%]">
        <WaveAnimation />
      </motion.div>
      {/* wave animation ends  */}
    </>
  );
};

export default Home;
