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
  <!-- <div class="mericsWrapper">
    <div class="systemMetricsWrapper">
      <MetricBlock metric-name="Hostname:" :metric-value="data.system.hostname" />
      <MetricBlock metric-name="Operational system:" :metric-value="data.system.os" />
      <MetricBlock metric-name="Architecture:" :metric-value="data.system.arch" />
      <MetricBlock metric-name="Uptime:" :metric-value="convertSeconds(data.system.uptime)" />
    </div>
    <div class="cpuMetricsWrapper">
      <MetricBlock metric-name="CPU model:" :metric-value="data.cpu.model" />
      <MetricBlock metric-name="Physical cores:" :metric-value="data.cpu.physicalCores" />
      <MetricBlock metric-name="Logical cores:" :metric-value="data.cpu.logicalCores" />
      <MetricBlock metric-name="Usage (%):" :metric-value="data.cpu.usagePercent" />
      <MetricBlock metric-name="Clock speed:" :metric-value="data.cpu.clockSpeedMhz" />
    </div>
    <div class="memoryMetricsWrapper">
      <MetricBlock metric-name="Total:" :metric-value="convertBytes(data.memory.totalBytes)" />
    </div>
  </div> -->
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
