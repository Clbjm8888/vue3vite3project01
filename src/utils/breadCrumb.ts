export function breadCrumb(url: string) {
  const arr: string[] = [];
  const arr1 = url.split("/");
  arr1.splice(0, 2);
  arr1.forEach((item) => {
    switch (item) {
      case "analysis":
        arr.push("系统总览");
        break;
      case "system":
        arr.push("系统管理");
        break;
      case "product":
        arr.push("商品中心");
        break;
      case "story":
        arr.push("随便聊聊");
        break;
      case "overview":
        arr.push("核心技术");
        break;
      case "dashboard":
        arr.push("商品统计");
        break;
      case "user":
        arr.push("用户管理");
        break;
      case "department":
        arr.push("部门管理");
        break;
      case "menu":
        arr.push("菜单管理");
        break;
      case "role":
        arr.push("角色管理");
        break;
      case "category":
        arr.push("商品类别");
        break;
      case "goods":
        arr.push("商品信息");
        break;
      case "chat":
        arr.push("你的故事");
        break;
      case "list":
        arr.push("故事列表");
        break;
    }
  });
  return arr;
}
