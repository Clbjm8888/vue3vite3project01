import { defineStore } from "pinia";

import lbRequest from "@/myajax";
import type { IPostResultOfLogin, RootObject } from "./types";
import localCache from "@/utils/localCache";
import router from "@/router";

export const useLoginStore = defineStore("login", {
  state() {
    return {
      token: "",
      userInfo: {} as RootObject,
      userMenu: [{}],
    };
  },

  actions: {
    // 帐号登陆
    async accountLoginAction(account: { name: string; password: string }) {
      // 向服务器验证帐号, 并把返回的token保存在本地缓存
      const resultLogin = (await lbRequest.post({
        url: "/login",
        data: account,
        showLoading: false,
      })) as IPostResultOfLogin;

      if (!resultLogin) {
        console.log("帐号密码错误");
        localCache.deleteCache("token"); //帐号密码错误, 将删除本地缓存的token
        return;
      } else {
        this.token = resultLogin.token;
        localCache.setCache("token", resultLogin.token);
      }

      // 向服务器请求用户数据, 并把返回的用户数据保存在本地缓存
      const resultUserInfo = (await lbRequest.get({
        url: "/users/" + resultLogin.id,
        showLoading: false,
      })) as RootObject;

      if (!resultUserInfo) {
        console.log("获取用户数据失败");
        return;
      } else {
        this.userInfo = resultUserInfo;
        localCache.setCache("userInfo", resultUserInfo);
      }

      // 向服务器请求角色菜单数据, 并把返回的数据保存在本地缓存
      const resultMenu = (await lbRequest.get({
        url: "/role/" + resultLogin.id + "/menu",
        showLoading: false,
      })) as any;

      if (!resultMenu) {
        console.log("获取用户菜单失败");
        return;
      } else {
        this.userMenu = resultMenu;
        localCache.setCache("userMenu", resultMenu);
      }

      //把网址重定向到首页main
      router.push("/main");
    },
  },
});
