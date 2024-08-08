import { create } from "zustand";

interface ScenesStore {
  shopIsActive: boolean;
  boatIsActive: boolean;
  homeIsActive: boolean;
  setShopIsActive: () => void;
  setBoatIsActive: () => void;
  setHomeIsActive: () => void;
}

const useScenesStore = create<ScenesStore>()((set) => ({
  shopIsActive: false,
  setShopIsActive: () =>
    set((state) => ({ shopIsActive: !state.shopIsActive })),
  boatIsActive: false,
  setBoatIsActive: () =>
    set((state) => ({ boatIsActive: !state.boatIsActive })),
  homeIsActive: false,
  setHomeIsActive: () =>
    set((state) => ({ homeIsActive: !state.homeIsActive })),
}));

export default useScenesStore;
