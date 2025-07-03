
import RenderMenuItems from "./RenderMenuItems";
import { SidebarMenuListProps, SectionProps } from "../types";
import { getSidebarJustifyClass, isDesktopSidebarOpen, isSidebarOpen } from "../utils/sidebarUtils";
import { HorizontaLDots } from "@/shared/icons";
import { useSidebarStore } from "../hooks/useSidebarStore";

const Section = ({navItems,menuType,title,subMenuRefs ,subMenuHeight, isActive, handleSubmenuToggle}:SidebarMenuListProps&SectionProps) => {
    const {isExpanded, isHovered, isMobileOpen} = useSidebarStore();
    const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
    const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);
    const justifyClass = getSidebarJustifyClass(isExpanded, isHovered);


    return (<div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${ justifyClass }`}
              >
                {sidebarOpen ? title: <HorizontaLDots />}
              </h2>
              <RenderMenuItems subMenuHeight={subMenuHeight}  isActive={isActive} subMenuRefs={subMenuRefs} handleSubmenuToggle={handleSubmenuToggle} navItems={navItems} menuType={menuType}></RenderMenuItems>
            </div>);
}
 
export default Section;