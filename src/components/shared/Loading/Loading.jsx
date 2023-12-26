import "./Loading.css";
const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen fixed top-0 left-0 z-50">
      <div className="typewriter scale-150">
        <div className="slide">
          <i></i>
        </div>
        <div className="paper"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default Loading;
