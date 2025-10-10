import { create } from "zustand";

const useDrawer = create((set) => ({
  isDrawerMenuOpen: false,
  isMenuActive: false,
  isDrawerFormOpen: false,
  setDrawerMenuOpen: () => set({ isDrawerMenuOpen: true }),
  setDrawerMenuFalse: () => set({ isDrawerMenuOpen: false }),
  setIsMenuAtive: () => set({ isMenuActive: true }),
  setIsMenuNonactive: () => set({ isMenuActive: false }),
  setIsDrawerFormOpen: () => set({ isDrawerFormOpen: true }),
  setIsDrawerFormOpenClose: () => set({ isDrawerFormOpen: false }),
}));

export default useDrawer;
