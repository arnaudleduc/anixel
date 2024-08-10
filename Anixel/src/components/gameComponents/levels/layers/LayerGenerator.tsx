import { useTexture, Plane, Html, useCursor } from "@react-three/drei";
import useScenesStore from "../../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect, useRef, useState } from "react";
import { GRID_ROW, GRID_COL } from "../constants/constants";
import { Texture } from "three";

export interface Positions {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

const LayerGenerator: React.FC = () => {
  const { gridRowArray, setGridRowArray, gridColArray, setGridColArray } =
    useScenesStore(
      useShallow((state) => {
        return {
          gridRowArray: state.gridRowArray,
          setGridRowArray: state.setGridRowArray,
          gridColArray: state.gridColArray,
          setGridColArray: state.setGridColArray,
        };
      })
    );

  const [hovered, setHovered] = useState<boolean>(false);

  useCursor(hovered, "pointer");

  const [c1_1, c1_2, c1_3, c2_1, c2_2, c2_3, c3_1, c3_2, c3_3]: Texture[] =
    useTexture([
      "images/cases/mountain/C1_1.png",
      "images/cases/mountain/C1_2.png",
      "images/cases/mountain/C1_3.png",
      "images/cases/mountain/C2_1.png",
      "images/cases/mountain/C2_2.png",
      "images/cases/mountain/C2_3.png",
      "images/cases/mountain/C3_1.png",
      "images/cases/mountain/C3_2.png",
      "images/cases/mountain/C3_3.png",
    ]);

  const [casesTextures] = useState<Texture[]>([
    c1_1,
    c1_2,
    c1_3,
    c2_1,
    c2_2,
    c2_3,
    c3_1,
    c3_2,
    c3_3,
  ]);

  const caseRef = useRef<any>({});

  const [objectPositions] = useState<Positions>({
    minX: -Math.trunc(GRID_COL / 2) || 0,
    minY: -Math.trunc(GRID_ROW / 2) || 0,
    maxX: Math.trunc(GRID_COL / 2) || 0,
    maxY: Math.trunc(GRID_ROW / 2) || 0,
  });

  const displaySelector: (rowIndex: number, colIndex: number) => void = (
    rowIndex,
    colIndex
  ) => {
    setHovered(true);
    if (caseRef.current) {
      caseRef.current[`case-${rowIndex}/${colIndex}`].material.color.set(
        "#FF6666"
      );
    }
  };

  const hideSelector: (rowIndex: number, colIndex: number) => void = (
    rowIndex,
    colIndex
  ) => {
    setHovered(false);
    if (caseRef.current) {
      caseRef.current[`case-${rowIndex}/${colIndex}`].material.colorWrite =
        true;
      caseRef.current[`case-${rowIndex}/${colIndex}`].material.color.set(
        "#FFFFFF"
      );
    }
  };

  useEffect(() => {
    setGridRowArray(Array.from(Array(GRID_ROW).keys()));
    setGridColArray(Array.from(Array(GRID_COL).keys()));
  }, []);

  return (
    <group position={[0.5, 0.5, 0]}>
      {gridRowArray.map((_row, rowIndex) => {
        return (
          <group key={`row-${rowIndex + 1}`}>
            {gridColArray.map((_col, colIndex) => {
              const randTextureIndex = Math.floor(
                Math.random() * casesTextures.length
              );

              return (
                <Plane
                  args={[1, 1]}
                  key={`case-${rowIndex}/${colIndex}`}
                  ref={(el) =>
                    (caseRef.current[`case-${rowIndex}/${colIndex}`] = el)
                  }
                  position={[
                    colIndex + objectPositions.minX,
                    rowIndex + objectPositions.minY,
                    0,
                  ]}
                  onPointerEnter={() => displaySelector(rowIndex, colIndex)}
                  onPointerLeave={() => hideSelector(rowIndex, colIndex)}
                >
                  <meshBasicMaterial map={casesTextures[randTextureIndex]} />
                </Plane>
              );
            })}
          </group>
        );
      })}
    </group>
  );
};

export default LayerGenerator;
