import { BadgeProps } from "../types";


const Badge: React.FC<BadgeProps> = ({ label, active }) => {
    return (
    <span
    className={`menu-dropdown-badge ml-auto ${
      active
        ? "menu-dropdown-badge-active"
        : "menu-dropdown-badge-inactive"
    }`}
  >
    {label}
  </span>
  );
}
 
export default Badge;