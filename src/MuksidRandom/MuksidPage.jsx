import React from "react";
import HomeSecond from "./HomePage/MainHome/HomeSecond";
import Home from "./HomePage/MainHome/Home";
import Navbar from "./Navbar/Navbar";
// import ComponentsPage from "./ComponentsPage/ComponentsPage";

const MuksidPage = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <HomeSecond />
        <Home />
      </div>
    </>
  );
};

export default MuksidPage;
