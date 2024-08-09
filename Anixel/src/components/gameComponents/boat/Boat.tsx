import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useTranslation } from "react-i18next";

interface Level {
  name: string;
  description: string;
  image: string;
  displayFunction: () => void;
}

const Boat: React.FC = () => {
  const {
    setBoatIsActive,
    setLevelMountainIsLaunched,
    setLevelOceanIsLaunched,
    setLevelJungleIsLaunched,
    setLevelSavannahIsLaunched,
  } = useScenesStore();

  const handleMountainClick: () => void = () => {
    setBoatIsActive(false);
    setLevelMountainIsLaunched(true);
  };

  const handleOceanClick: () => void = () => {
    setBoatIsActive(false);
    setLevelOceanIsLaunched(true);
  };

  const handleJungleClick: () => void = () => {
    setBoatIsActive(false);
    setLevelJungleIsLaunched(true);
  };

  const handleSavannahClick: () => void = () => {
    setBoatIsActive(false);
    setLevelSavannahIsLaunched(true);
  };

  const { t } = useTranslation();

  const levelsList: Level[] = [
    {
      name: t("levels.mountain.name"),
      description: t("levels.mountain.description"),
      image: "images/levels/LEVEL_montagne.png",
      displayFunction: handleMountainClick,
    },
    {
      name: t("levels.ocean.name"),
      description: t("levels.ocean.description"),
      image: "images/levels/LEVEL_ocean.png",
      displayFunction: handleOceanClick,
    },
    {
      name: t("levels.jungle.name"),
      description: t("levels.jungle.description"),
      image: "images/levels/LEVEL_jungle.png",
      displayFunction: handleJungleClick,
    },
    {
      name: t("levels.savannah.name"),
      description: t("levels.savannah.description"),
      image: "images/levels/LEVEL_savane.png",
      displayFunction: handleSavannahClick,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setBoatIsActive(false)}
          className="cursor-pointer hover:animate-ping"
        />
        <div className="flex justify-evenly h-full">
          {levelsList.map((level, index) => {
            return (
              <div
                key={`level-n-${index + 1}`}
                className="flex flex-col items-center justify-center w-3/4 "
              >
                <img
                  src={level.image}
                  alt={`${level.name}'s level`}
                  className="h-1/2 mb-10 rounded-xl hover:shadow-lg hover:shadow-amber-950 hover:border-4 hover:border-amber-950 hover:cursor-pointer"
                  onClick={() => level.displayFunction()}
                />
                <h3 className="font-snake uppercase text-xl text-amber-950 mb-4">
                  {level.name}
                </h3>
                <p className="font-snake uppercase text-xs text-amber-950">
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Boat;
