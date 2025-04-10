import React from "react";
import Home from "./HomePage/MainHome/Home";
import Navbar from "./Navbar/Navbar";
// import ComponentsPage from "./ComponentsPage/ComponentsPage";

const MuksidPage = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex justify-center">
        <Home />
      </div>
    </>
  );
};

export default MuksidPage;
