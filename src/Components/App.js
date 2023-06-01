import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Game from "./Game";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import * as images from "../pages";
import "../styles/reset.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path={images.GOLD_RUSH.path} element={<Game />} />
        <Route path={images.HEDGE_MAZE.path} element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
