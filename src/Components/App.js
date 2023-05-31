import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gold-rush" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
