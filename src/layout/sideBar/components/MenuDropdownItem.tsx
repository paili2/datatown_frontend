import Link from "next/link";
import { MenuDropdownItemProps } from "../types";

const MenuDropdownItem = ({
  name,
  path,
  isActive,
  isNew = false,
  isPro = false,
}: MenuDropdownItemProps) => {
    const active = isActive(path);

    return  (
    <li>
        <Link
            href={path}
            className={`menu-dropdown-item ${
            active ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"
            }`}
        >
            {name}
            <span className="flex items-center gap-1 ml-auto">
            {isNew && (
                <span
                className={`menu-dropdown-badge ml-auto ${
                    active
                    ? "menu-dropdown-badge-active"
                    : "menu-dropdown-badge-inactive"
                }`}
                >
                new
                </span>
            )}
            {isPro && (
                <span
                className={`menu-dropdown-badge ml-auto ${
                    active
                    ? "menu-dropdown-badge-active"
                    : "menu-dropdown-badge-inactive"
                }`}
                >
                pro
                </span>
            )}
            </span>
        </Link>
    </li>)
}
 
export default MenuDropdownItem;