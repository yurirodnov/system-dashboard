<script setup lang="ts">
import type { DashboardData } from "@/data/systemData";
import MetricBlock from "../metric-block/MetricBlock.vue";
import { secondsConverter } from "@/lib/secondsConverter.ts";

interface Props {
  data: DashboardData;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mericsWrapper">
    <div class="systemMetricsWrapper">
      <MetricBlock metric-name="Hostname:" :metric-value="data.system.hostname" />
      <MetricBlock metric-name="Operational system:" :metric-value="data.system.os" />
      <MetricBlock metric-name="Architecture:" :metric-value="data.system.arch" />
      <MetricBlock metric-name="Uptime:" :metric-value="secondsConverter(data.system.uptime)" />
    </div>
  </div>
</template>

<style scoped>
.mericsWrapper {
  display: flex;
}

.systemMetricsWrapper {
  display: flex;
  gap: 30px;
}
</style>
