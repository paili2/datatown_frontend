import { SidebarConfigList } from "../types";
import { menuItems } from "./menuItems";
import { othersItems } from "./othersItems";

export const sidebarConfig:SidebarConfigList =
 [
  { title: "menu", items: menuItems, type: "menu" },
  { title: "others", items: othersItems, type: "others" },
];