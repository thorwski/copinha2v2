import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrizePool from "./pages/PrizePool/PrizePool";
import Rules from "./pages/Rules/Rules";
import Bracket from "./pages/Bracket/Bracket";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premiacao" element={<PrizePool />} />
        <Route path="/regras" element={<Rules />} />
        <Route path="/chaveamento" element={<Bracket />} />
      </Routes>
    </Router>
  );
};

export default App;
