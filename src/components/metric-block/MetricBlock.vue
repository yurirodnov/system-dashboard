<script setup lang="ts">
import type { DashboardData } from "@/data/systemData";

interface MetricBlockProps {
  metricName: string;
  metricValue: string | number;
}

const props = defineProps<MetricBlockProps>();
</script>

<template>
  <div class="metricBlock">
    <h3 class="metricName">{{ props.metricName }}</h3>
    <p class="metricValue">{{ props.metricValue }}</p>
  </div>
</template>

<style scoped>
.metricBlock {
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 0px 0px 15px 0px var(--neon-shadow-color);
  padding: 20px;
  border-radius: 10px;
}

.metricName {
  color: var(--metric-name-color);
}

.metricValue {
  font-weight: bold;
}
</style>
