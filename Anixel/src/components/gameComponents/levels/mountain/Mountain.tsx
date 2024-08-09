import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../../stores/useScenesStore";
import AreYouSure from "../../areYouSure/AreYouSure";
import { GRID_ROW, GRID_COL } from "../constants/constants";
import { useEffect } from "react";

const Mountain: React.FC = () => {
  const {
    showAreYouSureMessage,
    setShowAreYouSureMessage,
    gridRowArray,
    setGridRowArray,
    gridColArray,
    setGridColArray,
  } = useScenesStore();

  useEffect(() => {
    setGridRowArray(Array.from(Array(GRID_ROW).keys()));
    setGridColArray(Array.from(Array(GRID_COL).keys()));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setShowAreYouSureMessage(true)}
          className="cursor-pointer hover:animate-ping"
        />

        <div className="flex flex-col items-center justify-center m-auto h-[96%] w-1/2">
          {gridColArray.map((_row, rowIndex) => {
            return (
              <div className="flex w-full h-full">
                <div className="bg-black h-full w-full hover:bg-white hover:cursor-grab">
                  {rowIndex}
                </div>
                {gridRowArray.map((_col, colIndex) => {
                  return (
                    <div className="bg-black h-full w-full hover:bg-white hover:cursor-grab">
                      {colIndex}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {showAreYouSureMessage && <AreYouSure level="mountain" />}
    </div>
  );
};

export default Mountain;
