import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import mainTheme from "../../assets/sounds/pirateAmbienceMusic.mp3";

const audio = new Audio(mainTheme);

const Interface: React.FC = () => {
  const [soundIsOn, setSoundIsOn] = useState<boolean>(false);

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
  );
};

export default Interface;
