import { MenuColor, MenuTab } from "src/app/Enums/menu-tabs.enum";

export interface MenuItem {
  name: MenuTab,
  color: MenuColor
}

export const menuData = [
  {name: MenuTab.Sports, color: MenuColor.Green},
  {name: MenuTab.LiveAndReal, color: MenuColor.Blue},
  {name: MenuTab.Casino, color: MenuColor.Orange},
  {name: MenuTab.Esports, color: MenuColor.Pink},
  {name: MenuTab.Vegas, color: MenuColor.Purple}
]