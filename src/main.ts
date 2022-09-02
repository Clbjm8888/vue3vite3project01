import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "normalize.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "./assets/css/index.less";
import { initLoignStored } from "@/stores/login/utils/initLoginStore";

const app = createApp(App);

// 全局注册element-plus的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);
app.mount("#app");

//初始化login仓库, 把本地缓存的token,userInfo, userMenu写入到loginStore里
initLoignStored();
