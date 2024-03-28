import { useState } from "react";
import Heading from "./Heading";

function ChangeWord(word: string) {
  if (word === "Hi") {
    word = "Bye";
  } else {
    word = "Hi";
  }

  return word;
}

function Home() {
  const [word, setWord] = useState("Hi");

  return (
    <div>
      <h1>Home</h1>
      <Heading word={word} />
      <button onClick={() => setWord(ChangeWord(word))}>Change</button>
    </div>
  );
}
export default Home;
