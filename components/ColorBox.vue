<script setup lang="ts">
defineProps<{
  color: string
}>()

const emit = defineEmits<{
  mounted: [el: HTMLElement | null] // named tuple syntax
}>()

const squareRef = ref<HTMLElement | null>(null)

onMounted(() => {
  emit("mounted", squareRef.value)
})
</script>

<template>
  <div class="colorbox">
    <div ref="squareRef" class="square" :style="{background: `var(--${color})`}" />
    <p>- {{ color }}</p>
  </div>
</template>

<style scoped lang="scss">
.colorbox {
  display: flex;
  gap: var(--space-s);
}

.range .square {
  width: 30px;
  height: 30px;
  background-color: var(--accent);
  display: flex;
  justify-content: center;
}
</style>