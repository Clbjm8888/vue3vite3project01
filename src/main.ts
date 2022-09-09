import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "normalize.css";
import { router, dynamicRoutes } from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import "./assets/css/index.less";
import { initLoignStored } from "@/stores/login/utils/initLoginStore";
import registerProperties from "@/global/formatUtcTime";

const app = createApp(App);

// 全局注册element-plus的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 全局注册element-plus的中文
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(createPinia());
//初始化login仓库, (从本地缓存读取token,userInfo, userMenu)
initLoignStored();

// 初始化动态路由
dynamicRoutes.forEach((item) => {
  router.addRoute("main", item.default);
});

// 全局启用路由
app.use(router);

registerProperties(app);

//挂载到真实DOM
app.mount("#app");
