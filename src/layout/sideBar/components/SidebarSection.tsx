import { HorizontaLDots } from "@/icons";
import { useSidebarStore } from "@/layout/sideBar/hooks/UseSidebarStore";
import RenderMenuItems from "./RenderMenuItems";
import { SidebarMenuProps, SidebarSectionProps } from "../types";


const SidebarSection = ({navItems,menuType,title,subMenuRefs ,subMenuHeight, isActive, handleSubmenuToggle}:SidebarMenuProps&SidebarSectionProps) => {
    const {isExpanded, isHovered, isMobileOpen} = useSidebarStore();

    return (<div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  title
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              <RenderMenuItems subMenuHeight={subMenuHeight}  isActive={isActive}    subMenuRefs={subMenuRefs} handleSubmenuToggle={handleSubmenuToggle} navItems={navItems} menuType={menuType}></RenderMenuItems>
            </div>);
}
 
export default SidebarSection;