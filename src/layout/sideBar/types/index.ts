import { menuItems, NavItem } from "../data/navData";

export type MenuType = "menu" | "others";

export type SidebarMenuListProps = {
  navItems: NavItem[];
  menuType: MenuType;
  subMenuHeight: Record<string, number>;
  subMenuRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  isActive: (path: string) => boolean;
  handleSubmenuToggle?: (index: number, type: "menu" | "others") => void;
};


export type SidebarMenuProps ={navItems: NavItem[];
    menuType: MenuType;
    subMenuHeight:Record<string, number>;
    subMenuRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
    isActive:(path: string) => boolean;
    handleSubmenuToggle?: (index: number, type: "menu" | "others") => void;
}

export type SidebarSectionProps = {title:string}

export type sidebarConfigType = {
  title: string;
  items: typeof menuItems;
  type: MenuType;
}[]  


export type MenuItemWithSubmenuProps = {
  nav: NavItem;                  
  index: number;                   
  menuType: MenuType
};

