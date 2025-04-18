import React, { useState } from "react";
import { toggleDarkMode } from "./toggleLogic";
import { motion } from "framer-motion";

const Toggle = ({ toggleLogos, theme }) => {
  const [isShaking, setIsShaking] = useState(false);
  const [key, setKey] = useState(0); // To re-trigger animation

  const handleToggle = () => {
    toggleDarkMode();
    setIsShaking(true);
    setKey((prev) => prev + 1); // re-trigger motion animation
    setTimeout(() => setIsShaking(false), 400);
  };

  const shake = {
    x: [0, -6, 6, -6, 6, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <motion.div
      key={key} // important to re-trigger the animation
      animate={isShaking ? shake : {}}
      onClick={handleToggle}
      whileHover={{ scale: 1.25 }}
      className="w-[70px] h-[70px] cursor-pointer">
      <img src={toggleLogos[theme]} alt="toggle icon" />
    </motion.div>
  );
};

export default Toggle;
