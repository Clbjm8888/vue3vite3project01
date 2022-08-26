<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useCounterStore } from "./stores";
  const counter = useCounterStore();
  const router = useRouter();
</script>

<style scoped lang="less">
  .app {
    height: 100%;
  }
</style>
