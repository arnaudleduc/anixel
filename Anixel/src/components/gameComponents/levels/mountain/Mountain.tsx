import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";
import AreYouSure from "../../areYouSure/AreYouSure";
import GameCanvas from "../../gameCanvas/GameCanvas";
import { Canvas } from "@react-three/fiber";

const Mountain: React.FC = () => {
  const { showAreYouSureMessage, setShowAreYouSureMessage } = useScenesStore(
    useShallow((state) => {
      return {
        showAreYouSureMessage: state.showAreYouSureMessage,
        setShowAreYouSureMessage: state.setShowAreYouSureMessage,
      };
    })
  );

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setShowAreYouSureMessage(true)}
          className="cursor-pointer hover:animate-ping"
        />
        <Canvas style={{ width: "100%", height: "95%" }}>
          <GameCanvas level="mountain" />
        </Canvas>
      </div>

      {showAreYouSureMessage && <AreYouSure level="mountain" />}
    </div>
  );
};

export default Mountain;
