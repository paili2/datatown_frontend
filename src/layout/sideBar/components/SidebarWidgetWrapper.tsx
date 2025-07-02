import SidebarWidget from "../widgets/SidebarWidget";
import { useSidebarStore } from "@/layout/sideBar/hooks/useSidebarStore";





const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    return    (isExpanded || isHovered || isMobileOpen) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;