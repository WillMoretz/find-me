import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as images from "../pages";

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  useEffect(() => {
    if (location.pathname === images.GOLD_RUSH.path)
      setImgSrc(images.GOLD_RUSH.src);
    else if (location.pathname === images.HEDGE_MAZE.path)
      setImgSrc(images.HEDGE_MAZE.src);
  }, []);

  return imgSrc ? (
    <img src={imgSrc} alt="A Where's Waldo Drawing" />
  ) : (
    <div>loading image...</div>
  );
}

export default Game;
