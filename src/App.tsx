import { useState } from "react";

import "./App.css";
import Heading from "./Heading.";

function App() {
  const [word, setword] = useState("Hi");

  return (
    <>
      <Heading word={word} />
      <button onClick={() => setword("Bye")}>Change</button>
    </>
  );
}

export default App;
