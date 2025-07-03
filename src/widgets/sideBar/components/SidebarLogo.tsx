import { useSidebarStore } from "../hooks/useSidebarStore";
import Image from "next/image";
import Link from "next/link";
import { getSidebarJustifyClass, isDesktopSidebarOpen, isSidebarOpen } from "../utils/sidebarUtils";
import { sidebarLogos } from "../data/sidebarLogoData";


const SidebarLogo = () => {
    const { isExpanded, isMobileOpen, isHovered } = useSidebarStore();
    const desktopOpen = isDesktopSidebarOpen(isExpanded, isHovered);
    const sidebarOpen  = isSidebarOpen(desktopOpen, isMobileOpen);
    const justifyClass = getSidebarJustifyClass(isExpanded, isHovered);
    const logos = sidebarOpen ? sidebarLogos.open : sidebarLogos.closed;
    
    return(
      <div className={`py-8 flex  ${justifyClass}`}>
          <Link href="/">
           {logos.map(({ src, className, width, height }) => (
          <Image
            key={src}
            src={src}
            alt="Logo"
            width={width}
            height={height}
            className={className}
          />
        ))}
          </Link>
        </div>)
}
 
export default SidebarLogo;