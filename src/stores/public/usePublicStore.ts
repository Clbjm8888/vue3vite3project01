import { defineStore } from "pinia";

// 组件间共享的数据
export const usePublicStore = defineStore("publicStore", {
  state() {
    return {
      isFold: false, // 是否折叠侧边栏
      breadCrumb: ["系统总览", "核心技术"], //面包屑
    };
  },
  actions: {
    // 侧边栏的展开/折叠
    switchFold() {
      this.isFold = !this.isFold;
    },

    // 改变面包屑
    changeBreadCrumb(arr: string[]) {
      this.breadCrumb = arr;
    },
  },
});
