import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faLink,
  faVolumeHigh,
  faVolumeOff,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import mainTheme from "../../../assets/sounds/pirateAmbienceMusic.mp3";
import useScenesStore from "../../../stores/useScenesStore";
import Shop from "../shop/Shop";
import Home from "../home/Home";
import Boat from "../boat/Boat";
import { useTranslation } from "react-i18next";
import { buttonsList } from "./constants/buttons";
import Socials from "../socials/Socials";
import Help from "../help/Help";
import { useShallow } from "zustand/react/shallow";
import Stage from "../stages/stage/Stage";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Bedroom from "../home/rooms/bedroom/Bedroom";
import Workshop from "../home/rooms/workshop/Workshop";
import StorageRoom from "../home/rooms/storageRoom/StorageRoom";

const audio = new Audio(mainTheme);

const Interface: React.FC = () => {
  const { t } = useTranslation();

  const [soundIsOn, setSoundIsOn] = useState<boolean>(false);

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState<string>("");

  const {
    shopIsActive,
    shopIsHovered,
    boatIsActive,
    boatIsHovered,
    homeIsActive,
    homeIsHovered,
    socialsAreOpen,
    setSocialsAreOpen,
    helpIsOpen,
    setHelpIsOpen,
    gameIsLaunched,
    selectedRoom,
  } = useScenesStore(
    useShallow((state) => {
      return {
        shopIsActive: state.shopIsActive,
        shopIsHovered: state.shopIsHovered,
        boatIsActive: state.boatIsActive,
        boatIsHovered: state.boatIsHovered,
        homeIsActive: state.homeIsActive,
        homeIsHovered: state.homeIsHovered,
        socialsAreOpen: state.socialsAreOpen,
        setSocialsAreOpen: state.setSocialsAreOpen,
        helpIsOpen: state.helpIsOpen,
        setHelpIsOpen: state.setHelpIsOpen,
        gameIsLaunched: state.gameIsLaunched,
        selectedRoom: state.selectedRoom,
      };
    })
  );

  useEffect(() => {
    if (soundIsOn) {
      audio.volume = 0.2;
      audio.play();
      audio.loop = true;
    } else if (!soundIsOn) {
      audio.pause();
    }
  }, [soundIsOn]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      {/* <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={logout}>LOGOUT</button>
      </div> */}
      <ToastContainer />
      {/* Bottom right interface's parameters */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="flex absolute bottom-4 right-4 bg-yellow-100 rounded-lg px-12 py-4">
          <button
            className="pointer-events-auto cursor-pointer mr-12"
            onClick={() => setSoundIsOn(!soundIsOn)}
          >
            {soundIsOn ? (
              <FontAwesomeIcon
                icon={faVolumeHigh}
                size="3x"
                fixedWidth
                color="#461D07"
              />
            ) : (
              <FontAwesomeIcon
                icon={faVolumeOff}
                size="3x"
                fixedWidth
                color="#461D07"
              />
            )}
          </button>
          <button
            className="pointer-events-auto cursor-pointer mr-12"
            onClick={() => setSocialsAreOpen(!socialsAreOpen)}
          >
            <FontAwesomeIcon
              icon={faLink}
              size="3x"
              fixedWidth
              color="#461D07"
            />
          </button>
          <button
            className="pointer-events-auto cursor-pointer mr-12"
            onClick={() => setHelpIsOpen(!helpIsOpen)}
          >
            <FontAwesomeIcon
              icon={faQuestion}
              size="3x"
              fixedWidth
              color="#461D07"
            />
          </button>
          <button
            className="pointer-events-auto cursor-pointer"
            onClick={logout}
          >
            <FontAwesomeIcon
              icon={faPowerOff}
              size="3x"
              fixedWidth
              color="#461D07"
            />
          </button>
        </div>
      </div>

      {/* Actions on hover intertactive elements */}
      <div className="fixed top-0 left-0 w-full h-screen flex justify-evenly items-center pointer-events-none">
        {buttonsList.map((button, index) => {
          return (
            <div
              key={`button-n-${index + 1}`}
              className={`relative ${
                button === "play" ? "top-40" : "top-60"
              } font-snake uppercase w-80 h-20 px-6 py-6 bg-yellow-100 shadow-xl rounded-xl pointer-events-none text-center tracking-widest text-amber-950 text-2xl animate-fadeIn ${
                (
                  button === "shop"
                    ? shopIsHovered
                    : button === "play"
                    ? boatIsHovered
                    : homeIsHovered
                )
                  ? "animate-fadeIn"
                  : "animate-fadeOutFast"
              }`}
            >
              {t(button)}
            </div>
          );
        })}
      </div>

      {/* Game interfaces logic */}
      {shopIsActive && <Shop />}
      {boatIsActive && <Boat />}
      {homeIsActive && <Home />}
      {socialsAreOpen && <Socials />}
      {helpIsOpen && <Help />}

      {/* Stages display */}
      {gameIsLaunched && <Stage />}

      {/* Rooms display */}
      {selectedRoom === "workshop" && <Workshop />}
      {selectedRoom === "bedroom" && <Bedroom />}
      {selectedRoom === "storage" && <StorageRoom />}
    </>
  );
};

export default Interface;
