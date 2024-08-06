import { Plane } from "@react-three/drei";

const BeachWater: React.FC = () => {
  return (
    <Plane
      rotation-x={-Math.PI / 2}
      position={[0, -0.3, -2]}
      scale={[40, 20, 1]}
    >
      <meshStandardMaterial color="#2348b8" />
    </Plane>
  );
};

export default BeachWater;
