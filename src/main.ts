import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "normalize.css";
import "./assets/css/index.less";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import "@/assets/css/nomalize.css";
// import lbRequest from "./myajax";

// lbRequest.request({
//   method: "GET",
//   url: "home/multidata",
//   //使用级拦截(三层拦截的第三层)
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独拦截");
//       return config;
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应");
//       return res;
//     },
//   },
// });

// lbRequest
//   .get({
//     url: "home/multidata",
//     showLoading: false,
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const app = createApp(App);

// 全局注册element-plus的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia());
app.use(router);
app.mount("#app");
