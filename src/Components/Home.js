import React from "react";
import { Link } from "react-router-dom";
import goldRush from "../img/gold-rush.jpg";
import hedgeMaze from "../img/hedge-maze.jpg";
import "../styles/home.scoped.css";

function Home() {
  return (
    <section>
      <div>
        <img src={goldRush} alt="the gold rush where's waldo" />
        <Link to="/gold-rush">Play</Link>
        <button type="button">Show Leaderboard</button>
      </div>
      <div>
        <img src={hedgeMaze} alt="the gold rush where's waldo" />
        <Link to="/hedge-maze">Play</Link>
        <button type="button">Show Leaderboard</button>
      </div>
    </section>
  );
}

export default Home;
