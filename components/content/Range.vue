<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="range">
      <div class="background">
        <div class="square" style="background: var(--background)"></div>
        <div class="square" style="background: var(--background-10)"></div>
        <div class="square" style="background: var(--background-20)"></div>
      </div>
      <div class="foreground">
        <div class="square" style="background: var(--foreground-20)"></div>
        <div class="square" style="background: var(--foreground-10)"></div>
        <div class="square" style="background: var(--foreground)"></div>
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

.range {
  border-radius: var(--radius);
  overflow: hidden;
}

.range .square {
  width: 30px;
  height: 30px;
  background-color: var(--accent);
  display: flex;
  justify-content: center;
}
</style>