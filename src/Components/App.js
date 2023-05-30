import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<section>Homepage</section>} />
        <Route path="/gold-rush" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
