<script setup lang="ts">
const wrapper = ref<HTMLElement>()
</script>

<template>
  <div ref="wrapper" class="markerbox" data-from>
    <slot />
  </div>
</template>

<style scoped>
.markerbox {
  position: relative;
  padding: var(--space-s);
  border-radius: var(--radius);
  background: var(--background);
  width: 250px;
}
</style>