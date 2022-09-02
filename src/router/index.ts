import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/login/LoginView.vue";
import localCache from "@/utils/localCache";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/main",
      name: "main",
      component: () => {
        return import("@/views/main/MainView.vue");
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/not-found/notFount.vue"),
    },
  ],
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;
