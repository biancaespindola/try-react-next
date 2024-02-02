import "./App.css";
import AboutMe from "./AboutMe";
import CountriesPage from "./CountriesPage";
import Home from "./Home";
import WatchMe from "./WatchMe";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar-links">
            <Link className="menu" to="/">
              Home
            </Link>
            <Link to="about-me">About me</Link>
            <Link to="countries">Countries</Link>
            <Link to="watch">Watch me</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/watch" element={<WatchMe />} />
        </Routes>
        {/* <Home />
        <AboutMe /> */}
      </div>
    </>
  );
}

export default App;
