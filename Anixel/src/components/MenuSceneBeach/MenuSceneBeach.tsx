import * as THREE from "three";
import { Cloud, Clouds, Float, Sphere, useGLTF } from "@react-three/drei";
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
      <Float
        speed={1}
        rotationIntensity={0.3}
        floatIntensity={0.5}
        floatingRange={[-0.7, 0.1]}
      >
        <Clouds material={THREE.MeshBasicMaterial} position={[0, -1, -20]}>
          <Cloud
            segments={150}
            bounds={[30, 1, 18]}
            volume={15}
            color="#817499"
            opacity={0.3}
          />
        </Clouds>
      </Float>
      <BeachWater />
    </>
  );
};

useGLTF.preload("models/sceneMenu_Sand.glb");
export default MenuSceneBeach;
