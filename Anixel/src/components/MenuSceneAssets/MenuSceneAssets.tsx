import * as THREE from "three";
import React from "react";
import { Float, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube031: THREE.Mesh;
    Cube031_1: THREE.Mesh;
    Cube353: THREE.Mesh;
    Cube353_1: THREE.Mesh;
    Environment_Dock: THREE.Mesh;
    Environment_PalmTree_1: THREE.Mesh;
    Environment_PalmTree_1001: THREE.Mesh;
    Environment_PalmTree_2: THREE.Mesh;
    Environment_PalmTree_2001: THREE.Mesh;
    Environment_PalmTree_3: THREE.Mesh;
    Environment_PalmTree_2002: THREE.Mesh;
    Environment_PalmTree_3001: THREE.Mesh;
    Environment_Rock_1: THREE.Mesh;
    Environment_Rock_2: THREE.Mesh;
    Environment_Rock_3: THREE.Mesh;
    Environment_Rock_4: THREE.Mesh;
    Environment_Rock_5: THREE.Mesh;
    Environment_Sawmill: THREE.Mesh;
    Environment_Skulls: THREE.Mesh;
    Environment_Cliff1: THREE.Mesh;
    Environment_Cliff2: THREE.Mesh;
    Environment_Cliff3: THREE.Mesh;
    Environment_Cliff4: THREE.Mesh;
    Prop_Anchor: THREE.Mesh;
    Prop_Barrel: THREE.Mesh;
    Prop_Barrel001: THREE.Mesh;
    Prop_Barrel002: THREE.Mesh;
    Prop_Bottle_1: THREE.Mesh;
    Prop_Bottle_2: THREE.Mesh;
    Prop_Bucket: THREE.Mesh;
    Prop_Chest_Closed: THREE.Mesh;
    Prop_Chest_Gold: THREE.Mesh;
    Ship_Large: THREE.Mesh;
    Ship_Small: THREE.Mesh;
  };
  materials: {
    Window: THREE.MeshStandardMaterial;
    ["Atlas.007"]: THREE.MeshStandardMaterial;
    ["Atlas.009"]: THREE.MeshStandardMaterial;
    ["Window.002"]: THREE.MeshStandardMaterial;
    ["Atlas.004"]: THREE.MeshStandardMaterial;
    ["Atlas.011"]: THREE.MeshStandardMaterial;
    ["Atlas.012"]: THREE.MeshStandardMaterial;
    ["Atlas.013"]: THREE.MeshStandardMaterial;
    ["Atlas.014"]: THREE.MeshStandardMaterial;
    ["Atlas.015"]: THREE.MeshStandardMaterial;
    ["Atlas.016"]: THREE.MeshStandardMaterial;
    ["Atlas.017"]: THREE.MeshStandardMaterial;
    ["Atlas.018"]: THREE.MeshStandardMaterial;
    ["Atlas.019"]: THREE.MeshStandardMaterial;
    ["Atlas.020"]: THREE.MeshStandardMaterial;
    Atlas: THREE.MeshStandardMaterial;
    ["Atlas.001"]: THREE.MeshStandardMaterial;
    ["Atlas.002"]: THREE.MeshStandardMaterial;
    ["Atlas.003"]: THREE.MeshStandardMaterial;
    ["Atlas.021"]: THREE.MeshStandardMaterial;
    ["Atlas.022"]: THREE.MeshStandardMaterial;
    ["Atlas.024"]: THREE.MeshStandardMaterial;
    ["Atlas.025"]: THREE.MeshStandardMaterial;
    ["Atlas.026"]: THREE.MeshStandardMaterial;
    ["Atlas.030"]: THREE.MeshStandardMaterial;
    ["Atlas.031"]: THREE.MeshStandardMaterial;
    ["Atlas.037"]: THREE.MeshStandardMaterial;
    ["Atlas.038"]: THREE.MeshStandardMaterial;
  };
};

const MenuSceneAssets: React.FC = () => {
  const { nodes, materials } = useGLTF("models/sceneMenu.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <group position={[-7.154, -0.015, 5.671]}>
        <mesh
          geometry={nodes.Cube031.geometry}
          material={materials.Window}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube031_1.geometry}
          castShadow
          receiveShadow
          material={materials["Atlas.007"]}
        />
      </group>
      <group position={[7.226, 0, 7.648]}>
        <mesh
          geometry={nodes.Cube353.geometry}
          castShadow
          receiveShadow
          material={materials["Atlas.009"]}
        />
        <mesh
          geometry={nodes.Cube353_1.geometry}
          castShadow
          receiveShadow
          material={materials["Window.002"]}
        />
      </group>
      <mesh
        geometry={nodes.Environment_Dock.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.004"]}
        position={[-3.033, -0.337, 4.037]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_1.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.011"]}
        position={[-9.639, 0, 8.735]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_1001.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.011"]}
        position={[9.101, 0, 6.515]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_2.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.012"]}
        position={[-6.218, 0, 2.403]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_2001.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.012"]}
        position={[6.491, -0.088, 5.415]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_3.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.013"]}
        position={[-9.227, 0, 3.626]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_2002.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.012"]}
        position={[-7.225, -0.088, 15.42]}
      />
      <mesh
        geometry={nodes.Environment_PalmTree_3001.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.013"]}
        position={[7.813, 0, 14.599]}
      />
      <mesh
        geometry={nodes.Environment_Rock_1.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.014"]}
        position={[3.054, 0.065, 7.393]}
      />
      <mesh
        geometry={nodes.Environment_Rock_2.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.015"]}
        position={[-7.32, -0.079, 14.3]}
      />
      <mesh
        geometry={nodes.Environment_Rock_3.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.016"]}
        position={[6.742, -0.094, 14.416]}
      />
      <mesh
        geometry={nodes.Environment_Rock_4.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.017"]}
        position={[-8.155, -0.116, 9.574]}
      />
      <mesh
        geometry={nodes.Environment_Rock_5.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.018"]}
        position={[-7.047, 0.107, 13.437]}
      />
      <mesh
        geometry={nodes.Environment_Sawmill.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.019"]}
        position={[7.727, 0.052, 11.401]}
      />
      <mesh
        geometry={nodes.Environment_Skulls.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.020"]}
        position={[-6.229, 0.368, 14.975]}
      />
      <mesh
        geometry={nodes.Environment_Cliff1.geometry}
        castShadow
        receiveShadow
        material={materials.Atlas}
        position={[-12.477, -0.396, 0]}
      />
      <mesh
        geometry={nodes.Environment_Cliff2.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.001"]}
        position={[11.401, -0.857, 3.843]}
      />
      <mesh
        geometry={nodes.Environment_Cliff3.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.002"]}
        position={[-7.907, -0.569, -7.702]}
      />
      <mesh
        geometry={nodes.Environment_Cliff4.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.003"]}
        position={[6.991, -0.631, -10.904]}
      />
      <mesh
        geometry={nodes.Prop_Anchor.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.021"]}
        position={[-7.613, 0.3, 7.21]}
      />
      <mesh
        geometry={nodes.Prop_Barrel.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.022"]}
        position={[-5.385, 0, 5.997]}
      />
      <mesh
        geometry={nodes.Prop_Barrel001.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.022"]}
        position={[-5.002, 0, 5.713]}
      />
      <mesh
        geometry={nodes.Prop_Barrel002.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.022"]}
        position={[-4.657, 0, 5.366]}
      />
      <mesh
        geometry={nodes.Prop_Bottle_1.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.024"]}
        position={[-4.702, 0.381, 5.39]}
      />
      <mesh
        geometry={nodes.Prop_Bottle_2.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.025"]}
        position={[-4.625, 0.38, 5.396]}
      />
      <mesh
        geometry={nodes.Prop_Bucket.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.026"]}
        position={[5.303, 0.035, 7.601]}
      />
      <mesh
        geometry={nodes.Prop_Chest_Closed.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.030"]}
        position={[-7.894, 0, 7.993]}
      />
      <mesh
        geometry={nodes.Prop_Chest_Gold.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.031"]}
        position={[-7.092, 0, 7.815]}
      />
      <Float
        speed={1}
        rotationIntensity={0.3}
        floatIntensity={0.5}
        floatingRange={[-0.95, 0.05]}
      >
        <mesh
          geometry={nodes.Ship_Large.geometry}
          castShadow
          receiveShadow
          material={materials["Atlas.037"]}
          position={[1.426, 0.548, -5.574]}
        />
      </Float>
      <mesh
        geometry={nodes.Ship_Small.geometry}
        castShadow
        receiveShadow
        material={materials["Atlas.038"]}
        position={[-1.546, -0.359, 2.787]}
      />
    </group>
  );
};

useGLTF.preload("models/sceneMenu.glb");
export default MenuSceneAssets;
