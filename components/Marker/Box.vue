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
}

.content {
  z-index: 10;
  position: relative;
  width: 250px;
  padding: var(--space-s);
  border-radius: var(--radius);
  background: var(--background);
  color: var(--foreground);
}

svg, .dot {
  position: relative;
}
</style>