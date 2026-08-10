<script setup lang="ts">
import { convertBytes } from "@/lib/bytesConverter";
import { ref } from "vue";

interface MetricBarProps {
  metricTotal: number;
  metricUsed: number | undefined;
}

const props = defineProps<MetricBarProps>();
</script>

<template>
  <div class="metricBar">
    <div class="metricInfo">
      <h3 class="metricName">RAM</h3>
      <span>{{ props.metricUsed }} / {{ convertBytes(props.metricTotal) }}</span>
    </div>

    <div class="metricBarTotal">
      <div class="metricBarUsed" :style="{ width: props.metricUsed + '%' }">
        <span class="metricBarUsedCount">{{ props.metricUsed }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metricBar {
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.metricName {
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
