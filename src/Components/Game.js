import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import goldRush from "../img/gold-rush.jpg";
import hedgeMaze from "../img/hedge-maze.jpg";

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  useEffect(() => {
    if (location.pathname === "/gold-rush") setImgSrc(goldRush);
    else if (location.pathname === "/hedge-maze") setImgSrc(hedgeMaze);
  }, []);

  return imgSrc ? (
    <img src={imgSrc} alt="A Where's Waldo Drawing" />
  ) : (
    <div>loading image...</div>
  );
}

export default Game;
