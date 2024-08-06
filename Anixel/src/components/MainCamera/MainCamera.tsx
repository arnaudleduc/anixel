import { PerspectiveCamera } from "@react-three/drei";

const MainCamera: React.FC = () => {
  return (
    <group>
      <PerspectiveCamera makeDefault position={[0, 3.6, 30]} fov={30} />
    </group>
  );
};

export default MainCamera;
