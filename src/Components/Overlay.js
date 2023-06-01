import React from "react";
import "../styles/overlay.scoped.css";

function Overlay(props) {
  const { handleClick } = props;

  function passUpClick() {
    handleClick();
  }

  return <div onClick={() => passUpClick()} />;
}

export default Overlay;
