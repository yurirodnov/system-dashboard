<script setup lang="ts">
import type { DynamicCommon, StaticCommon } from "@/data/systemData.ts";
import MetricBlock from "../metric-block/MetricBlock.vue";
import MetricBar from "../metric-bar/MetricBar.vue";
import { convertSeconds } from "@/lib/secondsConverter.ts";
import { convertBytes } from "@/lib/bytesConverter.ts";

interface Props {
  staticData: StaticCommon;
  dynamicData: DynamicCommon | null;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mericsWrapper">
    <MetricBar
      :metric-total="staticData.memory.memoryTotal"
      :metric-used-percent="dynamicData?.memory.memoryUsedPercent"
      :metric-used-count="dynamicData?.memory.memoryUsedCount"
    />
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
