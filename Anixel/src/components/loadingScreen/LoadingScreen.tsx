import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Title } from "@mantine/core";
import { useProgress } from "@react-three/drei";

const LoadingScreen: React.FC = () => {
  const { active } = useProgress();

  return (
    <Box
      className={`fixed top-0 left-0 p-16 w-full h-screen z-10 grid place-items-center bg-cyan-300 opacity-100 ${
        active ? "" : "animate-fadeOut"
      }`}
    >
      <Box>
        <Title fz={150} className="uppercase text-amber-800 m-0 font-snake">
          Anixel
        </Title>
        <Box ta={"center"}>
          <FontAwesomeIcon icon={faSpinner} size="4x" color="#92400E" spin />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
