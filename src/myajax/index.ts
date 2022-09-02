import LBRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "@/utils/localCache";

const lbRequest = new LBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log("对象级拦截, 请求成功的拦截");
      // 登陆成功, 本地缓存里有个token
      const token = localCache.getCache("token");
      // 拦截->每次请求都发送token
      if (token) {
        //因为headers可能是undefined, 所以用if把范围缩小, 不然报警告
        if (config && config.headers) {
          // "Bearer可加, 可不加, axios会自动过滤"
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      // console.log("对象级拦截, 请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      // console.log("对象级拦截, 响应成功的拦截");

      // 响应成功, 但是获取到的数据是空的, 这种失败的处理
      const data = res.data;
      if (data.returnCode === "-1001") {
        console.log("请求失败~, 错误信息: -1001");
      } else {
        return data;
      }
    },
    responseInterceptorCatch: (err) => {
      // console.log("对象级拦截, 响应失败的拦截");

      //判断不同的httpErrorCode显示不同的错误信息
      if (err.response.status === 404) {
        console.log("404错误~");
      }
      return err;
    },
  },
});

export default lbRequest;
