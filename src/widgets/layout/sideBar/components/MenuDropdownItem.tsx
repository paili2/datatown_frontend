import Link from "next/link";

import Badge from "./Badge";
import { getBadgeList } from "../utils/getBadgeList";
import { MenuDropdownItemProps } from "../types";


const MenuDropdownItem: React.FC<MenuDropdownItemProps> = ({  name,
  path,
  isActive,
  isNew = false,
  isPro = false, }) => {
    const active = isActive(path);
  const badges = getBadgeList(isNew, isPro).filter(b => b.flag);
    
    return  (
    <li>
        <Link
            href={path}
            className={`menu-dropdown-item
                ${active ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"}`}>
            {name}
            <div className="flex items-center gap-1 ml-auto">
          {badges.map(b => b.flag ? <Badge key={b.label} label={b.label} active={active} /> : null)}
        </div>
        </Link>
    </li>)
}
 
export default MenuDropdownItem;