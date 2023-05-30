import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>Header</header>
      <Routes>
        <Route path="/" element={<section>Homepage</section>} />
      </Routes>
    </>
  );
}

export default App;
