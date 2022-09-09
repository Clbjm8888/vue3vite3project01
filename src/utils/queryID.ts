export function queryID(url: string, userMenu: any[]): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const findMenu = queryID(url, menu.children ?? []);
      if (findMenu) {
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === url) {
      return menu;
    }
  }
}
