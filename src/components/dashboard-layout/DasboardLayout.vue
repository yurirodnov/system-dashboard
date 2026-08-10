<script setup lang="ts">
// src/components/dashboard-layout/DashboardLayout.vue
import Header from "../header/Header.vue";
import Body from "../body/Body.vue";
</script>

<template>
  <div class="dashboardLayout">
    <Header />
    <Body />
  </div>
</template>

<style scoped>
.dashboardLayout {
  width: 900px;
  background-color: var(--main-bg);
  height: 100%;
}
</style>
