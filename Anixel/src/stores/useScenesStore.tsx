import { create } from "zustand";

interface ScenesStore {
  shopIsActive: boolean;
  setShopIsActive: (v: boolean) => void;
  shopIsHovered: boolean;
  setShopIsHovered: (v: boolean) => void;

  boatIsActive: boolean;
  setBoatIsActive: (v: boolean) => void;
  boatIsHovered: boolean;
  setBoatIsHovered: (v: boolean) => void;

  homeIsActive: boolean;
  setHomeIsActive: (v: boolean) => void;
  homeIsHovered: boolean;
  setHomeIsHovered: (v: boolean) => void;

  socialsAreOpen: boolean;
  setSocialsAreOpen: (v: boolean) => void;

  helpIsOpen: boolean;
  setHelpIsOpen: (v: boolean) => void;

  levelMountainIsLaunched: boolean;
  setLevelMountainIsLaunched: (v: boolean) => void;

  levelOceanIsLaunched: boolean;
  setLevelOceanIsLaunched: (v: boolean) => void;

  levelJungleIsLaunched: boolean;
  setLevelJungleIsLaunched: (v: boolean) => void;

  levelSavannahIsLaunched: boolean;
  setLevelSavannahIsLaunched: (v: boolean) => void;

  showAreYouSureMessage: boolean;
  setShowAreYouSureMessage: (v: boolean) => void;
}

const useScenesStore = create<ScenesStore>()((set) => ({
  shopIsActive: false,
  setShopIsActive: (v) => set(() => ({ shopIsActive: v })),
  shopIsHovered: false,
  setShopIsHovered: (v) => set(() => ({ shopIsHovered: v })),

  boatIsActive: false,
  setBoatIsActive: (v) => set(() => ({ boatIsActive: v })),
  boatIsHovered: false,
  setBoatIsHovered: (v) => set(() => ({ boatIsHovered: v })),

  homeIsActive: false,
  setHomeIsActive: (v) => set(() => ({ homeIsActive: v })),
  homeIsHovered: false,
  setHomeIsHovered: (v) => set(() => ({ homeIsHovered: v })),

  socialsAreOpen: false,
  setSocialsAreOpen: (v) => set(() => ({ socialsAreOpen: v })),

  helpIsOpen: false,
  setHelpIsOpen: (v) => set(() => ({ helpIsOpen: v })),

  levelMountainIsLaunched: false,
  setLevelMountainIsLaunched: (v) =>
    set(() => ({ levelMountainIsLaunched: v })),

  levelOceanIsLaunched: false,
  setLevelOceanIsLaunched: (v) => set(() => ({ levelOceanIsLaunched: v })),

  levelJungleIsLaunched: false,
  setLevelJungleIsLaunched: (v) => set(() => ({ levelJungleIsLaunched: v })),

  levelSavannahIsLaunched: false,
  setLevelSavannahIsLaunched: (v) =>
    set(() => ({ levelSavannahIsLaunched: v })),

  showAreYouSureMessage: false,
  setShowAreYouSureMessage: (v) => set(() => ({ showAreYouSureMessage: v })),
}));

export default useScenesStore;
