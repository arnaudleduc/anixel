import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useTranslation } from "react-i18next";
import { useShallow } from "zustand/react/shallow";

interface Stage {
  selection: string;
  name: string;
  description: string;
  image: string;
}

const Boat: React.FC = () => {
  const { setBoatIsActive, setGameIsLaunched, setSelectedStage } =
    useScenesStore(
      useShallow((state) => {
        return {
          setBoatIsActive: state.setBoatIsActive,
          setGameIsLaunched: state.setGameIsLaunched,
          setSelectedStage: state.setSelectedStage,
        };
      })
    );

  const { t } = useTranslation();

  const stagesList: Stage[] = [
    {
      selection: "mountain",
      name: t("stages.mountain.name"),
      description: t("stages.mountain.description"),
      image: "images/stages/STAGE_montagne.png",
    },
    {
      selection: "ocean",
      name: t("stages.ocean.name"),
      description: t("stages.ocean.description"),
      image: "images/stages/STAGE_ocean.png",
    },
    {
      selection: "jungle",
      name: t("stages.jungle.name"),
      description: t("stages.jungle.description"),
      image: "images/stages/STAGE_jungle.png",
    },
    {
      selection: "savannah",
      name: t("stages.savannah.name"),
      description: t("stages.savannah.description"),
      image: "images/stages/STAGE_savane.png",
    },
  ];

  const handleClickOnBoat: (selection: string) => void = (selection) => {
    setGameIsLaunched(true);
    setSelectedStage(selection);
  };

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
          {stagesList.map((stage, index) => {
            return (
              <div
                key={`stage-n-${index + 1}`}
                className="flex flex-col items-center justify-center w-3/4 "
              >
                <img
                  src={stage.image}
                  alt={`${stage.name}'s stage`}
                  className="h-1/2 mb-10 rounded-xl hover:shadow-lg hover:shadow-amber-950 hover:border-4 hover:border-amber-950 hover:cursor-pointer"
                  onClick={() => handleClickOnBoat(stage.selection)}
                />
                <h3 className="font-snake uppercase text-xl text-amber-950 mb-4">
                  {stage.name}
                </h3>
                <p className="font-snake uppercase text-xs text-amber-950">
                  {stage.description}
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
