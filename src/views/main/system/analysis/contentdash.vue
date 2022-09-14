<template>
  <div class="contentdash">
    <div ref="divRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, withDefaults, ref, onMounted } from "vue";
  import * as echarts from "echarts";
  import type { EChartsOption } from "echarts";

  const divRef = ref<HTMLElement>();

  const props = withDefaults(
    defineProps<{ width?: string; height?: string; option: EChartsOption }>(),
    {
      width: "100%",
      height: "360px",
    }
  );

  onMounted(() => {
    const echartsInstance = echarts.init(divRef.value!);

    echartsInstance.setOption(props.option);
  });
</script>

<style scoped>
  .contentdash {
    background-color: white;
  }
</style>
