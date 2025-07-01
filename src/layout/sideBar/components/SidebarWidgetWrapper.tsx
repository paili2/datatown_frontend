import { useSidebarStore } from "@/layout/sideBar/hooks/useSidebarStore";
import SidebarWidget from "../widgets/SidebarWidget";



const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    return    (isExpanded || isHovered || isMobileOpen) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;