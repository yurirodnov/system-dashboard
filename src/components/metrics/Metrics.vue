<script setup lang="ts">
import type { DashboardData } from "@/data/systemData";

interface Props {
  data: DashboardData;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="systemNameBlock">
    <h3>Host name:</h3>
    <p>{{ props.data.system.hostname }}</p>
  </div>
</template>

<style scoped></style>
