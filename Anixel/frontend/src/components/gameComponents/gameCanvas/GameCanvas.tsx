import LayerGenerator from "../stages/layers/LayerGenerator";
import { Texture } from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import GameCamera from "../gameCamera/GameCamera";
import LootLayerGenerator from "../stages/layers/LootLayerGenerator";
import useScenesStore from "../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";

const GameCanvas: React.FC = () => {
  const { selectedStage } = useScenesStore(
    useShallow((state) => {
      return {
        selectedStage: state.selectedStage,
      };
    })
  );

  const [
    mountainBackground,
    oceanBackground,
    jungleBackground,
    savannahBackground,
  ]: Texture[] = useTexture([
    "hdr/stagesHDR/HDR_mountain.webp",
    "hdr/stagesHDR/HDR_ocean.webp",
    "hdr/stagesHDR/HDR_jungle.webp",
    "hdr/stagesHDR/HDR_savannah.webp",
  ]);

  const stages: { [key: string]: { [key: string]: Texture } } = {
    mountain: {
      texture: mountainBackground,
    },
    ocean: {
      texture: oceanBackground,
    },
    jungle: {
      texture: jungleBackground,
    },
    savannah: {
      texture: savannahBackground,
    },
  };

  return (
    <>
      {/* Scene configuration */}
      <mesh position={[0, 0, -1]} scale={12}>
        <planeGeometry args={[1.792, 1.024]} />
        <meshBasicMaterial
          map={stages[selectedStage].texture}
          opacity={0.6}
          transparent
        />
      </mesh>
      {/* <OrbitControls /> */}
      <GameCamera />

      {/* Game */}
      <LayerGenerator layer={0} />
      <LootLayerGenerator />
      <LayerGenerator layer={1} />
      {/* <LayerGenerator layer={2} />
      <LayerGenerator layer={3} /> */}
    </>
  );
};

export default GameCanvas;
