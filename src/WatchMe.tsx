import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
  return (
    <ReactPlayer
      url="https://youtu.be/6-8mp_UXqPA?list=PLVTt2S8_S0ZdkzxQVudFHhTFExICjss0G"
      width="100%"
      height="100%"
      playing={false}
      volume={0.5}
      controls={true}
    />
  );
};

function WatchMe() {
  return (
    <div>
      <h1>Watch me</h1>
      <MyVideo />
    </div>
  );
}

export default WatchMe;
