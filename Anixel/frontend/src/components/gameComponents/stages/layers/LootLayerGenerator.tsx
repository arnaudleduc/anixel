import { useEffect, useMemo, useRef, useState } from "react";
import { CHANCE, Loots } from "./constants/loot";
import useScenesStore from "../../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";
import { Float, Plane, useCursor, useTexture } from "@react-three/drei";
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

  // const [hovered, setHovered] = useState<boolean>(false);
  // useCursor(hovered, "pointer");

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

  const mountainBeginnerLoot = useMemo<Texture[]>(
    () => [
      lootBoostSand,
      lootBoostStone,
      lootBoostIron,
      lootBoostWood,
      lootBoostPlastic,
      lootBoostEnergy,
      lootMoneyCoin,
    ],
    []
  );

  const mountainIntermediateLoot = useMemo<Texture[]>(
    () => [
      ...mountainBeginnerLoot,
      lootBoostIron2,
      lootBoostWood2,
      lootBoostPlastic2,
    ],
    [mountainBeginnerLoot]
  );

  const mountainExpertLoot = useMemo<Texture[]>(
    () => [
      ...mountainIntermediateLoot,
      lootBoostCarbon,
      lootBoostLatex,
      lootBoostSilicium,
    ],
    [mountainIntermediateLoot]
  );

  const oceanBeginnerLoot = useMemo<Texture[]>(
    () => [
      lootBoostSand,
      lootBoostFish,
      lootBoostIron,
      lootBoostWood,
      lootBoostPlastic,
      lootBoostEnergy,
      lootMoneyCoin,
    ],
    []
  );

  const oceanIntermediateLoot = useMemo<Texture[]>(
    () => [
      ...oceanBeginnerLoot,
      lootBoostIron2,
      lootBoostWood2,
      lootBoostPlastic2,
    ],
    [oceanBeginnerLoot]
  );

  const oceanExpertLoot = useMemo<Texture[]>(
    () => [
      ...oceanIntermediateLoot,
      lootBoostCarbon,
      lootBoostLatex,
      lootBoostSilicium,
    ],
    [oceanIntermediateLoot]
  );

  const jungleBeginnerLoot = useMemo<Texture[]>(
    () => [
      lootBoostSand,
      lootBoostFlower,
      lootBoostIron,
      lootBoostWood,
      lootBoostPlastic,
      lootBoostEnergy,
      lootMoneyCoin,
    ],
    []
  );

  const jungleIntermediateLoot = useMemo<Texture[]>(
    () => [
      ...jungleBeginnerLoot,
      lootBoostIron2,
      lootBoostWood2,
      lootBoostPlastic2,
    ],
    [jungleBeginnerLoot]
  );

  const jungleExpertLoot = useMemo<Texture[]>(
    () => [
      ...jungleIntermediateLoot,
      lootBoostCarbon,
      lootBoostLatex,
      lootBoostSilicium,
    ],
    [jungleIntermediateLoot]
  );

  const savannahBeginnerLoot = useMemo<Texture[]>(
    () => [
      lootBoostSand,
      lootBoostStone,
      lootBoostFish,
      lootBoostFlower,
      lootBoostIron,
      lootBoostWood,
      lootBoostPlastic,
      lootBoostEnergy,
      lootMoneyCoin,
    ],
    []
  );

  const savannahIntermediateLoot = useMemo<Texture[]>(
    () => [
      ...savannahBeginnerLoot,
      lootBoostIron2,
      lootBoostWood2,
      lootBoostPlastic2,
    ],
    [savannahBeginnerLoot]
  );

  const savannahExpertLoot = useMemo<Texture[]>(
    () => [
      ...savannahIntermediateLoot,
      lootBoostCarbon,
      lootBoostLatex,
      lootBoostSilicium,
    ],
    [savannahIntermediateLoot]
  );

  const objectPositions = useMemo(() => {
    return {
      minX: -Math.trunc(GRID_COL / 2) || 0,
      minY: -Math.trunc(GRID_ROW / 2) || 0,
      maxX: Math.trunc(GRID_COL / 2) || 0,
      maxY: Math.trunc(GRID_ROW / 2) || 0,
    };
  }, []);

  const choseTextureBasedOnStageAndStageLevel: (
    stageLevelName: string
  ) => Texture[] | undefined = (stageLevelName) => {
    if (selectedStage === "mountain") {
      return stageLevelName === "beginner"
        ? mountainBeginnerLoot
        : stageLevelName === "intermediate"
        ? mountainIntermediateLoot
        : mountainExpertLoot;
    } else if (selectedStage === "ocean") {
      return stageLevelName === "beginner"
        ? oceanBeginnerLoot
        : stageLevelName === "intermediate"
        ? oceanIntermediateLoot
        : oceanExpertLoot;
    } else if (selectedStage === "jungle") {
      return stageLevelName === "beginner"
        ? jungleBeginnerLoot
        : stageLevelName === "intermediate"
        ? jungleIntermediateLoot
        : jungleExpertLoot;
    } else if (selectedStage === "savannah") {
      return stageLevelName === "beginner"
        ? savannahBeginnerLoot
        : stageLevelName === "intermediate"
        ? savannahIntermediateLoot
        : savannahExpertLoot;
    }
  };

  const lootGrid = useMemo(() => {
    const gridRowArray = Array.from(Array(GRID_ROW).keys());
    const gridColArray = Array.from(Array(GRID_COL).keys());

    console.log("Selected Stage is", selectedStage);
    const lootLayerIndex = Loots.findIndex(
      (entry) => entry.stage.name === "mountain"
    );
    const stageLevel = Loots[lootLayerIndex].stage.level;
    const stageLevelName =
      stageLevel <= 10
        ? "beginner"
        : stageLevel > 10 && stageLevel < 20
        ? "intermediate"
        : "expert";
    const randMultiplier =
      Loots[lootLayerIndex].stage.loot[`${stageLevelName}`].length * CHANCE;

    return gridRowArray.map((_row, rowIndex) => {
      return (
        <group dispose={null} key={`row-${rowIndex + 1}`}>
          {gridColArray.map((_col, colIndex) => {
            const randTextureIndex = Math.floor(Math.random() * randMultiplier);
            const textureArray =
              choseTextureBasedOnStageAndStageLevel(stageLevelName);
            return (
              <Float
                key={`loot-layer-${rowIndex}/${colIndex}`}
                rotationIntensity={0}
                speed={4}
                floatingRange={[-0.07, 0.07]}
              >
                <Plane
                  args={[1, 1]}
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
                    map={textureArray?.[randTextureIndex]}
                    color={undefined}
                    opacity={textureArray?.[randTextureIndex] ? 1 : 0}
                    transparent
                    toneMapped={false}
                  />
                </Plane>
              </Float>
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
