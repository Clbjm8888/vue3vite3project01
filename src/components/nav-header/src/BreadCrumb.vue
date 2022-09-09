<template>
  <div>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in publicStore.breadCrumb">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { ArrowRight } from "@element-plus/icons-vue";

  import { usePublicStore } from "@/stores";
  const publicStore = usePublicStore();
</script>

<style scoped></style>
