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
  width: 80%;
  background-color: var(--main-bg);
  height: 90%;
  box-shadow: 0px 0px 50px -9px rgba(0, 0, 0, 0.3);
  padding: 10px;
}
</style>
