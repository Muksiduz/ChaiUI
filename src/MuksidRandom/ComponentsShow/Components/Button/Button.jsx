import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Button = ({ width, height = "60px", text }) => {
  return (
    <Link to={"/components"}>
      <button
        style={{ width, height, fontSize: text }}
        className={`  mt-8 rounded-4xl bg-chai dark:bg-chai-dark text-white
    font-bold  drop-shadow-[6px_6px_2px_#b07a42] cursor-pointer dark:text-black dark:drop-shadow-[6px_6px_2px_#b07a42] neon-button
    `}>
        View Components
      </button>
    </Link>
  );
};

export default Button;
