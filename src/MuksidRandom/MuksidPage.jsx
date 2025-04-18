import React from "react";
import HomeSecond from "./HomePage/MainHome/HomeSecond";
import Home from "./HomePage/MainHome/Home";
import Navbar from "./Navbar/Navbar";
// import ComponentsPage from "./ComponentsPage/ComponentsPage";

import AllButtons from "@/components/ui/buttons/basicButton";

const MuksidPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <AllButtons variant="primary" size="lg">
          Primary Button
        </AllButtons>

        <AllButtons variant="destructive" size="sm">
          Destructive Button
        </AllButtons>
      </div>
    </>
  );
};

export default MuksidPage;
