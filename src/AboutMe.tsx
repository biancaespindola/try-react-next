import santa from "./assets/santa-claus.png";
import { useState } from "react";
function AboutMe() {
  const [santaName, setSantaName] = useState("");

  const handleSummit = (e) => {
    e.preventDefault();
    setSantaName("");
    console.log("Form Submited: ", santaName);
  };

  const santa2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuV-Dgl9pPCSbKlKXlyI2mwEzxiEsUdhoH2Q&usqp=CAU";
  return (
    <>
      <div>
        <h1>About me</h1>
        <p>I'm Santa Claus</p>
        <img src={santa} alt="santa" />
        <img src={santa2} alt="santa" />
      </div>
      <div>
        <form onSubmit={handleSummit}>
          <fieldset>
            <div>
              <label htmlFor="santaName">What is the truly santa's name?</label>
              <input
                id="santaName"
                type="text"
                placeholder="santa's name"
                name="santaName"
                value={santaName}
                onChange={(e) => setSantaName(e.target.value)}
              />
            </div>
            <button disabled={!santaName} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default AboutMe;
