<script setup lang="ts">
import { convertBytes } from "@/lib/bytesConverter";
import { ref } from "vue";

interface MetricBarProps {
  metricTotal: number;
  metricUsedPercent: number | undefined;
  metricUsedCount: number | undefined;
}

const props = defineProps<MetricBarProps>();
</script>

<template>
  <div class="metricBar">
    <div class="metricInfo">
      <h3 class="metricName">RAM</h3>
      <span>-></span>
      <span>{{ convertBytes(props.metricUsedCount) }} / {{ convertBytes(props.metricTotal) }}</span>
    </div>

    <div class="metricBarTotal">
      <div class="metricBarUsed" :style="{ width: props.metricUsedPercent + '%' }">
        <span class="metricBarUsedCount">{{ props.metricUsedPercent }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metricBar {
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.metricInfo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5em;
}

.metricBarTotal {
  width: 100%;
  height: 50px;
  border: 3px solid var(--bar-used);
}

.metricBarUsed {
  background-color: var(--bar-used);
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.5em;
}

.metricBarUsedCount {
  position: relative;
  right: 5px;
  align-self: center;
}
</style>
