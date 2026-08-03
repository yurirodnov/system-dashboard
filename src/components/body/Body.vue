<script setup lang="ts">
import { onMounted, ref } from "vue";
import Metrics from "../metrics/Metrics.vue";
// import { fakeAsync } from "@/lib/fakeAsync.ts";
import type { StaticCommon } from "@/data/systemData.ts";

const data = ref<StaticCommon | null>(null);
const loading = ref<boolean>(false);
const error = ref<Error | null>(null);

const loadData = async () => {
  data.value = null;
  loading.value = true;
  error.value = null;

  const url = "http://127.0.0.1:3000/api/data/static";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    data.value = result.data;
  } catch (err) {
    if (err instanceof Error) {
      error.value = err;
    } else {
      error.value = new Error(String(err));
    }
  } finally {
    loading.value = false;
  }

  console.log("Fetched data", data.value);
};
onMounted(() => {
  loadData();
});
</script>

<template>
  <main class="main">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <template v-else-if="data">
      <Metrics :system-data="data" />
    </template>
  </main>
</template>

<style scoped>
.main {
  padding: 20px;
}
</style>
