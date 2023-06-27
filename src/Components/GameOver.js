import React from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
import waldoHead from "../img/waldo-head.jpg"
import "../styles/game-over.scoped.css";

function GameOver() {
    const navigate = useNavigate();

    function returnToHome() {
        navigate("/");
    }

    return <>
        <div className="game-over-container">
            <div className="top-bar">
                <img src={waldoHead} aria-hidden />
                <h2>Found Me!</h2>
                <button type="button" onClick={() => returnToHome()}>
                ✕
                </button>
            </div>
        </div>
        <Overlay handleClick={returnToHome}/>
    </>
}

export default GameOver