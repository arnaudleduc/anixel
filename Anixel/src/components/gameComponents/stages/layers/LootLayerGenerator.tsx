import { useEffect, useMemo, useRef, useState } from "react";
import { CHANCE, Loots } from "./constants/loot";
import useScenesStore from "../../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";
import { Plane, useCursor, useTexture } from "@react-three/drei";
import { GRID_COL, GRID_ROW } from "../constants/constants";
import { Texture } from "three";

const LootLayerGenerator: React.FC = () => {
  const { selectedStage } = useScenesStore(
    useShallow((state) => {
      return {
        selectedStage: state.selectedStage,
      };
    })
  );

  const [hovered, setHovered] = useState<boolean>(false);
  useCursor(hovered, "pointer");

  const lootRef = useRef<any>({});

  const [
    lootBoostEnergy,
    lootBoostCarbon,
    lootBoostFish,
    lootBoostFlower,
    lootBoostIron,
    lootBoostIron2,
    lootBoostLatex,
    lootBoostPlastic,
    lootBoostPlastic2,
    lootBoostSand,
    lootBoostSilicium,
    lootBoostStone,
    lootBoostWood,
    lootBoostWood2,
    lootMoneyCoin,
  ]: Texture[] = useTexture([
    "images/cases/loot/LOOT_BOOST_energy.png",
    "images/cases/loot/LOOT_CONSO_carbon.png",
    "images/cases/loot/LOOT_CONSO_fish.png",
    "images/cases/loot/LOOT_CONSO_flower.png",
    "images/cases/loot/LOOT_CONSO_iron.png",
    "images/cases/loot/LOOT_CONSO_iron2.png",
    "images/cases/loot/LOOT_CONSO_latex.png",
    "images/cases/loot/LOOT_CONSO_plastic.png",
    "images/cases/loot/LOOT_CONSO_plastic2.png",
    "images/cases/loot/LOOT_CONSO_sand.png",
    "images/cases/loot/LOOT_CONSO_silicium.png",
    "images/cases/loot/LOOT_CONSO_stone.png",
    "images/cases/loot/LOOT_CONSO_wood.png",
    "images/cases/loot/LOOT_CONSO_wood2.png",
    "images/cases/loot/LOOT_MONEY_coin.png",
  ]);

  const lootTextures = useMemo<{ [key: string]: Texture[] }>(
    () => ({
      beginner: [
        lootBoostSand,
        lootBoostStone,
        lootBoostIron,
        lootBoostWood,
        lootBoostPlastic,
        lootBoostEnergy,
        lootMoneyCoin,
      ],
      intermediate: [
        lootBoostSand,
        lootBoostStone,
        lootBoostIron,
        lootBoostWood,
        lootBoostPlastic,
        lootBoostEnergy,
        lootMoneyCoin,
        lootBoostIron2,
        lootBoostWood2,
        lootBoostPlastic2,
      ],
      expert: [
        lootBoostSand,
        lootBoostStone,
        lootBoostIron,
        lootBoostWood,
        lootBoostPlastic,
        lootBoostEnergy,
        lootMoneyCoin,
        lootBoostIron2,
        lootBoostWood2,
        lootBoostPlastic2,
        lootBoostCarbon,
        lootBoostLatex,
        lootBoostSilicium,
      ],
    }),
    []
  );

  const objectPositions = useMemo(() => {
    return {
      minX: -Math.trunc(GRID_COL / 2) || 0,
      minY: -Math.trunc(GRID_ROW / 2) || 0,
      maxX: Math.trunc(GRID_COL / 2) || 0,
      maxY: Math.trunc(GRID_ROW / 2) || 0,
    };
  }, []);

  const lootGrid = useMemo(() => {
    const gridRowArray = Array.from(Array(GRID_ROW).keys());
    const gridColArray = Array.from(Array(GRID_COL).keys());

    console.log("Selected Stage is", selectedStage);
    const lootLayerIndex = Loots.findIndex(
      (entry) => entry.stage.name === "mountain"
    );
    const stageLevel = Loots[lootLayerIndex].stage.level;
    const randMultiplier =
      Loots[lootLayerIndex].stage.loot[
        `${
          stageLevel <= 10
            ? "beginner"
            : stageLevel > 10 && stageLevel < 20
            ? "intermediate"
            : "expert"
        }`
      ].length * CHANCE;

    return gridRowArray.map((_row, rowIndex) => {
      return (
        <group dispose={null} key={`row-${rowIndex + 1}`}>
          {gridColArray.map((_col, colIndex) => {
            const randTextureIndex = Math.floor(Math.random() * randMultiplier);

            return (
              <Plane
                args={[1, 1]}
                key={`loot-layer-${rowIndex}/${colIndex}`}
                ref={(el) =>
                  (lootRef.current[`case-layer-${rowIndex}/${colIndex}`] = el)
                }
                position={[
                  colIndex + objectPositions.minX,
                  rowIndex + objectPositions.minY,
                  0,
                ]}
              >
                <meshBasicMaterial
                  map={lootTextures.beginner[randTextureIndex]}
                  color={undefined}
                  opacity={lootTextures.beginner[randTextureIndex] ? 1 : 0}
                  transparent
                />
              </Plane>
            );
          })}
        </group>
      );
    });
  }, []);

  // useEffect(() => {
  //   console.log(Loots);
  // });
  return <group position={[0.5, 0.5, 0.5]}>{lootGrid}</group>;
};

export default LootLayerGenerator;
