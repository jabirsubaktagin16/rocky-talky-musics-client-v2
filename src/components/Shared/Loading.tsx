import Lottie from "lottie-react";
import music from "../../musical.json";

export const Loading = () => {
  const style = {
    height: 300,
  };
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <Lottie style={style} animationData={music} loop={true} />
    </div>
  );
};
