import * as THREE from "three";
import { Float, useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {
  EffectComposer,
  Outline,
  Selection,
  Select,
} from "@react-three/postprocessing";
import useScenesStore from "../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";

type GLTFResult = GLTF & {
  nodes: {
    Cube031: THREE.Mesh;
    Cube031_1: THREE.Mesh;
    Cube353: THREE.Mesh;
    Cube353_1: THREE.Mesh;
    Ship_Large: THREE.Mesh;
  };
  materials: {
    Window: THREE.MeshStandardMaterial;
    ["Atlas.007"]: THREE.MeshStandardMaterial;
    ["Atlas.009"]: THREE.MeshStandardMaterial;
    ["Window.002"]: THREE.MeshStandardMaterial;
    ["Atlas.037"]: THREE.MeshStandardMaterial;
  };
};

const MenuInteractiveAssets: React.FC = () => {
  const { nodes, materials } = useGLTF(
    "models/sceneMenu_Interactive.glb"
  ) as GLTFResult;

  const {
    setShopIsActive,
    shopIsHovered,
    setShopIsHovered,
    setBoatIsActive,
    boatIsHovered,
    setBoatIsHovered,
    setHomeIsActive,
    homeIsHovered,
    setHomeIsHovered,
  } = useScenesStore(
    useShallow((state) => {
      return {
        setShopIsActive: state.setShopIsActive,
        shopIsHovered: state.shopIsHovered,
        setShopIsHovered: state.setShopIsHovered,
        setBoatIsActive: state.setBoatIsActive,
        boatIsHovered: state.boatIsHovered,
        setBoatIsHovered: state.setBoatIsHovered,
        setHomeIsActive: state.setHomeIsActive,
        homeIsHovered: state.homeIsHovered,
        setHomeIsHovered: state.setHomeIsHovered,
      };
    })
  );

  useCursor(shopIsHovered || boatIsHovered || homeIsHovered);

  const handleOnShopClick = () => {
    setShopIsActive(true);
  };

  const handleOnBoatClick = () => {
    setBoatIsActive(true);
  };

  const handleOnHomeClick = () => {
    setHomeIsActive(true);
  };

  return (
    <>
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur edgeStrength={10} />
        </EffectComposer>

        <group dispose={null}>
          <Select enabled={shopIsHovered}>
            <group
              position={[-7.154, -0.015, 5.671]}
              onClick={handleOnShopClick}
              onPointerEnter={() => setShopIsHovered(true)}
              onPointerOut={() => setShopIsHovered(false)}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube031.geometry}
                material={materials.Window}
              />

              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube031_1.geometry}
                material={materials["Atlas.007"]}
              />
            </group>
          </Select>
          <Select enabled={homeIsHovered}>
            <group
              position={[7.226, 0, 7.648]}
              onClick={handleOnHomeClick}
              onPointerEnter={() => setHomeIsHovered(true)}
              onPointerOut={() => setHomeIsHovered(false)}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube353.geometry}
                material={materials["Atlas.009"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube353_1.geometry}
                material={materials["Window.002"]}
              />
            </group>
          </Select>
          <Select enabled={boatIsHovered}>
            <Float
              speed={1}
              rotationIntensity={0.3}
              floatIntensity={0.5}
              floatingRange={[-0.95, 0.05]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ship_Large.geometry}
                material={materials["Atlas.037"]}
                position={[1.426, 0.548, -5.574]}
                onClick={handleOnBoatClick}
                onPointerEnter={() => setBoatIsHovered(true)}
                onPointerOut={() => setBoatIsHovered(false)}
              />
            </Float>
          </Select>
        </group>
      </Selection>
    </>
  );
};

useGLTF.preload("models/sceneMenu_Interactive.glb");
export default MenuInteractiveAssets;
