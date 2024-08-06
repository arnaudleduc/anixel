import { Canvas } from "@react-three/fiber";
import MenuScene from "../menuScene/MenuScene";
import MainCamera from "../mainCamera/MainCamera";
import Lighting from "../lighting/Lighting";
import { BakeShadows, Environment, SoftShadows } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Experience: React.FC = () => {
  return (
    <>
      <Canvas shadows>
        {/* <Perf /> */}
        {/* Scene configuration */}
        <OrbitControls />

        {/* <color attach="background" args={["#C5DBF0"]} /> */}
        <Environment
          background
          files={"hdr/kiara_1_dawn_1k.hdr"}
          backgroundBlurriness={0.2}
          backgroundIntensity={0.6}
          environmentIntensity={0.1}
        />
        <SoftShadows />
        <BakeShadows />
        <MainCamera />
        <Lighting />

        {/* Scene */}

        <MenuScene />
      </Canvas>
    </>
  );
};

export default Experience;
