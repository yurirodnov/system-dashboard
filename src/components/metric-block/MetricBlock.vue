<script setup lang="ts">
interface MetricBlockProps {
  metricName: string;
  metricValue: string | number | undefined;
}

const props = defineProps<MetricBlockProps>();
</script>

<template>
  <div class="metricBlock">
    <h3 class="metricName">{{ props.metricName }}</h3>
    <span class="metricValue">{{ props.metricValue }}</span>
  </div>
</template>

<style scoped>
.metricBlock {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  box-shadow: 0px 0px 15px 0px var(--neon-shadow-color);
  padding: 20px;
  border: 3px solid var(--bar-used);
}

.metricName {
  color: var(--metric-name-color);
  font-size: 1.53em;
}

.metricValue {
  font-weight: bold;
  font-size: 2.5em;
}
</style>
