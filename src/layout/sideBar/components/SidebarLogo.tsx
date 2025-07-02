import Image from "next/image";
import Link from "next/link";
import { useSidebarStore } from "../hooks/useSidebarStore";
import { isSidebarOpen } from "../utils/sidebarUtils";


const SidebarLogo = () => {
    const { isExpanded, isMobileOpen, isHovered } = useSidebarStore();
    const showMenu = isSidebarOpen(isExpanded, isHovered, isMobileOpen);

    return <div
        className={`py-8 flex  ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {showMenu ? (
            <>
              <Image
                className="dark:hidden"
                src="/images/logo/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>;
}
 
export default SidebarLogo;