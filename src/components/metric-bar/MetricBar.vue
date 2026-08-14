<script setup lang="ts">
import { convertUnits } from "@/lib/bytesConverter";
import type { UnitTypes } from "@/lib/bytesConverter";

interface MetricBarProps {
  metricTotal: number | undefined;
  metricUsedPercent: number | undefined;
  metricUsedCount: number | undefined;
  metricName?: string;
  metricFrom: UnitTypes;
  metricTo: UnitTypes;
}

const props = defineProps<MetricBarProps>();
</script>

<template>
  <div class="metricBar">
    <div class="metricInfo">
      <h3 class="metricName">{{ props.metricName ? props.metricName : null }}</h3>
      <!-- <span>&nbsp;>>>&nbsp;</span>
      <span>{{ convertBytes(props.metricUsedCount) }} / {{ convertBytes(props.metricTotal) }}</span> -->
    </div>

    <div class="metricBarTotal">
      <div
        class="metricBarUsed"
        :class="{ 'metricBarUsed--outside': (props.metricUsedPercent ?? 0) < 20 }"
        :style="{ width: props.metricUsedPercent + '%' }"
      >
        <span class="metricBarUsedCount">{{ convertUnits(props.metricUsedCount, metricFrom, metricTo, 1024, 2) }}</span>
      </div>
      <span class="metricBarTotalCount">{{ convertUnits(props.metricTotal, metricFrom, metricTo, 1024, 2) }}</span>
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
  position: relative;
  background-color: var(--bar-used);
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: end;
  transition: width 0.5s ease-in-out;
}

.metricBarUsedCount {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
}

.metricBarUsed--outside .metricBarUsedCount {
  right: auto;
  left: calc(100% + 6px);
}

.metricBarTotalCount {
  position: relative;
  right: 10px;
  align-self: center;
}
</style>
