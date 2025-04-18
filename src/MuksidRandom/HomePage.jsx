import React from "react";
import HomeSecond from "./HomePage/MainHome/HomeSecond";
import Navbar from "./Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="relative flex justify-center">
        <Navbar />
        <HomeSecond />
      </div>
    </>
  );
};

export default HomePage;
