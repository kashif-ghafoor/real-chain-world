import MarketPlace from "./Pages/MarketPlace";
import About from "./Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Tokenization from "./Pages/Tokenization";
import Property from "./Pages/PropertyPage";
import General from "./Pages/General";
import HowToTokenize from "./Pages/HowToTokenize";
import HowToInvest from "./Pages/HowToInvest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tokenization" element={<Tokenization />}></Route>
        <Route path="/property" element={<Property />}></Route>
        <Route path="/general" element={<General />}></Route>
        <Route path="/learn/howtotokenize" element={<HowToTokenize />}></Route>
        <Route path="/learn/howtoinvest" element={<HowToInvest />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
