import { Canvas } from "@react-three/fiber";
import MenuScene from "../MenuScene/MenuScene";
import MainCamera from "../MainCamera/MainCamera";
import Lighting from "../Lighting/Lighting";
import { Environment } from "@react-three/drei";

// import { OrbitControls } from "@react-three/drei";

const Experience: React.FC = () => {
  return (
    <Canvas shadows>
      {/* Scene configuration */}
      {/* <OrbitControls /> */}

      {/* <color attach="background" args={["#C5DBF0"]} /> */}
      <Environment
        background
        files={"hdr/kiara_1_dawn_1k.hdr"}
        backgroundBlurriness={0.2}
        backgroundIntensity={0.6}
        environmentIntensity={0.1}
      />
      <MainCamera />
      <Lighting />

      {/* Scene */}

      <MenuScene />
    </Canvas>
  );
};

export default Experience;
