import localCache from "@/utils/localCache";
import { useLoginStore } from "@/stores/login/useLoginStore";
import router from "@/router";

export function initLoignStored() {
  const token = localCache.getCache("token");
  const userInfo = localCache.getCache("userInfo");
  const userMenu = localCache.getCache("userMenu");
  const loginStore = useLoginStore();
  loginStore.$patch({
    token: token,
    userInfo: userInfo,
    userMenu: userMenu,
  });

  // 添加动态路由
  const dynamicRoutes: any = import.meta.glob("@/router/main/system/**/*.ts");
  for (const path in dynamicRoutes) {
    dynamicRoutes[path]().then((res: any) => {
      router.addRoute("main", res.default);
    });
  }
}
// const loginStore = useLoginStore();
// const { token, userInfo, userMenu } = initLoignStore();
// loginStore.$patch({
//   token: token,
//   userInfo: userInfo,
//   userMenu: userMenu,
// });
