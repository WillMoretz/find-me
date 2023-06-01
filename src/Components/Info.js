import React from "react";
import waldo from "../img/waldo.webp";
import "../styles/info.scoped.css";

function Info(props) {
  const { handleClick } = props;

  function passUpClick() {
    handleClick();
  }

  return (
    <div className="info-container">
      <div className="top-bar">
        <h2>How To Play</h2>
        <button type="button" onClick={() => passUpClick()}>
          ✕
        </button>
      </div>
      <p>
        Where's Waldo is a game where you must find Waldo somewhere inside of a
        picture to win. When you find Waldo, tap or click on him.
      </p>
      <img src={waldo} alt="waldo" />
    </div>
  );
}

export default Info;
