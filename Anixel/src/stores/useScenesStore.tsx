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
}));

export default useScenesStore;
