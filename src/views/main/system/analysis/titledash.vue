<template>
  <div class="minidash">
    <div class="header">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from "vue";
  defineProps({
    title: String,
  });
</script>

<style scoped>
  .minidash {
    background-color: white;
  }
  .header {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
