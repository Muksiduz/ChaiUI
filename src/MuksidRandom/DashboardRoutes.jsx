import { Routes, Route } from "react-router-dom";
import NavbarCompo from "./NavbarCompo";
import Sidebar from "./sidebarMainPage/SidebarMainPage";
import Gaurav from "../Gaurav/Gaurav";
import MuksidPage from "./MuksidPage";
import AppButton from "../Tech-Forester/AppButton";
import Swapnil from "../Sweapnilk/Swapnil";
import ComponentsShowButtons from "./ComponentsShowButtons";
import TestCode from "./TestCode";

const DashboardRoutes = () => {
  return (
    <div className="dark:bg-black h-content  pt-0 mt-0">
      {/* navbar  */}
      <NavbarCompo />
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Routed pages go here */}
      <div className="mx-[10%] mr-[5%] flex flex-col w-full scale-75 mt-[-16%]">
        <Routes>
          <Route path="/gaurav" element={<Gaurav />} />
          <Route path="/muksid" element={<ComponentsShowButtons />} />
          <Route path="/swapnil" element={<Swapnil />} />
          <Route path="/techFoster" element={<AppButton />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoutes;
