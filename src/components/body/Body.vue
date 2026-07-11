<script setup lang="ts">
import { ref } from "vue";
import SystemName from "../system-name/SystemName.vue";
import { fakeAsync } from "@/lib/fakeAsync.ts";
import type { SystemData } from "@/data/systemData.ts";

const data = ref<SystemData[] | null>(null);
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
  <div class="body">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <template v-else-if="data">
      <SystemName v-for="(item, index) in data" :key="index" :system-name="item.osName" />
    </template>
  </div>
</template>

<style scoped></style>
