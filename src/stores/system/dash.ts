import { defineStore } from "pinia";
import lbRequest from "@/myajax";

export const useDashStore = defineStore("dash", {
  state() {
    return {
      count: [],
      sale: [],
      favor: [],
      addressSale: [],
    };
  },
  actions: {
    async getAllData() {
      const count: any = await lbRequest.get({ url: "goods/category/count" });
      this.count = count;

      const sale: any = await lbRequest.get({ url: "goods/category/sale" });
      this.sale = sale;

      const favor: any = await lbRequest.get({ url: "goods/category/favor" });
      this.favor = favor;

      const addressSale: any = await lbRequest.get({
        url: "goods/address/sale",
      });
      this.addressSale = addressSale;
    },
  },
});
