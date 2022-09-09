import { defineStore } from "pinia";
import lbRequest from "@/myajax";

// 各组件发网络请求专业store
export const useSystemStore = defineStore("system", {
  state() {
    return {
      //用户管理请求到的数据
      userList: [],
      userTotal: 0,
    };
  },
  actions: {
    // 用户管理的网络请求
    async changeUserList(formData: any) {
      const obj = await lbRequest.post({
        url: "/users/list",
        data: {
          ...formData,
        },
      });
      this.userList = (obj as any).list;
      this.userTotal = (obj as any).totalCount;
    },
  },
});
