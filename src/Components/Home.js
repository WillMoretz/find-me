import React from "react";
import { Link } from "react-router-dom";
import * as images from "../pages";
import "../styles/home.scoped.css";

function Home() {
  return (
    <section>
      <div>
        <img src={images.GOLD_RUSH.src} alt="the gold rush where's waldo" />
        <Link to="/gold-rush">Play</Link>
        <button type="button">Show Leaderboard</button>
      </div>
      <div>
        <img src={images.HEDGE_MAZE.src} alt="the gold rush where's waldo" />
        <Link to="/hedge-maze">Play</Link>
        <button type="button">Show Leaderboard</button>
      </div>
    </section>
  );
}

export default Home;
