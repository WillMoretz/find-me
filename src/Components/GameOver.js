/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Overlay from "./Overlay";
import waldoHead from "../img/waldo-head.jpg";
import "../styles/game-over.scoped.css";

function GameOver() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  function handleSubmit() {
    console.log(name);
  }

  return (
    <>
      <div className="game-over-container">
        <div className="top-bar">
          <img src={waldoHead} aria-hidden alt="waldo's head" />
          <h2>Found Me!</h2>
          <Link to="/">✕</Link>
        </div>
        <p>Well Done! You Found Waldo in X Seconds</p>
        <form>
          <h3>Submit Your Time</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={() => handleSubmit()}>
            Submit Time
          </button>
        </form>
      </div>
      <Overlay handleClick={returnToHome} />
    </>
  );
}

export default GameOver;
