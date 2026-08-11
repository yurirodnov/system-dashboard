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
    <div class="cpuMetricsWrapper">
      <h3>CPU</h3>
      <div class="metricsBlocks">
        <MetricBlock metric-name="load" :metric-value="dynamicData?.cpu.cpuLoad" />
        <MetricBlock metric-name="t°" :metric-value="dynamicData?.cpu.cpuTemperature" />
      </div>
    </div>

    <MetricBar
      :metric-total="staticData.memory.memoryTotal"
      :metric-used-percent="dynamicData?.memory.memoryUsedPercent"
      :metric-used-count="dynamicData?.memory.memoryUsedCount"
      metric-name="RAM"
    />

    <div class="diskMetricsWrapper">
      <h3>STORAGE</h3>

      <div class="list">
        <div v-for="fs in staticData.fs" :key="fs.fsNumber" class="item">
          <MetricBar
            :metric-total="fs.spaceTotal"
            :metric-used-count="fs.spaceUsed"
            :metric-used-percent="fs.usedPercent"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mericsWrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.cpuMetricsWrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metricsBlocks {
  display: flex;
  gap: 30px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
