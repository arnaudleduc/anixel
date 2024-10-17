import { useShallow } from "zustand/react/shallow";
import useScenesStore from "../../../../../stores/useScenesStore";
import { useEffect } from "react";
import { Center, Text3D, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const CardFocus: React.FC = () => {
  const { selectedAnixelCard } = useScenesStore(
    useShallow((state) => {
      return {
        selectedAnixelCard: state.selectedAnixelCard,
      };
    })
  );

  const { nodes: cardMeshGeometry } = useGLTF("/models/cardMesh.glb");
  const { nodes: chasseCommonGeometry } = useGLTF("/models/chasseCommon.glb");
  const { nodes: chasseUncommonGeometry } = useGLTF(
    "/models/chasseUncommon.glb"
  );
  const { nodes: chasseRareGeometry } = useGLTF("/models/chasseRare.glb");
  const { nodes: chasseEpicGeometry } = useGLTF("/models/chasseEpic.glb");
  const { nodes: chasseMythicGeometry } = useGLTF("/models/chasseMythic.glb");

  const chasseTexture = useTexture("/textures/anixels/texture1.png");
  chasseTexture.flipY = false;

  const chasseMaterial = new THREE.MeshStandardMaterial({
    map: selectedAnixelCard?.texturePath,
  });

  useEffect(() => {
    console.log(selectedAnixelCard);
  }, [selectedAnixelCard]);

  return (
    selectedAnixelCard?.name && (
      <group position={[-1.3, -0.7, 1]} scale={[3.5, 3.5, 3.5]}>
        {selectedAnixelCard.rarity === "Common" && (
          <mesh
            position={[0, 0.37, 0.02]}
            geometry={chasseCommonGeometry.chasseCommon.geometry}
            material={chasseMaterial}
          />
        )}
        {selectedAnixelCard.rarity === "Uncommon" && (
          <mesh
            position={[0, 0.37, 0.02]}
            geometry={chasseUncommonGeometry.chasseUncommon.geometry}
            material={chasseMaterial}
          />
        )}
        {selectedAnixelCard.rarity === "Rare" && (
          <mesh
            position={[0, 0.37, 0.02]}
            geometry={chasseRareGeometry.chasseRare.geometry}
            material={chasseMaterial}
          />
        )}
        {selectedAnixelCard.rarity === "Epic" && (
          <mesh
            position={[0, 0.37, 0.02]}
            geometry={chasseEpicGeometry.chasseEpic.geometry}
            material={chasseMaterial}
          />
        )}
        {selectedAnixelCard.rarity === "Mythic" && (
          <mesh
            position={[0, 0.37, 0.02]}
            geometry={chasseMythicGeometry.chasseMythic.geometry}
            material={chasseMaterial}
          />
        )}
        <mesh geometry={cardMeshGeometry.cardMesh.geometry}>
          <meshStandardMaterial map={selectedAnixelCard.texturePath} />
        </mesh>
        <Center position={[0, 0.05, 0]}>
          <Text3D
            font="/fonts/snakeInTheBoot.typeface.json"
            size={0.04}
            height={0.02}
            curveSegments={12}
          >
            {selectedAnixelCard.name.toUpperCase()}
            <meshStandardMaterial color={"#FEF9C3"} />
          </Text3D>
        </Center>
      </group>
    )
  );
};

export default CardFocus;
