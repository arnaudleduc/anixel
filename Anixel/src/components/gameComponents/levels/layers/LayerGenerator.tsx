import { useTexture, Plane } from "@react-three/drei";
import useScenesStore from "../../../../stores/useScenesStore";
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
    useScenesStore();

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

  useEffect(() => {
    setGridRowArray(Array.from(Array(GRID_ROW).keys()));
    setGridColArray(Array.from(Array(GRID_COL).keys()));
  }, []);

  // useEffect(() => {
  //   if (caseRef.current) {
  //     gridRowArray.forEach((_row, rowIndex) => {
  //       gridColArray.forEach((_case, colIndex) => {
  //         console.log(
  //           "Case",
  //           rowIndex,
  //           colIndex,
  //           caseRef.current?.[`case-${rowIndex}/${colIndex}`]
  //         );
  //       });
  //     });
  //   }
  // }, [gridRowArray, gridColArray]);

  return (
    <>
      {gridRowArray.map((_row, rowIndex) => {
        return (
          <group key={`row-${rowIndex + 1}`}>
            {gridColArray.map((_col, colIndex) => {
              const randTextureIndex = Math.floor(
                Math.random() * casesTextures.length
              );

              console.log(randTextureIndex);

              return (
                <Plane
                  args={[1, 1]}
                  key={`case-${colIndex}/${rowIndex}`}
                  ref={(el) =>
                    (caseRef.current[`case-${rowIndex}/${colIndex}`] = { el })
                  }
                  position={[
                    colIndex + objectPositions.minX,
                    rowIndex + objectPositions.minY,
                    0,
                  ]}
                >
                  <meshBasicMaterial map={casesTextures[randTextureIndex]} />
                </Plane>
              );
            })}
          </group>
        );
      })}
    </>
  );
};

export default LayerGenerator;
