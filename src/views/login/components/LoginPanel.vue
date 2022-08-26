<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>

    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>帐号登陆</span>
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>Route</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import LoginAccount from "./LoginAccount.vue";
  import LoginPhone from "./LoginPhone.vue";
</script>

<style scoped>
  .login-panel {
    width: 320px;
    margin-bottom: 150px;
    text-align: center;
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
</style>
