import { OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GameCamera: React.FC = () => {
  const gameCamera = useRef<THREE.OrthographicCamera>(null!);

  return (
    <OrthographicCamera
      ref={gameCamera}
      position={[0, 0, 10]}
      makeDefault
      zoom={60}
    />
  );
};

export default GameCamera;
