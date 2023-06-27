import React from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
import waldoHead from "../img/waldo-head.jpg"
import "../styles/game-over.scoped.css";

function GameOver() {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate("/");
    }

    return <>
        <div className="game-over-container">
            <div className="top-bar">
                <img src={waldoHead} aria-hidden alt="waldo's head" />
                <h2>Found Me!</h2>
                <button className="return-button" type="button" onClick={() => returnToHome()}>
                ✕
                </button>
            </div>
            <p>Well Done! You Found Waldo in X Seconds</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
                <button type="submit">Submit Time</button>
            </form>
        </div>
        <Overlay handleClick={returnToHome}/>
    </>
}

export default GameOver