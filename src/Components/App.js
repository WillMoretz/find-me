import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<section>Homepage</section>} />
      </Routes>
    </>
  );
}

export default App;
