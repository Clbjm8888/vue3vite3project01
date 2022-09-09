<template>
  <div class="nav-menu">
    <!-- logo区 -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!publicStore.isFold" class="title">Vue3+TS</span>
    </div>
    <!-- 菜单区 -->
    <el-menu
      :default-active="currentID"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      :collapse="publicStore.isFold"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <!-- 一级菜单 -->
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu :index="item.id.toString()">
          <template #title>
            <el-icon>
              <component :is="item.icon.split('-')[2]"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <!-- 二级菜单 -->
          <template
            v-for="childrenItem in item.children"
            :key="childrenItem.id"
          >
            <el-menu-item
              :index="childrenItem.id.toString()"
              @click="goRoute(childrenItem.url)"
              >{{ childrenItem.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { router } from "@/router";

  import { useLoginStore, usePublicStore } from "@/stores";
  import { queryID } from "@/utils/queryID";
  import { breadCrumb } from "@/utils/breadCrumb";

  const loginStore = useLoginStore();
  const publicStore = usePublicStore();
  const userMenu = loginStore.userMenu as any;

  // 刷新后, 当前活动项还在
  const currentID = ref("39");
  const a = queryID(router.currentRoute.value.fullPath, loginStore.userMenu);
  currentID.value = a.id.toString();

  // 刷新后保持面包屑正确
  const arr = breadCrumb(router.currentRoute.value.fullPath);
  publicStore.changeBreadCrumb(arr);

  const goRoute = (url: string) => {
    router.push(url);

    // 立马更新面包屑
    const arr = breadCrumb(url);
    publicStore.changeBreadCrumb(arr);
  };
</script>

<style scoped lang="less">
  .nav-menu {
    height: 100%;
    background-color: #001529;
  }
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    // align-childrenitem: center;
  }
  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    line-height: 30px;
  }

  .el-menu {
    border-right: none;
  }

  /* 目录 */
  .el-submenu {
    background-color: #001529 !important;
    /* 二级菜单 ( 默认背景 ) */
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 100%;
    height: calc(100% - 48px);
  }
</style>
