<script setup lang="ts">
type Point = [number, number]

interface Props {
  size: number
  point: Point
}

withDefaults(defineProps<Props>(), {
  size: 10
})
</script>

<template>
  <div class="dot" />
</template>

<style scoped>
.dot {
  position: absolute;
  top: calc(v-bind("point[1]") * 1px - v-bind(size) * 1px / 2);
  left: calc(v-bind("point[0]") * 1px - v-bind(size) * 1px / 2);

  border-radius: 100%;
  width: calc(v-bind(size) * 1px);
  height: calc(v-bind(size) * 1px);
  background-color: var(--foreground);
}
</style>