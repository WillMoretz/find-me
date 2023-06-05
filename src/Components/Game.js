import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/game.scoped.css";
import * as images from "../pages";

// TODO: fetch this data from firebase
const waldoCoordinates = {
  hedgeMaze: { x: [415, 434], y: [166, 192] },
  goldRush: { x: [185, 207], y: [132, 191] },
};

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  // Scroll Image by Dragging Mouse
  useEffect(() => {
    const element = document.querySelector("section");
    let pos = { top: 0, left: 0, x: 0, y: 0 };

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
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      console.log(`mouseX: ${e.clientX}`, `mouseY: ${e.clientY}`);
    };

    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Load Image
  useEffect(() => {
    if (location.pathname === images.GOLD_RUSH.path)
      setImgSrc(images.GOLD_RUSH.src);
    else if (location.pathname === images.HEDGE_MAZE.path)
      setImgSrc(images.HEDGE_MAZE.src);
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
