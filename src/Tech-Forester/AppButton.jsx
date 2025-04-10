/*
import Home from "./HomePage/MainHome/Home";
import PortfolioHero from "./MuksidRandom/HeroSections/PortfolioHero";
import Navbar from "./MuksidRandom/Navbar/Navbar";
import ComponentsTab from "./pages/ComponentsTab";

function App() {
  return (
    <>
      {
      <div className="relative flex justify-center">
        <Navbar />
        <Home />
      </div> 
      }
      
      <Navbar />
      <PortfolioHero />
    </>

    
  );
}

export default App;

*/
import React from "react";
import ComponentsTab from "./pages/ComponentsTab";
import CardsTab from "./pages/CardsTab";

function AppButton() {
  return (
    <div className="p-6">
      <ComponentsTab />
    </div>
  );
}

export default AppButton;
