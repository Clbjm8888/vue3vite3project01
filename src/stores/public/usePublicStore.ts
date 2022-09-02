import { defineStore } from "pinia";

export const usePublicStore = defineStore("publicStore", {
  state() {
    return {
      isFold: false, // 是否折叠侧边栏
    };
  },
  actions: {
    // 侧边栏的展开/折叠
    switchFold() {
      this.isFold = !this.isFold;
    },
  },
});
