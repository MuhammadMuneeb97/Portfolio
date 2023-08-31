import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "hafiz muhammad muneeb",
          "a web designer",
          "a web developer",
          "a freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
