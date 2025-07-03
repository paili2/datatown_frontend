
import { ChevronDownIcon } from "@/shared/icons";
import { useSidebarStore } from "../hooks/useSidebarStore";
import { MenuItemWithSubmenuProps, MenuType } from "../types";
import { getSidebarJustifyClass, isDesktopSidebarOpen, isSidebarOpen, isSubmenuOpen  } from "../utils/sidebarUtils";

const MenuItemWithSubmenu:React.FC<MenuItemWithSubmenuProps> = ({ nav, index, menuType }) => {
    const { isExpanded, isMobileOpen, isHovered, openSubmenu, toggleSubmenu } = useSidebarStore();
    const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
    const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);
    const showChevronRotated = isSubmenuOpen(openSubmenu, menuType, index);
    

    return   <button
              onClick={() => toggleSubmenu(index, menuType)}
              className={`menu-item group  ${
                showChevronRotated ? "menu-item-active" : "menu-item-inactive"}
                cursor-pointer ${ desktopOpen ? "lg:justify-start" : "lg:justify-center"}`}>
              <span
                className={` ${ showChevronRotated ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
                {nav.icon}
              </span>
              
              {(sidebarOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(sidebarOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${showChevronRotated ? "rotate-180 text-brand-500" : ""
                  }`}
                />
              )}
            </button>;
}
 
export default MenuItemWithSubmenu;