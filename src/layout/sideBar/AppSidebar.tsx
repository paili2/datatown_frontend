"use client";
import React, { useEffect, useRef, useState,useCallback } from "react";
import { usePathname } from "next/navigation";
import { useSidebarClasses } from "./styles/styles";
import SidebarLogo from "./components/SidebarLogo";
import SidebarWidgetWrapper from "./components/SidebarWidgetWrapper";
import { menuItems, othersItems, sidebarConfig } from "./data/navData";
import Section from "./components/Section";
import { useSidebarStore } from "./hooks/UseSidebarStore";





const AppSidebar: React.FC = () => {
  const { baseClass, widthClass, sidebarSlideClass } = useSidebarClasses();
  const { isExpanded, openSubmenu, setIsHovered,toggleSubmenu,setOpenSubmenu } = useSidebarStore();

  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
  
  const pathname = usePathname(); 
  const isActive = useCallback((path: string) => path === pathname, [pathname]);


  // 진입 시 자동으로 서브메뉴 열기
  useEffect(() => {
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "menu" ? menuItems : othersItems;
      items.forEach((nav, index) => {

       if (nav.subItems?.some(sub => isActive(sub.path))) {
        setOpenSubmenu({
          type: menuType as "menu" | "others",
          index,
        });
        submenuMatched = true;
      }
      });
    });
    !submenuMatched && setOpenSubmenu(null)
  }, [pathname,isActive]);


  // 애니메이션용 높이 측정
  useEffect(() => {
  if (!openSubmenu) return;

  const key = `${openSubmenu.type}-${openSubmenu.index}`;
  const height = subMenuRefs.current[key]?.scrollHeight;

  if (height) {
    setSubMenuHeight(prev => ({
      ...prev,
      [key]: height, 
      }));
    }
  }, [openSubmenu]);

  return (
    <aside
      className={`${baseClass}  ${widthClass}  ${sidebarSlideClass}  lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <SidebarLogo/>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {sidebarConfig.map((config ,i)=>
                <Section key={i} navItems={config.items} menuType={config.type} title={config.type} subMenuRefs={subMenuRefs}  subMenuHeight={subMenuHeight} isActive={isActive} handleSubmenuToggle={toggleSubmenu}  ></Section>
            )}
          </div>
        </nav>
     <SidebarWidgetWrapper/>
      </div>
    </aside>
  );
};

export default AppSidebar;