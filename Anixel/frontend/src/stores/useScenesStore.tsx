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

  showAreYouSureMessage: boolean;
  setShowAreYouSureMessage: (v: boolean) => void;

  selectedStage: string;
  setSelectedStage: (v: string) => void;

  gameIsLaunched: boolean;
  setGameIsLaunched: (v: boolean) => void;
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

  showAreYouSureMessage: false,
  setShowAreYouSureMessage: (v) => set(() => ({ showAreYouSureMessage: v })),

  selectedStage: "",
  setSelectedStage: (v) => set(() => ({ selectedStage: v })),

  gameIsLaunched: false,
  setGameIsLaunched: (v) => set(() => ({ gameIsLaunched: v })),
}));

export default useScenesStore;
