import { Canvas } from "@react-three/fiber";
import MenuScene from "../menuScene/MenuScene";
import MainCamera from "../mainCamera/MainCamera";
import Lighting from "../lighting/Lighting";
import { Environment, SoftShadows } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Interface from "../../gameComponents/interface/Interface";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import { Suspense } from "react";

const Experience: React.FC = () => {
  return (
    <>
      <LoadingScreen />
      <Canvas shadows>
        <Perf />
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
        <SoftShadows />
        {/* <BakeShadows /> */}
        <MainCamera />
        <Lighting />

        {/* Scene */}

        <Suspense fallback={null}>
          <MenuScene />
        </Suspense>
      </Canvas>
      <Interface />
    </>
  );
};

export default Experience;
