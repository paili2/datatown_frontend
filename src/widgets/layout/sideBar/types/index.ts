export type NavSubItem = {
  name: string;
  path: string;        
  pro?: boolean;
  new?: boolean;
};

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};



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

export interface MenuDropdownItemProps {
  name: string;
  path: string;
  isActive: (path: string) => boolean;
  isNew?: boolean;
  isPro?: boolean;
}

export interface BadgeProps {
  label: "new" | "pro";
  active: boolean;
}

