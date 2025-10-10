import { create } from "zustand";

const useDrawer = create((set) => ({
  isDrawerMenuOpen: false,
  isMenuActive: false,
  setDrawerMenuOpen: () => set({ isDrawerMenuOpen: true }),
  setDrawerMenuFalse: () => set({ isDrawerMenuOpen: false }),
  setIsMenuAtive: () => set({ isMenuActive: true }),
  setIsMenuNonactive: () => set({ isMenuActive: false }),
}));

export default useDrawer;
