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
    <MetricBar :metric-total="staticData.memory.memoryTotal" :metric-used="dynamicData?.memory.memoryUsed" />

    <!-- <div class="cpuMetricsWrapper">
      <MetricBlock
        metric-name="CPU name"
        :metric-value="staticData.cpu.manufacturer + ' ' + staticData.cpu.modelName"
      />
      <MetricBlock metric-name="CPU load (%)" :metric-value="dynamicData?.cpu.cpuLoad" />
    </div>

    <div class="memoryMetricsWrapper">
      <MetricBlock metric-name="Total RAM" :metric-value="convertBytes(staticData.memory.memoryTotal)" />
      <MetricBlock metric-name="Used RAM" :metric-value="convertBytes(dynamicData?.memory.memoryUsed)" />
    </div>

    <div class="systemMetricsWrapper">
      <MetricBlock metric-name="OS" :metric-value="staticData.os.osName" />
      <MetricBlock metric-name="Arch" :metric-value="staticData.os.arch" />
      <MetricBlock metric-name="Uptime" :metric-value="convertSeconds(dynamicData?.system.uptime)" />
    </div> -->
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
