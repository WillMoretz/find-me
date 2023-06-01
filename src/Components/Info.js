import React from "react";
import waldo from "../img/waldo.webp";

function Info() {
  return (
    <div className="info-container">
      <div className="top-bar">
        <h2>Info</h2>
        <button type="button">Close</button>
      </div>
      <p>explanation</p>
      <img src={waldo} alt="waldo" />
    </div>
  );
}

export default Info;
