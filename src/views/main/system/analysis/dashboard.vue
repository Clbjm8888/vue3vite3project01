<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <titledash title="aaaaa"></titledash>
        <contentdash :option="option"></contentdash>
      </el-col>
      <el-col :span="10">
        <titledash title="aaaaa"></titledash>
      </el-col>
      <el-col :span="7">
        <titledash title="aaaaa"></titledash>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="secondRow">
      <el-col :span="12">
        <titledash title="aaaaa"></titledash>
      </el-col>
      <el-col :span="12">
        <titledash title="aaaaa"></titledash>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import { useDashStore } from "@/stores";
  import titledash from "./titledash.vue";
  import contentdash from "./contentdash.vue";
  import type { EChartsOption } from "echarts";

  const dashStore = useDashStore();

  dashStore.getAllData();

  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
</script>

<style scoped>
  .dashboard {
    background-color: #f0f2f5;
  }
  .secondRow {
    margin-top: 10px;
  }
</style>
