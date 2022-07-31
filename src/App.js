import Top from "./Top.js";
import Home from "./Home.js";
import ShowDates from "./ShowDates.js";
import Seats from "./Seats.js";
import Success from "./Success.js";

import "./assets/reset.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<ShowDates />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
