<script setup lang="ts">
defineProps(["systemName"]);
</script>

<template>
  <div class="systemNameBlock">
    <h3>System name:</h3>
    <p>{{ systemName }}</p>
  </div>
</template>

<style scoped></style>
