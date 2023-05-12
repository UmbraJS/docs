<script setup lang="ts">
defineProps<{
  to: () => HTMLElement | null | undefined, 
  offset?: [number, number, number, number] | [number, number]
}>()
const from = ref<HTMLElement | null>()
</script>

<template>
  <div ref="from" class="markerbox">
    <div class="content">
      <slot />
    </div>
    <MarkerLine
      :to="to"
      :from="() => from"
      :offset="offset"
    />
  </div>
</template>

<style scoped>
.markerbox {
  z-index: 3;
  position: relative;
  border-radius: var(--radius);
  background: var(--background);
  color: var(--foreground);
}

.content {
  z-index: 10;
  position: relative;
  padding: var(--space-s);
  width: 250px;
}

.line {
  /* position: relative; */
}
</style>