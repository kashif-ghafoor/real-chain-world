import MarketPlace from "./Pages/MarketPlace";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Tokenization from "./Pages/Tokenization";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tokenization" element={<Tokenization />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
