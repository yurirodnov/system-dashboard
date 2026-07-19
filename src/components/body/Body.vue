<script setup lang="ts">
import { ref } from "vue";
import Metrics from "../metrics/Metrics.vue";
import { fakeAsync } from "@/lib/fakeAsync.ts";
import type { DashboardData } from "@/data/systemData.ts";

const data = ref<DashboardData[] | null>(null);
const loading = ref<boolean>(false);
const error = ref<Error | null>(null);

const loadData = async () => {
  data.value = null;
  loading.value = true;
  error.value = null;

  try {
    const response = await fakeAsync(1000);
    data.value = response;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      error.value = new Error(String(err));
    }
  } finally {
    loading.value = false;
  }
};

loadData();
</script>

<template>
  <main class="main">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <template v-else-if="data">
      <Metrics v-for="(dataItem, index) in data" :key="index" :data="dataItem" />
    </template>
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
}
</style>
