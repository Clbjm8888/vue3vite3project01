<template>
  <div class="login-account">
    <el-form label-width="60px" :model="phone" ref="formRef">
      <el-form-item label="手机号">
        <el-input type="text" v-model="phone.phoneNum" />
      </el-form-item>

      <el-form-item label="验证码">
        <div class="getverycode">
          <el-input type="text" v-model="phone.verifyCode" />
          <el-button type="primary" class="btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, defineExpose } from "vue";
  import type { ElForm } from "element-plus";
  import localCache from "@/utils/localCache";

  const formRef = ref<InstanceType<typeof ElForm>>();

  const phone = reactive({
    phoneNum: "",
    verifyCode: "",
  });

  //手机号方式登陆
  const checkPhone = (isKeepPassword: boolean) => {
    formRef.value?.validate((isValid) => {
      if (isValid) {
        // 前端验证已通过, 开始发给后端(前端验证通过时,isValue的值为true)
        //判断是否要把帐号密码保存在本地
        if (isKeepPassword) {
          localCache.setCache("phone", phone.phoneNum);
        } else {
          localCache.deleteCache("phone");
        }
        //开始进行服务器登陆验证
      }
    });
  };

  defineExpose({
    checkPhone,
  });
</script>

<style scoped>
  .getverycode {
    display: flex;
  }
  .btn {
    margin-left: 6px;
  }
</style>
