
import { SidebarMenuProps } from "../types/SidebarMenuListType";
import SidebarMenuList from "./SidebarMenuList";




const RenderMenuItems = ({navItems,
    menuType, subMenuHeight, subMenuRefs, isActive, handleSubmenuToggle}:SidebarMenuProps) => {
    return <SidebarMenuList   
      navItems={navItems}
      menuType={menuType}
      subMenuHeight={subMenuHeight}
      subMenuRefs={subMenuRefs}
      isActive={isActive}
      handleSubmenuToggle={handleSubmenuToggle} />;
}
 
export default RenderMenuItems;