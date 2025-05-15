import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrizePool from "./pages/PrizePool/PrizePool";
import Rules from "./pages/Rules/Rules";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premiacao" element={<PrizePool />} />
        <Route path="/regras" element={<Rules />} />
      </Routes>
    </Router>
  );
};

export default App;
