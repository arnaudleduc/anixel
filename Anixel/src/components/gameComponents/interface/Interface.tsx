import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import mainTheme from "../../../assets/sounds/pirateAmbienceMusic.mp3";
import useScenesStore from "../../../stores/useScenesStore";
import Shop from "../shop/Shop";
import Home from "../home/Home";
import Boat from "../boat/Boat";
import { useTranslation } from "react-i18next";

const audio = new Audio(mainTheme);

const Interface: React.FC = () => {
  const { t } = useTranslation();

  const [soundIsOn, setSoundIsOn] = useState<boolean>(false);

  const {
    shopIsActive,
    shopIsHovered,
    boatIsActive,
    boatIsHovered,
    homeIsActive,
    homeIsHovered,
  } = useScenesStore();

  useEffect(() => {
    // if (experienceHasStarted) {
    if (soundIsOn) {
      audio.volume = 0.2;
      audio.play();
      audio.loop = true;
    } else if (!soundIsOn) {
      audio.pause();
    }
    // }
  }, [soundIsOn]);

  return (
    <>
      {/* Bottom right interface's parameters */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-5 right-5">
          <div
            className="pointer-events-auto cursor-pointer"
            onClick={() => setSoundIsOn(!soundIsOn)}
          >
            {soundIsOn ? (
              <FontAwesomeIcon icon={faVolumeHigh} size="3x" fixedWidth />
            ) : (
              <FontAwesomeIcon icon={faVolumeOff} size="3x" fixedWidth />
            )}
          </div>
        </div>
      </div>

      {/* Actions on hover intertactive elements */}
      {(shopIsHovered || boatIsHovered || homeIsHovered) && (
        <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center pointer-events-none">
          <div className="relative top-60 font-snake uppercase px-6 py-6 bg-yellow-100 shadow-xl rounded-xl pointer-events-none text-center tracking-widest text-amber-950 text-2xl">
            {shopIsHovered && t("shop")}
            {boatIsHovered && t("play")}
            {homeIsHovered && t("home")}
          </div>
        </div>
      )}

      {/* Game interfaces logic */}
      {shopIsActive && <Shop />}
      {boatIsActive && <Boat />}
      {homeIsActive && <Home />}
    </>
  );
};

export default Interface;
