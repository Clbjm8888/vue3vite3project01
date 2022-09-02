<template>
  <div>
    <!-- 布局容器-开始 -->
    <div class="main">
      <el-container class="main-content">
        <!-- 侧边栏 -->
        <el-aside :width="publicStore.isFold ? '60px' : '200px'">
          <nav-menu></nav-menu>
        </el-aside>

        <el-container class="page">
          <!-- 头部 -->
          <el-header class="page-header">
            <nav-header></nav-header>
          </el-header>

          <!-- 内容区 -->
          <el-main class="page-content">
            <div class="router-content"><router-view></router-view></div>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <!-- 布局容器-结束 -->
  </div>
</template>

<script setup lang="ts">
  import router from "@/router";
  import { NavMenu } from "@/components/nav-menu";
  import { NavHeader } from "@/components/nav-header";
  import { usePublicStore } from "@/stores";
  const publicStore = usePublicStore();
</script>

<style scoped lang="less">
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .main-content,
  .page {
    height: 100%;
  }

  .page-content {
    height: calc(100% - 48px);
  }

  .el-header,
  .el-footer {
    display: flex;
    color: #333;
    text-align: center;
    align-items: center;
  }

  .el-header {
    height: 48px !important;
  }

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    color: #333;
    text-align: center;
    background-color: #f0f2f5;
  }

  .router-content {
    background-color: white;
    padding-top: 15px;
  }
</style>
