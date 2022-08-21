<template>
  <div>
    <h2>{{ counter.counter }}</h2>
    <h2>{{ counter.doubleCount }}</h2>
    <button @click="counter.increment">increment</button>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
    <el-button>按扭1</el-button>
    <el-button type="primary">按扭2</el-button>
    <el-button type="warning" @click="btn">按扭3</el-button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import { useCounterStore } from "./stores";
  const counter = useCounterStore();
  const router = useRouter();

  const btn = () => {
    router.push("/about");
  };
</script>

<style scoped></style>
