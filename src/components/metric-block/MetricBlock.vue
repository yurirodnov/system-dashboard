<script setup lang="ts">
import type { DashboardData } from "@/data/systemData";

interface MetricBlockProps {
  metricName: string;
  metricValue: string | number;
}

const props = defineProps<MetricBlockProps>();
</script>

<template>
  <div class="systemNameBlock">
    <h3>{{ props.metricName }}</h3>
    <p>{{ props.metricValue }}</p>
  </div>
</template>

<style scoped>
.systemNameBlock {
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-shadow: 0px 0px 50px 0px var(--neon-shadow-color);
  padding: 20px;
  border-radius: 10px;
}
</style>
