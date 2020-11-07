export class LeftMenuModel {
  leftMenuTitle: string;
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [];
  }
}

export class MenuItem {
  itemName: string;
  itemViewed: boolean;
  itemCompleted: boolean;
  itemEnabled: boolean;
  itemActive: boolean;
  itemTooltip: string;
  itemIcon: string;

  //Todo: remove this once db tables are completed
  constructor(itemName: string, itemActive: boolean, itemTooltip: string, itemIcon: string, itemEnabled: boolean) {
    this.itemName = itemName;
    this.itemActive = itemActive;
    this.itemTooltip = itemTooltip;
    this.itemEnabled = itemEnabled;
    this.itemIcon = itemIcon;
  }
}
