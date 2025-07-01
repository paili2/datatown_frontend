import { useSidebarStore } from "@/layout/sideBar/hooks/UseSidebarStore";
import { ChevronDownIcon } from "@/icons";
import { MenuItemWithSubmenuProps } from "../types/SidebarMenuListType";


const MenuItemWithSubmenu:React.FC<MenuItemWithSubmenuProps> = ({ nav, index, menuType }) => {
    const { isExpanded, isMobileOpen, isHovered, openSubmenu, toggleSubmenu } = useSidebarStore();

    return   <button
              onClick={() => toggleSubmenu(index, menuType)}
              className={`menu-item group  ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto w-5 h-5 transition-transform duration-200  ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "rotate-180 text-brand-500"
                      : ""
                  }`}
                />
              )}
            </button>;
}
 
export default MenuItemWithSubmenu;