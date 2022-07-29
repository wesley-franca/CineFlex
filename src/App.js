import Top from "./Top.js";
import Home from "./Home.js";
import ShowDates from "./ShowDates.js";

import "./assets/reset.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessoes/:idFilme" element={<ShowDates />} />
        </Routes>
    </BrowserRouter>
  )
}


export default App;
