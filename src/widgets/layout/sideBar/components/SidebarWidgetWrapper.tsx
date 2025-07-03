import { isDesktopSidebarOpen, isSidebarOpen } from "../utils/sidebarUtils";
import SidebarWidget from "../widgets/SidebarWidget";
import { useSidebarStore } from "../hooks/useSidebarStore";

const SidebarWidgetWrapper = () => {
    const { isExpanded, isMobileOpen, isHovered} = useSidebarStore();
    const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
    const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);

    return (sidebarOpen) && <SidebarWidget /> ;
}
 
export default SidebarWidgetWrapper;