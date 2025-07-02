export const isSidebarOpen = (
  isExpanded: boolean,
  isHovered: boolean,
  isMobileOpen: boolean
): boolean => isExpanded || isHovered || isMobileOpen;

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