import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import lbRequest from "./myajax";

lbRequest.request({
  method: "GET",
  url: "home/multidata",
  //使用级拦截(三层拦截的第三层)
  interceptors: {
    requestInterceptor: (config) => {
      console.log("单独拦截");
      return config;
    },
    responseInterceptor: (res) => {
      console.log("单独响应");
      return res;
    },
  },
});

// lbRequest.request({
//   method: "GET",
//   url: "home/multidata",
// });

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
