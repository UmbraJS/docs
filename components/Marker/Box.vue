<script setup lang="ts">
defineProps<{to: () => HTMLElement | null | undefined}>()
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
      :offset="[80, 0, -70, 0]"
    />
  </div>
</template>

<style scoped>
.content {
  padding: var(--space-s);
  width: 250px;
}

.markerbox {
  position: relative;
  border-radius: var(--radius);
  background: var(--background);
}
</style>