import localCache from "@/utils/localCache";
import { useLoginStore } from "@/stores/login/useLoginStore";

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
}
