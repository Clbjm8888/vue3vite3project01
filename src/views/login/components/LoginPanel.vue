<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>

    <!-- 帐号/手机切换面板 -->
    <el-tabs type="border-card" class="demo-tabs" v-model="currentTab" stretch>
      <!-- 帐号面板 -->
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>帐号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>

      <!-- 手机面板 -->
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <!-- 是否记住密码面板 -->
    <div class="keeppassword">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <!-- 登陆按扭 -->
    <el-button type="primary" class="loginBtn" @click="panenlLogin"
      >立即登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import LoginAccount from "./LoginAccount.vue";
  import LoginPhone from "./LoginPhone.vue";

  const isKeepPassword = ref(true);
  const currentTab = ref<string>("account");
  const accountRef = ref<InstanceType<typeof LoginAccount>>();
  const phoneRef = ref<InstanceType<typeof LoginPhone>>();

  const panenlLogin = () => {
    if (currentTab.value === "account") {
      accountRef.value?.checkAccount(isKeepPassword.value);
    } else {
      phoneRef.value?.checkPhone(isKeepPassword.value);
    }
  };
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

  .keeppassword {
    display: flex;
    justify-content: space-between;
  }

  .loginBtn {
    width: 100%;
  }
</style>
