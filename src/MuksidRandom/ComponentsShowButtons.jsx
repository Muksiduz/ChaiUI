import React from "react";
import TestCode from "./TestCode";
import CopyButton from "./CopyButton";
import Home from "./HomePage/MainHome/Home";
import HomeSecond from "./HomePage/MainHome/HomeSecond";

const myTestCode = `import React from "react";
import Button from "../../ComponentsShow/Components/Button/Button";
import { motion } from "motion/react";
import WaveAnimation from "../../WaveAnimation/WaveAnimation";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))] w-full h-screen flex align-middle items-center justify-center  dark:bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(0,0,0,1))]">
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: "easeIn" }}
        className=" flex flex-col items-center relative z-10">
        <h1 className="text-semiHero tracking-widest dark:text-white">
          Sweet, Minimalistic & Snacky
        </h1>
        <h1 className="text-hero tracking-wide font-bold drop-shadow-[3px_3px_1px_#b07a42] dark:text-white dark:drop-shadow-[2px_2px_1px_#653818]">
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
          <Button width={"180px"} />
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
`;

const ComponentsShowButtons = () => {
  return (
    <div>
      <div>
        <h1 className="text-6xl  font-bold dark:text-white">Hero Sections</h1>
        <h1 className="text-2xl p-4 text-gray-400">
          A list of awsome Hero Sections to Fast Build your Product,No
          configuration copy paste and Install to build your UI
        </h1>
        <h1 className="text-xl p-2 pl-4 text-gray-400">
          Toggle The Dark mode to see the Dark effect
        </h1>
      </div>
      <div>
        <h1 className="text-3xl mt-4 font-bold  text-gray-600 dark:text-white">
          Install dependencies
        </h1>
        {/* Another Section Divider */}
        <hr className="my-8 border-gray-400" />
        <CopyButton />
      </div>
      {/* first home page  */}
      <div className="mt-15">
        <h1 className="text-4xl text-orange-400 mt-4 font-bold ">
          Snacky ChaiUI Home page
        </h1>
        {/* Another Section Divider */}
        <hr className="my-8 border-gray-400" />
        <div className="mt-8">
          <TestCode codeString={myTestCode} PreviewComponent={HomeSecond} />
        </div>
      </div>
      {/* second home page  */}
      <div className="mt-15">
        <h1 className="text-4xl text-orange-400 mt-4 font-bold ">
          Chai Buscit Home page
        </h1>
        {/* Another Section Divider */}
        <hr className="my-8 border-gray-400" />
        <div className="mt-8">
          <TestCode codeString={myTestCode} PreviewComponent={Home} />
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowButtons;
