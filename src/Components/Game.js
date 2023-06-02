import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/game.scoped.css";
import * as images from "../pages";

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  // Scroll Image by Dragging Mouse
  useEffect(() => {
    const onMouseMove = (e) => {
      console.info("mousemove", e);
    };
    const onMouseUp = (e) => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
    const onMouseDown = (e) => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
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

  return imgSrc ? (
    <img
      src={imgSrc}
      alt="A Where's Waldo Drawing"
      onDragStart={(e) => e.preventDefault()}
    />
  ) : (
    <div>loading image...</div>
  );
}

export default Game;
