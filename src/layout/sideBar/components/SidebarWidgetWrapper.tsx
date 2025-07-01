import { useSidebarStore } from "@/layout/sideBar/hooks/UseSidebarStore";
import SidebarWidget from "../sideBarWidget/SidebarWidget";


const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    return    (isExpanded || isHovered || isMobileOpen) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;