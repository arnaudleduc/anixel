import LayerGenerator from "../levels/layers/LayerGenerator";
import { Texture } from "three";
import { OrbitControls, useTexture } from "@react-three/drei";
import GameCamera from "../gameCamera/GameCamera";

export interface GameCanvasProps {
  level: string;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ level }) => {
  const [
    mountainBackground,
    oceanBackground,
    jungleBackground,
    savannahBackground,
  ]: Texture[] = useTexture([
    "hdr/levelsHDR/HDR_jungle.webp",
    "hdr/levelsHDR/HDR_jungle.webp",
    "hdr/levelsHDR/HDR_jungle.webp",
    "hdr/levelsHDR/HDR_jungle.webp",
  ]);

  const levels: { [key: string]: { [key: string]: Texture } } = {
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
          map={levels[level].texture}
          opacity={0.6}
          transparent
        />
      </mesh>
      {/* <OrbitControls /> */}
      <GameCamera />
      {/* Game */}
      <LayerGenerator level={level} layer={0} />
      <LayerGenerator level={level} layer={1} />
      <LayerGenerator level={level} layer={2} />
      <LayerGenerator level={level} layer={3} />
    </>
  );
};

export default GameCanvas;
