export const isSidebarOpen = (
  isDesktopSidebarOpen: boolean,
  isMobileSidebarOpen: boolean
): boolean => isDesktopSidebarOpen || isMobileSidebarOpen;

export const isDesktopSidebarOpen = (
  isExpanded: boolean,
  isHovered: boolean
): boolean => isExpanded || isHovered;

export const isSubmenuOpen = (
  openSubmenu: { type: string; index: number } | null | undefined,
  menuType: string,
  index: number
): boolean => {
  return openSubmenu?.type === menuType && openSubmenu?.index === index;
};

export function getSidebarJustifyClass(
  isExpanded: boolean,
  isHovered: boolean
): string {
  return !isExpanded && !isHovered
    ? "lg:justify-center"
    : "justify-start";
}
