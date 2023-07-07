import React from "react";
import Overlay from "./Overlay";
import waldoHead from "../img/waldo-head.jpg";
import "../styles/game-start.scoped.css";

function GameStart(props) {
  const { imgName, buttonEvent } = props;

  return (
    <>
      <div className="game-start-container">
        <div className="top-bar">
          <img src={waldoHead} aria-hidden alt="waldo's head" />
          <h2>{imgName}</h2>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          amet minima, ipsa deleniti ipsam obcaecati aliquid provident, dolore
          id possimus nam vero molestias iure? Facere deserunt debitis quos hic
          unde porro aliquid delectus repellendus adipisci aut ratione quae,
          quam tenetur accusamus? Non distinctio omnis nesciunt placeat veniam!
          Debitis, veniam veritatis.
        </p>
        <button type="button" onClick={() => buttonEvent()}>
          Start Game
        </button>
      </div>
      <Overlay />
    </>
  );
}

export default GameStart;
