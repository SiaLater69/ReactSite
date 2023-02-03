import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import "./styles.css";
import Projects from "./routes/Project";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
