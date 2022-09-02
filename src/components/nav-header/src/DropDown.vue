<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <span>{{ name }}</span>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          size="small"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登陆</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { useLoginStore } from "@/stores";
  const loginStore = useLoginStore();
  const name = loginStore.userInfo.name;
  console.log(name);
</script>

<style scoped>
  .el-dropdown-link {
    display: flex;
    align-items: center;
  }
</style>
