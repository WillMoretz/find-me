import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/game.scoped.css";
import * as images from "../pages";

function Game() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState(undefined);

  // Scroll Image by Dragging Mouse
  useEffect(() => {
    const element = document.querySelector("section");
    // let pos = { startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 };
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const onMouseMove = (e) => {
      e.preventDefault();
      // const dx = e.pageX - element.offsetLeft;
      // const dy = e.clientY - element.offsetTop;
      // console.log(dx, dy);
      // element.scrollLeft = pos.scrollLeft - dx;
      // element.scrollTop = pos.scrollTop - dy;
      // console.log(element.scrollLeft, element.scrollTop);
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
      // pos = {
      //   startX: e.pageX - element.offsetLeft,
      //   startY: e.pageY - element.offsetTop,
      //   scrollLeft: element.scrollLeft,
      //   scrollTop: element.scrollTop,
      //   // x: pos.x,
      //   // y: pos.y,
      // };
      pos = {
        left: element.scrollLeft,
        top: element.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };
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
