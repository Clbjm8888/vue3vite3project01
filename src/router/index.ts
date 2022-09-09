import { createRouter, createWebHistory } from "vue-router";

import LoginView from "@/views/login/LoginView.vue";
import localCache from "@/utils/localCache";
import { dynamicRoutes } from "./dynamicRouter";

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
  if (to.path === "/main") {
    return "/main/analysis/overview";
  }
});

export { router, dynamicRoutes };
