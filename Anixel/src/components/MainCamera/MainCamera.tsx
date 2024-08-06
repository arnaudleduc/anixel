import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import Parallax from "../../utils/parallax/Parallax";

const MainCamera: React.FC = () => {
  const cameraGroup = useRef(null);

  useEffect(() => {
    console.log(cameraGroup.current);
  });

  return (
    <group ref={cameraGroup}>
      <PerspectiveCamera makeDefault position={[0, 3.6, 30]} fov={30} />
      <Parallax cameraGroup={cameraGroup} />
    </group>
  );
};

export default MainCamera;
