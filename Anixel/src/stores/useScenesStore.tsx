import { create } from "zustand";

interface ScenesStore {
  shopIsActive: boolean;
  setShopIsActive: () => void;
  shopIsHovered: boolean;
  setShopIsHovered: (v: boolean) => void;

  boatIsActive: boolean;
  setBoatIsActive: () => void;
  boatIsHovered: boolean;
  setBoatIsHovered: (v: boolean) => void;

  homeIsActive: boolean;
  setHomeIsActive: () => void;
  homeIsHovered: boolean;
  setHomeIsHovered: (v: boolean) => void;

  socialsAreOpen: boolean;
  setSocialsAreOpen: (v: boolean) => void;

  helpIsOpen: boolean;
  setHelpIsOpen: (v: boolean) => void;
}

const useScenesStore = create<ScenesStore>()((set) => ({
  shopIsActive: false,
  setShopIsActive: () =>
    set((state) => ({ shopIsActive: !state.shopIsActive })),
  shopIsHovered: false,
  setShopIsHovered: (v) => set(() => ({ shopIsHovered: v })),

  boatIsActive: false,
  setBoatIsActive: () =>
    set((state) => ({ boatIsActive: !state.boatIsActive })),
  boatIsHovered: false,
  setBoatIsHovered: (v) => set(() => ({ boatIsHovered: v })),

  homeIsActive: false,
  setHomeIsActive: () =>
    set((state) => ({ homeIsActive: !state.homeIsActive })),
  homeIsHovered: false,
  setHomeIsHovered: (v) => set(() => ({ homeIsHovered: v })),

  socialsAreOpen: false,
  setSocialsAreOpen: (v) => set(() => ({ socialsAreOpen: v })),

  helpIsOpen: false,
  setHelpIsOpen: (v) => set(() => ({ helpIsOpen: v })),
}));

export default useScenesStore;
