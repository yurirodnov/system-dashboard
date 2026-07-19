<script setup lang="ts">
import type { DashboardData } from "@/data/systemData";
import MetricBlock from "../metric-block/MetricBlock.vue";

interface Props {
  data: DashboardData;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="mericsWrapper">
    <MetricBlock metric-name="Hostname:" :metric-value="data.system.hostname" />
  </div>
</template>

<style scoped>
.mericsWrapper {
  display: flex;
}
</style>
