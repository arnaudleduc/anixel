import { faXmark, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScenesStore from "../../../stores/useScenesStore";
import { useTranslation } from "react-i18next";

const Help: React.FC = () => {
  const { t } = useTranslation();

  const { setHelpIsOpen } = useScenesStore();

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center">
      <div className="rounded-2xl bg-white h-5/6 m-12 p-10 w-1/2">
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          className="cursor-pointer"
          onClick={() => setHelpIsOpen(false)}
        />
        <h2 className="text-center text-2xl font-snake uppercase mt-12">
          {t("socials.creator")}
        </h2>
        <div className="flex justify-evenly my-12">
          <button>
            <a href="https://github.com/arnaudleduc" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth />
            </a>
          </button>
          <button>
            <a href="https://zdk-web-agency.vercel.app/" target="_blank">
              <FontAwesomeIcon icon={faGlobe} size="3x" fixedWidth />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/arnaudleduc/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth />
            </a>
          </button>
        </div>
        <h2 className="text-center text-2xl font-snake uppercase">
          {t("socials.anixel")}
        </h2>
        <div className="text-center text-xl font-snake uppercase mt-12">
          TBD
        </div>
      </div>
    </div>
  );
};

export default Help;
