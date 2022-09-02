<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="帐号" prop="name">
        <el-input type="text" v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, defineExpose } from "vue";
  import type { ElForm } from "element-plus";

  import { rules } from "../config/account-config";
  import localCache from "@/utils/localCache";
  import { useLoginStore } from "@/stores";

  const loginStore = useLoginStore();
  const formRef = ref<InstanceType<typeof ElForm>>();
  const account = reactive({
    name: localCache.getCache("name") ?? "",
    password: localCache.getCache("password") ?? "",
  });

  //帐号密码方式登陆
  const checkAccount = (isKeepPassword: boolean) => {
    formRef.value?.validate((isValid) => {
      if (isValid) {
        // 前端验证已通过, 开始发给后端(前端验证通过时,isValue的值为true)
        //判断是否要把帐号密码保存在本地
        if (isKeepPassword) {
          localCache.setCache("name", account.name);
          localCache.setCache("password", account.password);
        } else {
          localCache.deleteCache("name");
          localCache.deleteCache("password");
        }
        //开始进行服务器登陆验证
        loginStore.accountLoginAction(account);
      }
    });
  };

  defineExpose({
    checkAccount,
  });
</script>

<style scoped></style>
