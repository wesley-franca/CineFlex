import Top from "./Top.js";
import Home from "./Home.js";
import ShowDates from "./ShowDates.js";
import Footer from "./Footer.js";

import "./assets/reset.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [tape, setTape] = useState(null)
  
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Home setTape={setTape} />} />
        <Route path="/sessoes/:idFilme" element={<ShowDates  />} />
      </Routes>
      <Footer tape={tape}/>
    </BrowserRouter>
  )
}


export default App;
