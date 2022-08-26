/// <reference types="vite/client" />

//声明vue文件为一个module, 这样ts才能识别
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}

//声明js文件为一个module, 这样ts才能识别
declare module "*.js";

declare module "*.css";

//动态添加到pinia的数据无法确定类型, 必须先在这里声明
import "pinia";
declare module "pinia" {
  export interface PiniaCustomStateProperties {
    abb: string;
  }
}
