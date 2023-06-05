import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/game.scoped.css";
import * as images from "../pages";

// TODO: fetch this data from firebase
const allWaldoCoordinates = {
  hedgeMaze: { x: [1369, 1389], y: [636, 664] },
  goldRush: { x: [339, 364], y: [514, 575] },
};

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);
  const [waldoXCoordinates, setWaldoXCoordinates] = useState([]);
  const [waldoYCoordinates, setWaldoYCoordinates] = useState([]);

  // Scroll Image by Dragging Mouse
  // Determine whether user clicked on Waldo
  useEffect(() => {
    const element = document.querySelector("section");
    let pos = { top: 0, left: 0, x: 0, y: 0 };
    let relativePos = { x: 0, y: 0 };
    // const isCorrect = false;

    function validateClickPosition() {
      console.log("checking click...");
      if (
        relativePos.x >= waldoXCoordinates[0] &&
        relativePos.x <= waldoXCoordinates[1] &&
        relativePos.y >= waldoYCoordinates[0] &&
        relativePos.y <= waldoYCoordinates[1]
      )
        console.log("waldo click");
      else console.log("not here");
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
    };

    const onMouseDown = (e) => {
      pos = {
        left: element.scrollLeft,
        top: element.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };

      const rect = e.target.getBoundingClientRect();
      relativePos = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      // console.log(`pictureX: ${relativePos.x}`, `pictureY: ${relativePos.y}`);
      validateClickPosition();
    };

    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [waldoXCoordinates, waldoYCoordinates]);

  // Load Image
  // Load Waldo Coordinates
  useEffect(() => {
    if (location.pathname === images.GOLD_RUSH.path) {
      setImgSrc(images.GOLD_RUSH.src);
      setWaldoXCoordinates(allWaldoCoordinates.goldRush.x);
      setWaldoYCoordinates(allWaldoCoordinates.goldRush.y);
    } else if (location.pathname === images.HEDGE_MAZE.path) {
      setImgSrc(images.HEDGE_MAZE.src);
      setWaldoXCoordinates(allWaldoCoordinates.hedgeMaze.x);
      setWaldoYCoordinates(allWaldoCoordinates.hedgeMaze.y);
    }
  }, []);

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
    </section>
  );
}

export default Game;
