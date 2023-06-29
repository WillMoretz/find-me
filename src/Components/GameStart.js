import React from "react";

function GameStart(props) {
  const { imgName, buttonEvent } = props;

  return (
    <div className="game-start-container">
      <h2>{imgName}</h2>
      <button type="button" onClick={() => buttonEvent()}>
        Start Game
      </button>
    </div>
  );
}

export default GameStart;
