import Link from "next/link";
import MenuItemWithSubmenu from "./MenuItemWithSubmenu";
import { SidebarMenuListProps } from "../types";
import { useSidebarStore } from "../hooks/useSidebarStore";
import { isDesktopSidebarOpen, isSidebarOpen, isSubmenuOpen  } from "../utils/sidebarUtils";
import MenuDropdownItem from "./MenuDropdownItem";

const RenderMenuItems = ({navItems,
    menuType, subMenuHeight, subMenuRefs, isActive}:SidebarMenuListProps) => {
    const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebarStore();
     const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
    const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);
 

    return  (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => {
      const isOpen = isSubmenuOpen(openSubmenu, menuType, index);
      const height = isOpen ? `${subMenuHeight[`${menuType}-${index}`]}px` : '0px';        
      const hasSubItems = (nav.subItems?.length ?? 0) > 0;
      const shouldShowSubmenu = hasSubItems && sidebarOpen;

        return <li key={nav.name}>
          {nav.subItems ? (
          <MenuItemWithSubmenu nav={nav} index={index} menuType={menuType} />
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${ 
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
                  {nav.icon}
                </span>
                {(sidebarOpen) && <span className={`menu-item-text`}>{nav.name}</span>}
              </Link>
            ) 
          )}

          {shouldShowSubmenu && (
            <div ref={(el) => {subMenuRefs.current[`${menuType}-${index}`] = el;}}
              className="overflow-hidden transition-all duration-300" style={{ height }}>
              <ul className="mt-2 space-y-1 ml-9">
                {nav.subItems!.map((sub) => (
                 <MenuDropdownItem  key={sub.name} path={sub.path} name={sub.name} isActive={isActive} isNew={sub.new} isPro={sub.pro} />
                ))}
              </ul>
            </div>
          )}
        </li>
    })}
    </ul>
  );;
}

 
export default RenderMenuItems;