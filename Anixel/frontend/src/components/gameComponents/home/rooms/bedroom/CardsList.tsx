import * as THREE from "three";
import { Box, Text, useCursor, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useState } from "react";

interface Anixels {
  number: number;
  name: string;
  rarity: string;
  position?: number[];
  texturePath?: THREE.Texture;
}

const CardsList: React.FC = () => {
  const [isCardHover, setIsCardHover] = useState<boolean>(false);

  useCursor(isCardHover);

  const [
    card1Texture,
    card2Texture,
    card3Texture,
    card4Texture,
    card5Texture,
    card6Texture,
    card7Texture,
    card8Texture,
    card9Texture,
    card10Texture,
    card11Texture,
    card12Texture,
    card13Texture,
    card14Texture,
    card15Texture,
    card16Texture,
    card17Texture,
    card18Texture,
    card19Texture,
    card20Texture,
    card21Texture,
  ] = useTexture([
    "/textures/anixels/texture1.png",
    "/textures/anixels/texture2.png",
    "/textures/anixels/texture3.png",
    "/textures/anixels/texture4.png",
    "/textures/anixels/texture5.png",
    "/textures/anixels/texture6.png",
    "/textures/anixels/texture7.png",
    "/textures/anixels/texture8.png",
    "/textures/anixels/texture9.png",
    "/textures/anixels/texture10.png",
    "/textures/anixels/texture11.png",
    "/textures/anixels/texture12.png",
    "/textures/anixels/texture13.png",
    "/textures/anixels/texture14.png",
    "/textures/anixels/texture15.png",
    "/textures/anixels/texture16.png",
    "/textures/anixels/texture17.png",
    "/textures/anixels/texture18.png",
    "/textures/anixels/texture19.png",
    "/textures/anixels/texture20.png",
    "/textures/anixels/texture21.png",
  ]);

  card1Texture.flipY = false;
  card2Texture.flipY = false;
  card3Texture.flipY = false;
  card4Texture.flipY = false;
  card5Texture.flipY = false;
  card6Texture.flipY = false;
  card7Texture.flipY = false;
  card8Texture.flipY = false;
  card9Texture.flipY = false;
  card10Texture.flipY = false;
  card11Texture.flipY = false;
  card12Texture.flipY = false;
  card13Texture.flipY = false;
  card14Texture.flipY = false;
  card15Texture.flipY = false;
  card16Texture.flipY = false;
  card17Texture.flipY = false;
  card18Texture.flipY = false;
  card19Texture.flipY = false;
  card20Texture.flipY = false;
  card21Texture.flipY = false;

  const ANIXELS: Anixels[] = [
    {
      number: 1,
      name: "Croxel",
      rarity: "Uncommon",
      position: [-2.1, 0.5, 0.7],
      texturePath: card1Texture,
    },
    {
      number: 2,
      name: "Chixel",
      rarity: "Uncommon",
      position: [-1.4, 0.5, 0.7],
      texturePath: card2Texture,
    },
    {
      number: 3,
      name: "Yoxel",
      rarity: "Uncommon",
      position: [-0.7, 0.5, 0.7],
      texturePath: card3Texture,
    },
    {
      number: 4,
      name: "Gixel",
      rarity: "Common",
      position: [0, 0.5, 0.7],
      texturePath: card4Texture,
    },
    {
      number: 5,
      name: "Raxel",
      rarity: "Common",
      position: [0.7, 0.5, 0.7],
      texturePath: card5Texture,
    },
    {
      number: 6,
      name: "Monxel",
      rarity: "Common",
      position: [1.4, 0.5, 0.7],
      texturePath: card6Texture,
    },
    {
      number: 7,
      name: "Penxel",
      rarity: "Uncommon",
      position: [2.1, 0.5, 0.7],
      texturePath: card7Texture,
    },
    {
      number: 8,
      name: "Parxel",
      rarity: "Rare",
      position: [-2.1, 0, 0.7],
      texturePath: card8Texture,
    },
    {
      number: 9,
      name: "Emuxel",
      rarity: "Common",
      position: [-1.4, 0, 0.7],
      texturePath: card9Texture,
    },
    {
      number: 10,
      name: "Foxel",
      rarity: "Common",
      position: [-0.7, 0, 0.7],
      texturePath: card10Texture,
    },
    {
      number: 11,
      name: "Fixel",
      rarity: "Common",
      position: [0, 0, 0.7],
      texturePath: card11Texture,
    },
    {
      number: 12,
      name: "Snaxel",
      rarity: "Uncommon",
      position: [0.7, 0, 0.7],
      texturePath: card12Texture,
    },
    {
      number: 13,
      name: "Seaxel",
      rarity: "Rare",
      position: [1.4, 0, 0.7],
      texturePath: card13Texture,
    },
    {
      number: 14,
      name: "Camxel",
      rarity: "Common",
      position: [2.1, 0, 0.7],
      texturePath: card14Texture,
    },
    {
      number: 15,
      name: "Cowxel",
      rarity: "Common",
      position: [-2.1, -0.5, 0.7],
      texturePath: card15Texture,
    },
    {
      number: 16,
      name: "Froxel",
      rarity: "Common",
      position: [-1.4, -0.5, 0.7],
      texturePath: card16Texture,
    },
    {
      number: 17,
      name: "Touxel",
      rarity: "Uncommon",
      position: [-0.7, -0.5, 0.7],
      texturePath: card17Texture,
    },
    {
      number: 18,
      name: "Rhixel",
      rarity: "Uncommon",
      position: [0, -0.5, 0.7],
      texturePath: card18Texture,
    },
    {
      number: 19,
      name: "Peaxel",
      rarity: "Epic",
      position: [0.7, -0.5, 0.7],
      texturePath: card19Texture,
    },
    {
      number: 20,
      name: "Chaxel",
      rarity: "Epic",
      position: [1.4, -0.5, 0.7],
      texturePath: card20Texture,
    },
    {
      number: 21,
      name: "Draxel",
      rarity: "Mythic",
      position: [2.1, -0.5, 0.7],
      texturePath: card21Texture,
    },
  ];

  const { nodes: cardMeshGeometry } = useGLTF("/models/cardMesh.glb");

  return ANIXELS.map((anixel) => {
    return (
      <group key={`Anixel-card-n${anixel.number}`} position={anixel.position}>
        <mesh geometry={cardMeshGeometry.cardMesh.geometry}>
          <meshStandardMaterial
            map={anixel.texturePath}
            metalness={0}
            roughness={0.9}
          />
        </mesh>
        <Text
          position={[0, 0.035, 0.02]}
          font="/fonts/snakeInTheBoot.ttf"
          color="white"
          fontSize={0.05}
        >
          {anixel.name.toUpperCase()}
        </Text>
      </group>
    );
  });
};

export default CardsList;
useGLTF.preload("/models/cardMesh.glb");
