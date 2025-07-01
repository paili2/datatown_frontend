
import { useSidebarStore } from "../hooks/UseSidebarStore";
import SidebarWidget from "../widgets/SidebarWidget";


const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    return    (isExpanded || isHovered || isMobileOpen) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;