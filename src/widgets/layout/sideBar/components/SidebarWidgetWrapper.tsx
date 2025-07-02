import { isSidebarOpen } from "../utils/sidebarUtils";
import SidebarWidget from "../widgets/SidebarWidget";
import { useSidebarStore } from "../hooks/useSidebarStore";

const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    const showMenu = isSidebarOpen(isExpanded, isHovered, isMobileOpen);
    
    return    (showMenu) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;