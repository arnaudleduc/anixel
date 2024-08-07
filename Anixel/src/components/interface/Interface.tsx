import { Box, Flex } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ambienceSound } from "./constant/constants";

const Interface: React.FC = () => {
  const [soundIsOn, setSoundIsOn] = useState<boolean>(true);

  useEffect(() => {
    // if (experienceHasStarted) {
    if (soundIsOn) {
      ambienceSound.play();
      ambienceSound.loop = true;
    } else {
      ambienceSound.pause();
    }
    // }
  }, [soundIsOn]);

  return (
    <Flex className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <Flex className="absolute bottom-5 right-5">
        <Box
          className="pointer-events-auto cursor-pointer"
          onClick={() => setSoundIsOn(!soundIsOn)}
        >
          {soundIsOn ? (
            <FontAwesomeIcon icon={faVolumeHigh} size="3x" fixedWidth />
          ) : (
            <FontAwesomeIcon icon={faVolumeOff} size="3x" fixedWidth />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Interface;
