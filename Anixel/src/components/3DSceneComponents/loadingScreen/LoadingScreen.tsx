import { useProgress } from "@react-three/drei";

const LoadingScreen: React.FC = () => {
  const { active } = useProgress();

  return (
    <div
      className={`fixed top-0 left-0 p-16 w-full h-screen z-10 grid place-items-center bg-center bg-[url('images/loadingScreen_FINAL.jpg')] ${
        active ? "" : "animate-fadeOut"
        // active ? "" : ""
      }`}
    >
      <div className="flex flex-col justify-center items-center font-snake">
        <div className="relative top-60 right-10 mt-20 animate-pulse">
          <img src="/images/loadingScreenText_FINAL.png" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
