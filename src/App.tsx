import { useState } from "react";

import "./App.css";

import AboutMe from "./AboutMe";
import Heading from "./Heading";
import Home from "./Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [word, setword] = useState("Hi");

  return (
    <>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about-me">About me</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        {/* <Home />
        <AboutMe /> */}
      </div>

      <Heading word={word} />
      <button onClick={() => setword("Bye")}>Change</button>
    </>
  );
}

export default App;
