<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="帐号" prop="name">
        <el-input type="text" v-model="account.name" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="text" v-model="account.password" />
      </el-form-item>
    </el-form>
    <el-input type="text"></el-input>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue";
  const account = reactive({
    name: "",
    password: "",
  });
  const rules = {
    name: [
      {
        required: true,
        message: "用户名必须输~",
        trigger: "blur",
      },
      {
        pattern: /^[a-zA-Z0-9]{6,10}$/,
        message: "用户名必须是6-10位~",
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: "密码必须输入~",
        trigger: "blur",
      },
      {
        pattern: /^[a-zA-Z0-9]{3,}$/,
        message: "密码必须3位以上~",
        trigger: "blur",
      },
    ],
  };
</script>

<style scoped></style>
