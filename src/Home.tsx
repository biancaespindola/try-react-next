import { useState } from "react";
import Heading from "./Heading";

function Home() {
  const [word, setword] = useState("Hi");
  return (
    <div>
      <h1>Home</h1>
      <Heading word={word} />
      <button onClick={() => setword("Bye")}>Change</button>
    </div>
  );
}
export default Home;
