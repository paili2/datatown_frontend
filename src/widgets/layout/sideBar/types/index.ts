import { NavItem } from "../data/navData";


export interface SidebarMenuBaseProps {
  navItems: NavItem[];
  menuType: MenuType;
  subMenuHeight: Record<string, number>;
  subMenuRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  isActive: (path: string) => boolean;
  handleSubmenuToggle?: (index: number, type: MenuType) => void;
}

export interface MenuDropdownItemProps {
  name: string;
  path: string;
  isActive: (path: string) => boolean;
  isNew?: boolean;
  isPro?: boolean;
}

export type SectionProps = {title:string}

export type MenuType = "menu" | "others";


export type SidebarMenuListProps = SidebarMenuBaseProps


export type SidebarConfigList = {
  title: string;
  items: NavItem[];
  type: MenuType;
}[];


export interface MenuItemWithSubmenuProps {
  nav: NavItem;                  
  index: number;                   
  menuType: MenuType
};

