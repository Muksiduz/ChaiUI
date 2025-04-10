import Gaurav from "./Gaurav/Gaurav";
import MuksidPage from "./MuksidRandom/MuksidPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./MuksidRandom/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Gaurav /> */}
      {/* <MuksidPage /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/components" element={<Gaurav />} />
          <Route path="/" element={<MuksidPage />} />
        </Routes>
      </Router>

      {/* make a seperate page in your file and show it here and then leave it as it is - it causes an git error -
    currently no idea how to solve it , so finding an work around */}

      {/* kindly try not to make any changes outside of your folder it causes a lot of errors - to merge them */}

      {/* during commit please write your name  */}
    </>
  );
}

export default App;
