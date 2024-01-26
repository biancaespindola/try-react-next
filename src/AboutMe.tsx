import santa from "./assets/santa-claus.png";

function AboutMe() {
  const santa2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuV-Dgl9pPCSbKlKXlyI2mwEzxiEsUdhoH2Q&usqp=CAU";
  return (
    <div>
      <h1>About me</h1>
      <p>I'm Santa Claus</p>
      <img src={santa} alt="santa" />
      <img src={santa2} alt="santa" />
    </div>
  );
}

export default AboutMe;
