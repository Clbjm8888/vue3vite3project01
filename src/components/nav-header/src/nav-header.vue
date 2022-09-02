<template>
  <div class="nav-header">
    <!-- 折叠/展开 侧边栏 -->
    <el-icon @click="publicStore.switchFold">
      <component
        :is="publicStore.isFold ? 'DArrowRight' : 'DArrowLeft'"
      ></component>
    </el-icon>
    <div class="header-content">
      <div>面包屑</div>
      <div>
        <drop-down></drop-down>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePublicStore } from "@/stores";
  import DropDown from "./DropDown.vue";
  const publicStore = usePublicStore();
</script>

<style scoped>
  .nav-header {
    width: 100%;
    display: flex;
  }
  .header-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
  }
</style>
