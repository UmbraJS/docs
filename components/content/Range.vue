<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="range">
      <div class="foreground">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <div class="background">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: var(--space-xl);
  border-radius: var(--radius);
  padding: 1rem;
  background: var(--background-10);
  margin-bottom: var(--space-xl);
}
</style>