import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scoped.css";

function Header() {
  return (
    <header>
      <h1>Where's Waldo Online</h1>
      <Link to="/leaderboard">Leaderboard</Link>
      <button type="button">Info</button>
    </header>
  );
}

export default Header;
