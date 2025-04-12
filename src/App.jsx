import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MuksidPage from "./MuksidRandom/MuksidPage";
import DashboardRoutes from "./MuksidRandom/DashboardRoutes";
import HomePage from "./MuksidRandom/HomePage";

function App() {
  return (
    <div className="min-h-screen dark:bg-black w-full h-full">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<DashboardRoutes />} />
        </Routes>
      </Router>
      {/* make a seperate page in your file and show it here and then leave it as it is - it causes an git error -
    currently no idea how to solve it , so finding an work around */}
      {/* kindly try not to make any changes outside of your folder it causes a lot of errors - to merge them */}
      {/* during commit please write your name  */}
    </div>
  );
}

export default App;
