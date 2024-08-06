import * as THREE from "three";
import React from "react";
import { Sphere, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    beachFloor: THREE.Mesh;
  };
  materials: unknown;
};

const MenuSceneBeach: React.FC = () => {
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
      <Sphere scale={10} position={[0, 2, -35]} material-color={"orange"} />
    </>
  );
};

useGLTF.preload("models/sceneMenu_Sand.glb");
export default MenuSceneBeach;
