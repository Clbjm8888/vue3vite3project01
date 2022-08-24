import type { AxiosRequestConfig, AxiosResponse } from "axios";
// 定义一些类型
// 给原本的axios的config参数添加自定义新属性, 用户可以通过新属性传入拦截函数, 从而可以创建多个功能不同的axios实例来使用
// 自定义一个用户传入新属性的类型
export interface LBRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (err: any) => any;
}

// 自定义一个config类型, 继承原axios的config类型, 在此基本上, 新增一个属性, 类型是上面自定义的类型
export interface LBRequestConfig extends AxiosRequestConfig {
  interceptors?: LBRequestInterceptors;
}
