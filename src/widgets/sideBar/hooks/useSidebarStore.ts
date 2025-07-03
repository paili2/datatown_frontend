import { create } from "zustand";

type SidebarState = {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: {
  type: "menu" | "others";
  index: number;
} | null;
  setIsHovered: (hovered: boolean) => void;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setActiveItem: (item: string | null) => void;
  toggleSubmenu: (index: number, type: "menu" | "others") => void;
  setOpenSubmenu: (submenu: { type: "menu"|"others"; index: number } | null) => void;
};

// 열려 있는 서브메뉴의 index/type 저장 + 각 메뉴의 실제 height를 기억 (서브 열릴 때 애니메이션 효과용)

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: true,
  isMobileOpen: false,
  isHovered: false,
  activeItem: null,
  openSubmenu: null,
  

setOpenSubmenu: (submenu) => set({ openSubmenu: submenu }),

  setIsHovered: (hovered) => set({ isHovered: hovered }),

  toggleSidebar: () =>
    set((state) => ({ isExpanded: !state.isExpanded })),

  toggleMobileSidebar: () =>
    set((state) => ({ isMobileOpen: !state.isMobileOpen })),

  setActiveItem: (item) => set({ activeItem: item }),
  
  toggleSubmenu: (index, type) =>
    set((state) => {
     const isSame =
      state.openSubmenu?.index === index &&
      state.openSubmenu?.type === type;

    return {
      openSubmenu: isSame ? null : { index, type },
    };
    }),
}));