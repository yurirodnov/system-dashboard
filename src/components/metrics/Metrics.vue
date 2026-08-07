<script setup lang="ts">
import type { StaticCommon } from "@/data/systemData.ts";
import MetricBlock from "../metric-block/MetricBlock.vue";
import { convertSeconds } from "@/lib/secondsConverter.ts";
import { convertBytes } from "@/lib/bytesConverter.ts";

interface Props {
  systemData: StaticCommon;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mericsWrapper">
    <div class="systemMetricsWrapper"></div>
    <div class="cpuMetricsWrapper"></div>
    <div class="memoryMetricsWrapper"></div>
  </div>
</template>

<style scoped>
.mericsWrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.systemMetricsWrapper,
.cpuMetricsWrapper,
.memoryMetricsWrapper {
  display: flex;
  gap: 30px;
}
</style>
