import React from "react";
import "../styles/overlay.scoped.css";

function Overlay(props) {
  const { handleClick } = props;

  function passUpClick() {
    handleClick();
  }

  return <div onClick={() => passUpClick()} aria-hidden />;
}

export default Overlay;
