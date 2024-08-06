import * as THREE from "three";
import { Sphere, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import BeachWater from "../beachWater/BeachWater";

type GLTFResult = GLTF & {
  nodes: {
    beachFloor: THREE.Mesh;
  };
  materials: unknown;
};

const MenuSceneBeach = () => {
  const { nodes } = useGLTF("models/sceneMenu_Sand.glb") as GLTFResult;
  return (
    <>
      <group dispose={null}>
        <mesh
          geometry={nodes.beachFloor.geometry}
          position={[0, 0.044, 3.982]}
          receiveShadow
        >
          <meshStandardMaterial color={"#E3BA66"} />
        </mesh>
      </group>
      <Sphere scale={10} position={[0, 2, -35]} material-color={"#ff7f00"} />
      <BeachWater />
    </>
  );
};

useGLTF.preload("models/sceneMenu_Sand.glb");
export default MenuSceneBeach;
