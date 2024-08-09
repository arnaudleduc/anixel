import { OrthographicCamera, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const GameCamera: React.FC = () => {
  const gameCamera = useRef<THREE.OrthographicCamera>(null!);

  useHelper(gameCamera, THREE.CameraHelper);

  return (
    <OrthographicCamera
      ref={gameCamera}
      position={[0, 0, 2]}
      makeDefault
      zoom={60}
    />
  );
};

export default GameCamera;
