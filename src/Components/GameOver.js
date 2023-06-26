import React from "react";
import waldoHead from "../img/waldo-head.jpg"

function GameOver() {
    return <div className="game-over-container">
        <div className="top-bar">
            <img src={waldoHead} aria-hidden />
            <h2>Found Me!</h2>
            <button type="button" onClick={() => passUpClick()}>
            ✕
            </button>
        </div>
    </div>
}

export default GameOver