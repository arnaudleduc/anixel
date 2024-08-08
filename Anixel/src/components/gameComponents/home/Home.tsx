import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";

const Home: React.FC = () => {
  const { setHomeIsActive } = useScenesStore();
  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-white h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={setHomeIsActive}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;
