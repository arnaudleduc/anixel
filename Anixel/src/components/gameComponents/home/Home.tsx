import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";

const Home: React.FC = () => {
  const { setHomeIsActive } = useScenesStore(
    useShallow((state) => {
      return {
        setHomeIsActive: state.setHomeIsActive,
      };
    })
  );
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setHomeIsActive(false)}
          className="cursor-pointer hover:animate-ping"
        />
      </div>
    </div>
  );
};

export default Home;
