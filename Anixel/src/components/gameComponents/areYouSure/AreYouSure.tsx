import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";

interface AreYouSureProps {
  level: string;
}

const AreYouSure: React.FC<AreYouSureProps> = ({ level }) => {
  const {
    setLevelMountainIsLaunched,
    setLevelOceanIsLaunched,
    setLevelJungleIsLaunched,
    setLevelSavannahIsLaunched,
    setShowAreYouSureMessage,
  } = useScenesStore(
    useShallow((state) => {
      return {
        setLevelMountainIsLaunched: state.setLevelMountainIsLaunched,
        setLevelOceanIsLaunched: state.setLevelOceanIsLaunched,
        setLevelJungleIsLaunched: state.setLevelJungleIsLaunched,
        setLevelSavannahIsLaunched: state.setLevelSavannahIsLaunched,
        setShowAreYouSureMessage: state.setShowAreYouSureMessage,
      };
    })
  );

  const { t } = useTranslation();

  const handleLeavingLevel: () => void = () => {
    setShowAreYouSureMessage(false);
    if (level === "mountain") {
      setLevelMountainIsLaunched(false);
    }
    if (level === "ocean") {
      setLevelOceanIsLaunched(false);
    }
    if (level === "jungle") {
      setLevelJungleIsLaunched(false);
    }
    if (level === "savannah") {
      setLevelSavannahIsLaunched(false);
    }
  };

  return (
    <div className="fixed flex items-center justify-center w-full h-screen top-0 left-0 ">
      <div className="rounded-2xl bg-yellow-100 w-1/3 h-1/3 p-10 shadow-xl">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setShowAreYouSureMessage(false)}
          className="cursor-pointer hover:animate-ping"
        />
        <div className="flex flex-col items-center justify-center font-snake uppercase px-10 text-center">
          <h3 className="my-4">{t("areYouSure.title")}</h3>
          <h4 className="text-xs px-12 leading-5 mb-4">
            {t("areYouSure.subtitle")}
          </h4>
        </div>
        <div className="flex flex-row items-center justify-evenly font-snake">
          <button
            className="uppercase bg-green-500 rounded-md px-3 py-3 hover:shadow-xl hover:cursor-pointer hover:text-white"
            onClick={handleLeavingLevel}
          >
            {t("areYouSure.confirm")}
          </button>
          <button
            className="uppercase bg-red-500 rounded-md px-3 py-3 hover:shadow-xl hover:cursor-pointer hover:text-white"
            onClick={() => setShowAreYouSureMessage(false)}
          >
            {t("areYouSure.cancel")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreYouSure;
