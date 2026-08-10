<script setup lang="ts">
import { ref } from "vue";

interface MetricBarProps {
  metricTotal: number;
  metricUsed: number | undefined;
}

const props = defineProps<MetricBarProps>();

const usedWidth = ref(props.metricUsed);
</script>

<template>
  <div class="metricBar">
    <div class="metricBarTotal">
      <div class="metricBarUsed" :style="{ width: props.metricUsed + '%' }">
        <span class="metricBarUsedCount">{{ props.metricUsed }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.metricBar {
  width: 600px;
}

.metricBarTotal {
  width: 100%;
  height: 50px;
  border: 1px solid white;
}

.metricBarUsed {
  background-color: blueviolet;
  height: 50px;
}
</style>
