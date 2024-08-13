import { useTexture, Plane, useCursor } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { GRID_ROW, GRID_COL } from "../constants/constants";
import { Texture } from "three";
import useScenesStore from "../../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";

export interface Positions {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface LayerGeneratorProps {
  layer: number;
}

const LayerGenerator: React.FC<LayerGeneratorProps> = ({ layer }) => {
  const { selectedStage } = useScenesStore(
    useShallow((state) => {
      return {
        selectedStage: state.selectedStage,
      };
    })
  );

  const [hovered, setHovered] = useState<boolean>(false);
  useCursor(hovered, "pointer");

  const caseRef = useRef<any>({});

  const [c1_1, c1_2, c1_3, c2_1, c2_2, c2_3, c3_1, c3_2, c3_3]: Texture[] =
    useTexture([
      `images/cases/${selectedStage}/C1_1.png`,
      `images/cases/${selectedStage}/C1_2.png`,
      `images/cases/${selectedStage}/C1_3.png`,
      `images/cases/${selectedStage}/C2_1.png`,
      `images/cases/${selectedStage}/C2_2.png`,
      `images/cases/${selectedStage}/C2_3.png`,
      `images/cases/${selectedStage}/C3_1.png`,
      `images/cases/${selectedStage}/C3_2.png`,
      `images/cases/${selectedStage}/C3_3.png`,
    ]);

  const casesTextures = useMemo<{ [key: string]: Texture[] }>(
    () => ({
      layer1: [c1_1, c1_2, c1_3],
      layer2: [c2_1, c2_2, c2_3],
      layer3: [c3_1, c3_2, c3_3],
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

  const displaySelector: (rowIndex: number, colIndex: number) => void = (
    rowIndex,
    colIndex
  ) => {
    if (caseRef.current && layer > 0) {
      setHovered(true);
      caseRef.current[
        `case-layer${layer}-${rowIndex}/${colIndex}`
      ].material.color.set("#FF6666");
    }
  };

  const hideSelector: (rowIndex: number, colIndex: number) => void = (
    rowIndex,
    colIndex
  ) => {
    if (caseRef.current && layer > 0) {
      setHovered(false);
      caseRef.current[
        `case-layer${layer}-${rowIndex}/${colIndex}`
      ].material.color.set("#FFFFFF");
    }
  };

  const destroyCase: (rowIndex: number, colIndex: number) => void = (
    rowIndex,
    colIndex
  ) => {
    if (caseRef.current && layer > 0) {
      caseRef.current[
        `case-layer${layer}-${rowIndex}/${colIndex}`
      ].position.set([
        caseRef.current[`case-layer${layer}-${rowIndex}/${colIndex}`].position
          .x,
        caseRef.current[`case-layer${layer}-${rowIndex}/${colIndex}`].position
          .y,
        -4,
      ]);
    }
  };

  const grid = useMemo(() => {
    const gridRowArray = Array.from(Array(GRID_ROW).keys());
    const gridColArray = Array.from(Array(GRID_COL).keys());

    return gridRowArray.map((_row, rowIndex) => {
      return (
        <group dispose={null} key={`row-${rowIndex + 1}`}>
          {gridColArray.map((_col, colIndex) => {
            const randTextureIndex =
              layer > 0 &&
              Math.floor(Math.random() * casesTextures[`layer${layer}`].length);
            return (
              <Plane
                args={[1, 1]}
                key={`case-layer${layer}-${rowIndex}/${colIndex}`}
                ref={(el) =>
                  (caseRef.current[
                    `case-layer${layer}-${rowIndex}/${colIndex}`
                  ] = el)
                }
                position={[
                  colIndex + objectPositions.minX,
                  rowIndex + objectPositions.minY,
                  0,
                ]}
                onPointerEnter={() => displaySelector(rowIndex, colIndex)}
                onPointerLeave={() => hideSelector(rowIndex, colIndex)}
                onClick={(e) => {
                  e.stopPropagation();
                  destroyCase(rowIndex, colIndex);
                }}
              >
                <meshBasicMaterial
                  map={
                    layer > 0
                      ? casesTextures[`layer${layer}`][
                          randTextureIndex as number
                        ]
                      : null
                  }
                  color={layer === 0 ? "#C2B280" : undefined}
                  toneMapped={false}
                />
              </Plane>
            );
          })}
        </group>
      );
    });
  }, []);

  return <group position={[0.5, 0.5, layer]}>{grid}</group>;
};

export default LayerGenerator;
