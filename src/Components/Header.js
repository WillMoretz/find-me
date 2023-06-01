import React, { useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Overlay from "./Overlay";
import "../styles/header.scoped.css";

function Header() {
  const [shouldDisplayInfo, setShouldDisplayInfo] = useState(false);

  function handleClick() {
    setShouldDisplayInfo(true);
  }

  return (
    <>
      <header>
        <h1>Where's Waldo Online</h1>
        <Link to="/leaderboard">Leaderboard</Link>
        <button type="button" onClick={() => handleClick()}>
          Info
        </button>
      </header>
      {shouldDisplayInfo ? (
        <>
          <Info />
          <Overlay />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
