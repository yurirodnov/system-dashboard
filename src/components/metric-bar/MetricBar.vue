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
      <!-- <span>&nbsp;>>>&nbsp;</span>
      <span>{{ convertBytes(props.metricUsedCount) }} / {{ convertBytes(props.metricTotal) }}</span> -->
    </div>

    <div class="metricBarTotal">
      <div class="metricBarUsed" :style="{ width: props.metricUsedPercent + '%' }">
        <span class="metricBarUsedCount">{{ convertBytes(props.metricUsedCount) }}</span>
      </div>
      <span class="metricBarTotalCount">{{ convertBytes(props.metricTotal) }}</span>
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
}

.metricBarTotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border: 3px solid var(--bar-used);
  box-shadow: 0px 0px 15px 0px var(--neon-shadow-color);
}

.metricBarUsed {
  background-color: var(--bar-used);
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 1.5em;
  transition: width 0.5s ease-in-out;
}

.metricBarUsedCount {
  position: relative;
  right: 5px;
  align-self: center;
}

.metricBarTotalCount {
  position: relative;
  right: 5px;
  align-self: center;
  font-size: 1.5em;
}
</style>
