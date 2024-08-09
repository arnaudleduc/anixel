import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../../stores/useScenesStore";
import AreYouSure from "../../areYouSure/AreYouSure";

const Jungle: React.FC = () => {
  const { showAreYouSureMessage, setShowAreYouSureMessage } = useScenesStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setShowAreYouSureMessage(true)}
          className="cursor-pointer hover:animate-ping"
        />
        la jungle
      </div>
      {showAreYouSureMessage && <AreYouSure level="jungle" />}
    </div>
  );
};

export default Jungle;
