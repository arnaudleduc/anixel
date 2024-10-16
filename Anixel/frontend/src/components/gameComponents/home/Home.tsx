import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useShallow } from "zustand/react/shallow";
import { useTranslation } from "react-i18next";

interface Room {
  selection: string;
  name: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const { setHomeIsActive, setSelectedRoom } = useScenesStore(
    useShallow((state) => {
      return {
        setHomeIsActive: state.setHomeIsActive,
        setSelectedRoom: state.setSelectedRoom,
      };
    })
  );

  const { t } = useTranslation();

  const roomsList: Room[] = [
    {
      selection: "workshop",
      name: t("rooms.workshop.name"),
      description: t("rooms.workshop.description"),
      image: "images/rooms/ROOM_workshop.png",
    },
    {
      selection: "bedroom",
      name: t("rooms.bedroom.name"),
      description: t("rooms.bedroom.description"),
      image: "images/rooms/ROOM_bedroom.png",
    },
    {
      selection: "storage",
      name: t("rooms.storage.name"),
      description: t("rooms.storage.description"),
      image: "images/rooms/ROOM_storage.png",
    },
  ];

  const handleClickOnRoom: (selection: string) => void = (selection) => {
    setSelectedRoom(selection);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen">
      <div className="rounded-2xl bg-yellow-100 h-5/6 m-12 p-10">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          onClick={() => setHomeIsActive(false)}
          className="cursor-pointer hover:animate-ping"
        />
        <div className="flex justify-evenly h-full">
          {roomsList.map((room, index) => {
            return (
              <div
                key={`room-n-${index + 1}`}
                className="flex flex-col items-center justify-center w-3/4 "
              >
                <img
                  src={room.image}
                  alt={`${room.name}'s room`}
                  className="h-1/2 mb-10 rounded-xl hover:shadow-lg hover:shadow-amber-950 hover:border-4 hover:border-amber-950 hover:cursor-pointer"
                  onClick={() => handleClickOnRoom(room.selection)}
                />
                <h3 className="font-snake uppercase text-xl text-amber-950 mb-4">
                  {room.name}
                </h3>
                <p className="font-snake uppercase text-xs text-amber-950 text-center">
                  {room.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
