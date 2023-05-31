import React from "react";
import { Link } from "react-router-dom";
import * as images from "../pages";
import "../styles/home.scoped.css";

function Home() {
  return (
    <section>
      {Object.values(images).map((value) => (
        <div key={`homepage${value.src}${value.path}`}>
          <img src={value.src} alt="something" />
          <Link to={value.path}>Link</Link>
          <button type="button">Show Leaderboard</button>
        </div>
      ))}
    </section>
  );
}

export default Home;
