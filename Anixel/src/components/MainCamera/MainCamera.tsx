import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const MainCamera: React.FC = () => {
  const cameraGroup = useRef<THREE.Group<THREE.Object3DEventMap>>(null);

  const cursor = useRef({ x: 0, y: 0 });

  const mouseMove = (event: MouseEvent) => {
    cursor.current.x = event.clientX / window.innerWidth - 0.5;
    cursor.current.y = event.clientY / window.innerHeight - 0.5;
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useFrame(() => {
    const parallaxX = -cursor.current.x * 0.5;
    const parallaxY = cursor.current.y * 0.5;

    if (cameraGroup.current) {
      // Parallax Position
      cameraGroup.current.position.x +=
        (parallaxX - cameraGroup.current.position.x) * 0.1;
      cameraGroup.current.position.y +=
        (parallaxY - cameraGroup.current.position.y) * 0.1;
    }
  });

  useEffect(() => {
    console.log(cameraGroup.current);
  });

  return (
    <group ref={cameraGroup}>
      <PerspectiveCamera makeDefault position={[0, 3.6, 30]} fov={30} />
    </group>
  );
};

export default MainCamera;
