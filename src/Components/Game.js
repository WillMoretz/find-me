import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import goldRush from "../img/gold-rush.jpg";

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  useEffect(() => {
    if (location.pathname === "/gold-rush") setImgSrc(goldRush);
  }, []);

  return imgSrc ? (
    <img src={imgSrc} alt="A Where's Waldo Drawing" />
  ) : (
    <div>loading image...</div>
  );
}

export default Game;
