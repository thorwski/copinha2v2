import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PrizePool from "./pages/PrizePool/PrizePool";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premiacao" element={<PrizePool />} />
      </Routes>
    </Router>
  );
};

export default App;
