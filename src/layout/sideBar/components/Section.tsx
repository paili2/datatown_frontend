import { HorizontaLDots } from "@/icons";
import RenderMenuItems from "./RenderMenuItems";
import { SidebarMenuProps, SidebarSectionProps } from "../types";
import { isSidebarOpen } from "../utils/sidebarUtils";
import { useSidebarStore } from "@/layout/sideBar/hooks/useSidebarStore";




const Section = ({navItems,menuType,title,subMenuRefs ,subMenuHeight, isActive, handleSubmenuToggle}:SidebarMenuProps&SidebarSectionProps) => {
    const {isExpanded, isHovered, isMobileOpen} = useSidebarStore();
    const showMenu = isSidebarOpen(isExpanded, isHovered, isMobileOpen);

    return (<div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {showMenu ?
                  title: (
                  <HorizontaLDots />
                )}
              </h2>
              <RenderMenuItems subMenuHeight={subMenuHeight}  isActive={isActive}    subMenuRefs={subMenuRefs} handleSubmenuToggle={handleSubmenuToggle} navItems={navItems} menuType={menuType}></RenderMenuItems>
            </div>);
}
 
export default Section;