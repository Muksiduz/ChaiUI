import { Routes, Route } from "react-router-dom";
import NavbarCompo from "./NavbarCompo";
import Sidebar from "./sidebarMainPage/SidebarMainPage";
import Gaurav from "../Gaurav/Gaurav";
import MuksidPage from "./MuksidPage";
import AppButton from "../Tech-Forester/AppButton";

const DashboardRoutes = () => {
  return (
    <>
      {/* navbar  */}
      <NavbarCompo />
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Routed pages go here */}
      <div className="mx-[10%] mr-[5%] flex flex-col w-full scale-75 ">
        <Routes>
          <Route path="/gaurav" element={<Gaurav />} />
          <Route path="/muksid" element={<MuksidPage />} />
          <Route path="/techFoster" element={<AppButton />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
