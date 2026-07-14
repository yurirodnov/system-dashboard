<script setup lang="ts">
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
  background-color: var(--main-bg);
  height: 100%;
}
</style>
