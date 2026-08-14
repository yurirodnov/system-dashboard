<script setup lang="ts">
import type { DynamicCommon, StaticCommon } from "@/data/systemData.ts";
import MetricBlock from "../metric-block/MetricBlock.vue";
import MetricBar from "../metric-bar/MetricBar.vue";
import { convertSeconds } from "@/lib/secondsConverter.ts";

interface Props {
  staticData: StaticCommon;
  dynamicData: DynamicCommon | null;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mericsWrapper">
    <div class="metricsLeft">
      <div class="cpuMetricsWrapper">
        <h3>CPU</h3>
        <div class="metricsBlocks">
          <MetricBlock metric-name="load" :metric-value="staticData.cpu.currentLoad" />
          <MetricBlock metric-name="t°" :metric-value="staticData.cpu.currentTemperature" />
        </div>
      </div>

      <MetricBar
        :metric-total="staticData.memory.memoryTotal"
        :metric-used-percent="staticData.memory.memoryUsedPercent"
        :metric-used-count="staticData.memory.memoryUsedCount"
        metric-name="RAM"
        metric-from="b"
        metric-to="gb"
      />

      <div class="diskMetricsWrapper">
        <h3>STORAGE</h3>

        <div class="storageList">
          <div v-for="fs in staticData.fs" :key="fs.fsNumber" class="item">
            <MetricBar
              :metric-total="fs.spaceTotal"
              :metric-used-count="fs.spaceUsed"
              :metric-used-percent="fs.usedPercent"
              metric-from="b"
              metric-to="gb"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="metricsRight">
      <div class="gpuMetricsWrapper">
        <h3>GPU</h3>
        <div class="metricsBlocks">
          <MetricBlock metric-name="load" :metric-value="staticData.gpu.gpuLoad" />
          <MetricBlock metric-name="t°" :metric-value="dynamicData?.cpu.cpuTemperature" />
        </div>
        <MetricBar
          :metric-total="staticData.gpu.gpuMemoryTotal"
          :metric-used-percent="staticData.gpu.gpuMemoryUsedPercent"
          :metric-used-count="staticData.gpu.gpuMemoryUsed"
          metric-name="GPU memory"
          metric-from="mb"
          metric-to="gb"
        />
      </div>

      <div class="uptimeWrapper">
        <h3>UPTIME</h3>
        <span class="uptimeValue">{{ convertSeconds(props.dynamicData?.system.uptime) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mericsWrapper {
  display: flex;
  gap: 150px;
}

.metricsLeft,
.metricsRight {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.cpuMetricsWrapper,
.gpuMetricsWrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.metricsBlocks {
  display: flex;
  gap: 30px;
}

.storageList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.uptimeValue {
  font-size: 3em;
}
</style>
