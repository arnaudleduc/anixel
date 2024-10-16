import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const BedroomCamera: React.FC = () => {
  const bedroomCamera = useRef<THREE.OrthographicCamera>(null!);

  return (
    // <OrthographicCamera
    //   ref={bedroomCamera}
    //   position={[0, 0, 2]}
    //   makeDefault
    //   zoom={220}
    // />
    <OrbitControls />
  );
};

export default BedroomCamera;
