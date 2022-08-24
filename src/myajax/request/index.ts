import axios from "axios";
import type { AxiosInstance } from "axios";
import type { LBRequestInterceptors, LBRequestConfig } from "./type";
import type { LoadingInstance } from "element-plus/es/components/loading/src/loading";
import { ElLoading } from "element-plus";

class LBRequest {
  instance: AxiosInstance; //定义一个变量, 类型是原生axios实例
  interceptors?: LBRequestInterceptors; // 定义一个变量, 类型是上面的自定义类型
  loading?: LoadingInstance; //加载实例, 用来关闭loding组件

  constructor(config: LBRequestConfig) {
    //config使用了自定义类型, 替代原生的axiosRequestConfig类型.
    this.instance = axios.create(config); // 创建一个原生的axios实例
    this.interceptors = config.interceptors; //把用户传进来的新属性放到类的interceptors属性里

    //定义对象级拦截(三层拦截的第二层)
    //调用原生的请求拦截器来执行用户传入的新属性
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    //调用原生的响应拦截器来执行用户传入的新属性
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 定义全局级拦截器(三层拦截的第一层)
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局拦截...请求成功的拦截");

        //显示加载组件
        this.loading = ElLoading.service({
          lock: true,
          text: "数据加载中...",
          background: "rgba(0,0,0,0.5)",
        });

        return config;
      },
      (err) => {
        // console.log("全局拦截, 请求失败的拦截");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局拦截...响应成功的拦截");

        // 关闭加载组件
        setTimeout(() => {
          this.loading?.close();
        }, 1000);

        //原生axios会把服务器返回的对象再封装, 真正服务器返回的数据在res.data里
        return res.data;
      },
      (err) => {
        // console.log("全局拦截, 响应失败的拦截");
      }
    );
  }

  request(config: LBRequestConfig) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
  // get() {}
}

export default LBRequest;
