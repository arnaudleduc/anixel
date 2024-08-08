import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faLink,
  faVolumeHigh,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import mainTheme from "../../../assets/sounds/pirateAmbienceMusic.mp3";
import useScenesStore from "../../../stores/useScenesStore";
import Shop from "../shop/Shop";
import Home from "../home/Home";
import Boat from "../boat/Boat";
import { useTranslation } from "react-i18next";
import { buttonsList } from "./constants/buttons";
import Socials from "../socials/Socials";
import Help from "../help/Help";

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
    socialsAreOpen,
    setSocialsAreOpen,
    helpIsOpen,
    setHelpIsOpen,
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
        <div className="flex absolute bottom-4 right-4 bg-[#fff9a6] rounded-lg px-12 py-4">
          <button
            className="pointer-events-auto cursor-pointer mr-12"
            onClick={() => setSoundIsOn(!soundIsOn)}
          >
            {soundIsOn ? (
              <FontAwesomeIcon
                icon={faVolumeHigh}
                size="3x"
                fixedWidth
                color="#461D07"
              />
            ) : (
              <FontAwesomeIcon
                icon={faVolumeOff}
                size="3x"
                fixedWidth
                color="#461D07"
              />
            )}
          </button>
          <button
            className="pointer-events-auto cursor-pointer mr-12"
            onClick={() => setSocialsAreOpen(!socialsAreOpen)}
          >
            <FontAwesomeIcon
              icon={faLink}
              size="3x"
              fixedWidth
              color="#461D07"
            />
          </button>
          <button
            className="pointer-events-auto cursor-pointer "
            onClick={() => setHelpIsOpen(!helpIsOpen)}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              size="3x"
              fixedWidth
              color="#461D07"
            />
          </button>
        </div>
      </div>

      {/* Actions on hover intertactive elements */}
      <div className="fixed top-0 left-0 w-full h-screen flex justify-evenly items-center pointer-events-none">
        {buttonsList.map((button, index) => {
          return (
            <div
              key={`button-n-${index + 1}`}
              className={`relative ${
                button === "play" ? "top-40" : "top-60"
              } font-snake uppercase w-60 h-20 px-6 py-6 bg-yellow-100 shadow-xl rounded-xl pointer-events-none text-center tracking-widest text-amber-950 text-2xl animate-fadeIn ${
                (
                  button === "shop"
                    ? shopIsHovered
                    : button === "play"
                    ? boatIsHovered
                    : homeIsHovered
                )
                  ? "animate-fadeIn"
                  : "animate-fadeOutFast"
              }`}
            >
              {t(button)}
            </div>
          );
        })}
      </div>

      {/* Game interfaces logic */}
      {shopIsActive && <Shop />}
      {boatIsActive && <Boat />}
      {homeIsActive && <Home />}
      {socialsAreOpen && <Socials />}
      {helpIsOpen && <Help />}
    </>
  );
};

export default Interface;
