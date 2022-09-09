// 批量导入ts模块
const arr1: any = import.meta.glob("@/router/main/system/**/*.ts");

const arr2: any = [];
for (const path in arr1) {
  arr2.push(arr1[path]());
}
const dynamicRoutes = await Promise.all(arr2);
export { dynamicRoutes };
