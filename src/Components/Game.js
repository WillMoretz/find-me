import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GameOver from "./GameOver";
import "../styles/game.scoped.css";
import * as images from "../pages";
import { start, stop } from "../timer";

// TODO: fetch this data from firebase
const allWaldoCoordinates = {
  hedgeMaze: { x: [1369, 1389], y: [636, 664] },
  goldRush: { x: [339, 364], y: [514, 575] },
};

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);
  const [waldoCoordinates, setWaldoCoordinates] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);

  // Load Image
  // Load Waldo Coordinates
  // Start Timer
  function startGame() {
    start();
    if (location.pathname === images.GOLD_RUSH.path) {
      setImgSrc(images.GOLD_RUSH.src);
      setWaldoCoordinates(allWaldoCoordinates.goldRush);
    } else if (location.pathname === images.HEDGE_MAZE.path) {
      setImgSrc(images.HEDGE_MAZE.src);
      setWaldoCoordinates(allWaldoCoordinates.hedgeMaze);
    }
  }

  useEffect(() => {
    startGame();
  }, []);

  // Display Game Over Component
  // Stop Timer
  function endGame() {
    setGameOver(true);
    setTime(stop());
  }

  // Scroll Image by Dragging Mouse
  // Determine whether user clicked on Waldo
  useEffect(() => {
    const element = document.querySelector("section");
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let relativePos = { x: 0, y: 0 };
    let isCorrect = false;

    function validateClickPosition() {
      if (
        relativePos.x >= waldoCoordinates.x[0] &&
        relativePos.x <= waldoCoordinates.x[1] &&
        relativePos.y >= waldoCoordinates.y[0] &&
        relativePos.y <= waldoCoordinates.y[1]
      )
        isCorrect = true;
      else isCorrect = false;
    }

    function setRelativePosition(e) {
      const rect = e.target.getBoundingClientRect();
      relativePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    const onMouseMove = (e) => {
      e.preventDefault();
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;
      element.scrollTop = pos.top - dy;
      element.scrollLeft = pos.left - dx;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      if (isCorrect) endGame();
    };

    const onMouseDown = (e) => {
      if (gameOver) return;

      pos = {
        left: element.scrollLeft,
        top: element.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      // console.log(`pictureX: ${relativePos.x}`, `pictureY: ${relativePos.y}`);

      setRelativePosition(e);
      validateClickPosition();
    };

    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [waldoCoordinates]);

  return (
    <section>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="A Where's Waldo Drawing"
          onDragStart={(e) => e.preventDefault()}
        />
      ) : (
        <div>loading image...</div>
      )}
      {gameOver ? <GameOver time={time} /> : ""}
    </section>
  );
}

export default Game;
