import React from "react";
import Button from "../../ComponentsShow/Components/Button/Button";
import { motion } from "motion/react";
import WaveAnimation from "../../WaveAnimation/WaveAnimation";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))] w-full h-screen flex align-middle items-center justify-center  dark:bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(0,0,0,1))]">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: "easeIn" }}
        className=" flex flex-col items-center relative z-10">
        <h1 className="text-semiHero tracking-widest dark:text-white">
          Sweet, Minimalistic & Snacky
        </h1>
        <h1 className="relative text-hero tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42] dark:text-white dark:drop-shadow-[2px_2px_1px_#653818]">
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
              className="  absolute top-0 right-5 w-[30px] h-[30px] rounded-full
                  bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))]
                  dark:bg-[linear-gradient(360deg,_rgba(141,64,2,1),_rgba(255,255,255,1))]
                  "></motion.div>
          </span>
        </h1>
        {/* random testing  */}

        {/* random testing  */}
        <h1 className="text-semiHero tracking-widest dark:text-white">
          take a sip of our componenet’s
        </h1>

        <div>
          {/* get the button component  */}
          <Button />
        </div>
      </motion.div>
      {/* for the wave animation  */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 6, ease: "easeIn" }}
        className="absolute w-full h-[70%] top-[40%]">
        <WaveAnimation />
      </motion.div>
      {/* wave animation ends  */}
    </div>
  );
};

export default Home;
