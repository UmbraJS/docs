<script setup lang="ts">
const wrapper = ref<HTMLElement>()
</script>

<template>
  <div ref="wrapper" class="markerbox" data-from>
    <div class="content"><slot /></div>
    <div class="layer" />
  </div>
</template>

<style scoped>
.markerbox {
  position: relative;
  border-radius: var(--radius);
  background: var(--background);
  width: 250px;
}

.content {
  position: relative;
  padding: var(--space-s);
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.layer {
  background: var(--background);
  position: absolute;
  top: 0; left: 0;
  border-radius: var(--radius);
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>